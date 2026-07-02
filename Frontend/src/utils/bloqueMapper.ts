import { BLOQUES } from "../constants/Horario"

export function bloqueLetraANumero(letra: string): number {
  const indice = BLOQUES.indexOf(letra)
  return indice === -1 ? 0 : indice + 1
}

export function bloqueNumeroALetra(numero: number): string | null {
  if (numero <= 0) return null
  return BLOQUES[numero - 1] ?? null
}