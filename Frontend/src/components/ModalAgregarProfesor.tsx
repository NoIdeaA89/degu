import { useState } from "react"
import type { ReactElement } from "react"
import { crearProfesor } from "../services/profesor.service"
import type { Profesor } from "../services/profesor.service"

interface Props {
  onCreado: (profesor: Profesor) => void
  onCerrar: () => void
}

export default function ModalAgregarProfesor({ onCreado, onCerrar }: Props): ReactElement {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [rut, setRut] = useState("")
  const [correo, setCorreo] = useState("")
  const [error, setError] = useState("")
  const [guardando, setGuardando] = useState(false)

  const formularioValido =
    nombre.trim() && apellido.trim() && rut.trim() && correo.trim()

  const handleSubmit = async () => {
    if (!formularioValido) return

    setGuardando(true)
    setError("")

    try {
      const nuevoProfesor = await crearProfesor(
        nombre.trim(),
        apellido.trim(),
        rut.trim(),
        correo.trim()
      )
      onCreado(nuevoProfesor)
      onCerrar()
    } catch (err: any) {
      setError(err.message || "Error al crear el profesor")
    } finally {
      setGuardando(false)
    }
  }

  return (
    <div className="modal-overlay-sec" onClick={onCerrar}>
      <div className="modal-contenido-sec" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Agregar profesor</h3>
          <button className="panel-btn panel-btn-sec" onClick={onCerrar}>
            Cerrar
          </button>
        </div>

        <input
          className="panel-busqueda"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          autoFocus
        />

        <input
          className="panel-busqueda"
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />

        <input
          className="panel-busqueda"
          type="text"
          placeholder="RUT (ej: 12.345.678-9)"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
        />

        <input
          className="panel-busqueda"
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="asistencia-acciones">
          <button className="panel-btn" onClick={handleSubmit} disabled={!formularioValido || guardando}>
            {guardando ? "Guardando..." : "Agregar"}
          </button>
          <button className="panel-btn panel-btn-sec" onClick={onCerrar}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}