import type { ReactElement } from "react"
import { lugares } from "../../constants/Lugares"

interface Props {
  lugaresActivos: string[]
  toggleLugar: (lugar: string) => void
  seleccionarTodos: () => void
  limpiarTodos: () => void
}

export default function HorarioFilters({

  lugaresActivos,
  toggleLugar,
  seleccionarTodos,
  limpiarTodos
}: Props): ReactElement {
  return (
    <aside className="panel-detalle">
      <div className="panel-header">
        <h3>Filtros</h3>
      </div>

      <div className="panel-acciones">
        <button type="button" className="panel-btn" onClick={seleccionarTodos}>
          Seleccionar todos
        </button>
        <button type="button" className="panel-btn panel-btn-sec" onClick={limpiarTodos}>
          Limpiar
        </button>
      </div>

      <div className="panel-lista">
        {lugares.map((lugar) => {
          const checked = lugaresActivos.includes(lugar)

          return (
            <label key={lugar} className={`panel-check ${checked ? "panel-check-activo" : ""}`}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleLugar(lugar)}
              />
              <span className="panel-check-texto">{lugar}</span>
            </label>
          )
        })}
      </div>
    </aside>
  )
}
