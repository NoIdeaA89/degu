import { Request, Response } from 'express';
import * as talleresService from '../services/talleres.service';
import { BloqueHorario } from "@prisma/client"
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

export const actualizarTaller = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { dia, bloque } = req.body;
    
    if (!id || dia === undefined || !bloque) {
      return res.status(400).json({ error: 'El id, dia y bloque son requeridos' });
    }
    const bloqueKey = bloque as keyof typeof BloqueHorario
    const bloqueEnum = BloqueHorario[bloqueKey]
    const tallerActualizado = await talleresService.actualizarTaller(Number(id), Number(dia), bloqueEnum);
    res.status(200).json({ message: 'Taller actualizado correctamente', data: tallerActualizado });
  } catch (error: any) {
    console.error("=== ERROR AL ACTUALIZAR TALLER ===", error);
    res.status(500).json({ 
      error: 'Error interno al actualizar el taller.',
      detalle: error.message 
    });
  }
};