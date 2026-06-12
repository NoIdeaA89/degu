import { Request, Response } from 'express';
import * as service from '../services/admin.service';

// Interfaz para cuando integres el middleware de JWT que inyecta los datos del usuario
export interface AuthRequest extends Request {
  usuario?: {
    rut: string; // Usaremos el RUT del token para saber quién es el admin actual
    rol: string;
  };
}

export const transferirAdministracion = async (req: AuthRequest, res: Response) => {
  try {
    const { rutNuevoAdmin, palabraConfirmacion } = req.body;
    
    // Asegurarse de que el middleware inyectó la información de sesión
    if (!req.usuario || !req.usuario.rut) {
      return res.status(401).json({ error: 'No autorizado. Token de sesión inválido.' });
    }

    const rutAdminActual = req.usuario.rut;

    // Prevenir que un admin intente transferirse el mando a sí mismo por error
    if (rutAdminActual === rutNuevoAdmin) {
      return res.status(400).json({ error: 'No puedes transferir el mando a tu propia cuenta.' });
    }

    // Ejecutar el servicio
    await service.transferirMando(rutAdminActual, rutNuevoAdmin, palabraConfirmacion);

    res.json({ 
      mensaje: 'Traspaso de administración exitoso. Su sesión expirará ahora.' 
    });

  } catch (error: any) {
    console.error("=== ERROR AL TRANSFERIR MANDO ===", error);
    
    res.status(400).json({ 
      error: 'Error al procesar la transferencia de administración', 
      detalle: error.message 
    });
  }
};