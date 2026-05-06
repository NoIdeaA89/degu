import { Router } from 'express';
import { crearSesion, validarEnlace } from '../controllers/sesion.controller';

const router = Router();

router.post('/generar', crearSesion);

router.get('/validar/:token', validarEnlace);

export default router;