import { Request, Response } from 'express';
import { generarEnlaceQR, validarTokenFrontend } from '../services/sesion.service';

export const crearSesion = async (req: Request, res: Response) => {
  try {
    const { tallerId, bloque } = req.body;

    if (!tallerId || !bloque) {
      return res.status(400).json({ error: 'Faltan parámetros obligatorios (tallerId o bloque)' });
    }

    const qrData = await generarEnlaceQR(Number(tallerId), String(bloque));
    
    return res.status(201).json({
      mensaje: 'Sesión creada y código QR generado con éxito',
      data: qrData
    });

  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const validarEnlace = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res.status(400).json({ error: 'Token no proporcionado' });
    }

    const validacion = await validarTokenFrontend(String(token));
    
    return res.status(200).json({
      mensaje: 'Token válido',
      data: validacion
    });

  } catch (error: any) {
    return res.status(403).json({ error: error.message });
  }
};  