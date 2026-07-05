import { useEffect, useState } from "react"
import type { ReactElement } from "react"
import { lugares } from "../constants/Lugares"
import { obtenerProfesores } from "../services/profesor.service"
import type { Profesor } from "../interfaces/Profesor"

interface Props {
  onAgregar: (titulo: string, lugar: string, profesorId: number) => void
  onCerrar: () => void
}

export default function ModalAgregarTaller({
  onAgregar,
  onCerrar,
}: Props): ReactElement {
  const [titulo, setTitulo] = useState("")
  const [lugar, setLugar] = useState(lugares[0] ?? "")
  const [profesores, setProfesores] = useState<Profesor[]>([])
  const [profesorId, setProfesorId] = useState<number | "">("")
  const [cargandoProfesores, setCargandoProfesores] = useState(true)

  useEffect(() => {
    const cargar = async () => {
      try {
        const lista = await obtenerProfesores()
        setProfesores(lista)
        if (lista.length > 0) setProfesorId(lista[0].id)
      } catch (err) {
        console.error("Error al cargar profesores:", err)
      } finally {
        setCargandoProfesores(false)
      }
    }
    cargar()
  }, [])

  const handleSubmit = () => {
    if (!titulo.trim() || !lugar || !profesorId) return
    onAgregar(titulo, lugar, Number(profesorId))
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
            <option key={l} value={l}>{l}</option>
          ))}
        </select>

        <select
          className="panel-busqueda"
          value={profesorId}
          onChange={(e) => setProfesorId(Number(e.target.value))}
          disabled={cargandoProfesores || profesores.length === 0}
        >
          {cargandoProfesores && <option value="">Cargando profesores...</option>}
          {!cargandoProfesores && profesores.length === 0 && (
            <option value="">No hay profesores disponibles</option>
          )}
          {profesores.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nombre} {p.apellido}
            </option>
          ))}
        </select>

        <div className="asistencia-acciones">
          <button
            className="panel-btn"
            onClick={handleSubmit}
            disabled={!titulo.trim() || !lugar || !profesorId}
          >
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