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

export const obtenerTalleresPorSemestre = async (semestre: string) => {
  try {
    const talleres = await prisma.taller.findMany({
      where: {
        semestre: semestre,
        estado: true
      },
      include: {
        profesor: {
          select: {
            id: true,
            nombre: true,
            apellido: true
          }
        }
      },
      orderBy: [
        { dia: 'asc' },
        { bloque: 'asc' }
      ]
    });
    return talleres;
  } catch (error: any) {
    throw new Error(`Error al obtener los talleres del semestre: ${error.message}`);
  }
};