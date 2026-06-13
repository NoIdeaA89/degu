import { useState } from "react"
import type { ReactElement } from "react"

interface Props {
  lugares: string[]
  onAgregar: (titulo: string, lugar: string) => void
  onCerrar: () => void
}

export default function ModalAgregarTaller({ lugares, onAgregar, onCerrar }: Props): ReactElement {
  const [titulo, setTitulo] = useState("")
  const [lugar, setLugar] = useState(lugares[0] ?? "")

  const handleSubmit = () => {
    if (!titulo.trim() || !lugar) return
    onAgregar(titulo, lugar)
    setTitulo("")
    onCerrar()
  }

  return (
    <div className="modal-overlay-sec" onClick={onCerrar}>
      <div className="modal-contenido-sec" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Agregar taller</h3>
          <button className="panel-btn panel-btn-sec" onClick={onCerrar}>
            Cerrar
          </button>
        </div>

        <input
          className="panel-busqueda"
          type="text"
          placeholder="Nombre del taller"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          autoFocus
        />

        <select
          className="panel-busqueda"
          value={lugar}
          onChange={(e) => setLugar(e.target.value)}
        >
          {lugares.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>

        <div className="asistencia-acciones">
          <button className="panel-btn" onClick={handleSubmit} disabled={!titulo.trim() || !lugar}>
            Agregar
          </button>
          <button className="panel-btn panel-btn-sec" onClick={onCerrar}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}