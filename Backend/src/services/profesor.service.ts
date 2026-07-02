import { prisma } from '../lib/prisma';
import { RolUsuario } from '../generated';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

export class ProfesorService {
  async listar() {
    return await prisma.usuario.findMany({
      where: { rol: RolUsuario.Profesor },
      select: { id: true, nombre: true, apellido: true, rut: true, correo: true },
      orderBy: { nombre: 'asc' },
    });
  }

  async crear(nombre: string, apellido: string, rut: string, correo: string) {
    // Los profesores no inician sesión en esta app; se les asigna una
    // contraseña aleatoria hasheada solo para cumplir con el campo requerido.
    const passwordAleatoria = crypto.randomBytes(16).toString('hex');
    const passwordHasheada = await bcrypt.hash(passwordAleatoria, 10);

    return await prisma.usuario.create({
      data: {
        nombre,
        apellido,
        rut,
        correo,
        password: passwordHasheada,
        rol: RolUsuario.Profesor,
      },
      select: { id: true, nombre: true, apellido: true, rut: true, correo: true },
    });
  }
}