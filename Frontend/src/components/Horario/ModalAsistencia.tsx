import type { Estudiante } from "../../interfaces/Estudiante"
import type { TallerSeleccionado } from "../../interfaces/Horario"

interface Props {
  tallerSeleccionado: TallerSeleccionado
  estudiantes: Estudiante[]
  asistenciaActual: Record<string, boolean>
  hayCambios: boolean
  cargando?: boolean
  error?: string | null
  alternarAsistencia: (rut: string) => void
  marcarTodos: (presente: boolean) => void
  guardarAsistencia: () => void
  cerrarModalAsistencia: () => void
  abrirQrModal: () => void
}

export default function ModalAsistencia({
  tallerSeleccionado,
  estudiantes,
  asistenciaActual,
  hayCambios,
  cargando = false,
  error = null,
  alternarAsistencia,
  marcarTodos,
  guardarAsistencia,
  cerrarModalAsistencia,
  abrirQrModal
}: Props) {
  return (
    <div className="modal-overlay-sec" onClick={cerrarModalAsistencia}>
      <div className="modal-contenido-sec" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{tallerSeleccionado.taller.nombre}</h3>
          <button type="button" className="panel-btn panel-btn-sec" onClick={cerrarModalAsistencia}>
            Cerrar
          </button>
        </div>

        {cargando && <p className="panel-subtitulo">Cargando estudiantes...</p>}
        {error && <p className="panel-subtitulo" style={{ color: "red" }}>{error}</p>}

        {!cargando && !error && (
          <>
            <div className="asistencia-acciones">
              <button type="button" className="panel-btn" onClick={() => marcarTodos(true)}>
                Todos presentes
              </button>
              <button type="button" className="panel-btn panel-btn-sec" onClick={() => marcarTodos(false)}>
                Todos ausentes
              </button>
              <button type="button" className="panel-btn panel-btn-sec" onClick={abrirQrModal}>
                Ver código QR
              </button>
            </div>

            {estudiantes.length === 0 && (
              <p className="panel-subtitulo">No hay estudiantes inscritos en este taller.</p>
            )}

            <ul className="asistencia-lista">
              {estudiantes.map((estudiante) => {
                const presente = asistenciaActual[estudiante.rut] ?? false

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

                      <label className="asistencia-switch" aria-label={`Cambiar asistencia de ${estudiante.nombre}`}>
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

            <button type="button" className="panel-btn" onClick={guardarAsistencia} disabled={!hayCambios}>
              Guardar
            </button>
          </>
        )}
      </div>
    </div>
  )
}