import { prisma } from '../lib/prisma';
import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'tu_clave_secreta_super_segura';

export const autenticarUsuario = async (correo: string, passwordPlan: string) => {
  const usuario = await prisma.usuario.findUnique({
    where: { correo }
  });

  if (!usuario) {
    throw new Error('El correo ingresado no está registrado');
  }

  const passwordCorrecto = await bcrypt.compare(passwordPlan, usuario.password);
  
  if (!passwordCorrecto) {
    throw new Error('Contraseña incorrecta');
  }

  const token = jwt.sign(
    { 
      user: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        rol: usuario.rol
      }
    },
    JWT_SECRET,
    { expiresIn: '8h' }
  );

  return token; 
};

export const registrarUsuario = async (datos: any) => {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(datos.password, salt);

  const usuario = await prisma.usuario.create({
    data: {
      nombre: datos.nombre,
      apellido: datos.apellido,
      rut: datos.rut,
      correo: datos.correo,
      password: passwordHash,
      rol: datos.rol 
    }
  });

  const { password, ...usuarioSinPassword } = usuario;
  return usuarioSinPassword;
};

export const validarToken = async (token: string) => {
  const decoded: any = jwt.verify(token, JWT_SECRET);
  
  const usuario = await prisma.usuario.findUnique({
    where: { id: decoded.user.id }, 
    select: {
      id: true,
      nombre: true,
      apellido: true,
      rut: true,
      correo: true,
      rol: true
    }
  });

  if (!usuario) throw new Error('Usuario no encontrado');
  return usuario;
};