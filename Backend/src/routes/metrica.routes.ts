import { Router } from 'express';
import * as ctrl from '../controllers/metrica.controller';
import { verificarToken } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @route GET /api/metricas/dashboard
 * @desc Obtiene el resumen de métricas operativas (Volumen, Calidad, Rendimiento)
 * @access Privado (Requiere sesión)
 */
router.get(
  '/dashboard', 
  verificarToken,
  ctrl.obtenerDashboard
);

export default router;