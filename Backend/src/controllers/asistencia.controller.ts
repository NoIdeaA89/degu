import { Request, Response } from 'express';
import { AsistenciaService } from '../services/asistencia.service';

export class AsistenciaController {
  private asistenciaService: AsistenciaService;

  constructor() {
    this.asistenciaService = new AsistenciaService();
  }

  registrarPorQR = async (req: Request, res: Response) => {
    try {
      const { rut, qrToken, satisfaccion, comentarios } = req.body;
      if (!rut || !qrToken) {
        return res.status(400).json({ message: 'RUT y Token de sesión son obligatorios' });
      }

      const registro = await this.asistenciaService.registrarAsistencia(rut, qrToken, satisfaccion, comentarios);
      res.status(201).json({ message: 'Asistencia registrada con éxito', data: registro });
    } catch (error: any) {
      res.status(error.status || 500).json({ message: error.message });
    }
  };

  obtenerPorSesion = async (req: Request, res: Response) => {
    try {
      const { sesionId } = req.params;
      const alumnos = await this.asistenciaService.listarPorSesion(Number(sesionId));
      res.json(alumnos);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  obtenerPorTaller = async (req: Request, res: Response) => {
    try {
      const { tallerId } = req.params;
      const reporte = await this.asistenciaService.listarPorTaller(Number(tallerId));
      res.json(reporte);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  obtenerPorEstudiante = async (req: Request, res: Response) => {
    try {
      const { rut } = req.params;
      const historial = await this.asistenciaService.listarPorEstudiante(String(rut));
      res.json(historial);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  modificarEstadoManual = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { estado } = req.body;
      const actualizado = await this.asistenciaService.actualizarEstado(Number(id), estado);
      res.json({ message: 'Estado actualizado', data: actualizado });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
}