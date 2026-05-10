import { Request, Response } from 'express';
import * as service from '../services/estudiante.service';

export const listarEstudiantes = async (req: Request, res: Response) => {
  try {
    const search = typeof req.query.search === 'string' ? req.query.search : undefined;
    
    const estudiantes = await service.obtenerTodos(search);
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({ error: 'Error al listar' });
  }
};

export const obtenerPerfil = async (req: Request, res: Response) => {
  try {
    const { rut } = req.params;
    const rutValido = Array.isArray(rut) ? rut[0] : rut;

    const estudiante = await service.obtenerPorRut(rutValido);
    if (!estudiante) return res.status(404).json({ error: 'No encontrado' });
    
    res.json(estudiante);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener perfil' });
  }
};

export const obtenerHistorial = async (req: Request, res: Response) => {
  try {
    const rut = String(req.params.rut);
    const historial = await service.obtenerHistorialAsistencia(rut);
    res.json(historial);
  } catch (error: any) {
    res.status(500).json({ 
      error: 'Error al obtener historial',
      message: error.message 
    });
  }
};

export const modificarDatos = async (req: Request, res: Response) => {
  try {
    const rut = String(req.params.rut);
    const actualizado = await service.actualizarPerfil(rut, req.body);
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar' });
  }
};

export const cambiarRol = async (req: Request, res: Response) => {
  try {
    const { rut } = req.params;
    const { rol } = req.body;
    
    const actualizado = await service.actualizarRol(rut as string, rol);
    res.json(actualizado);
  } catch (error: any) {
    console.error("=== ERROR REAL AL CAMBIAR ROL ===", error); 
    
    res.status(400).json({ 
      error: 'Error al cambiar rol', 
      detalle: error.message,
      codigoPrisma: error.code 
    });
  }
};