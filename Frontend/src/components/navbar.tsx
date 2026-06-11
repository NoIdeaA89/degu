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
    <nav className="w-full bg-gray-200 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800">Galpón Cultural</h1>
        
        <div className="flex items-center gap-6">
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
            to="/estudiantes" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Estudiantes
          </Link>

          {user && (
            <div className="flex items-center gap-4 ml-2 border-l border-gray-400 pl-6">
              
              {/* Lógica Condicional: Link si es Admin, Texto normal si no lo es */}
              {user.rol === 'Administrador' ? (
                <Link 
                  to="/admin/perfil" 
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline hidden sm:block transition-colors cursor-pointer"
                  title="Ir al panel de administración"
                >
                  Hola, {user.nombre} (Admin)
                </Link>
              ) : (
                <span className="text-sm font-semibold text-gray-700 hidden sm:block">
                  Hola, {user.nombre}
                </span>
              )}
              
              <button 
                onClick={handleLogout}
                className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
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