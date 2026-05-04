import { Router } from 'express';
import { AsistenciaController } from '../controllers/asistencia.controller';

const router = Router();
const asistenciaController = new AsistenciaController();

router.post('/sesion', asistenciaController.crearSesion);

router.patch('/registrar-qr', asistenciaController.registrarQR);

router.get('/sesion/:sesionId', asistenciaController.consultarPorSesion);

router.patch('/:id/manual', asistenciaController.modificacionManual);

export default router;