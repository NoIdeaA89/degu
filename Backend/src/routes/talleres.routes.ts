import { Router } from 'express';
import * as talleresController from '../controllers/taller.controller'; // ojo: singular, como ya lo tenías

const router = Router();

router.get('/todos', talleresController.obtenerDashboard);
router.get('/', talleresController.obtenerPorSemestre);
router.post('/', talleresController.crearTaller);
router.post('/:id', talleresController.actualizarTaller);

export default router;