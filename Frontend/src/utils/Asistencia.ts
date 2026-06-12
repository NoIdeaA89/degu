import type { Taller } from "../interfaces/Taller"
import type { Estudiante } from "../interfaces/Estudiante"

export const crearIdTaller = (taller: Taller, indice: number) =>
  `${taller.dia}-${taller.bloque}-${taller.titulo}-${taller.lugar}-${indice}`

export const crearAsistenciaInicial = (estudiantes: Estudiante[]) =>
  Object.fromEntries(estudiantes.map((e) => [e.rut, false])) as Record<string, boolean>
