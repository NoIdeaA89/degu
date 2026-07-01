import { Router } from 'express';
import { listarTalleres, obtenerTaller } from '../controllers/taller.controller';

const router = Router();

router.get('/', listarTalleres);
router.get('/:id', obtenerTaller);

export default router;