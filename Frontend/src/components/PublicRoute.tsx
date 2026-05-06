import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const PublicRoute = () => {
  const { user, loading } = useAuth();

  // Mientras verifica el localStorage, mostramos algo genérico
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  }

  // Si YA hay un usuario logueado, le prohibimos ver el Login y lo mandamos al panel
  if (user) {
    return <Navigate to="/inicio" replace />;
  }

  // Si NO hay usuario, lo dejamos pasar a ver la ruta solicitada (el Login)
  return <Outlet />;
};