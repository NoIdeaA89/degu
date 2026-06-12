import { useEffect, useMemo, useState } from "react"
import { DIAS as dias, BLOQUES as bloques } from "../../../constants/Horario"
import { estudiantes } from "../../../data/Estudiantes"
import { talleres } from "../../../data/Taller"
import { crearAsistenciaInicial, crearIdTaller } from "../../../utils/Asistencia"
import type { Taller } from "../../../interfaces/Taller"
import type { CeldaSeleccionada, TallerSeleccionado } from "../../../interfaces/Horario"

export default function useHorario() {
  const lugares = useMemo(
    () => Array.from(new Set(talleres.map((t) => t.lugar))).sort(),
    []
  )

  const [lugaresActivos, setLugaresActivos] = useState<string[]>(lugares)
  const [celdaSeleccionada, setCeldaSeleccionada] = useState<CeldaSeleccionada | null>(null)
  const [tallerSeleccionado, setTallerSeleccionado] = useState<TallerSeleccionado | null>(null)
  const [asistenciaPorTaller, setAsistenciaPorTaller] = useState<Record<string, Record<string, boolean>>>({})
  const [asistenciaOriginalPorTaller, setAsistenciaOriginalPorTaller] = useState<Record<string, Record<string, boolean>>>({})
  const [mostrarQrModal, setMostrarQrModal] = useState(false)

  const toggleLugar = (lugar: string) => {
    setLugaresActivos((prev) =>
      prev.includes(lugar) ? prev.filter((item) => item !== lugar) : [...prev, lugar]
    )
  }

  const talleresFiltrados = useMemo(
    () => talleres.filter((t) => t.bloque > 0 && t.dia > 0 && lugaresActivos.includes(t.lugar)),
    [lugaresActivos]
  )

  const talleresPorCelda = useMemo(() => {
    const map = new Map<string, Taller[]>()

    for (const taller of talleresFiltrados) {
      const key = `${taller.bloque}-${taller.dia}`
      const prev = map.get(key) ?? []
      prev.push(taller)
      map.set(key, prev)
    }

    return map
  }, [talleresFiltrados])

  const seleccionarTodos = () => setLugaresActivos(lugares)
  const limpiarTodos = () => setLugaresActivos([])

  const abrirCelda = (dia: number, bloque: number) => {
    const items = talleresPorCelda.get(`${bloque}-${dia}`) ?? []
    setCeldaSeleccionada({ dia, bloque, items })
    setTallerSeleccionado(null)
  }

  const cerrarModal = () => {
    setCeldaSeleccionada(null)
    setTallerSeleccionado(null)
  }

  const cerrarModalAsistencia = () => {
    setTallerSeleccionado(null)
    setMostrarQrModal(false)
  }

  const abrirQrModal = () => setMostrarQrModal(true)
  const cerrarQrModal = () => setMostrarQrModal(false)

  const abrirTaller = (taller: Taller) => {
    const id = Number(crearIdTaller(taller));
    const asistenciaBase = asistenciaPorTaller[id] ?? crearAsistenciaInicial(estudiantes)

    setTallerSeleccionado({ id, taller })
    setAsistenciaPorTaller((prev) => ({
      ...prev,
      [id]: asistenciaBase
    }))
    setAsistenciaOriginalPorTaller((prev) => ({
      ...prev,
      [id]: asistenciaBase
    }))
  }

  const guardarAsistencia = () => {
    if (!tallerSeleccionado) return

    setAsistenciaOriginalPorTaller((prev) => ({
      ...prev,
      [tallerSeleccionado.id]:
        asistenciaPorTaller[tallerSeleccionado.id] ?? crearAsistenciaInicial(estudiantes)
    }))

    cerrarModalAsistencia()
  }

  const alternarAsistencia = (rut: string) => {
    if (!tallerSeleccionado) return

    setAsistenciaPorTaller((prev) => {
      const actual = prev[tallerSeleccionado.id] ?? crearAsistenciaInicial(estudiantes)

      return {
        ...prev,
        [tallerSeleccionado.id]: {
          ...actual,
          [rut]: !actual[rut]
        }
      }
    })
  }

  const marcarTodos = (presente: boolean) => {
    if (!tallerSeleccionado) return

    setAsistenciaPorTaller((prev) => ({
      ...prev,
      [tallerSeleccionado.id]: Object.fromEntries(
        estudiantes.map((estudiante) => [estudiante.rut, presente])
      ) as Record<string, boolean>
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

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      if (mostrarQrModal) {
        cerrarQrModal()
        return
      }
      if (tallerSeleccionado) {
        cerrarModalAsistencia()
        return
      }
      cerrarModal()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [mostrarQrModal, tallerSeleccionado])

  return {
    dias,
    bloques,
    lugares,
    lugaresActivos,
    talleresPorCelda,
    celdaSeleccionada,
    tallerSeleccionado,
    asistenciaActual,
    hayCambios,
    mostrarQrModal,
    estudiantes,
    toggleLugar,
    seleccionarTodos,
    limpiarTodos,
    abrirCelda,
    cerrarModal,
    abrirTaller,
    cerrarModalAsistencia,
    marcarTodos,
    alternarAsistencia,
    guardarAsistencia,
    abrirQrModal,
    cerrarQrModal
  }
}