import bcrypt from "bcrypt";
import crypto from "crypto";
import { RolUsuario } from "@prisma/client";
import {prisma} from "../lib/prisma"; // Ajusta esta ruta si tu cliente de Prisma vive en otro lugar

interface CrearProfesorInput {
  nombre: string;
  apellido: string;
  rut: string;
  correo: string;
}

const SALT_ROUNDS = 10;

/**
 * Genera una contraseña aleatoria segura.
 * El profesor no la conoce ni la necesita, ya que no inicia sesión en el sistema.
 * Si en el futuro se requiere habilitar su acceso, se debería implementar
 * un flujo de "recuperar/asignar contraseña".
 */
function generarPasswordAleatoria(): string {
  return crypto.randomBytes(16).toString("hex");
}

export async function crearProfesor(input: CrearProfesorInput) {
  const { nombre, apellido, rut, correo } = input;

  // Verificamos que no exista ya un usuario con ese rut o correo
  const usuarioExistente = await prisma.usuario.findFirst({
    where: {
      OR: [{ rut }, { correo }],
    },
  });

  if (usuarioExistente) {
    if (usuarioExistente.rut === rut) {
      throw { status: 409, message: "Ya existe un usuario registrado con ese RUT." };
    }
    throw { status: 409, message: "Ya existe un usuario registrado con ese correo." };
  }

  const passwordHasheada = await bcrypt.hash(generarPasswordAleatoria(), SALT_ROUNDS);

  const nuevoProfesor = await prisma.usuario.create({
    data: {
      nombre,
      apellido,
      rut,
      correo,
      password: passwordHasheada,
      rol: RolUsuario.Profesor, // Ajusta si el valor exacto del enum es distinto (ej. RolUsuario.PROFESOR)
    },
  });

  // Nunca devolvemos el hash de la contraseña al frontend
  const { password, ...profesorSinPassword } = nuevoProfesor;
  return profesorSinPassword;
}

export async function obtenerProfesores() {
  const profesores = await prisma.usuario.findMany({
    where: { rol: RolUsuario.Profesor },
    select: {
      id: true,
      nombre: true,
      apellido: true,
      rut: true,
      correo: true,
      rol: true,
    },
  });

  return profesores;
}