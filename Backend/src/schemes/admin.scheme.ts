import { z } from 'zod';

export const transferirMandoSchema = z.object({
  body: z.object({
    rutNuevoAdmin: z.string({ 
      message: "El RUT del nuevo administrador es obligatorio." 
    }).min(1, { message: "El RUT no puede estar vacío." }),
    
    palabraConfirmacion: z.literal("CONFIRMAR", {
      message: "Debe escribir la palabra CONFIRMAR exactamente en mayúsculas."
    })
  })
});