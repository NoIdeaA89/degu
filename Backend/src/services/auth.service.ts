import { prisma } from '../lib/prisma';
import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';

const JWT_SECRET = process.env.JWT_SECRET || 'tu_clave_secreta_super_segura';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || 'TU_CLIENT_ID_DE_GOOGLE.apps.googleusercontent.com';
const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

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
        rol: usuario.rol,
        rut: usuario.rut,
        correo: usuario.correo
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

export const autenticarConGoogle = async (tokenGoogle: string) => {
  
  const ticket = await googleClient.verifyIdToken({
    idToken: tokenGoogle,
    audience: GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();
  if (!payload || !payload.email) {
    throw new Error('No se pudo obtener la información desde Google');
  }

  const correo = payload.email.toLowerCase();

  const usuario = await prisma.usuario.findUnique({
    where: { correo }
  });

  if (!usuario) {
    const error: any = new Error('Tu correo UCN es válido, pero no estás registrado en el sistema.');
    error.status = 404; 
    throw error;
  }

  const token = jwt.sign(
    { 
      user: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        rol: usuario.rol,
        rut: usuario.rut,
        correo: usuario.correo
      }
    },
    JWT_SECRET,
    { expiresIn: '8h' }
  );

  return token;
};