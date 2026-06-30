import type { Taller } from "../interfaces/Taller"
import type { Estudiante } from "../interfaces/Estudiante"

export const crearIdTaller = (taller: Taller): string => {
  return String(taller.id);
}

export const crearAsistenciaInicial = (estudiantes: Estudiante[]) => {
  return Object.fromEntries(estudiantes.map((e) => [e.rut, false])) as Record<string, boolean>;
}