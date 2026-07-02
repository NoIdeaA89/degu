import { useEffect, useState } from "react"
import type { ReactElement } from "react"
import { obtenerProfesores } from "../services/profesor.service"
import type { Profesor } from "../services/profesor.service"

interface Props {
  lugares: string[]
  onAgregar: (datos: {
    nombre: string
    descripcion: string
    semestre: string
    lugar: string
    profesorId: number
  }) => void
  onCerrar: () => void
}

export default function ModalAgregarTaller({ lugares, onAgregar, onCerrar }: Props): ReactElement {
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [semestre, setSemestre] = useState("2026-1")
  const [lugar, setLugar] = useState(lugares[0] ?? "")
  const [profesores, setProfesores] = useState<Profesor[]>([])
  const [profesorId, setProfesorId] = useState<number | "">("")
  const [cargandoProfesores, setCargandoProfesores] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const cargar = async () => {
      try {
        const lista = await obtenerProfesores()
        setProfesores(lista)
        if (lista.length > 0) setProfesorId(lista[0].id)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setCargandoProfesores(false)
      }
    }

    cargar()
  }, [])

  const formularioValido =
    titulo.trim() && descripcion.trim() && semestre.trim() && lugar && profesorId !== ""

  const handleSubmit = () => {
    if (!formularioValido) return

    onAgregar({
      nombre: titulo.trim(),
      descripcion: descripcion.trim(),
      semestre: semestre.trim(),
      lugar,
      profesorId: Number(profesorId),
    })

    setTitulo("")
    setDescripcion("")
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

        <textarea
          className="panel-busqueda"
          placeholder="Descripción del taller"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          rows={3}
        />

        <input
          className="panel-busqueda"
          type="text"
          placeholder="Semestre (ej: 2026-1)"
          value={semestre}
          onChange={(e) => setSemestre(e.target.value)}
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

        {cargandoProfesores ? (
          <p className="text-sm text-gray-500">Cargando profesores...</p>
        ) : profesores.length === 0 ? (
          <p className="text-sm text-red-500">
            No hay profesores registrados. Agrega uno antes de crear el taller.
          </p>
        ) : (
          <select
            className="panel-busqueda"
            value={profesorId}
            onChange={(e) => setProfesorId(Number(e.target.value))}
          >
            {profesores.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nombre} {p.apellido}
              </option>
            ))}
          </select>
        )}

        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="asistencia-acciones">
          <button className="panel-btn" onClick={handleSubmit} disabled={!formularioValido}>
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