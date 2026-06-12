import type { ReactElement } from "react"
import "./Horario.css"
import HorarioGrid from "./HorarioGrid"
import HorarioFilters from "./HorarioFilters"
import ModalCelda from "./ModalCelda"
import ModalAsistencia from "./ModalAsistencia"
import ModalQr from "./ModalQr"
import useHorario from "./hooks/useHorario"

export default function Horario(): ReactElement {
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
    <section>
      <div className="flex justify-center">
        <div className="horario-layout">
          <HorarioGrid dias={dias} bloques={bloques} talleresPorCelda={talleresPorCelda} abrirCelda={abrirCelda} />

          <HorarioFilters
            lugares={lugares}
            lugaresActivos={lugaresActivos}
            toggleLugar={toggleLugar}
            seleccionarTodos={seleccionarTodos}
            limpiarTodos={limpiarTodos}
          />
        </div>
      </div>

      {celdaSeleccionada && (
        <ModalCelda
          celdaSeleccionada={celdaSeleccionada}
          dias={dias}
          bloques={bloques}
          cerrarModal={cerrarModal}
          abrirTaller={abrirTaller}
        />
      )}

      {tallerSeleccionado && (
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

      {mostrarQrModal && tallerSeleccionado && (
        <ModalQr
          tallerSeleccionado={tallerSeleccionado}
          bloqueText={tallerSeleccionado.taller.horario}
          cerrarQrModal={cerrarQrModal}
        />
      )}
    </section>
  )
}
