import { useEffect, useMemo, useState } from "react"
import { DIAS as dias } from "../../../constants/Horario"
import { estudiantes } from "../../../data/Estudiantes"
import { crearAsistenciaInicial, crearIdTaller } from "../../../utils/Asistencia"
import { cargarBloques, cargarTalleres, guardarTalleres } from "../../../utils/Horariostorage"
import type { Taller } from "../../../interfaces/Taller"
import type { CeldaSeleccionada, TallerSeleccionado } from "../../../interfaces/Horario"


export default function useHorario() {
  const [talleresState, setTalleresState] = useState<Taller[]>(() => cargarTalleres())
  const [modoEdicion, setModoEdicion] = useState(false)
  const [bloques, setBloques] = useState<string[]>(() => cargarBloques())

  const lugares = useMemo(
    () => Array.from(new Set(talleresState.map((t) => t.lugar))).sort(),
    [talleresState]
  )

  const [lugaresActivos, setLugaresActivos] = useState<string[]>(lugares)
  const [celdaSeleccionada, setCeldaSeleccionada] = useState<CeldaSeleccionada | null>(null)
  const [tallerSeleccionado, setTallerSeleccionado] = useState<TallerSeleccionado | null>(null)
  const [asistenciaPorTaller, setAsistenciaPorTaller] = useState<Record<string, Record<string, boolean>>>({})
  const [asistenciaOriginalPorTaller, setAsistenciaOriginalPorTaller] = useState<Record<string, Record<string, boolean>>>({})
  const [mostrarQrModal, setMostrarQrModal] = useState(false)

  // Sincroniza lugaresActivos si aparecen lugares nuevos (poco probable pero seguro)
  useEffect(() => {
    setLugaresActivos((prev) => {
      const nuevos = lugares.filter((l) => !prev.includes(l) && !prev.some((p) => !lugares.includes(p)))
      if (nuevos.length === 0) return prev
      return [...prev, ...nuevos]
    })
  }, [lugares])

  const toggleLugar = (lugar: string) => {
    setLugaresActivos((prev) =>
      prev.includes(lugar) ? prev.filter((item) => item !== lugar) : [...prev, lugar]
    )
  }

  const talleresFiltrados = useMemo(
    () => talleresState.filter((t) => t.bloque > 0 && t.dia > 0 && lugaresActivos.includes(t.lugar)),
    [talleresState, lugaresActivos]
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

  const toggleModoEdicion = () => setModoEdicion((prev) => !prev)
  const talleresSinAsignar = useMemo(
    () => talleresState.filter((t) => t.dia === 0 || t.bloque === 0),
    [talleresState]
  )

  const agregarTaller = (titulo: string, lugar: string) => {
    const tituloLimpio = titulo.trim()
    const lugarLimpio = lugar.trim()
    if (!tituloLimpio || !lugarLimpio) return

    setTalleresState((prev) => {
      const actualizado = [...prev, { dia: 0, bloque: 0, titulo: tituloLimpio, lugar: lugarLimpio }]
      guardarTalleres(actualizado)
      return actualizado
    })
  }
  const desasignarTaller = (origen: Taller) => {
    setTalleresState((prev) => {
      const actualizado = prev.map((t) =>
        t.dia === origen.dia &&
        t.bloque === origen.bloque &&
        t.titulo === origen.titulo &&
        t.lugar === origen.lugar
          ? { ...t, dia: 0, bloque: 0 }
          : t
      )
      guardarTalleres(actualizado)
      return actualizado
    })
  }
  const moverTaller = (origen: Taller, nuevoDia: number, nuevoBloque: number) => {
    setTalleresState((prev) => {
      const actualizado = prev.map((t) =>
        t.dia === origen.dia &&
        t.bloque === origen.bloque &&
        t.titulo === origen.titulo &&
        t.lugar === origen.lugar
          ? { ...t, dia: nuevoDia, bloque: nuevoBloque }
          : t
      )
      guardarTalleres(actualizado)
      return actualizado
    })
  }

  const abrirCelda = (dia: number, bloque: number) => {
    if (modoEdicion) return
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

  const abrirTaller = (taller: Taller, indice: number) => {
    if (modoEdicion) return
    const id = crearIdTaller(taller, indice)
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
    talleresSinAsignar,
    celdaSeleccionada,
    tallerSeleccionado,
    asistenciaActual,
    hayCambios,
    mostrarQrModal,
    estudiantes,
    modoEdicion,
    desasignarTaller,
    agregarTaller,
    toggleModoEdicion,
    moverTaller,
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