import { Router } from 'express';
import { login, registro, verificarSesion } from '../controllers/auth.controller';

const router = Router();

router.post('/login', login);

router.post('/registro', registro);
router.get('/verify', verificarSesion);

export default router;