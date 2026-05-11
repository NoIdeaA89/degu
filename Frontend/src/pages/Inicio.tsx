import { type ReactElement } from "react"
import Navbar from "../components/navbar"
import ListaTalleres from "../components/listaTalleres" // importa tu componente

export default function Inicio(): ReactElement {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <main className="flex flex-col items-center justify-start grow p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Sistema de Gestión Estudiantil
        </h1>
        <p className="text-gray-600 mb-8">
          Bienvenido al panel principal de Galpón Cultural.
        </p>

        {/* Aquí renderizas la lista de talleres */}
        <ListaTalleres />
      </main>
    </div>
  )
}
