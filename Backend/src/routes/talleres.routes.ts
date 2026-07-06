import { Router } from 'express';
import { obtenerInscritosPorTaller } from '../controllers/inscripcion.controller';
import * as talleresController from '../controllers/taller.controller';
const router = Router();

router.get('/todos', talleresController.obtenerDashboard);
router.get('/', talleresController.obtenerPorSemestre);
router.post('/', talleresController.crearTaller);
router.post('/:id', talleresController.actualizarTaller);
router.get('/:id/inscritos', obtenerInscritosPorTaller);
// talleres.routes.ts
router.patch('/:id/pareja', talleresController.vincularPareja);   // 👈 NUEVO

export default router;