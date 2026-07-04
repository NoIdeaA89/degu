import { Request, Response } from 'express';
import * as talleresService from '../services/talleres.service';

export const obtenerDashboard = async (req: Request, res: Response) => {
  try {
    const talleres = await talleresService.obtenerTalleres();
    res.status(200).json(talleres);
  } catch (error: any) {
    console.error("=== ERROR AL OBTENER TALLERES ===", error);
    res.status(500).json({ 
      error: 'Error interno al obtener los talleres.',
      detalle: error.message 
    });
  }
};

export const obtenerPorSemestre = async (req: Request, res: Response) => {
  try {
    const { semestre } = req.query;
    
    if (!semestre) {
      return res.status(400).json({ error: 'El semestre es requerido' });
    }

    const talleres = await talleresService.obtenerTalleresPorSemestre(String(semestre));
    res.status(200).json(talleres);
  } catch (error: any) {
    console.error("=== ERROR AL OBTENER TALLERES POR SEMESTRE ===", error);
    res.status(500).json({ 
      error: 'Error interno al obtener los talleres.',
      detalle: error.message 
    });
  }
};