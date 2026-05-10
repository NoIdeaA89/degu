import { prisma } from '../lib/prisma';
import crypto from 'crypto';

export class SesionService {
  
  async crear(tallerId: number, bloque: any, minutos: number) {
    const token = crypto.randomBytes(16).toString('hex');
    const fechaExpiracion = new Date();
    fechaExpiracion.setMinutes(fechaExpiracion.getMinutes() + minutos);

    return await prisma.sesion.create({
      data: {
        tallerId,
        bloque,
        qrToken: token,
        validoHasta: fechaExpiracion,
        fecha: new Date()
      }
    });
  }

  async validar(token: string) {
    return await prisma.sesion.findFirst({
      where: {
        qrToken: token,
        validoHasta: {
          gt: new Date()
        }
      },
      include: {
        taller: {
          select: { nombre: true }
        }
      }
    });
  }

  async listarPorTaller(tallerId: number) {
    return await prisma.sesion.findMany({
      where: { tallerId },
      orderBy: { fecha: 'desc' }
    });
  }

  async finalizar(id: number) {
    return await prisma.sesion.update({
      where: { id },
      data: {
        validoHasta: new Date()
      }
    });
  }
}