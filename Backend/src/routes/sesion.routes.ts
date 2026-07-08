import { Router } from 'express';
import { 
  crearSesion, 
  validarEnlace, 
  listarSesionesPorTaller, 
  finalizarSesion, 
  obtenerOCrearSesionDeHoy
} from '../controllers/sesion.controller';

const router = Router();

router.post('/generar', crearSesion);

//router.get('/validar/:token', validarEnlace);

//router.get('/taller/:tallerId', listarSesionesPorTaller);

//router.patch('/:id/finalizar', finalizarSesion);

router.post('/hoy', obtenerOCrearSesionDeHoy);

export default router;