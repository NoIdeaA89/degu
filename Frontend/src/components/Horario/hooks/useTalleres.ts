import { useMemo, useState, useEffect } from "react"
import { cargarTalleres, guardarTalleres } from "../../../utils/Horariostorage"
import { obtenerTalleresPorSemestre, type TallerApi } from "../../../services/talleres.service"
import { obtenerSemestreActual } from "../../../utils/semestre.utils"
import { BLOQUES } from "../../../constants/Horario"
import type { TallerUI } from "../../../interfaces/Taller"

/**
 * Mapea un bloque (A, B, C, etc.) a su índice numérico
 */
function mapearBloqueANumero(bloque: string): number {
  const index = BLOQUES.indexOf(bloque)
  return index >= 0 ? index + 1 : 0
}

/**
 * Convierte un TallerApi a TallerUI
 */
function convertirTallerApiAUI(taller: TallerApi): TallerUI {
  return {
    id: taller.id,
    nombre: taller.nombre,
    dia: taller.dia || 0,
    bloque: mapearBloqueANumero(taller.bloque),
    lugar: taller.lugar || "Galpón Cultural",
  }
}

/**
 * Hook para gestionar talleres (CRUD, movimiento, asignación)
 */
export function useTalleres() {
  const [talleresState, setTalleresState] = useState<TallerUI[]>(() => cargarTalleres())
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Cargar talleres del backend al montar el componente
  useEffect(() => {
    const cargarTalleresDelBackend = async () => {
      try {
        setCargando(true)
        setError(null)
        const semestre = obtenerSemestreActual()
        const talleresApi = await obtenerTalleresPorSemestre(semestre)
        const talleresUI = talleresApi.map(convertirTallerApiAUI)
        setTalleresState(talleresUI)
        guardarTalleres(talleresUI)
      } catch (err) {
        const mensaje = err instanceof Error ? err.message : 'Error al cargar los talleres'
        setError(mensaje)
        console.error('Error cargando talleres:', err)
        // Mantener los datos locales como fallback
      } finally {
        setCargando(false)
      }
    }

    cargarTalleresDelBackend()
  }, [])

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
    cargando,
    error,
  }
}
