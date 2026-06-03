// components/Navbar.tsx
import { Link, useNavigate } from "react-router-dom"
import { type ReactElement } from "react"
import { useAuth } from "../context/AuthContext" // Asegúrate de que la ruta sea correcta

export default function Navbar(): ReactElement {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirige al login
  };

  return (
    <nav className="w-full bg-[#111111] shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold text-white">Galpón Cultural</h1>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/inicio" 
            className="text-white hover:text-white/80 font-medium transition-colors"
          >
            Inicio
          </Link>
          <Link 
            to="/horario" 
            className="text-white hover:text-white/80 font-medium transition-colors"
          >
            Horario
          </Link>
          <Link 
            to="/estudiantes" 
            className="text-white hover:text-white/80 font-medium transition-colors"
          >
            Estudiantes
          </Link>

          {/* Sección de Sesión (Solo visible si el usuario está logueado) */}
          {user && (
            <div className="flex items-center gap-4 ml-2 border-l border-white/20 pl-6">
              {/* Opcional: Mostrar el nombre del usuario */}
              <span className="text-sm font-semibold text-white hidden sm:block">
                Hola, {user.nombre}
              </span>
              
              <button 
                onClick={handleLogout}
                className="text-sm font-medium text-[#f50d57] hover:text-[#ff1c72] transition-colors"
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}