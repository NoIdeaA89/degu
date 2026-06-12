interface Props {
  lugares: string[]
  lugaresActivos: string[]
  toggleLugar: (lugar: string) => void
  seleccionarTodos: () => void
  limpiarTodos: () => void
}

export default function FiltroLugares({ lugares, lugaresActivos, toggleLugar, seleccionarTodos, limpiarTodos }: Props) {
  return (
    <aside className="panel-detalle">
      <div className="panel-header"><h3>Filtros</h3></div>
      <div className="panel-acciones">
        <button onClick={seleccionarTodos}>Seleccionar todos</button>
        <button onClick={limpiarTodos}>Limpiar</button>
      </div>
      <div className="panel-lista">
        {lugares.map((lugar) => {
          const checked = lugaresActivos.includes(lugar)
          return (
            <label key={lugar} className={checked ? "panel-check-activo" : "panel-check"}>
              <input type="checkbox" checked={checked} onChange={() => toggleLugar(lugar)} />
              <span>{lugar}</span>
            </label>
          )
        })}
      </div>
    </aside>
  )
}
