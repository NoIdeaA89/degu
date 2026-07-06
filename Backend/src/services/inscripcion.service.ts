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