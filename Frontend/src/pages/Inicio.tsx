import { type ReactElement, useState, useEffect } from "react"
import Navbar from "../components/navbar"
import Horario from "../components/Horario/Horario" 

export default function Inicio(): ReactElement {
  const { user } = useAuth();
  const [metricas, setMetricas] = useState<MetricasDashboard | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetricas = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/api/metricas/dashboard', {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) throw new Error('Error al cargar el panel directivo.');
        
        const data = await response.json();
        setMetricas(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (user?.rol === 'Administrador') fetchMetricas();
    else setIsLoading(false);
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-yellow-400 to-green-500 flex flex-col">
      <Navbar />

      <main className="flex flex-col items-center justify-start grow p-6 bg-white bg-opacity-90 rounded-lg shadow-lg m-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Sistema de Gestión Estudiantil
        </h1>
        <p className="text-gray-700 mb-8">
          Bienvenido al panel principal de Galpón Cultural.
        </p>

        <Horario />
      </main>
    </div>
  )
}