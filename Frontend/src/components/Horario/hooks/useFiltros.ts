import { useEffect, useState } from "react"

/**
 * Hook para gestionar filtros de lugares
 */
export function useFiltros(lugares: string[]) {
  const [lugaresActivos, setLugaresActivos] = useState<string[]>(lugares)

  useEffect(() => {
    setLugaresActivos((prev) => {
      const nuevos = lugares.filter((l) => !prev.includes(l) && !prev.some((p) => !lugares.includes(p)))
      if (nuevos.length === 0) return prev
      return [...prev, ...nuevos]
    })
  }, [lugares])

  const toggleLugar = (lugar: string) => {
    setLugaresActivos((prev) =>
      prev.includes(lugar) ? prev.filter((item) => item !== lugar) : [...prev, lugar]
    )
  }

  const seleccionarTodos = () => setLugaresActivos(lugares)
  const limpiarTodos = () => setLugaresActivos([])

  return {
    lugaresActivos,
    toggleLugar,
    seleccionarTodos,
    limpiarTodos,
  }
}
