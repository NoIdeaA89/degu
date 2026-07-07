import { prisma } from '../lib/prisma';
import bcrypt from 'bcrypt';
import { RolUsuario, Prisma } from '@prisma/client'

const RUT_REGEX = /^\d{7,9}-[\dkK]$/;

interface BuscarEstudiantesParams {
  query: string;
  skip?: number;
  take?: number;
}

interface CrearEstudianteInput {
  nombre: string;
  apellido: string;
  rut: string;
  correo: string;
  password?: string;
  carrera?: string;
  telefono?: string;
}

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
    select: { id: true, nombre: true, apellido: true, rut: true, correo: true, carrera: true, telefono: true },
    orderBy: { nombre: 'asc' }
  });
};

export async function crearEstudiante(input: CrearEstudianteInput) {
  const { nombre, apellido, rut, correo, password, carrera, telefono } = input;

  const usuarioExistente = await prisma.usuario.findFirst({
    where: {
      OR: [{ rut }, { correo }],
    },
  });

  if (usuarioExistente) {
    if (usuarioExistente.rut === rut) {
      throw { status: 409, message: 'Ya existe un usuario registrado con ese RUT.' };
    }

    throw { status: 409, message: 'Ya existe un usuario registrado con ese correo.' };
  }

  const passToHash = password || "123456";
  const passwordHasheada = await bcrypt.hash(passToHash, 10);

  const nuevoEstudiante = await prisma.usuario.create({
    data: {
      nombre,
      apellido,
      rut,
      correo,
      password: passwordHasheada,
      carrera: carrera || "",
      telefono: telefono || "",
      rol: RolUsuario.Estudiante,
    },
    select: {
      id: true,
      nombre: true,
      apellido: true,
      rut: true,
      correo: true,
      carrera: true,
      telefono: true,
      rol: true,
    },
  });

  return nuevoEstudiante;
}

export const obtenerPorRut = async (rut: string) => {
  return await prisma.usuario.findUnique({
    where: { rut },
    select: { id: true, nombre: true, apellido: true, rut: true, correo: true, rol: true }
  });
};

export async function buscarEstudiantes({
  query,
  skip = 0,
  take = 10,
}: BuscarEstudiantesParams) {
  const q = query.trim();

  if (!q) return { data: [], total: 0 };

  if (RUT_REGEX.test(q)) {
    const estudiante = await prisma.usuario.findFirst({
      where: {
        rut: q.toUpperCase(),
        rol: RolUsuario.Estudiante,
      },
      select: { id: true, nombre: true, apellido: true, rut: true, correo: true },
    });

    return {
      data: estudiante ? [estudiante] : [],
      total: estudiante ? 1 : 0,
    };
  }

  const tokens = q.split(/\s+/).filter(Boolean);

  const where: Prisma.UsuarioWhereInput = {
    rol: RolUsuario.Estudiante,
    AND: tokens.map((token) => ({
      OR: [
        { nombre: { contains: token, mode: 'insensitive' } },
        { apellido: { contains: token, mode: 'insensitive' } },
      ],
    })),
  };

  const [data, total] = await prisma.$transaction([
    prisma.usuario.findMany({
      where,
      select: { id: true, nombre: true, apellido: true, rut: true, correo: true },
      orderBy: [{ nombre: 'asc' }, { apellido: 'asc' }],
      skip,
      take,
    }),
    prisma.usuario.count({ where }),
  ]);

  return { data, total };
}

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

