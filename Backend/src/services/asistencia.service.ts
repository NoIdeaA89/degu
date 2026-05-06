import { PrismaClient, BloqueHorario } from '../generated/client';
import {v4 as uuidv4 } from 'uuid';
import { prisma } from '../lib/prisma';

export class AsistenciaService {
  
  async crearSesion(tallerId: number, bloque: BloqueHorario, minutosValidez: number) {
    const taller = await prisma.taller.findUnique({ where: { id: tallerId } });
    if (!taller || !taller.estado) {
      throw new Error("El taller no existe o está inactivo");
    }

    const inscripciones = await prisma.inscripcion.findMany({
      where: { tallerId }
    });

    if (inscripciones.length === 0) {
      throw new Error("No hay estudiantes inscritos en este taller");
    }

    const qrToken = uuidv4();
    const validoHasta = new Date(Date.now() + minutosValidez * 60000);

    const sesion = await prisma.$transaction(async (tx) => {
      const nuevaSesion = await tx.sesion.create({
        data: {
          tallerId,
          bloque,
          qrToken,
          validoHasta
        }
      });

      const asistenciasIniciales = inscripciones.map((insc) => ({
        sesionId: nuevaSesion.id,
        estudianteId: insc.estudianteId,
        estado: "Ausente"
      }));

      await tx.asistencia.createMany({
        data: asistenciasIniciales
      });

      return nuevaSesion;
    });

    return sesion;
  }

  async registrarAsistenciaQR(qrToken: string, rut: string, notaSatisfaccion?: number) {
    const sesion = await prisma.sesion.findUnique({ where: { qrToken } });
    if (!sesion) throw new Error("Token QR inválido");

    if (new Date() > sesion.validoHasta) {
      throw new Error("El código QR ha expirado");
    }

    const estudiante = await prisma.usuario.findUnique({ where: { rut } });
    if (!estudiante) throw new Error("RUT no registrado en el sistema");

    const asistenciaActual = await prisma.asistencia.findUnique({
      where: {
        sesionId_estudianteId: {
          sesionId: sesion.id,
          estudianteId: estudiante.id
        }
      }
    });

    if (!asistenciaActual) {
      throw new Error("El estudiante no está inscrito en este taller");
    }

    if (asistenciaActual.estado === "Presente") {
      throw new Error("La asistencia ya fue registrada anteriormente");
    }

    return await prisma.asistencia.update({
      where: { id: asistenciaActual.id },
      data: {
        estado: "Presente",
        fechaHora: new Date(),
        notaSatisfaccion: notaSatisfaccion || null
      }
    });
  }

  async consultarAsistenciaPorSesion(sesionId: number) {
    return await prisma.asistencia.findMany({
      where: { sesionId },
      include: {
        estudiante: {
          select: { nombre: true, apellido: true, rut: true }
        }
      }
    });
  }

  async modificarEstadoManual(asistenciaId: number, nuevoEstado: string) {
    return await prisma.asistencia.update({
      where: { id: asistenciaId },
      data: { estado: nuevoEstado }
    });
  }
}