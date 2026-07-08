import { useState } from "react"
import type { ReactElement } from "react"
import type { TallerUI } from "../interfaces/Taller"

interface Props {
  talleres: TallerUI[]
  onAbrirModal: () => void
  onDesasignar: (origen: TallerUI) => void
  onSolicitarEliminar: (taller: TallerUI) => void
}

export default function PanelTalleresSinAsignar({ talleres, onAbrirModal, onDesasignar , onSolicitarEliminar}: Props): ReactElement {
  const [dragOver, setDragOver] = useState(false)
  const [isDraggingOverTrash, setIsDraggingOverTrash] = useState(false)

  return (
    <aside
      className={`panel-detalle ${dragOver ? "activa" : ""}`}
      onDragOver={(event) => {
        event.preventDefault()
        setDragOver(true)
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(event) => {
        event.preventDefault()
        setDragOver(false)

        const data = event.dataTransfer.getData("text/plain")
        if (!data) return

        const origen: TallerUI = JSON.parse(data)
        if (origen.dia === 0 && origen.bloque === 0) return

        onDesasignar(origen)
      }}
    >
      <div className="panel-header">
        <h3>Talleres por asignar</h3>
        <p className="panel-subtitulo">Arrastra un taller hacia una celda del horario, o suelta uno aquí para quitarlo del horario</p>
      </div>

      <div className="panel-acciones">
        <button type="button" className="panel-btn" onClick={onAbrirModal} style={{ gridColumn: "1 / -1" }}>
          + Agregar taller
        </button>
      </div>

      {/* --- ZONA DE PAPELERA --- */}
      <div
        className={`mx-5 my-4 p-5 rounded-lg border-2 border-dashed flex flex-col items-center justify-center transition-all duration-200 ease-in-out cursor-pointer
          ${isDraggingOverTrash 
            ? "bg-red-100 border-red-500 text-red-700 scale-[1.02]" 
            : "bg-gray-50 border-gray-300 text-gray-500 hover:bg-gray-100"
          }
        `}
        onDragOver={(event) => {
          event.preventDefault()
          event.stopPropagation()
          setIsDraggingOverTrash(true)
        }}
        onDragLeave={(event) => {
          event.preventDefault()
          event.stopPropagation()
          setIsDraggingOverTrash(false)
        }}
        onDrop={(event) => {
          event.preventDefault()
          event.stopPropagation()
          setIsDraggingOverTrash(false)

          const data = event.dataTransfer.getData("text/plain")
          if (!data) return

          const tallerSeleccionado: TallerUI = JSON.parse(data)
          onSolicitarEliminar(tallerSeleccionado)
        }}
      >
        <span className="text-3xl mb-2">🗑️</span>
        <span className="text-sm font-medium">
          Arrastra aquí para eliminar
        </span>
      </div>
      {/* -------------------------------------- */}

      <div className="panel-lista">
        {talleres.length === 0 && (
          <p className="panel-subtitulo">No hay talleres pendientes por asignar.</p>
        )}

        {talleres.map((t, idx) => (
          <div
            key={`${t.nombre}-${t.lugar}-${idx}`}
            className="panel-card"
            draggable
            onDragStart={(event) => {
              event.dataTransfer.setData("text/plain", JSON.stringify(t))
              event.dataTransfer.effectAllowed = "move"
            }}
            style={{ cursor: "grab" }}
          >
            <div className="panel-card-titulo">{t.nombre}</div>
            <div className="panel-card-meta">{t.lugar}</div>
          </div>
        ))}
      </div>
    </aside>
  )
}