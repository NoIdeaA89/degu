import { prisma } from '../lib/prisma';

export class AsistenciaService {
  
  async registrarAsistencia(rut: string, qrToken: string, satisfaccion?: number, comentario?: string) {
    const sesion = await prisma.sesion.findFirst({
      where: { 
        qrToken: qrToken,
        validoHasta: { gte: new Date() }
      }
    });

    if (!sesion) {
      const error: any = new Error('Sesión no encontrada o QR expirado');
      error.status = 404;
      throw error;
    }

    const estudiante = await prisma.usuario.findUnique({
      where: { rut: rut }
    });

    if (!estudiante) {
      const error: any = new Error('Estudiante no encontrado');
      error.status = 404;
      throw error;
    }

    return await prisma.asistencia.upsert({
      where: {
        sesionId_estudianteId: {
          sesionId: sesion.id,
          estudianteId: estudiante.id
        }
      },
      update: {
        notaSatisfaccion: satisfaccion,
        comentario: comentario,
        estado: "Presente"
      },
      create: {
        sesionId: sesion.id,
        estudianteId: estudiante.id,
        notaSatisfaccion: satisfaccion,
        comentario: comentario,
        estado: "Presente",
        fechaHora: new Date()
      }
    });
  }

  async listarPorSesion(sesionId: number) {
    return await prisma.asistencia.findMany({
      where: { sesionId },
      include: {
        estudiante: {
          select: {
            id: true,
            nombre: true,
            apellido: true,
            rut: true,
            correo: true,
            rol: true
          }
        }
      }
    });
  }

  async listarPorTaller(tallerId: number) {
    return await prisma.asistencia.findMany({
      where: {
        sesion: { tallerId: tallerId }
      },
      include: {
        sesion: true,
        estudiante: {
          select: {
            id: true,
            nombre: true,
            apellido: true,
            rut: true,
            rol: true
          }
        }
      },
      orderBy: { fechaHora: 'desc' }
    });
  }

  async listarPorEstudiante(rut: string) {
    return await prisma.asistencia.findMany({
      where: { 
        estudiante: { rut: rut } 
      },
      include: {
        sesion: {
          include: { taller: true }
        }
      },
      orderBy: { fechaHora: 'desc' }
    });
  }

  async actualizarEstado(asistenciaId: number, nuevoEstado: string) {
    return await prisma.asistencia.update({
      where: { id: asistenciaId },
      data: { estado: nuevoEstado }
    });
  }

  async resumenPorSemestre(filtros: {
    semestre: string;
    mes?: number;
    dia?: number;
    fechaInicio?: Date;
    fechaFin?: Date;
  }) {
    const { semestre, mes, dia, fechaInicio, fechaFin } = filtros;

    const rangoFecha = (() => {
      if (fechaInicio || fechaFin) {
        return {
          ...(fechaInicio && { gte: fechaInicio }),
          ...(fechaFin    && { lte: fechaFin }),
        };
      }
      if (mes) {
        const anio = new Date().getFullYear();
        return {
          gte: new Date(anio, mes - 1, 1),
          lt:  new Date(anio, mes, 1),
        };
      }
      return undefined;
    })();

    const whereSesion = {
      taller: {
        semestre,
        ...(dia !== undefined && { dia }),
      },
      ...(rangoFecha && { fecha: rangoFecha }),
    };

    const sesiones = await prisma.sesion.findMany({
      where: whereSesion,
      select: { id: true, tallerId: true },
    });

    if (sesiones.length === 0) return [];

    const sesionToTaller = new Map(sesiones.map((s) => [s.id, s.tallerId]));

    const sesionesPorTaller = new Map<number, number>();
    for (const s of sesiones) {
      sesionesPorTaller.set(s.tallerId, (sesionesPorTaller.get(s.tallerId) ?? 0) + 1);
    }

    const tallerIds = [...sesionesPorTaller.keys()];

    const asistencias = await prisma.asistencia.findMany({
      where: {
        sesion: whereSesion,
        estado: 'Presente',
      },
      select: {
        estudianteId: true,
        sesionId: true,
        notaSatisfaccion: true,
      },
    });

    const asistenciasPorTallerAlumno = new Map<string, number>();
    const satisfaccionPorTaller = new Map<number, { suma: number; count: number }>();

    for (const row of asistencias) {
      const tallerId = sesionToTaller.get(row.sesionId);
      if (!tallerId) continue;

      const key = `${tallerId}|${row.estudianteId}`;
      asistenciasPorTallerAlumno.set(key, (asistenciasPorTallerAlumno.get(key) ?? 0) + 1);

      if (row.notaSatisfaccion !== null) {
        const actual = satisfaccionPorTaller.get(tallerId) ?? { suma: 0, count: 0 };
        satisfaccionPorTaller.set(tallerId, {
          suma: actual.suma + row.notaSatisfaccion,
          count: actual.count + 1,
        });
      }
    }

    const inscripciones = await prisma.inscripcion.findMany({
      where: { tallerId: { in: tallerIds } },
      select: {
        estudianteId: true,
        tallerId: true,
        taller: { select: { id: true, nombre: true } },
      },
    });

    const alumnosPorTaller = new Map<number, number[]>();
    for (const insc of inscripciones) {
      const totalSesiones = sesionesPorTaller.get(insc.tallerId) ?? 0;
      const asistenciasAlumno = asistenciasPorTallerAlumno.get(`${insc.tallerId}|${insc.estudianteId}`) ?? 0;
      const porcentaje = totalSesiones > 0 ? (asistenciasAlumno / totalSesiones) * 100 : 0;

      if (!alumnosPorTaller.has(insc.tallerId)) alumnosPorTaller.set(insc.tallerId, []);
      alumnosPorTaller.get(insc.tallerId)!.push(porcentaje);
    }

    const talleresMap = new Map(inscripciones.map((i) => [i.tallerId, i.taller]));

    return tallerIds.map((tallerId) => {
      const porcentajes = alumnosPorTaller.get(tallerId) ?? [];
      const promedioAsistencia = porcentajes.length > 0
        ? Math.round(porcentajes.reduce((a, b) => a + b, 0) / porcentajes.length)
        : 0;

      const sat = satisfaccionPorTaller.get(tallerId);
      const promedioSatisfaccion = sat && sat.count > 0
        ? Math.round((sat.suma / sat.count) * 10) / 10
        : null;

      return {
        tallerId,
        nombre: talleresMap.get(tallerId)?.nombre ?? '',
        totalSesiones: sesionesPorTaller.get(tallerId) ?? 0,
        totalAlumnos: porcentajes.length,
        promedioAsistencia,
        promedioSatisfaccion,
      };
    });
  }
}