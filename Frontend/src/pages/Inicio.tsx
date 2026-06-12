import { type ReactElement } from "react"
import Navbar from "../components/navbar"
import Horario from "../components/Horario/Horario" 
import PanelMetricas from "../components/PanelMetricas" // Importamos el nuevo componente
import { useAuth } from "../context/AuthContext"

export default function Inicio(): ReactElement {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-yellow-400 to-green-500 flex flex-col">
      <Navbar />

      <main className="flex flex-col items-center justify-start grow p-6 bg-white bg-opacity-90 rounded-lg shadow-lg m-6 space-y-8 overflow-y-auto">
        
        {/* Encabezado General */}
        <div className="text-center w-full max-w-6xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Sistema de Gestión Estudiantil
          </h1>
          <p className="text-gray-700">
            Bienvenido al panel principal de Galpón Cultural.
          </p>
        </div>

        {/* Panel Directivo (Delegado al nuevo componente) */}
        {user?.rol === 'Administrador' && (
          <section className="w-full max-w-6xl space-y-6">
            <PanelMetricas />
          </section>
        )}

        {/* Sección del Horario */}
        <section className="w-full max-w-6xl">
          <Horario />
        </section>

      </main>
    </div>
  )
}