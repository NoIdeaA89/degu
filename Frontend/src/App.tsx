import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import ListaTalleres from './components/listaTalleres';
import FormularioAsistencia from './components/formularioAsistencia';
import Inicio from './pages/Inicio';
import Horario from './pages/Horario';
import Login from './pages/Login';
import { PublicRoute } from './components/PublicRoute';
import BuscadorEstudiantes from './pages/BuscadorEstudiantes';
import Perfil from './pages/Perfil';

function App() {
  return (
    // 1. Envolvemos toda la aplicación con el proveedor de autenticación
    <AuthProvider>
      <Routes>  
        {/* ======================================= */}
        {/* RUTAS PÚBLICAS (No requieren sesión)    */}
        {/* ======================================= */}
        <Route element={<PublicRoute />}>
          <Route path='/' element={<Login />} />
        </Route>

        <Route path='/formularioAsistencia' element={<FormularioAsistencia />} />
        
        {/* ======================================= */}
        {/* RUTAS PRIVADAS (Requieren token válido) */}
        {/* ======================================= */}
        <Route element={<ProtectedRoute />}>
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/talleres' element={<ListaTalleres />} />
          <Route path='/horario' element={<Horario />} />
          <Route path='/estudiantes' element={<BuscadorEstudiantes />} />
          <Route path='/perfil' element={<Perfil />} />
        </Route>

        {/* ======================================= */}
        {/* CATCH-ALL (Página no encontrada)        */}
        {/* ======================================= */}
        <Route path="*" element={<div className="p-10 text-center text-red-500">Página no encontrada (Error 404)</div>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;