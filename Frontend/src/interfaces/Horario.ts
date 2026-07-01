import type { TallerUI } from "./Taller"

export type CeldaSeleccionada = {
  dia: number
  bloque: number
  items: TallerUI[]
}

export type TallerSeleccionado = {
  id: number
  taller: TallerUI
}

