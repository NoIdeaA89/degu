import type { CeldaSeleccionada } from "../../interfaces/Horario"
import { crearIdTaller } from "../../utils/Asistencia"

interface Props {
  celdaSeleccionada: CeldaSeleccionada
  dias: string[]
  bloques: string[]
  cerrarModal: () => void
  abrirTaller: (taller: any, idx: number) => void
}

export default function ModalCelda({ celdaSeleccionada, dias, bloques, cerrarModal, abrirTaller }: Props) {
  return (
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
                      aria-label={`Abrir taller ${t.titulo}`}
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
  )
}
