import type { ReactElement } from "react"
import { useState } from "react"
import "./Horario.css"
import HorarioGrid from "./HorarioGrid"
import HorarioFilters from "./HorarioFilters"
import ModalCelda from "../modales/ModalCelda"
import ModalAsistencia from "../modales/ModalAsistencia"
import ModalQr from "../modales/ModalQr"
import ModalAgregarTaller from "../modales/ModalAgregarTaller"
import PanelTalleresSinAsignar from "../PanelTalleresSinAsignar"
import useHorario from "./hooks/useHorario"
import ModalEliminarTaller from "../modales/ModalEliminarTaller"


type HorarioProps = {
  modo?: "completo" | "inicio"
}

export default function Horario({ modo = "completo" }: HorarioProps): ReactElement {
  const soloLectura = modo === "inicio"
  const [mostrarModalTaller, setMostrarModalTaller] = useState(false)
  const [tallerParaBorrar, setTallerParaBorrar] = useState<any | null>(null)
  const [eliminando, setEliminando] = useState(false)

  const {
  dias,
  bloques,
  lugaresActivos,
  qrToken, 
  talleresPorCelda,
  talleresSinAsignar,
  agregarTaller,
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
  archivarTallerAPI
} = useHorario()

const handleConfirmarEliminar = async () => {
    if (!tallerParaBorrar) return;
    setEliminando(true);
    try {
      // Llama a la API (que por debajo hace el PATCH para archivar y filtra el estado)
      await archivarTallerAPI(tallerParaBorrar.id);
      
      // Si todo sale bien, cerramos el modal
      setTallerParaBorrar(null);
    } catch (error) {
      alert("Error al intentar eliminar el taller.");
    } finally {
      setEliminando(false);
    }
  };

  return (
    <section className="w-full my-8">
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

          {!soloLectura && !modoEdicion && (
            <HorarioFilters
              lugaresActivos={lugaresActivos}
              toggleLugar={toggleLugar}
              seleccionarTodos={seleccionarTodos}
              limpiarTodos={limpiarTodos}
            />
          )}

          {!soloLectura && modoEdicion && (
            <PanelTalleresSinAsignar
              talleres={talleresSinAsignar}
              onAbrirModal={() => setMostrarModalTaller(true)}
              onDesasignar={desasignarTaller}
              onSolicitarEliminar={(taller) => setTallerParaBorrar(taller)}
            />
          )}
        </div>
      </div>

      {!soloLectura && mostrarModalTaller && (
        <ModalAgregarTaller
         
          onAgregar={agregarTaller}
          onCerrar={() => setMostrarModalTaller(false)}
        />
      )}

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
          cargando={cargandoAsistencia}
          error={errorAsistencia}
          alternarAsistencia={alternarAsistencia}
          marcarTodos={marcarTodos}
          guardarAsistencia={guardarAsistencia}
          cerrarModalAsistencia={cerrarModalAsistencia}
          abrirQrModal={abrirQrModal}
          inscribirEstudiante={inscribirEstudiante}
        />
      )}

      {!soloLectura && !modoEdicion && mostrarQrModal && tallerSeleccionado && (
        <ModalQr
          tallerSeleccionado={tallerSeleccionado}
          bloqueText={tallerSeleccionado.taller.bloque}
          cerrarQrModal={cerrarQrModal}
          qrToken={qrToken}   
        />
      )}

      {!soloLectura && modoEdicion && tallerParaBorrar && (
        <ModalEliminarTaller
          taller={tallerParaBorrar}
          cargando={eliminando}
          onCerrar={() => setTallerParaBorrar(null)}
          onConfirmar={handleConfirmarEliminar} // <-- Ejecuta la eliminación y libera el bloque
        />
      )}
      
    </section>
  )
}