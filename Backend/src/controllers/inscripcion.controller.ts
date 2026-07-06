// controllers/inscripcion.controller.ts
import { Request, Response } from 'express';
import { listarInscritosPorTaller } from '../services/inscripcion.service';

export const obtenerInscritosPorTaller = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const estudiantes = await listarInscritosPorTaller(Number(id));
    res.status(200).json(estudiantes);
  } catch (error: any) {
    console.error("=== ERROR AL OBTENER INSCRITOS ===", error);
    res.status(500).json({ error: 'Error al obtener los inscritos', detalle: error.message });
  }
};