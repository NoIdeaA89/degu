import { Router } from 'express';
import * as talleresController from '../controllers/taller.controller';
// import { authMiddleware } from '../middlewares/auth.middleware'; // si ya tienes uno, agrégalo aquí

const router = Router();

router.get('/', talleresController.obtenerDashboard);
router.get('/profesores', talleresController.obtenerProfesores);
router.get('/', talleresController.obtenerPorSemestre); // ⚠️ ver nota abajo
router.post('/', talleresController.crearTaller);
router.post('/:id', talleresController.actualizarTaller);

export default router;