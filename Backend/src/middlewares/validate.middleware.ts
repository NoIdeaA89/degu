import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';

export const validate = (schema: z.ZodSchema) => 
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          error: "Datos inválidos",
          detalles: error.issues.map((issue) => ({
            campo: issue.path[1] || issue.path[0],
            mensaje: issue.message
          }))
        });
      }
      return res.status(500).json({ error: "Error interno en validación" });
    }
  };