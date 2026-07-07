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

export const crearEstudiante = async (req: Request, res: Response) => {
  try {
    const { nombre, apellido, rut, correo, carrera, telefono, rol } = req.body;

    if (!nombre || !apellido || !rut || !correo || !carrera || !telefono || !rol) {
      return res.status(400).json({
        error: 'Faltan campos obligatorios: nombre, apellido, rut, correo, password.',
      });
    }

    const estudiante = await service.crearEstudiante({
      nombre,
      apellido,
      rut,
      correo,
      carrera,
      telefono,
    });

    return res.status(201).json({
      mensaje: 'Estudiante creado con éxito',
      usuario: estudiante,
    });
  } catch (error: any) {
    const status = error.status || 500;
    const message = error.message || 'Error al crear el estudiante.';
    return res.status(status).json({ detalle: message });
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

export async function buscarEstudiantesController(req: Request, res: Response) {
  try {
    const { query } = req.query;
    const { page, limit } = req.query;

    if (!query || typeof query !== 'string' || !query.trim()) {
      return res.status(400).json({
        error: 'El parámetro "query" es requerido y debe ser un texto no vacío.',
      });
    }
    const pageNum = Math.max(Number(page) || 1, 1);
    const limitNum = Math.min(Math.max(Number(limit) || 10, 1), 100);

    const skip = (pageNum - 1) * limitNum;

    const { data, total } = await service.buscarEstudiantes({ query, skip, take: limitNum });

    const totalPages = Math.ceil(total / limitNum);

    return res.status(200).json({
      data,
      meta: {
        page,
        limit,
        total,           
        totalPages,       
        hasNextPage: pageNum < totalPages,
        hasPrevPage: pageNum > 1,
      },
    });
  } catch (error) {
    console.error('Error al buscar estudiantes:', error);
    return res.status(500).json({
      error: 'Ocurrió un error al buscar los estudiantes.',
    });
  }
}

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