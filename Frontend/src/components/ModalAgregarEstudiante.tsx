import React, { useState } from 'react';
import { registrarUsuario } from '../services/estudiantes.service';

export const AgregarEstudiante = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [rut, setRut] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState<string | null>(null);
  const [exitoMensaje, setExitoMensaje] = useState<string | null>(null);

  const resetForm = () => {
    setNombre('');
    setApellido('');
    setRut('');
    setCorreo('');
    setPassword('');
    setConfirmPassword('');
    setErrorMensaje(null);
  };

  const handleAgregarEstudiante = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMensaje(null);
    setExitoMensaje(null);

    if (password !== confirmPassword) {
      setIsLoading(false);
      setErrorMensaje('Las contraseñas no coinciden.');
      return;
    }

    try {
      await registrarUsuario({
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        rut: rut.trim(),
        correo: correo.trim().toLowerCase(),
        password,
        rol: 'Estudiante',
      });

      setExitoMensaje('Estudiante agregado exitosamente.');
      resetForm();

      setTimeout(() => {
        setIsModalOpen(false);
        setExitoMensaje(null);
      }, 1500);
    } catch (error: any) {
      setErrorMensaje(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="text-red-600 hover:text-red-800 text-sm font-medium hover:underline transition-colors"
      >
        Agregar estudiante
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
            <div className="flex items-center gap-3 mb-4 text-emerald-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <h3 className="text-xl font-bold">Agregar estudiante</h3>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Se creará con rol Estudiante usando el registro del sistema.
            </p>

            {errorMensaje && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded border border-red-200">
                {errorMensaje}
              </div>
            )}

            {exitoMensaje && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 text-sm rounded border border-green-200">
                {exitoMensaje}
              </div>
            )}

            <form onSubmit={handleAgregarEstudiante} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Apellido
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    RUT
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="12.345.678-9"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={rut}
                    onChange={(e) => setRut(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Correo
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contraseña temporal
                  </label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    resetForm();
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                  disabled={isLoading}
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
                >
                  {isLoading ? 'Guardando...' : 'Agregar estudiante'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};