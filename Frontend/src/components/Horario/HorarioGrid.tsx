import { Fragment } from "react"
import type { Taller } from "../../interfaces/Taller"

interface Props {
  dias: string[]
  bloques: string[]
  talleresPorCelda: Map<string, Taller[]>
  abrirCelda: (dia: number, bloque: number) => void
}

export default function HorarioGrid({ dias, bloques, talleresPorCelda, abrirCelda }: Props) {
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
                className={`celda contenido ${items.length > 0 ? "con-taller" : ""}`}
                role="button"
                tabIndex={0}
                aria-label={`Ver talleres del bloque ${bloque} del día ${dia}`}
                onClick={() => abrirCelda(diaNum, bloqueNum)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    abrirCelda(diaNum, bloqueNum)
                  }
                }}
              >
                {items.map((t, idx) => (
                  <span key={`${t.titulo}-${idx}`} className="contenido-item">
                    {t.titulo}
                  </span>
                ))}
              </div>
            )
          })}
        </Fragment>
      ))}
    </div>
  )
}
