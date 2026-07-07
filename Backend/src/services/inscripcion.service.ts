// services/inscripcion.service.ts
import { prisma } from '../lib/prisma';

export const listarInscritosPorTaller = async (tallerId: number) => {
  const inscripciones = await prisma.inscripcion.findMany({
    where: { tallerId },
    include: {
      estudiante: {
        select: { id: true, nombre: true, apellido: true, rut: true, correo: true }
      }
    },
    orderBy: { estudiante: { nombre: 'asc' } }
  });
  return inscripciones.map((i) => i.estudiante);
};
export const inscribirEstudiante = async (estudianteId: number, tallerId: number) => {
  const taller = await prisma.taller.findUnique({
    where: { id: tallerId },
    select: { id: true, grupoId: true }
  });

  if (!taller) {
    const error: any = new Error('Taller no encontrado');
    error.status = 404;
    throw error;
  }

  let tallerIds = [taller.id];

  if (taller.grupoId) {
    const hermanos = await prisma.taller.findMany({
      where: { grupoId: taller.grupoId },
      select: { id: true }
    });
    tallerIds = hermanos.map((h) => h.id);
  }

  const inscripciones = [];
  for (const id of tallerIds) {
    const inscripcion = await prisma.inscripcion.upsert({
      where: { estudianteId_tallerId: { estudianteId, tallerId: id } },
      update: {},
      create: { estudianteId, tallerId: id },
    });
    inscripciones.push(inscripcion);
  }

  return inscripciones;
};