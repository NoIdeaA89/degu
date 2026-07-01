import { prisma } from '../lib/prisma';

export const obtenerTalleres = async () => {
  try {
    const talleres = await prisma.taller.findMany({
      include: {
        profesor: true,
      },
    });
    return talleres;
  } catch (error: any) {
    throw new Error(`Error al obtener los talleres: ${error.message}`);
  }
};