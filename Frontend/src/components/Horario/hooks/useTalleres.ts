import { useMemo, useState } from "react"
import { cargarTalleres, guardarTalleres } from "../../../utils/Horariostorage"
import type { TallerUI } from "../../../interfaces/Taller"

/**
 * Hook para gestionar talleres (CRUD, movimiento, asignación)
 */
export function useTalleres() {
  const [talleresState, setTalleresState] = useState<TallerUI[]>(() => cargarTalleres())

  const lugares = useMemo(
    () => Array.from(new Set(talleresState.map((t) => t.lugar))).sort(),
    [talleresState]
  )

  const talleresSinAsignar = useMemo(
    () => talleresState.filter((t) => t.dia === 0 || t.bloque === 0),
    [talleresState]
  )

  const agregarTaller = (titulo: string, lugar: string) => {
    const tituloLimpio = titulo.trim()
    const lugarLimpio = lugar.trim()
    if (!tituloLimpio || !lugarLimpio) return

    setTalleresState((prev) => {
      const actualizado = [
        ...prev,
        {
          id: Date.now(),
          nombre: "Taller de Programación",
          dia: 0,
          bloque: 0,
          titulo: tituloLimpio,
          lugar: lugarLimpio,
        },
      ]
      guardarTalleres(actualizado)
      return actualizado
    })
  }

  const desasignarTaller = (origen: TallerUI) => {
    setTalleresState((prev) => {
      const actualizado = prev.map((t) =>
        t.dia === origen.dia &&
        t.bloque === origen.bloque &&
        t.nombre === origen.nombre &&
        t.lugar === origen.lugar
          ? { ...t, dia: 0, bloque: 0 }
          : t
      )
      guardarTalleres(actualizado)
      return actualizado
    })
  }

  const moverTaller = (origen: TallerUI, nuevoDia: number, nuevoBloque: number) => {
    setTalleresState((prev) => {
      const actualizado = prev.map((t) =>
        t.dia === origen.dia &&
        t.bloque === origen.bloque &&
        t.nombre === origen.nombre &&
        t.lugar === origen.lugar
          ? { ...t, dia: nuevoDia, bloque: nuevoBloque }
          : t
      )
      guardarTalleres(actualizado)
      return actualizado
    })
  }

  return {
    talleresState,
    lugares,
    talleresSinAsignar,
    agregarTaller,
    desasignarTaller,
    moverTaller,
  }
}
