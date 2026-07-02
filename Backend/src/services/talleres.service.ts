import { prisma } from '../lib/prisma';

export interface CrearTallerInput {
  nombre: string;
  descripcion: string;
  semestre: string;
  lugar: string;
  profesorId: number;
}

export class TallerService {
  async listar() {
    return await prisma.taller.findMany({
      where: { estado: true },
      orderBy: { id: 'asc' },
    });
  }

  async obtenerPorId(id: number) {
    return await prisma.taller.findUnique({
      where: { id },
    });
  }

  async crear({ nombre, descripcion, semestre, lugar, profesorId }: CrearTallerInput) {
    // Nace sin dia/bloque asignado: se posiciona luego arrastrándolo en el grid
    return await prisma.taller.create({
      data: {
        nombre,
        descripcion,
        semestre,
        lugar,
        profesorId,
        dia: null,
        bloque: null,
      },
    });
  }
}