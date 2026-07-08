import { Router } from 'express';
import { obtenerInscritosPorTaller, inscribirEstudianteController, inscribirEstudiantesBatchController } from '../controllers/inscripcion.controller';
import * as talleresController from '../controllers/taller.controller';
import { middlewareVerificarAdmin } from '../middlewares/auth.middleware';
const router = Router();

//router.get('/todos', talleresController.obtenerDashboard);
router.get('/', talleresController.obtenerPorSemestre);
router.post('/', talleresController.crearTaller);
router.post('/inscribir/batch', middlewareVerificarAdmin, inscribirEstudiantesBatchController)

router.post('/grupos', talleresController.crearGrupo);
router.post('/grupos/:grupoId/agregar', talleresController.agregarAlGrupo);

router.post('/:id', talleresController.actualizarTaller);
router.get('/:id/inscritos', obtenerInscritosPorTaller);
router.post('/:id/inscribir', inscribirEstudianteController);
router.patch('/:id/salir-grupo', talleresController.salirGrupo);
router.delete('/:id', talleresController.archivarTaller );

export default router;