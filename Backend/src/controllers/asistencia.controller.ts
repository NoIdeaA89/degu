import { Request, Response } from 'express';
import { AsistenciaService } from '../services/asistencia.service';

const asistenciaService = new AsistenciaService();

export class AsistenciaController {

  async crearSesion(req: Request, res: Response) {
    try {
      const { tallerId, bloque, minutosValidez } = req.body;
      
      if (!tallerId || !bloque || !minutosValidez) {
        return res.status(400).json({ error: "Faltan datos obligatorios (tallerId, bloque, minutosValidez)" });
      }

      const sesion = await asistenciaService.crearSesion(Number(tallerId), bloque, Number(minutosValidez));
      return res.status(201).json({ mensaje: "Sesión creada exitosamente", data: sesion });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async registrarQR(req: Request, res: Response) {
    try {
      const { qrToken, rut, notaSatisfaccion } = req.body;

      if (!qrToken || !rut) {
        return res.status(400).json({ error: "El Token QR y el RUT son obligatorios" });
      }

      const asistencia = await asistenciaService.registrarAsistenciaQR(qrToken, rut, notaSatisfaccion);
      return res.status(200).json({ mensaje: "Asistencia registrada correctamente", data: asistencia });
    } catch (error: any) {
     
      if (error.message.includes("expirado")) return res.status(403).json({ error: error.message });
      if (error.message.includes("inválido") || error.message.includes("no registrado")) return res.status(404).json({ error: error.message });
      if (error.message.includes("ya fue registrada")) return res.status(409).json({ error: error.message });
      
      return res.status(400).json({ error: error.message });
    }
  }

  async consultarPorSesion(req: Request, res: Response) {
    try {
      const { sesionId } = req.params;
      const listado = await asistenciaService.consultarAsistenciaPorSesion(Number(sesionId));
      return res.status(200).json({ data: listado });
    } catch (error: any) {
      return res.status(500).json({ error: "Error al consultar la asistencia" });
    }
  }

  async modificacionManual(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { estado } = req.body; 

      if (!estado) return res.status(400).json({ error: "El nuevo estado es obligatorio" });

      const actualizada = await asistenciaService.modificarEstadoManual(Number(id), estado);
      return res.status(200).json({ mensaje: "Estado actualizado manualmente", data: actualizada });
    } catch (error: any) {
      return res.status(400).json({ error: "No se pudo actualizar el estado" });
    }
  }
}