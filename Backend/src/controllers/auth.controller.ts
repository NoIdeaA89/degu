import { Request, Response } from 'express';
import { autenticarUsuario } from '../services/auth.service';

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { correo, password } = req.body;

    // Validación básica
    if (!correo || !password) {
      res.status(400).json({ error: 'El correo y la contraseña son obligatorios' });
      return;
    }

    const token = await autenticarUsuario(correo, password);

    // Devolvemos el token al frontend
    res.status(200).json({
      mensaje: 'Inicio de sesión exitoso',
      token
    });
  } catch (error: any) {
    // Si la contraseña es incorrecta o el usuario no existe, mandamos un error 401 (No autorizado)
    res.status(401).json({ error: error.message });
  }
};