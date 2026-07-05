import { Request, Response } from "express";
import { crearProfesor, obtenerProfesores } from "../services/profesor.service";

export async function crearProfesorController(req: Request, res: Response) {
  try {
    const { nombre, apellido, rut, correo } = req.body;

    if (!nombre || !apellido || !rut || !correo) {
      return res.status(400).json({ error: "Faltan campos obligatorios: nombre, apellido, rut, correo." });
    }

    const profesor = await crearProfesor({ nombre, apellido, rut, correo });

    return res.status(201).json(profesor);
  } catch (error: any) {
    const status = error.status || 500;
    const message = error.message || "Error al crear el profesor.";
    return res.status(status).json({ detalle: message });
  }
}

export async function obtenerProfesoresController(req: Request, res: Response) {
  try {
    const profesores = await obtenerProfesores();
    return res.status(200).json(profesores);
  } catch (error: any) {
    return res.status(500).json({ detalle: "Error al obtener los profesores." });
  }
}