import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface GeneradorQRProps {
  tallerId: number;
  nombreTaller: string;
  bloque: number;
}

export default function GeneradorQR({ tallerId, nombreTaller, bloque }: GeneradorQRProps) {
  const [qrUrl, setQrUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const generarSesionEnBaseDeDatos = async () => {
      setIsLoading(true);
      setError('');

      try {
        const baseUrl = `http://${window.location.hostname}:3000/api`;

        const response = await fetch(`${baseUrl}/sesion/generar`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            tallerId, 
            bloque: Number(bloque),
            minutosValidez: 15 
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Error al conectar con el servidor');
        }

        const token = data.qrToken;

        if (!token) {
          throw new Error("El servidor no generó un token de seguridad");
        }

        const urlAsistencia = `${window.location.origin}/formularioAsistencia?token=${token}`;
        setQrUrl(urlAsistencia);

      } catch (err: any) {
        console.error("Fallo en la generación de sesión:", err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    generarSesionEnBaseDeDatos();
  }, [tallerId, bloque]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center p-6">
        <div className="w-48 h-48 flex items-center justify-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
          <div className="flex flex-col items-center">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
             <span className="text-gray-400 text-sm font-medium">Creando sesión...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-center">
        <p className="font-semibold text-sm">No se pudo generar el QR</p>
        <p className="text-xs opacity-80">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-2 text-xs underline font-bold"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-center">
        <h4 className="text-lg font-bold text-gray-800">{nombreTaller}</h4>
        <p className="text-sm text-gray-500 font-medium uppercase">Bloque {bloque}</p>
      </div>

      <div className="p-4 bg-white shadow-lg border-4 border-blue-50 rounded-2xl">
        {qrUrl && (
          <QRCodeSVG 
            value={qrUrl} 
            size={220} 
            level="H" 
            includeMargin={true}
          />
        )}
      </div>
      
      <div className="text-center space-y-1">
        <p className="text-sm text-gray-600 font-semibold">
          ¡Listo para escanear!
        </p>
        <p className="text-xs text-gray-400 max-w-50">
          Los estudiantes deben ingresar su RUT para registrar la asistencia.
        </p>
      </div>
    </div>
  );
}