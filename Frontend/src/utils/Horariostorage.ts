import { talleres as talleresIniciales } from "../data/Taller"
import type { Taller } from "../interfaces/Taller"
import { BLOQUES as bloquesIniciales } from "../constants/Horario"

const BLOQUES_STORAGE_KEY = "horario_bloques"

const STORAGE_KEY = "horario_talleres"

export function cargarTalleres(): Taller[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return [...talleresIniciales]

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return [...talleresIniciales]

    return parsed as Taller[]
  } catch {
    return [...talleresIniciales]
  }
}

export function guardarTalleres(talleres: Taller[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(talleres))
  } catch {
    // si falla (modo privado, cuota llena, etc.) simplemente no persiste
  }
}
export function cargarBloques(): string[] {
  try {
    const raw = localStorage.getItem(BLOQUES_STORAGE_KEY)
    if (!raw) return [...bloquesIniciales]

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return [...bloquesIniciales]

    return parsed as string[]
  } catch {
    return [...bloquesIniciales]
  }
}
export function guardarBloques(bloques: string[]): void {
  try {
    localStorage.setItem(BLOQUES_STORAGE_KEY, JSON.stringify(bloques))
  } catch {
    // si falla (modo privado, cuota llena, etc.) simplemente no persiste
  }
}
