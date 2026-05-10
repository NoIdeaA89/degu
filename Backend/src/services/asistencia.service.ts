import { prisma } from '../lib/prisma';

export class AsistenciaService {
  
  async registrarAsistencia(rut: string, qrToken: string, satisfaccion?: number) {
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
        estado: "Presente"
      },
      create: {
        sesionId: sesion.id,
        estudianteId: estudiante.id,
        notaSatisfaccion: satisfaccion,
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
}