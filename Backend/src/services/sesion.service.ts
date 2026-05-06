import { v4 as uuidv4 } from 'uuid';
import { BloqueHorario } from '../generated/client';
import { prisma } from '../lib/prisma';

export const generarEnlaceQR = async (tallerId: number, bloque: string) => {
  const tallerExiste = await prisma.taller.findUnique({ where: { id: tallerId } });
  if (!tallerExiste) throw new Error('El taller no existe o está inactivo');

  const bloqueLimpio = bloque.replace(/bloque\s+/i, '').trim().toUpperCase();

  if (!Object.values(BloqueHorario).includes(bloqueLimpio as BloqueHorario)) {
    throw new Error(`El bloque '${bloque}' no es válido en el sistema.`);
  }
  
  const token = uuidv4();
  const expiraEn = new Date(Date.now() + 5 * 60000);

  const nuevaSesion = await prisma.sesion.create({
    data: {
      tallerId,
      bloque: bloque as BloqueHorario,
      qrToken: token,
      validoHasta: expiraEn
    }
  });

  const baseUrlFront = process.env.FRONTEND_URL || 'http://localhost:3000';
  const urlAsistencia = `${baseUrlFront}/formularioAsistencia?token=${token}`;

  return {
    url: urlAsistencia,
    token,
    expiraEn
  };
};

export const validarTokenFrontend = async (token: string) => {
  const sesion = await prisma.sesion.findFirst({
    where: { qrToken: token }
  });

  if (!sesion) throw new Error('Token no encontrado o inválido');

  if (new Date() > sesion.validoHasta) {
    throw new Error('El enlace del código QR ha expirado');
  }

  return { valido: true, sesionId: sesion.id, tallerId: sesion.tallerId };
};