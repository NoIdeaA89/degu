import { useEffect, useMemo, useState } from "react"
import { obtenerInscritosPorTaller, type EstudianteApi } from "../../../services/inscripcion.service"
import { obtenerOCrearSesionDeHoy } from "../../../services/sesion.service"
import { obtenerAsistenciaPorSesion, guardarAsistenciaManual } from "../../../services/asistencia.service"
import type { TallerUI } from "../../../interfaces/Taller"
import type { TallerSeleccionado } from "../../../interfaces/Horario"
import type { Estudiante } from "../../../interfaces/Estudiante"

function convertirEstudianteApi(e: EstudianteApi): Estudiante {
  return {
    id: e.id,
    nombre: `${e.nombre} ${e.apellido}`,
    rut: e.rut,
    correo: e.correo,
  }
}

export function useAsistencia() {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([])
  const [sesionId, setSesionId] = useState<number | null>(null)
  const [asistenciaActual, setAsistenciaActual] = useState<Record<string, boolean> | null>(null)
  const [asistenciaOriginal, setAsistenciaOriginal] = useState<Record<string, boolean> | null>(null)
  const [tallerSeleccionado, setTallerSeleccionado] = useState<TallerSeleccionado | null>(null)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const abrirTaller = async (taller: TallerUI) => {
    setTallerSeleccionado({ id: taller.id, taller })
    setCargando(true)
    setError(null)

    try {
      const [inscritos, sesion] = await Promise.all([
        obtenerInscritosPorTaller(taller.id),
        obtenerOCrearSesionDeHoy(taller.id, taller.bloque),
      ])

      const estudiantesUI = inscritos.map(convertirEstudianteApi)
      setEstudiantes(estudiantesUI)
      setSesionId(sesion.id)

      const asistenciaExistente = await obtenerAsistenciaPorSesion(sesion.id)
      const porEstudianteId = new Map(asistenciaExistente.map((a) => [a.estudianteId, a.estado === "Presente"]))

      const base: Record<string, boolean> = {}
      estudiantesUI.forEach((e) => {
        base[e.rut] = porEstudianteId.get(e.id) ?? false
      })

      setAsistenciaActual(base)
      setAsistenciaOriginal(base)
    } catch (err) {
      console.error("Error al abrir taller para asistencia:", err)
      setError("No se pudo cargar la asistencia del taller")
    } finally {
      setCargando(false)
    }
  }

  const cerrarTaller = () => {
    setTallerSeleccionado(null)
    setAsistenciaActual(null)
    setAsistenciaOriginal(null)
    setSesionId(null)
    setEstudiantes([])
  }

  const alternarAsistencia = (rut: string) => {
    setAsistenciaActual((prev) => (prev ? { ...prev, [rut]: !prev[rut] } : prev))
  }

  const marcarTodos = (presente: boolean) => {
    setAsistenciaActual(
      Object.fromEntries(estudiantes.map((e) => [e.rut, presente])) as Record<string, boolean>
    )
  }

  const guardarAsistencia = async () => {
    if (!sesionId || !asistenciaActual) return

    const registros = estudiantes.map((e) => ({
      estudianteId: e.id,
      presente: asistenciaActual[e.rut] ?? false,
    }))

    try {
      await guardarAsistenciaManual(sesionId, registros)
      setAsistenciaOriginal(asistenciaActual)
      cerrarTaller()
    } catch (err) {
      console.error("Error al guardar asistencia:", err)
      setError("No se pudo guardar la asistencia")
    }
  }

  const hayCambios = useMemo(
    () =>
      Boolean(
        asistenciaActual &&
          asistenciaOriginal &&
          estudiantes.some((e) => asistenciaActual[e.rut] !== asistenciaOriginal[e.rut])
      ),
    [asistenciaActual, asistenciaOriginal, estudiantes]
  )

  return {
    tallerSeleccionado,
    asistenciaActual: asistenciaActual ?? {},
    hayCambios,
    estudiantes,
    cargando,
    error,
    abrirTaller,
    cerrarTaller,
    guardarAsistencia,
    alternarAsistencia,
    marcarTodos,
  }
}