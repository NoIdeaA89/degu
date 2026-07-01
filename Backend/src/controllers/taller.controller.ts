import { Request, Response } from 'express';
import { TallerService } from '../services/talleres.service';

export class TallerController {
  private tallerService: TallerService;

  constructor() {
    this.tallerService = new TallerService();
  }

  listarTalleres = async (req: Request, res: Response) => {
    try {
      const talleres = await this.tallerService.listar();
      res.json(talleres);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  obtenerTaller = async (req: Request, res: Response) => {
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
}

export const tallerController = new TallerController();
export const listarTalleres = tallerController.listarTalleres;
export const obtenerTaller = tallerController.obtenerTaller;