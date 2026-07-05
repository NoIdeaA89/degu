import { prisma } from '../lib/prisma';
import { BloqueHorario, RolUsuario } from "@prisma/client"


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

export const actualizarTaller = async (tallerId: number, dia: number, bloque: BloqueHorario) => {
  try {
    const tallerActualizado = await prisma.taller.update({
      where: { id: tallerId },
      data: {
        dia: dia,
        bloque: bloque
      },
      include: {
        profesor: {
          select: {
            id: true,
            nombre: true,
            apellido: true
          }
        }
      }
    });
    return tallerActualizado;
  } catch (error: any) {
    throw new Error(`Error al actualizar el taller: ${error.message}`);
  }
};

// ...tus funciones existentes (obtenerTalleres, obtenerTalleresPorSemestre, actualizarTaller) quedan igual...

export const crearTaller = async (data: {
  nombre: string;
  descripcion?: string;
  horario?: string;
  semestre: string;
  lugar: string;
  profesorId: number;
  dia?: number;
  bloque?: BloqueHorario;
}) => {
  try {
    const taller = await prisma.taller.create({
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion ?? "",
        horario: data.horario ?? "",
        semestre: data.semestre,
        estado: true,
        lugar: data.lugar,
        dia: data.dia ?? 0,
        bloque: data.bloque ?? BloqueHorario.A,
        profesorId: data.profesorId,
      },
      include: {
        profesor: {
          select: { id: true, nombre: true, apellido: true }
        }
      }
    });
    return taller;
  } catch (error: any) {
    throw new Error(`Error al crear el taller: ${error.message}`);
  }
};

export const obtenerProfesores = async () => {
  try {
    const profesores = await prisma.usuario.findMany({
      where: { rol: RolUsuario.Profesor },
      select: { id: true, nombre: true, apellido: true },
      orderBy: [{ apellido: 'asc' }, { nombre: 'asc' }]
    });
    return profesores;
  } catch (error: any) {
    throw new Error(`Error al obtener los profesores: ${error.message}`);
  }
};