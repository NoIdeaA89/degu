import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface GeneradorQRProps {
  tallerId: number;
}

export default function GeneradorQR({ tallerId }: GeneradorQRProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bloque, setBloque] = useState('');
  const [qrUrl, setQrUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerarQR = async () => {
    if (!bloque) {
      setError('Por favor selecciona un bloque horario.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3000/api/sesiones/generar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tallerId, bloque }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al generar el QR');
      }

      setQrUrl(data.data.url);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const cerrarModal = () => {
    setIsModalOpen(false);
    setQrUrl(null);
    setBloque('');
    setError('');
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white text-center font-semibold rounded-lg shadow-md hover:bg-blue-700 transition w-full"
      >
        Generar QR de Asistencia
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm mx-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Iniciar Sesión de Clases
            </h2>

            {!qrUrl ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bloque Horario
                  </label>
                  <select
                    value={bloque}
                    onChange={(e) => setBloque(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-black"
                  >
                    <option value="">Selecciona un bloque...</option>
                    <option value="A">Bloque A</option>
                    <option value="B">Bloque B</option>
                    <option value="C">Bloque C</option>
                    <option value="C2">Bloque C2</option>
                    <option value="D">Bloque D</option>
                    <option value="E">Bloque E</option>
                    <option value="F">Bloque F</option>
                  </select>
                </div>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    onClick={cerrarModal}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleGenerarQR}
                    disabled={isLoading}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                  >
                    {isLoading ? 'Generando...' : 'Crear QR'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-4">
                <p className="text-sm text-gray-600 text-center">
                  Escanea este código para ir al formulario de asistencia. Expira en 5 minutos.
                </p>
                <div className="p-4 bg-white border-4 border-blue-100 rounded-xl">
                  <QRCodeSVG value={qrUrl} size={200} level="H" />
                </div>
                <button
                  onClick={cerrarModal}
                  className="w-full mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  Cerrar Ventana
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}