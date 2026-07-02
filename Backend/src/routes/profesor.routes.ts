import { Router } from 'express';
import { listarProfesores, crearProfesor } from '../controllers/profesor.controller';
import { middlewareVerificarAdmin } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', middlewareVerificarAdmin, listarProfesores);
router.post('/', middlewareVerificarAdmin, crearProfesor);

export default router;