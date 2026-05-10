import { Request, Response } from 'express';
import { SesionService } from '../services/sesion.service';

export class SesionController {
  private sesionService: SesionService;

  constructor() {
    this.sesionService = new SesionService();
  }

  crearSesion = async (req: Request, res: Response) => {
    try {
      const { tallerId, bloque, minutosValidez } = req.body;
      if (!tallerId || !bloque) {
        return res.status(400).json({ message: 'tallerId y bloque son obligatorios' });
      }

      const nuevaSesion = await this.sesionService.crear(
        Number(tallerId), 
        bloque, 
        minutosValidez || 15
      );
      res.status(201).json(nuevaSesion);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  validarEnlace = async (req: Request, res: Response) => {
    try {
      const { token } = req.params;
      const sesionValida = await this.sesionService.validar(String(token));
      
      if (!sesionValida) {
        return res.status(403).json({ message: 'QR inválido o expirado' });
      }

      res.json({ message: 'QR válido', sesion: sesionValida });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  listarSesionesPorTaller = async (req: Request, res: Response) => {
    try {
      const { tallerId } = req.params;
      const sesiones = await this.sesionService.listarPorTaller(Number(tallerId));
      res.json(sesiones);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  finalizarSesion = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const sesionFinalizada = await this.sesionService.finalizar(Number(id));
      res.json({ message: 'Sesión finalizada con éxito', data: sesionFinalizada });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
}

export const sesionController = new SesionController();
export const crearSesion = sesionController.crearSesion;
export const validarEnlace = sesionController.validarEnlace;
export const listarSesionesPorTaller = sesionController.listarSesionesPorTaller;
export const finalizarSesion = sesionController.finalizarSesion;