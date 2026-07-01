import type { ReactElement } from "react"
import type { TallerSeleccionado } from "../../interfaces/Horario"
import GeneradorQR from "../generadorQR"

interface Props {
  tallerSeleccionado: TallerSeleccionado
  bloqueText?: number
  cerrarQrModal: () => void
}

export default function ModalQr({ tallerSeleccionado, bloqueText, cerrarQrModal }: Props): ReactElement {
  return (
    <div className="modal-overlay-qr" onClick={cerrarQrModal}>
      <div className="modal-contenido-qr" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Código QR</h3>
          <button type="button" className="panel-btn panel-btn-sec" onClick={cerrarQrModal}>
            Cerrar
          </button>
        </div>

        <div className="flex justify-center p-4">
          <GeneradorQR
            tallerId={Number(tallerSeleccionado.id)}
            nombreTaller={tallerSeleccionado.taller.nombre}
            bloque={bloqueText}
          />
        </div>
      </div>
    </div>
  )
}
