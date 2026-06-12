import { talleres as talleresIniciales } from "../data/Taller"
import type { Taller } from "../interfaces/Taller"

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