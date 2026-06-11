import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { RolUsuario } from '../generated'; // Ajusta la ruta a tus tipos generados por Prisma

// Extendemos la interfaz de Request para inyectar los datos del usuario, 
// tal como lo espera tu admin.controller.ts
export interface AuthRequest extends Request {
  usuario?: {
    rut: string;
    rol: string;
  };
}

export const middlewareVerificarAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    // 1. Extraer el token del header "Authorization"
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        error: 'Acceso denegado. No se proporcionó un token de sesión.' 
      });
    }

    // Separar la palabra "Bearer" del token real
    const token = authHeader.split(' ')[1];

    // 2. Verificar y decodificar el token
    // NOTA: Asegúrate de que JWT_SECRET sea la misma clave que usas al crear el token en el Login
    const secreto = process.env.JWT_SECRET || 'tu_secreto_super_seguro';
    const decoded = jwt.verify(token, secreto) as { rut: string, rol: string };

    // 3. Verificar el rol (Protección 403 Forbidden)
    if (decoded.rol !== RolUsuario.Administrador && decoded.rol !== 'Administrador') {
      return res.status(403).json({ 
        error: 'Acceso denegado. Esta acción requiere permisos de Administrador.' 
      });
    }

    // 4. Inyectar los datos en el Request para que el controlador sepa quién hace la petición
    req.usuario = decoded;

    // 5. Todo está en orden, permitir el paso hacia admin.routes.ts
    next();

  } catch (error) {
    // Si el token fue modificado, caducó, o es falso, caerá aquí
    return res.status(401).json({ 
      error: 'Su sesión es inválida o ha expirado. Por favor, inicie sesión nuevamente.' 
    });
  }
};