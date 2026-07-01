import { BLOQUES } from "../constants/Horario"

export function bloqueLetraANumero(letra: string): number {
  const indice = BLOQUES.indexOf(letra)
  return indice === -1 ? 0 : indice + 1
}

export function bloqueNumeroALetra(numero: number): string {
  return BLOQUES[numero - 1] ?? BLOQUES[0]
}