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

    console.log("📦 talleres encontrados:", talleres, JSON.stringify(talleres).slice(0, 200));

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
    
    if (!id || dia === undefined || !Array.isArray(bloque) || bloque.length === 0) {
      return res.status(400).json({ error: 'El id, dia y bloque son requeridos' });
    }
    const bloquesEnum = bloque.map((b: string) => {
      const bloqueKey = b as keyof typeof BloqueHorario;
      return BloqueHorario[bloqueKey];
    });

    const tallerActualizado = await talleresService.actualizarTaller(Number(id), Number(dia), bloquesEnum);

    res.status(200).json({ message: 'Taller actualizado correctamente', data: tallerActualizado });
  } catch (error: any) {
    console.error("=== ERROR AL ACTUALIZAR TALLER ===", error);
    res.status(500).json({ 
      error: 'Error interno al actualizar el taller.',
      detalle: error.message 
    });
  }
};

export const crearTaller = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, horario, semestre, lugar, profesorId, dia, bloque } = req.body;

    if (!nombre || !semestre || !lugar || !profesorId) {
      return res.status(400).json({ error: 'nombre, semestre, lugar y profesorId son requeridos' });
    }

    let bloquesEnum: BloqueHorario[] | undefined = undefined;

    if (Array.isArray(bloque)) {
      bloquesEnum = bloque.map((b: string) => {
        const bloqueKey = b as keyof typeof BloqueHorario;
        return BloqueHorario[bloqueKey];
      });
    }

    const nuevoTaller = await talleresService.crearTaller({
      nombre,
      descripcion,
      horario,
      semestre,
      lugar,
      profesorId: Number(profesorId),
      dia: dia !== undefined ? Number(dia) : undefined,
      bloque: bloquesEnum,
    });

    res.status(201).json({ message: 'Taller creado correctamente', data: nuevoTaller });
  } catch (error: any) {
    console.error("=== ERROR AL CREAR TALLER ===", error);
    res.status(500).json({
      error: 'Error interno al crear el taller.',
      detalle: error.message
    });
  }
};

