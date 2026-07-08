import { useMemo, useState, useEffect } from "react"
import { cargarTalleres, guardarTalleres } from "../../../utils/Horariostorage"
import { obtenerTalleresPorSemestre, type TallerApi, actualizarTallerEnBD } from "../../../services/talleres.service"
import { obtenerSemestreActual } from "../../../utils/semestre.utils"
import { BLOQUES } from "../../../constants/Horario"
import type { TallerUI } from "../../../interfaces/Taller"
import { crearTallerEnBD } from "../../../services/talleres.service"
import { crearGrupoEnBD } from "../../../services/talleres.service"
import { archivarTallerEnBD } from '../../../services/talleres.service';

function mapearBloqueANumero(bloque: string): number {
  const index = BLOQUES.indexOf(bloque)
  return index >= 0 ? index + 1 : 0
}

function convertirTallerApiAUI(taller: TallerApi): TallerUI {
  return {
    id: taller.id,
    nombre: taller.nombre,
    dia: taller.dia || 0,
    bloque: mapearBloqueANumero(taller.bloque),
    lugar: taller.lugar || "Galpón Cultural",
    pendienteAsignacion: taller.dia === 0 || !taller.bloque,
    grupoId: taller.grupoId,
  }
}

export function useTalleres() {
  const [talleresState, setTalleresState] = useState<TallerUI[]>(() => cargarTalleres())
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
      } finally {
        setCargando(false)
      }
    }

    cargarTalleresDelBackend()
  }, [])
  
  const archivarTallerAPI = async (tallerId: number) => {
    try {
    // 1. Llamamos al backend para que libere el bloque y lo oculte
      await archivarTallerEnBD(tallerId);

    // 2. Lo eliminamos de TODA la interfaz de React
    // Si tu estado principal se llama talleresState (donde están todos los talleres):
      setTalleresState((prevTalleres) => 
        prevTalleres.filter((taller) => taller.id !== tallerId)
      );
    
    // NOTA: Si manejas "talleresSinAsignar" en un useState independiente, 
    // agrégalo también aquí:
    // setTalleresSinAsignar((prev) => prev.filter((t) => t.id !== tallerId));

    } catch (error) {
      console.error("Error al intentar quitar el taller:", error);
      throw error;
    }
  };

  const lugares = useMemo(
    () => Array.from(new Set(talleresState.map((t) => t.lugar))).sort(),
    [talleresState]
  )

  const talleresSinAsignar = useMemo(
    () => talleresState.filter((t) => t.pendienteAsignacion || t.dia === 0 || t.bloque === 0),
    [talleresState]
  )

  const agregarTaller = async (
  titulo: string,
  lugar: string,
  profesorId: number,
  descripcion: string,
  cantidadBloques: number = 1   // 👈 NUEVO, default 1 para no romper nada si algún caller viejo no lo manda
) => {
  const tituloLimpio = titulo.trim()
  const lugarLimpio = lugar.trim()
  if (!tituloLimpio || !lugarLimpio || !profesorId) return

  try {
    const semestre = obtenerSemestreActual()

    // 👇 crea una fila de Taller por cada bloque, todas iguales, todas "pendientes de asignar"
    const talleresCreados = await Promise.all(
      Array.from({ length: cantidadBloques }, () =>
        crearTallerEnBD({
          nombre: tituloLimpio,
          descripcion: descripcion.trim(),
          lugar: lugarLimpio,
          semestre,
          profesorId,
          dia: 0,
          bloque: "A",
        })
      )
    )

    // 👇 si son 2 o 3, se vinculan como grupo para compartir inscripciones
    if (talleresCreados.length > 1) {
      const ids = talleresCreados.map((t) => t.id)
      await crearGrupoEnBD(ids)
    }

    const nuevosTalleresUI = talleresCreados.map(convertirTallerApiAUI)

    setTalleresState((prev) => {
      const actualizado = [...prev, ...nuevosTalleresUI]
      guardarTalleres(actualizado)
      return actualizado
    })
  } catch (err) {
    console.error("Error al agregar taller:", err)
    setError("No se pudo agregar el taller")
  }
}

  const desasignarTaller = async (origen: TallerUI) => {
  const previo = talleresState
  const bloqueString = BLOQUES[origen.bloque - 1] ?? "A" // mantiene un valor válido del enum

  setTalleresState((prev) => {
    const actualizado = prev.map((t) =>
      t.id === origen.id
        ? { ...t, dia: 0, bloque: 0, pendienteAsignacion: true }
        : t
    )
    guardarTalleres(actualizado)
    return actualizado
  })

  try {
    await actualizarTallerEnBD(origen.id, 0, bloqueString)
  } catch (err) {
    console.error("Error al desasignar taller:", err)
    setError("No se pudo desasignar el taller")
    setTalleresState(previo)
    guardarTalleres(previo)
  }
}

  const moverTaller = async (origen: TallerUI, nuevoDia: number, nuevoBloque: number) => {
  const previo = talleresState
  const bloqueString = BLOQUES[nuevoBloque - 1] ?? "A"

  setTalleresState((prev) => {
    const actualizado = prev.map((t) =>
      t.id === origen.id
        ? {
            ...t,
            dia: nuevoDia,
            bloque: nuevoBloque,
            pendienteAsignacion: false, // 👈 antes estaba en `true`
          }
        : t
    )
    guardarTalleres(actualizado)
    return actualizado
  })

  try {
    await actualizarTallerEnBD(origen.id, nuevoDia, bloqueString)
  } catch (err) {
    console.error("Error al mover taller:", err)
    setError("No se pudo mover el taller")
    setTalleresState(previo)
    guardarTalleres(previo)
  }
}

  const confirmarAsignacion = async (id: number, bloque: number) => {
    try {
      const bloqueString = BLOQUES[bloque - 1] ?? "A"
      await actualizarTallerEnBD(id, 0, bloqueString)

      setTalleresState((prev) => {
        const actualizado = prev.map((t) =>
          t.id === id ? { ...t, dia: 0, bloque: 0, pendienteAsignacion: false } : t
        )
        guardarTalleres(actualizado)
        return actualizado
      })
    } catch (err) {
      console.error("Error al confirmar asignación:", err)
      setError("No se pudo confirmar la asignación")
    }
  }

  return {
    talleresState,
    lugares,
    talleresSinAsignar,
    agregarTaller,
    desasignarTaller,
    moverTaller,
    confirmarAsignacion,
    archivarTallerAPI,
    cargando,
    error,
  }
}