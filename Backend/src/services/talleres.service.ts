import { prisma } from '../lib/prisma';

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
}