import { Router } from 'express';
import { listarTalleres, obtenerTaller, crearTaller } from '../controllers/taller.controller';
import { middlewareVerificarAdmin } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', listarTalleres);
router.get('/:id', obtenerTaller);
router.post('/', middlewareVerificarAdmin, crearTaller);

export default router;