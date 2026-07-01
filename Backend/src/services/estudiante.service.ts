import { prisma } from '../lib/prisma';
import bcrypt from 'bcrypt';
import { RolUsuario } from '@prisma/client'

export const obtenerTodos = async (busqueda?: string) => {
  return await prisma.usuario.findMany({
    where: {
      rol: 'Estudiante',
      ...(busqueda && {
        OR: [
          { nombre: { contains: busqueda, mode: 'insensitive' } },
          { apellido: { contains: busqueda, mode: 'insensitive' } },
          { rut: { contains: busqueda, mode: 'insensitive' } }
        ]
      })
    },
    select: { id: true, nombre: true, apellido: true, rut: true, correo: true },
    orderBy: { nombre: 'asc' }
  });
};

export const obtenerPorRut = async (rut: string) => {
  return await prisma.usuario.findUnique({
    where: { rut },
    select: { id: true, nombre: true, apellido: true, rut: true, correo: true, rol: true }
  });
};

export const obtenerHistorialAsistencia = async (rut: string) => {
  const estudianteConAsistencias = await prisma.usuario.findUnique({
    where: { rut },
    select: {
      id: true,
      asistencias: {
        include: {
          sesion: {
            include: {
              taller: {
                select: {
                  nombre: true,
                  id: true, 
                  semestre: true
                }
              }
            }
          }
        },
        orderBy: {
          fechaHora: 'desc'
        }
      }
    }
  });

  if (!estudianteConAsistencias) {
    throw new Error('Estudiante no encontrado');
  }

  return estudianteConAsistencias.asistencias;
};

export const actualizarPerfil = async (rut: string, datos: any) => {
  const updateData = { ...datos };
  if (updateData.password) {
    const salt = await bcrypt.genSalt(10);
    updateData.password = await bcrypt.hash(updateData.password, salt);
  }

  return await prisma.usuario.update({
    where: { rut },
    data: updateData,
    select: { id: true, nombre: true, apellido: true, rut: true, correo: true }
  });
};

export const actualizarRol = async (rut: string, nuevoRol: string) => {
  const rolFormateado = nuevoRol.charAt(0).toUpperCase() + nuevoRol.slice(1).toLowerCase();

  const esRolValido = Object.values(RolUsuario).includes(rolFormateado as RolUsuario);

  if (!esRolValido) {
    throw new Error(`El valor "${nuevoRol}" no es un rol permitido.`);
  }

  return await prisma.usuario.update({
    where: { rut },
    data: { 
      rol: rolFormateado as RolUsuario 
    },
    select: { 
      id: true, 
      nombre: true, 
      rol: true 
    }
  });
};

