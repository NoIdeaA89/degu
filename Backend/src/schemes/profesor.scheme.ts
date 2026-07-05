import { z } from 'zod';

export const crearProfesorSchema = z.object({
  body: z.object({
    nombre: z.string({
      message: "El nombre es obligatorio."
    }).min(1, { message: "El nombre no puede estar vacío." }),

    apellido: z.string({
      message: "El apellido es obligatorio."
    }).min(1, { message: "El apellido no puede estar vacío." }),

    rut: z.string({
      message: "El RUT es obligatorio."
    }).min(1, { message: "El RUT no puede estar vacío." }),

    correo: z.string({
      message: "El correo es obligatorio."
    }).email({ message: "Debe ingresar un correo electrónico válido." })
  })
});