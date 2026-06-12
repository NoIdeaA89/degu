import type { ReactElement } from "react"
import "./Horario.css"
import HorarioGrid from "./HorarioGrid"
import HorarioFilters from "./HorarioFilters"
import ModalCelda from "./ModalCelda"
import ModalAsistencia from "./ModalAsistencia"
import ModalQr from "./ModalQr"
import useHorario from "./hooks/useHorario"

type HorarioProps = {
  modo?: "completo" | "inicio"
}

export default function Horario({ modo = "completo" }: HorarioProps): ReactElement {
  const soloLectura = modo === "inicio"

  const {
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
    modoEdicion,
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
  } = useHorario()

  return (
    <section className="w-full" >
      <div className="flex justify-center w-full">
        <div className={`horario-layout ${soloLectura ? "horario-layout--solo-grid" : ""}`}>
          <div>
            {!soloLectura && (
              <div className="panel-check" style={{ marginBottom: "10px" }}>
                <span className="panel-check-texto">Modo edición</span>
                <div className="asistencia-switch-wrap">
                  <span className={`asistencia-estado ${modoEdicion ? "activo" : ""}`}>
                    {modoEdicion ? "Activado" : "Desactivado"}
                  </span>
                  <label className="asistencia-switch">
                    <input
                      type="checkbox"
                      checked={modoEdicion}
                      onChange={toggleModoEdicion}
                      aria-label="Activar modo edición del horario"
                    />
                    <span className="asistencia-slider" />
                  </label>
                </div>
              </div>
            )}

            <HorarioGrid
              dias={dias}
              bloques={bloques}
              talleresPorCelda={talleresPorCelda}
              abrirCelda={soloLectura ? () => {} : abrirCelda}
              modoEdicion={!soloLectura && modoEdicion}
              moverTaller={moverTaller}
            />
          </div>

          {!soloLectura && (
            <HorarioFilters
              lugares={lugares}
              lugaresActivos={lugaresActivos}
              toggleLugar={toggleLugar}
              seleccionarTodos={seleccionarTodos}
              limpiarTodos={limpiarTodos}
            />
          )}
        </div>
      </div>

      {!soloLectura && !modoEdicion && celdaSeleccionada && (
        <ModalCelda
          celdaSeleccionada={celdaSeleccionada}
          dias={dias}
          bloques={bloques}
          cerrarModal={cerrarModal}
          abrirTaller={abrirTaller}
        />
      )}

      {!soloLectura && !modoEdicion && tallerSeleccionado && (
        <ModalAsistencia
          tallerSeleccionado={tallerSeleccionado}
          estudiantes={estudiantes}
          asistenciaActual={asistenciaActual ?? {}}
          hayCambios={hayCambios}
          alternarAsistencia={alternarAsistencia}
          marcarTodos={marcarTodos}
          guardarAsistencia={guardarAsistencia}
          cerrarModalAsistencia={cerrarModalAsistencia}
          abrirQrModal={abrirQrModal}
        />
      )}

      {!soloLectura && !modoEdicion && mostrarQrModal && tallerSeleccionado && (
        <ModalQr
          tallerSeleccionado={tallerSeleccionado}
          bloqueText={bloques[tallerSeleccionado.taller.bloque - 1]}
          cerrarQrModal={cerrarQrModal}
        />
      )}
    </section>
  )
}