import type { TallerUI } from "../interfaces/Taller"
import type { Estudiante } from "../interfaces/Estudiante"

export const crearIdTaller = (taller: TallerUI, indice: number) =>
  `${taller.dia}-${taller.bloque}-${taller.nombre}-${taller.lugar}-${indice}`

export const crearAsistenciaInicial = (estudiantes: Estudiante[]) =>
  Object.fromEntries(estudiantes.map((e) => [e.rut, false])) as Record<string, boolean>
