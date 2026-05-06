import { prisma } from '../lib/prisma';
import jwt from 'jsonwebtoken';

export const autenticarUsuario = async (correo: string, password: string) => {
  // 1. Buscamos al usuario por correo
  const usuario = await prisma.usuario.findUnique({
    where: { correo }
  });

  if (!usuario) {
    throw new Error('El correo ingresado no existe en nuestros registros.');
  }

  // 2. Verificamos la contraseña
  // NOTA: Para este prototipo estamos comparando texto plano porque así 
  // lo guardamos en el seed ("password123"). En producción, deberías usar bcrypt.
  if (usuario.password !== password) {
    throw new Error('La contraseña es incorrecta.');
  }

  // 3. Generamos el Token JWT (El "Boleto" de entrada)
  // Guardamos datos no sensibles en el payload para que el frontend los lea
  const token = jwt.sign(
    {
      user: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        rol: usuario.rol
      }
    },
    process.env.JWT_SECRET || 'firma_super_secreta_galpon', // Idealmente pon esto en tu .env
    { expiresIn: '12h' } // El token durará 12 horas
  );

  return token;
};