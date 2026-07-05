import { prisma } from '../lib/prisma';
import { BloqueHorario } from "@prisma/client"

export const obtenerTalleres = async () => { /* igual */ };
export const obtenerTalleresPorSemestre = async (semestre: string) => { /* igual */ };
export const actualizarTaller = async (tallerId: number, dia: number, bloque: BloqueHorario) => { /* igual */ };

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