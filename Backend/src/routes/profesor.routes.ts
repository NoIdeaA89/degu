import { Router } from "express";
import {
  crearProfesorController,
  obtenerProfesoresController,
} from "../controllers/profesor.controller";
import { middlewareVerificarAdmin } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { crearProfesorSchema } from "../schemes/profesor.scheme"; // Ajusta la ruta si tus schemes viven en otra carpeta

const router = Router();

// Solo un administrador puede crear o listar profesores
router.post(
  "/",
  middlewareVerificarAdmin,
  validate(crearProfesorSchema),
  crearProfesorController
);

router.get("/", middlewareVerificarAdmin, obtenerProfesoresController);

export default router;

// En tu archivo principal de rutas (ej. app.ts o index.ts):
// import profesorRoutes from "./routes/profesor.routes";
// app.use("/profesores", profesorRoutes);