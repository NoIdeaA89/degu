import { Response } from 'express';
import { TallerService } from '../services/talleres.service';
import type { AuthRequest } from '../middlewares/auth.middleware';

export class TallerController {
  private tallerService: TallerService;

  constructor() {
    this.tallerService = new TallerService();
  }

  listarTalleres = async (req: AuthRequest, res: Response) => {
    try {
      const talleres = await this.tallerService.listar();
      res.json(talleres);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  obtenerTaller = async (req: AuthRequest, res: Response) => {
    try {
      const { id } = req.params;
      const taller = await this.tallerService.obtenerPorId(Number(id));

      if (!taller) {
        return res.status(404).json({ message: 'Taller no encontrado' });
      }

      res.json(taller);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  crearTaller = async (req: AuthRequest, res: Response) => {
    try {
      const { nombre, descripcion, semestre, lugar, profesorId } = req.body;

      if (!nombre || !descripcion || !semestre || !lugar || !profesorId) {
        return res.status(400).json({
          message: 'nombre, descripcion, semestre, lugar y profesorId son obligatorios',
        });
      }

      const nuevoTaller = await this.tallerService.crear({
        nombre,
        descripcion,
        semestre,
        lugar,
        profesorId: Number(profesorId),
      });

      res.status(201).json(nuevoTaller);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
}

export const tallerController = new TallerController();
export const listarTalleres = tallerController.listarTalleres;
export const obtenerTaller = tallerController.obtenerTaller;
export const crearTaller = tallerController.crearTaller;