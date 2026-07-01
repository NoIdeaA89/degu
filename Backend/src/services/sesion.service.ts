import { prisma } from '../lib/prisma'; // Asegúrate de importar desde tu cliente generado
import crypto from 'crypto';

export class SesionService {
  
  // ✅ CAMBIO: 'bloque' ahora es explícitamente 'number'
  async crear(tallerId: number, bloque: number, minutos: number) {
    if (typeof bloque !== 'number') {
      throw new Error("El bloque debe ser un número entero.");
    }

    const token = crypto.randomBytes(16).toString('hex');
    const fechaExpiracion = new Date();
    fechaExpiracion.setMinutes(fechaExpiracion.getMinutes() + minutos);

    return await prisma.sesion.create({
      data: {
        tallerId,
        bloque, // Ahora TypeScript te obligará a pasar un número
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