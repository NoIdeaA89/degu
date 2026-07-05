import { Router } from 'express';
import { AsistenciaController } from '../controllers/asistencia.controller';

const router = Router();
const asistenciaController = new AsistenciaController();

router.post('/registrar', asistenciaController.registrarPorQR);

router.get('/sesion/:sesionId', asistenciaController.obtenerPorSesion);

router.get('/taller/:tallerId', asistenciaController.obtenerPorTaller);

router.get('/estudiante/:rut', asistenciaController.obtenerPorEstudiante);

router.get('/resumen', asistenciaController.obtenerResumenSemestre);

router.get('/resumen/estudiante/:estudianteId', asistenciaController.obtenerResumenEstudiante);

router.patch('/:id/estado', asistenciaController.modificarEstadoManual);

export default router;