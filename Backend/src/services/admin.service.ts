import { prisma } from '../lib/prisma';
import { RolUsuario } from '@prisma/client' // Ajusta la ruta si es necesario

export const transferirMando = async (rutAdminActual: string, rutNuevoAdmin: string, palabraConfirmacion: string) => {
  // 1. Validación de seguridad de la intención
  if (palabraConfirmacion !== 'CONFIRMAR') {
    throw new Error('Validación fallida: Debe escribir CONFIRMAR en mayúsculas para proceder.');
  }

  // 2. Ejecutar la transacción para garantizar la atomicidad del traspaso
  return await prisma.$transaction(async (tx) => {
    
    // 3. Buscar al usuario candidato a ser el nuevo administrador
    const nuevoAdmin = await tx.usuario.findUnique({
      where: { rut: rutNuevoAdmin }
    });

    if (!nuevoAdmin) {
      throw new Error('El RUT ingresado no pertenece a un usuario registrado.');
    }

    if (nuevoAdmin.rol === RolUsuario.Administrador) {
      throw new Error('Este usuario ya es Administrador del sistema.');
    }

    // 4. Promover al nuevo administrador
    await tx.usuario.update({
      where: { rut: rutNuevoAdmin },
      data: { rol: RolUsuario.Administrador }
    });

    // 5. Revocar los permisos del administrador actual
    // Asumimos que vuelve a ser "Estudiante" o "Profesor" según tu lógica de negocio base
    await tx.usuario.update({
      where: { rut: rutAdminActual },
      data: { rol: RolUsuario.Estudiante } 
    });

    return true; // Transacción completada
  });
};