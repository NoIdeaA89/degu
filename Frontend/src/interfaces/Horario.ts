import type { Taller } from "./Taller"

export type CeldaSeleccionada = {
  dia: number
  bloque: number
  items: Taller[]
}

export type TallerSeleccionado = {
  id: string
  taller: Taller
}

