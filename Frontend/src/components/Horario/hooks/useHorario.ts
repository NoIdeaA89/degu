import { useEffect, useMemo, useState } from "react"
import { DIAS as dias } from "../../../constants/Horario"
import { cargarBloques } from "../../../utils/Horariostorage"
import type { CeldaSeleccionada } from "../../../interfaces/Horario"
import { useTalleres } from "./useTalleres"
import { useAsistencia } from "./useAsistencia"
import { useFiltros } from "./useFiltros"
import type { TallerUI } from "../../../interfaces/Taller"

export default function useHorario() {
  // Sub-hooks para responsabilidades específicas
  const { talleresState, lugares, talleresSinAsignar, agregarTaller, desasignarTaller, moverTaller } = useTalleres()
  const { lugaresActivos, toggleLugar, seleccionarTodos, limpiarTodos } = useFiltros(lugares)
  const {
    tallerSeleccionado,
    asistenciaActual,
    hayCambios,
    estudiantes,
    qrToken,
    cargando: cargandoAsistencia,   
    error: errorAsistencia,         
    abrirTaller,
    cerrarTaller,
    guardarAsistencia,
    alternarAsistencia,
    marcarTodos,
    inscribirEstudiante,
  } = useAsistencia()

  // Estados locales
  const [modoEdicion, setModoEdicion] = useState(false)
  const [bloques] = useState<string[]>(() => cargarBloques())
  const [celdaSeleccionada, setCeldaSeleccionada] = useState<CeldaSeleccionada | null>(null)
  const [mostrarQrModal, setMostrarQrModal] = useState(false)

  // Cálculos derivados
  const talleresFiltrados = useMemo(
    () => talleresState.filter((t) => t.bloque > 0 && t.dia > 0 && lugaresActivos.includes(t.lugar)),
    [talleresState, lugaresActivos]
  )

  const talleresPorCelda = useMemo(() => {
    const mapa = new Map<string, TallerUI[]>()

    talleresFiltrados.forEach((t) => {
      if (!t.pendienteAsignacion) {
        const key = `${t.bloque}-${t.dia}`
        if (!mapa.has(key)) {
          mapa.set(key, [])
        }
        mapa.get(key)!.push(t)
      }
    })

    return mapa
  }, [talleresFiltrados])

  const abrirCelda = (dia: number, bloque: number) => {
    if (modoEdicion) return
    const items = talleresPorCelda.get(`${bloque}-${dia}`) ?? []
    setCeldaSeleccionada({ dia, bloque, items })
  }

  const cerrarModal = () => {
    setCeldaSeleccionada(null)
  }

  const cerrarModalAsistencia = () => {
    cerrarTaller()
    setMostrarQrModal(false)
  }

  const toggleModoEdicion = () => setModoEdicion((prev) => !prev)
  const abrirQrModal = () => setMostrarQrModal(true)
  const cerrarQrModal = () => setMostrarQrModal(false)

  // Event listeners para cerrar modales con ESC
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
    qrToken,
    lugaresActivos,
    talleresPorCelda,
    talleresSinAsignar,
    celdaSeleccionada,
    tallerSeleccionado,
    asistenciaActual,
    hayCambios,
    mostrarQrModal,
    estudiantes,
    cargandoAsistencia,   
    errorAsistencia,      
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
    cerrarQrModal,
    inscribirEstudiante,
  }
}