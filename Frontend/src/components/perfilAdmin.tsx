import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { transferirMando } from '../services/admin.service';
import Navbar from '../components/navbar';
import { AgregarProfesor } from './ModalAgregarProfesor';
import { AgregarEstudiante } from './ModalAgregarEstudiante';

export const PerfilAdmin = () => {
  const navigate = useNavigate();
  // El objeto 'user' ahora debería contener rut y correo extraídos de tu token JWT
  const { user, logout } = useAuth(); 
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rutNuevoAdmin, setRutNuevoAdmin] = useState('');
  const [palabraConfirmacion, setPalabraConfirmacion] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState<string | null>(null);

  const handleTransferirMando = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMensaje(null);

    try {
      await transferirMando({
        rutNuevoAdmin,
        palabraConfirmacion
      });

      logout(); 
      
      alert('Traspaso exitoso. Su sesión ha sido cerrada.');
      navigate('/login', { replace: true });

    } catch (error: any) {
      setErrorMensaje(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6 mt-8 space-y-8">
        
        {/* TARJETA DE PERFIL CON DATOS DE PRISMA */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between border-b pb-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Perfil de Sistema</h2>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              {user.rol}
            </span>
          </div>
          
          {/* Cuadrícula ampliada para mostrar todos los datos de tu modelo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <p className="text-sm text-gray-500 font-medium">Nombre Completo</p>
              <p className="text-lg font-semibold">{user.nombre} {user.apellido}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 font-medium">RUT</p>
              <p className="text-lg font-semibold">{user.rut}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 font-medium">Correo Electrónico</p>
              <p className="text-lg font-semibold">{user.correo}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 font-medium">ID de Usuario</p>
              <p className="text-lg font-semibold">#{user.id}</p>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 p-4 rounded-md border border-gray-100">
            <h4 className="font-semibold text-gray-700 mb-2">Permisos del Galpón Cultural</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Gestión completa de estudiantes y profesores.</li>
              <li>Apertura y cierre de talleres.</li>
              <li>Acceso al historial histórico de asistencias.</li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row gap-3 sm:justify-between">
            <div className="flex gap-3 flex-wrap">
              <AgregarProfesor />
              <AgregarEstudiante />
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="text-red-600 hover:text-red-800 text-sm font-medium hover:underline transition-colors sm:self-center"
            >
              Transferir propiedad del sistema
            </button>
          </div>
        </div>

        {/* MODAL DE ADVERTENCIA */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
              
              <div className="flex items-center gap-3 mb-4 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 className="text-xl font-bold">Transferencia de Propiedad</h3>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded p-4 mb-6">
                <p className="text-red-800 font-semibold mb-2 text-sm">Riesgos de esta acción:</p>
                <ul className="list-disc list-inside text-xs text-red-700 space-y-1">
                  <li>Esta acción es <strong>irreversible</strong>. No podrás deshacerla.</li>
                  <li>Perderás inmediatamente tu acceso a este panel y a la gestión del Galpón.</li>
                  <li>Tu cuenta pasará a tener permisos básicos (Estudiante).</li>
                </ul>
              </div>

              {errorMensaje && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded border border-red-200">
                  {errorMensaje}
                </div>
              )}

              <form onSubmit={handleTransferirMando} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    RUT del Nuevo Administrador
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: 12.345.678-9"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
                    value={rutNuevoAdmin}
                    onChange={(e) => setRutNuevoAdmin(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Para confirmar, escribe CONFIRMAR
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-red-500 focus:border-red-500"
                    value={palabraConfirmacion}
                    onChange={(e) => setPalabraConfirmacion(e.target.value)}
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setErrorMensaje(null);
                      setPalabraConfirmacion('');
                    }}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                    disabled={isLoading}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={palabraConfirmacion !== 'CONFIRMAR' || isLoading}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
                  >
                    {isLoading ? 'Procesando...' : 'Estoy seguro, Transferir'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};