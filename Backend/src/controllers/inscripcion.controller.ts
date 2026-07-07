// controllers/inscripcion.controller.ts
import { Request, Response } from 'express';
import { listarInscritosPorTaller, inscribirEstudiante } from '../services/inscripcion.service';

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

export const inscribirEstudianteController = async (req: Request, res: Response) => {
  try {
    const tallerId = Number(req.params.id || req.body.tallerId);
    const estudianteId = Number(req.body.estudianteId);
    
    if (!estudianteId || !tallerId) {
      return res.status(400).json({ error: 'estudianteId y tallerId son requeridos' });
    }
    
    const resultado = await inscribirEstudiante(estudianteId, tallerId);
    res.status(200).json({ message: 'Estudiante inscrito exitosamente', data: resultado });
  } catch (error: any) {
    console.error("=== ERROR AL INSCRIBIR ESTUDIANTE ===", error);
    res.status(error.status || 500).json({ error: 'Error al inscribir estudiante', detalle: error.message });
  }
};