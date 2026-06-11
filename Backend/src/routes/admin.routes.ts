import { Router } from 'express';
import * as ctrl from '../controllers/admin.controller';
import { validate } from '../middlewares/validate.middleware';
import * as schema from '../middlewares/admin.scheme'; // Tendrías que crear este archivo
// import { verificarToken, verificarRolAdmin } from '../middlewares/auth.middleware'; // Middlewares hipotéticos

const router = Router();

// Ruta: PATCH /api/admin/transferir-mando
router.patch(
  '/transferir-mando', 
  // verificarToken,     <-- Obligatorio: Verifica que el usuario haya iniciado sesión
  // verificarRolAdmin,  <-- Obligatorio: Verifica que el usuario actual tenga rol "Administrador"
  validate(schema.transferirMandoSchema), // Valida que se envíe 'rutNuevoAdmin' y 'palabraConfirmacion'
  ctrl.transferirAdministracion
);

export default router;