import type { Sesion } from "./Sesion";

export interface Taller {
  id: number;
  nombre: string;
  descripcion: string;
  horario: string;
  semestre: string;
  estado: boolean;
  profesorId: number;
  sesiones: Sesion[];
  lugar: string;
  bloque: number;
  dia: number;
}