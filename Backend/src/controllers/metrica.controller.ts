import { Request, Response } from 'express';
import * as metricasService from '../services/metrica.service';

export const obtenerDashboard = async (req: Request, res: Response) => {
  try {
    const metricas = await metricasService.obtenerResumenMetricas();
    
    res.status(200).json(metricas);

  } catch (error: any) {
    console.error("=== ERROR AL OBTENER MÉTRICAS ===", error);
    res.status(500).json({ 
      error: 'Error interno al calcular las métricas del sistema.',
      detalle: error.message 
    });
  }
};