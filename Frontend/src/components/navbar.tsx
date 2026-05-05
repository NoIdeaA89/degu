// components/Navbar.tsx
import { Link } from "react-router-dom"
import { type ReactElement } from "react"

export default function Navbar(): ReactElement {
  return (
    <nav className="w-full bg-gray-200 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800">Galpón Cultural</h1>
        <div className="flex gap-6">
          <Link 
            to="/inicio" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Inicio
          </Link>
          <Link 
            to="/horario" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Horario
          </Link>
          <Link 
            to="/perfil" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Perfil
          </Link>
        </div>
      </div>
    </nav>
  )
}
