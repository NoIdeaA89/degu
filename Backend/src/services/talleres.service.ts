import { prisma } from '../lib/prisma';
import { BloqueHorario } from "@prisma/client"

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
        profesor: { select: { id: true, nombre: true, apellido: true } }
      }
    });
    return taller;
  } catch (error: any) {
    throw new Error(`Error al crear el taller: ${error.message}`);
  }
};
export const crearGrupoTaller = async (tallerIds: number[]) => {
  if (tallerIds.length < 2 || tallerIds.length > 3) {
    throw new Error('Un grupo debe tener entre 2 y 3 talleres');
  }

  const idsUnicos = new Set(tallerIds);
  if (idsUnicos.size !== tallerIds.length) {
    throw new Error('Los talleres del grupo deben ser distintos entre sí');
  }

  const talleres = await prisma.taller.findMany({ where: { id: { in: tallerIds } } });
  if (talleres.length !== tallerIds.length) {
    throw new Error('Alguno de los talleres no existe');
  }
  if (talleres.some((t) => t.grupoId !== null)) {
    throw new Error('Alguno de los talleres ya pertenece a un grupo');
  }

  return await prisma.$transaction(async (tx) => {
    const grupo = await tx.grupoTaller.create({ data: {} });
    await tx.taller.updateMany({
      where: { id: { in: tallerIds } },
      data: { grupoId: grupo.id }
    });
    return grupo;
  });
};

export const agregarTallerAGrupo = async (grupoId: number, tallerId: number) => {
  const miembros = await prisma.taller.count({ where: { grupoId } });
  if (miembros >= 3) {
    throw new Error('El grupo ya tiene el máximo de 3 talleres');
  }

  const taller = await prisma.taller.findUnique({ where: { id: tallerId } });
  if (taller?.grupoId) {
    throw new Error('Ese taller ya pertenece a otro grupo');
  }

  return await prisma.taller.update({ where: { id: tallerId }, data: { grupoId } });
};

export const salirDeGrupo = async (tallerId: number) => {
  return await prisma.taller.update({ where: { id: tallerId }, data: { grupoId: null } });
};
