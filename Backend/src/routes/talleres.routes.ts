import { Router } from 'express';
import { obtenerInscritosPorTaller } from '../controllers/inscripcion.controller';
import * as talleresController from '../controllers/taller.controller';
const router = Router();

router.get('/todos', talleresController.obtenerDashboard);
router.get('/', talleresController.obtenerPorSemestre);
router.post('/', talleresController.crearTaller);
router.post('/:id', talleresController.actualizarTaller);
router.get('/:id/inscritos', obtenerInscritosPorTaller);

router.post('/grupos', talleresController.crearGrupo);
router.post('/grupos/:grupoId/agregar', talleresController.agregarAlGrupo);
router.patch('/:id/salir-grupo', talleresController.salirGrupo);

export default router;