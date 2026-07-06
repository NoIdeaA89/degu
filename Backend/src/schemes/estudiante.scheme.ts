import { z } from 'zod';

export const rutParamSchema = z.object({
  params: z.object({
    rut: z.string().min(1, "El RUT es obligatorio"),
  })
});

export const buscarEstudianteSchema = z.object({
  query: z.object({
    search: z.string().optional(),
  })
});

export const actualizarEstudianteSchema = z.object({
  params: z.object({
    rut: z.string().min(1),
  }),
  body: z.object({
    nombre: z.string().optional(),
    apellido: z.string().optional(),
    correo: z.string().email("Formato de correo inválido").optional(),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres").optional(),
  })
});

export const crearEstudianteSchema = z.object({
  body: z.object({
    nombre: z.string().min(1, "El nombre es obligatorio"),
    apellido: z.string().min(1, "El apellido es obligatorio"),
    rut: z.string().min(1, "El RUT es obligatorio"),
    correo: z.string().email("Formato de correo inválido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  })
});

export const cambioRolSchema = z.object({
  params: z.object({
    rut: z.string().min(1),
  }),
  body: z.object({
    rol: z.enum(['Estudiante', 'Profesor', 'Ayudante', 'Administrador'], {
      message: "El rol proporcionado no es válido"
    }),
  })
});