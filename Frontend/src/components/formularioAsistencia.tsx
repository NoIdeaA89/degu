import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const AsistenciaForm = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [rut, setRut] = useState('');
  const [satisfaccion, setSatisfaccion] = useState<number | null>(null);
  const [comentarios, setComentarios] = useState(''); // <-- Nuevo estado para los comentarios
  const [enviado, setEnviado] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!token) {
      setError('El código QR no es válido o ha expirado.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const baseUrl = import.meta.env.VITE_API_URL;
      
      const response = await fetch(`${baseUrl}/asistencia/registrar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          rut, 
          qrToken: token, 
          satisfaccion,
          comentarios // <-- Enviamos los comentarios a la API
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al registrar asistencia');
      }

      setEnviado(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (enviado) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-green-50">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Asistencia Registrada!</h2>
          <p className="text-gray-600">Tu participación en el taller ha sido guardada correctamente.</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="mt-6 w-full py-3 bg-gray-800 text-white rounded-xl font-semibold"
          >
            Finalizar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <div className="w-full max-w-md mt-8 mb-6 text-center">
        <h1 className="text-2xl font-bold text-blue-900">Galpón Cultural UCN</h1>
        <p className="text-gray-500 italic font-medium">Registro de Asistencia</p>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-8"
      >
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl text-center font-medium">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Ingresa tu RUT (sin puntos ni guion)
          </label>
          <input
            type="text"
            required
            disabled={isLoading}
            placeholder="12345678"
            className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-blue-500 outline-none transition-colors text-lg disabled:bg-gray-50"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-4 text-center">
            ¿Qué te pareció el taller de hoy?
          </label>
          <div className="flex justify-between items-center gap-2">
            {[1, 2, 3, 4, 5].map((nivel) => (
              <button
                key={nivel}
                type="button"
                disabled={isLoading}
                onClick={() => setSatisfaccion(nivel)}
                className={`flex-1 py-4 text-2xl rounded-xl transition-all ${
                  satisfaccion === nivel 
                    ? 'bg-blue-600 scale-110 shadow-lg' 
                    : 'bg-gray-100 grayscale opacity-60'
                }`}
              >
                {['😠', '🙁', '😐', '🙂', '🤩'][nivel - 1]}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-2 px-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            <span>Malo</span>
            <span>Excelente</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Comentarios sobre la clase <span className="text-gray-400 font-normal">(Opcional)</span>
          </label>
          <textarea
            disabled={isLoading}
            placeholder="¿Qué aprendiste hoy? ¿Alguna sugerencia?"
            className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-blue-500 outline-none transition-colors text-md disabled:bg-gray-50 resize-none h-24"
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={!rut || !satisfaccion || isLoading}
          className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all ${
            rut && satisfaccion && !isLoading
              ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {isLoading ? 'Registrando...' : 'Confirmar Asistencia'}
        </button>
      </form>

      <p className="mt-8 text-xs text-gray-400 text-center max-w-50">
        Al registrarte confirmas que has participado en la sesión de hoy.
      </p>
    </div>
  );
};

export default AsistenciaForm;