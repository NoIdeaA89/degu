import { useMemo, useState } from "react"

// Mock de estudiantes - TODO: Reemplazar con fetch del backend cuando esté disponible
const estudiantes = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  nombre: `Estudiante ${i + 1}`,
  rut: `${1000000 + i}-k`,
  correo: `estudiante${i + 1}@ucn.cl`,
}))

import { crearAsistenciaInicial, crearIdTaller } from "../../../utils/Asistencia"
import type { TallerUI } from "../../../interfaces/Taller"
import type { TallerSeleccionado } from "../../../interfaces/Horario"

/**
 * Hook para gestionar asistencia de talleres
 */
export function useAsistencia() {
  const [asistenciaPorTaller, setAsistenciaPorTaller] = useState<Record<string, Record<string, boolean>>>({})
  const [asistenciaOriginalPorTaller, setAsistenciaOriginalPorTaller] = useState<Record<string, Record<string, boolean>>>({})
  const [tallerSeleccionado, setTallerSeleccionado] = useState<TallerSeleccionado | null>(null)

  const abrirTaller = (taller: TallerUI, indice: number) => {
    const idCompuesto = crearIdTaller(taller, indice)
    const asistenciaBase = asistenciaPorTaller[idCompuesto] ?? crearAsistenciaInicial(estudiantes)

    setTallerSeleccionado({ id: taller.id, taller })
    setAsistenciaPorTaller((prev) => ({
      ...prev,
      [idCompuesto]: asistenciaBase,
    }))
    setAsistenciaOriginalPorTaller((prev) => ({
      ...prev,
      [idCompuesto]: asistenciaBase,
    }))
  }

  const cerrarTaller = () => {
    setTallerSeleccionado(null)
  }

  const guardarAsistencia = () => {
    if (!tallerSeleccionado) return

    setAsistenciaOriginalPorTaller((prev) => ({
      ...prev,
      [tallerSeleccionado.id]: asistenciaPorTaller[tallerSeleccionado.id] ?? crearAsistenciaInicial(estudiantes),
    }))

    cerrarTaller()
  }

  const alternarAsistencia = (rut: string) => {
    if (!tallerSeleccionado) return

    setAsistenciaPorTaller((prev) => {
      const actual = prev[tallerSeleccionado.id] ?? crearAsistenciaInicial(estudiantes)

      return {
        ...prev,
        [tallerSeleccionado.id]: {
          ...actual,
          [rut]: !actual[rut],
        },
      }
    })
  }

  const marcarTodos = (presente: boolean) => {
    if (!tallerSeleccionado) return

    setAsistenciaPorTaller((prev) => ({
      ...prev,
      [tallerSeleccionado.id]: Object.fromEntries(
        estudiantes.map((estudiante) => [estudiante.rut, presente])
      ) as Record<string, boolean>,
    }))
  }

  const asistenciaActual = useMemo(
    () =>
      tallerSeleccionado
        ? asistenciaPorTaller[tallerSeleccionado.id] ?? crearAsistenciaInicial(estudiantes)
        : null,
    [tallerSeleccionado, asistenciaPorTaller]
  )

  const asistenciaOriginal = useMemo(
    () =>
      tallerSeleccionado
        ? asistenciaOriginalPorTaller[tallerSeleccionado.id] ?? crearAsistenciaInicial(estudiantes)
        : null,
    [tallerSeleccionado, asistenciaOriginalPorTaller]
  )

  const hayCambios = Boolean(
    tallerSeleccionado &&
      estudiantes.some(
        (estudiante) =>
          asistenciaActual?.[estudiante.rut] !== asistenciaOriginal?.[estudiante.rut]
      )
  )

  return {
    tallerSeleccionado,
    asistenciaActual,
    hayCambios,
    estudiantes,
    abrirTaller,
    cerrarTaller,
    guardarAsistencia,
    alternarAsistencia,
    marcarTodos,
  }
}
