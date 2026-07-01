import { Fragment } from "react"
import type { TallerUI } from "../../interfaces/Taller"

interface Props {
  dias: string[]
  bloques: string[]
  talleresPorCelda: Map<string, TallerUI[]>
  abrirCelda: (dia: number, bloque: number) => void
  modoEdicion?: boolean
  moverTaller?: (origen: TallerUI, nuevoDia: number, nuevoBloque: number) => void
}

export default function HorarioGrid({
  dias,
  bloques,
  talleresPorCelda,
  abrirCelda,
  modoEdicion = false,
  moverTaller
}: Props) {
  return (
    <div className="malla">
      <div className="celda esquina" />
      {dias.map((dia) => (
        <div key={`header-${dia}`} className="celda encabezado-dia">
          {dia}
        </div>
      ))}
      {bloques.map((bloque, bloqueIndex) => (
        <Fragment key={`fila-${bloque}`}>
          <div className="celda encabezado-bloque">{bloque}</div>
          {dias.map((dia, diaIndex) => {
            const bloqueNum = bloqueIndex + 1
            const diaNum = diaIndex + 1
            const key = `${bloqueNum}-${diaNum}`
            const items = talleresPorCelda.get(key) ?? []

            return (
              <div
                key={key}
                className={`celda contenido ${items.length > 0 ? "con-taller" : ""} ${modoEdicion ? "celda-editable" : ""}`}
                role={modoEdicion ? undefined : "button"}
                tabIndex={modoEdicion ? undefined : 0}
                aria-label={modoEdicion ? undefined : `Ver talleres del bloque ${bloque} del día ${dia}`}
                onClick={() => abrirCelda(diaNum, bloqueNum)}
                onKeyDown={(event) => {
                  if (modoEdicion) return
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    abrirCelda(diaNum, bloqueNum)
                  }
                }}
                onDragOver={(event) => {
                  if (!modoEdicion) return
                  event.preventDefault()
                  event.currentTarget.classList.add("drag-over")
                }}
                onDragLeave={(event) => {
                  if (!modoEdicion) return
                  event.currentTarget.classList.remove("drag-over")
                }}
                onDrop={(event) => {
                  if (!modoEdicion || !moverTaller) return
                  event.preventDefault()
                  event.currentTarget.classList.remove("drag-over")

                  const data = event.dataTransfer.getData("text/plain")
                  if (!data) return

                  const origen: TallerUI = JSON.parse(data)
                  if (origen.dia === diaNum && origen.bloque === bloqueNum) return

                  moverTaller(origen, diaNum, bloqueNum)
                }}
              >
                <div className="contenido-lista">
                  {items.map((t, idx) => (
                    <span
                      key={`${t.nombre}-${idx}`}
                      className="contenido-item"
                      draggable={modoEdicion}
                      onDragStart={(event) => {
                        if (!modoEdicion) return
                        event.dataTransfer.setData("text/plain", JSON.stringify(t))
                        event.dataTransfer.effectAllowed = "move"
                      }}
                    >
                      {t.nombre}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </Fragment>
      ))}
    </div>
  )
}