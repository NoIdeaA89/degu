import { Response } from 'express';
import { ProfesorService } from '../services/profesor.service';
import type { AuthRequest } from '../middlewares/auth.middleware';

export class ProfesorController {
  private profesorService: ProfesorService;

  constructor() {
    this.profesorService = new ProfesorService();
  }

  listarProfesores = async (req: AuthRequest, res: Response) => {
    try {
      const profesores = await this.profesorService.listar();
      res.json(profesores);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  crearProfesor = async (req: AuthRequest, res: Response) => {
    try {
      const { nombre, apellido, rut, correo } = req.body;

      if (!nombre || !apellido || !rut || !correo) {
        return res.status(400).json({
          error: 'nombre, apellido, rut y correo son obligatorios',
        });
      }

      const profesor = await this.profesorService.crear(nombre, apellido, rut, correo);
      res.status(201).json(profesor);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
}

export const profesorController = new ProfesorController();
export const listarProfesores = profesorController.listarProfesores;
export const crearProfesor = profesorController.crearProfesor;