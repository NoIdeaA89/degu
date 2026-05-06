import { Fragment, useEffect, useMemo, useState, type ReactElement } from "react"
import "./Horario.css"
import Navbar from "../components/navbar"
import GeneradorQR from "../components/generadorQR"

interface Taller {
  dia: number
  bloque: number
  titulo: string
  lugar: string
}

type CeldaSeleccionada = {
  dia: number
  bloque: number
  items: Taller[]
}

type TallerSeleccionado = {
  id: string
  taller: Taller
}

const talleres: Array<Taller> = [
  { dia: 1, bloque: 3, titulo: "Club TCG", lugar: "Sala J" },
  { dia: 1, bloque: 4, titulo: "Club TCG", lugar: "Sala J" },
  { dia: 1, bloque: 4, titulo: "Cueca", lugar: "Gimnasio" },
  { dia: 1, bloque: 5, titulo: "Club TCG", lugar: "Sala J" },
  { dia: 1, bloque: 5, titulo: "Bandas", lugar: "Sala multiusos" },
  { dia: 1, bloque: 6, titulo: "Pole Dance", lugar: "Gimnasio" },
  { dia: 2, bloque: 3, titulo: "Club TCG", lugar: "Sala J" },
  { dia: 2, bloque: 3, titulo: "Club Gamer", lugar: "Sala multiusos" },
  { dia: 2, bloque: 4, titulo: "Club TCG", lugar: "Sala J" },
  { dia: 2, bloque: 4, titulo: "Club Gamer", lugar: "Sala multiusos" },
  { dia: 2, bloque: 4, titulo: "Cueca", lugar: "Gimnasio" },
  { dia: 2, bloque: 5, titulo: "Club TCG", lugar: "Sala J" },
  { dia: 2, bloque: 5, titulo: "Club Gamer", lugar: "Sala multiusos" },
  { dia: 2, bloque: 6, titulo: "Jazz Band", lugar: "Sala de Música" },
  { dia: 3, bloque: 1, titulo: "Pintura", lugar: "Taller de Arte" },
  { dia: 3, bloque: 2, titulo: "Pintura", lugar: "Taller de Arte" },
  { dia: 3, bloque: 2, titulo: "Canto", lugar: "Sala multiusos" },
  { dia: 3, bloque: 2, titulo: "Danza", lugar: "Sala de Música" },
  { dia: 3, bloque: 3, titulo: "Pintura", lugar: "Taller de Arte" },
  { dia: 3, bloque: 3, titulo: "Canto", lugar: "Sala multiusos" },
  { dia: 3, bloque: 4, titulo: "Danza", lugar: "Sala de Música" },
  { dia: 3, bloque: 4, titulo: "Teatro", lugar: "Sala multiusos" },
  { dia: 3, bloque: 6, titulo: "Música", lugar: "Sala de Música" },
  { dia: 3, bloque: 7, titulo: "Música", lugar: "Sala de Música" },
  { dia: 4, bloque: 2, titulo: "Club de literatura", lugar: "Sala de Música" },
  { dia: 4, bloque: 2, titulo: "Fotografía", lugar: "Exterior" },
  { dia: 4, bloque: 3, titulo: "Fotografía", lugar: "Exterior" },
  { dia: 4, bloque: 4, titulo: "Teatro", lugar: "Sala multiusos" },
  { dia: 4, bloque: 4, titulo: "Club TCG", lugar: "Sala J" },
  { dia: 4, bloque: 6, titulo: "Pole Dance", lugar: "Gimnasio" },
  { dia: 5, bloque: 4, titulo: "Club TCG", lugar: "Sala J" },
  { dia: 5, bloque: 5, titulo: "Jazz Band", lugar: "Sala de Música" },
  { dia: 5, bloque: 5, titulo: "Bandas", lugar: "Sala multiusos" }
]

interface Estudiante {
  rut: string
  nombre: string
}

const estudiantes: Estudiante[] = [
  { rut: "12.345.678-9", nombre: "Estudiante 1" },
  { rut: "11.111.111-1", nombre: "Estudiante 2" },
  { rut: "22.222.222-2", nombre: "Estudiante 3" },
  { rut: "33.333.333-3", nombre: "Estudiante 4" },
  { rut: "44.444.444-4", nombre: "Estudiante 5" }
]

const crearIdTaller = (taller: Taller, indice: number) =>
  `${taller.dia}-${taller.bloque}-${taller.titulo}-${taller.lugar}-${indice}`

const crearAsistenciaInicial = () =>
  Object.fromEntries(estudiantes.map((estudiante) => [estudiante.rut, false])) as Record<
    string,
    boolean
  >

export default function Horario(): ReactElement {
  const dias = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO"]
  const bloques = ["A", "B", "C", "C2", "D", "E", "F", "G"]

  const lugares = useMemo(
    () => Array.from(new Set(talleres.map((t) => t.lugar))).sort(),
    []
  )

  const [lugaresActivos, setLugaresActivos] = useState<string[]>(lugares)
  const [celdaSeleccionada, setCeldaSeleccionada] = useState<CeldaSeleccionada | null>(null)
  const [tallerSeleccionado, setTallerSeleccionado] = useState<TallerSeleccionado | null>(null)
  const [asistenciaPorTaller, setAsistenciaPorTaller] = useState<
    Record<string, Record<string, boolean>>
  >({})
  const [asistenciaOriginalPorTaller, setAsistenciaOriginalPorTaller] = useState<
    Record<string, Record<string, boolean>>
  >({})
  const [mostrarQrModal, setMostrarQrModal] = useState(false)

  const toggleLugar = (lugar: string) => {
    setLugaresActivos((prev) =>
      prev.includes(lugar) ? prev.filter((x) => x !== lugar) : [...prev, lugar]
    )
  }

  const talleresFiltrados = useMemo(
    () =>
      talleres.filter(
        (t) => t.bloque > 0 && t.dia > 0 && lugaresActivos.includes(t.lugar)
      ),
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

  const abrirQrModal = () => {
    setMostrarQrModal(true)
  }

  const cerrarQrModal = () => {
    setMostrarQrModal(false)
  }

  const abrirTaller = (taller: Taller, indice: number) => {
    const id = crearIdTaller(taller, indice)
    const asistenciaBase = asistenciaPorTaller[id] ?? crearAsistenciaInicial()

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
      [tallerSeleccionado.id]: asistenciaPorTaller[tallerSeleccionado.id] ?? crearAsistenciaInicial()
    }))

    cerrarModalAsistencia()
  }

  const alternarAsistencia = (rut: string) => {
    if (!tallerSeleccionado) return

    setAsistenciaPorTaller((prev) => {
      const actual = prev[tallerSeleccionado.id] ?? crearAsistenciaInicial()

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

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
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
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [tallerSeleccionado, mostrarQrModal])

  const asistenciaActual =
    tallerSeleccionado ? asistenciaPorTaller[tallerSeleccionado.id] : null

  const asistenciaOriginal =
    tallerSeleccionado ? asistenciaOriginalPorTaller[tallerSeleccionado.id] : null

  const hayCambios = !!tallerSeleccionado && (() => {
    const actual = asistenciaActual ?? crearAsistenciaInicial()
    const original = asistenciaOriginal ?? crearAsistenciaInicial()

    return estudiantes.some((estudiante) => actual[estudiante.rut] !== original[estudiante.rut])
  })()

  return (
    <section>
      <div>
        <Navbar>
        </Navbar>
      </div>
      <div className="flex justify-center">
        <div className="horario-layout">
          <div className="malla">
            <div className="celda esquina" />

            {dias.map((dia) => (
              <div key={`header-${dia}`} className="celda encabezado-dia">
                {dia}
              </div>
            ))}

            {bloques.map((bloque, bloqueIndex) => (
              <Fragment key={`fila-${bloque}`}>
                <div className="celda encabezado-bloque">{bloque}</div>

                {dias.map((dia, diaIndex) => {
                  const bloqueNum = bloqueIndex + 1
                  const diaNum = diaIndex + 1
                  const key = `${bloqueNum}-${diaNum}`
                  const items = talleresPorCelda.get(key) ?? []

                  return (
                    <div
                      key={`celda-${bloque}-${dia}`}
                      className={`celda contenido ${items.length > 0 ? "con-taller" : ""}`}
                      role="button"
                      tabIndex={0}
                      onClick={() => abrirCelda(diaNum, bloqueNum)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault()
                          abrirCelda(diaNum, bloqueNum)
                        }
                      }}
                    >
                      <div className="contenido-lista">
                        {items.map((t, idx) => (
                          <span
                            key={`${t.titulo}-${t.lugar}-${idx}`}
                            className="contenido-item"
                            title={`${t.titulo} · ${t.lugar}`}
                          >
                            {t.titulo}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </Fragment>
            ))}
          </div>

          <aside className="panel-detalle">
            <div className="panel-header">
              <h3>Filtros</h3>
            </div>
            <div className="panel-acciones">
              <button type="button" className="panel-btn" onClick={seleccionarTodos}>
                Seleccionar todos
              </button>
              <button type="button" className="panel-btn panel-btn-sec" onClick={limpiarTodos}>
                Limpiar
              </button>
            </div>

            <div className="panel-lista">
              {lugares.map((lugar) => {
                const checked = lugaresActivos.includes(lugar)

                return (
                  <label key={lugar} className={`panel-check ${checked ? "panel-check-activo" : ""}`}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleLugar(lugar)}
                    />
                    <span className="panel-check-texto">{lugar}</span>
                  </label>
                )
              })}
            </div>
          </aside>
        </div>
      </div>
        

      {celdaSeleccionada && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {dias[celdaSeleccionada.dia - 1]} · Bloque {bloques[celdaSeleccionada.bloque - 1]}
              </h3>
              <button type="button" className="panel-btn panel-btn-sec" onClick={cerrarModal}>
                Cerrar
              </button>
            </div>

            <div className="modal-cuerpo">
              {celdaSeleccionada.items.length > 0 ? (
                <ul className="modal-lista">
                  {celdaSeleccionada.items.map((t, idx) => {
                    const id = crearIdTaller(t, idx)

                    return (
                      <li key={id}>
                        <button
                          type="button"
                          className="modal-item-btn"
                          onClick={() => abrirTaller(t, idx)}
                        >
                          <strong>{t.titulo}</strong>
                          <span>{t.lugar}</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <p>No hay talleres en este bloque.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {tallerSeleccionado && (
        <div className="modal-overlay-sec" onClick={cerrarModalAsistencia}>
          <div className="modal-contenido-sec" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{tallerSeleccionado.taller.titulo}</h3>
              <button
                type="button"
                className="panel-btn panel-btn-sec"
                onClick={cerrarModalAsistencia}
              >
                Cerrar
              </button>
            </div>

            <div className="asistencia-acciones">
              <button type="button" className="panel-btn" onClick={() => marcarTodos(true)}>
                Todos presentes
              </button>
              <button
                type="button"
                className="panel-btn panel-btn-sec"
                onClick={() => marcarTodos(false)}
              >
                Todos ausentes
              </button>
              <button type="button" className="panel-btn panel-btn-sec" onClick={abrirQrModal}>
                Ver código QR
              </button>
            </div>

            <ul className="asistencia-lista">
              {estudiantes.map((estudiante) => {
                const presente = asistenciaActual?.[estudiante.rut] ?? false

                return (
                  <li
                    key={estudiante.rut}
                    className={`asistencia-card ${presente ? "presente" : "ausente"}`}
                  >
                    <div className="asistencia-card-info">
                      <strong>{estudiante.nombre}</strong>
                      <span>{estudiante.rut}</span>
                    </div>

                    <div className="asistencia-switch-wrap">
                      <span className={`asistencia-estado ${presente ? "activo" : ""}`}>
                        {presente ? "Presente" : "Ausente"}
                      </span>

                      <label
                        className="asistencia-switch"
                        aria-label={`Asistencia de ${estudiante.nombre}`}
                      >
                        <input
                          type="checkbox"
                          checked={presente}
                          onChange={() => alternarAsistencia(estudiante.rut)}
                        />
                        <span className="asistencia-slider" />
                      </label>
                    </div>
                  </li>
                )
              })}
            </ul>
            <button
                type="button"
                className="panel-btn"
                onClick={guardarAsistencia}
                disabled={!hayCambios}
              >
                Guardar
              </button>
          </div>
        </div>
      )}

      {mostrarQrModal && (
        <div className="modal-overlay-qr" onClick={cerrarQrModal}>
          <div className="modal-contenido-qr" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Código QR</h3>
              <button type="button" className="panel-btn panel-btn-sec" onClick={cerrarQrModal}>
                Cerrar
              </button>
            </div>

            <div className="flex justify-center p-4">
              <GeneradorQR tallerId={1} /> 
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
