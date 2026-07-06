import React, { useState } from 'react';
import ExcelJS from 'exceljs';
import { registrarUsuario } from '../services/estudiantes.service';
import { obtenerTextoCelda } from '../utils/excel.utils';

type EstudianteExcelRow = {
  nombre: string;
  apellido: string;
  rut: string;
  correo: string;
  password: string;
};

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
  const [filasPreview, setFilasPreview] = useState<EstudianteExcelRow[]>([]);
  const [mostrarPreview, setMostrarPreview] = useState(false);

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

  const handleImportarExcel = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = event.target.files?.[0];
    if (!archivo) return;
    setIsLoading(true);
    setErrorMensaje(null);
    setExitoMensaje(null);
    try {
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(await archivo.arrayBuffer());
      const worksheet = workbook.worksheets[0];
      if (!worksheet) throw new Error('El archivo no tiene hojas válidas.');

      const filas: EstudianteExcelRow[] = [];
      worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return;
        filas.push({
          nombre: obtenerTextoCelda(row.getCell(1).value),
          apellido: obtenerTextoCelda(row.getCell(2).value),
          rut: obtenerTextoCelda(row.getCell(3).value),
          correo: obtenerTextoCelda(row.getCell(4).value).toLowerCase(),
          password: obtenerTextoCelda(row.getCell(5).value),
        });
      });

      if (filas.length === 0) throw new Error('El archivo no tiene filas de datos.');

      const filasInvalidas = filas.filter(
        (f) => !f.nombre || !f.apellido || !f.rut || !f.correo || !f.password
      );
      if (filasInvalidas.length > 0) {
        throw new Error(`Hay ${filasInvalidas.length} fila(s) incompleta(s) en el Excel.`);
      }

      setFilasPreview(filas);
      setMostrarPreview(true);
    } catch (error: any) {
      setErrorMensaje(error.message || 'Error al leer el archivo Excel.');
    } finally {
      setIsLoading(false);
      event.target.value = '';
    }
  };

  const handleConfirmarImportacion = async () => {
    setIsLoading(true);
    setErrorMensaje(null);
    try {
      for (const fila of filasPreview) {
        await registrarUsuario({ ...fila, rol: 'Estudiante' });
      }
      setExitoMensaje(`Se importaron ${filasPreview.length} estudiantes correctamente.`);
      setMostrarPreview(false);
      setFilasPreview([]);
    } catch (error: any) {
      setErrorMensaje(error.message || 'Error al importar los estudiantes.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelarImportacion = () => {
    setMostrarPreview(false);
    setFilasPreview([]);
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 gap-4">
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
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
            <div className="flex items-center gap-3 mb-4 text-emerald-600">
              <h3 className="text-xl font-bold">Agregar desde excel</h3>
            </div>
            
            {!mostrarPreview && (
              <label className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium cursor-pointer">
                Examinar...
                <input
                  type="file"
                  accept=".xlsx"
                  onChange={handleImportarExcel}
                  className="hidden"
                  disabled={isLoading}
                />
              </label>
            )}

            {mostrarPreview && (
              <div className="mt-2">
                <p className="text-sm text-gray-600 mb-2">
                  Se encontraron <strong>{filasPreview.length}</strong> estudiantes. Revisa antes de confirmar:
                </p>

                <div className="max-h-64 overflow-y-auto border rounded mb-4">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-100 sticky top-0">
                      <tr>
                        <th className="px-2 py-1">Nombre</th>
                        <th className="px-2 py-1">Apellido</th>
                        <th className="px-2 py-1">RUT</th>
                        <th className="px-2 py-1">Correo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filasPreview.map((fila, i) => (
                        <tr key={i} className="border-t">
                          <td className="px-2 py-1">{fila.nombre}</td>
                          <td className="px-2 py-1">{fila.apellido}</td>
                          <td className="px-2 py-1">{fila.rut}</td>
                          <td className="px-2 py-1">{fila.correo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                    
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={handleCancelarImportacion}
                    disabled={isLoading}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-all font-medium"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleConfirmarImportacion}
                    disabled={isLoading}
                    className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 disabled:opacity-50 transition-all font-medium"
                  >
                    {isLoading ? 'Importando...' : 'Confirmar e importar'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};