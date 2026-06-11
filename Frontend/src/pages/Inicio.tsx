import { type ReactElement, useState, useEffect } from "react"
import Navbar from "../components/navbar"
import Horario from "../components/Horario"
import { useAuth } from "../context/AuthContext"

interface MetricasDashboard {
  volumen: { totalAsistenciasFisicas: number; estudiantesUnicos: number; };
  calidad: { satisfaccionPromedio: number; };
  rendimiento: {
    mejoresAsistencia: Array<{ id: number; nombre: string; totalAsistenciasReal: number }>;
    peoresAsistencia: Array<{ id: number; nombre: string; totalAsistenciasReal: number }>;
    mejoresCalificaciones: Array<{ id: number; nombre: string; promedioCalificacion: number }>;
    peoresCalificaciones: Array<{ id: number; nombre: string; promedioCalificacion: number }>;
  };
}

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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 space-y-8">
        
        {user?.rol === 'Administrador' && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Resumen Directivo</h2>
            
            {isLoading ? (
              <div className="p-10 text-center text-gray-500 bg-white rounded-lg shadow-sm">Calculando estadísticas...</div>
            ) : error ? (
              <div className="p-4 bg-red-50 text-red-600 rounded-md border">{error}</div>
            ) : metricas ? (
              <>
                {/* KPI Globales */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase">Impacto Global (Asistencias)</p>
                      <p className="text-3xl font-bold text-gray-800">{metricas.volumen.totalAsistenciasFisicas}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Estudiantes Únicos</p>
                      <p className="text-xl font-semibold text-blue-600">{metricas.volumen.estudiantesUnicos}</p>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <p className="text-sm text-gray-500 font-semibold uppercase">Satisfacción Promedio Galpón</p>
                    <p className="text-3xl font-bold text-green-600">{metricas.calidad.satisfaccionPromedio} <span className="text-lg text-gray-400">/ 5.0</span></p>
                  </div>
                </div>

                {/* MATRIZ DE DECISIÓN (4 Cuadrantes) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Cuadrante 1: Éxito en Asistencia */}
                  <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
                    <h3 className="text-emerald-800 font-bold mb-3">🔥 Talleres Más Concurridos</h3>
                    <ul className="space-y-2">
                      {metricas.rendimiento.mejoresAsistencia.map((t, i) => (
                        <li key={t.id} className="flex justify-between text-sm">
                          <span className="font-medium text-emerald-900">{i+1}. {t.nombre}</span>
                          <span className="font-bold text-emerald-700">{t.totalAsistenciasReal} asist.</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cuadrante 2: Éxito en Calidad */}
                  <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                    <h3 className="text-blue-800 font-bold mb-3">⭐ talleres mejores evaluados</h3>
                    <ul className="space-y-2">
                      {metricas.rendimiento.mejoresCalificaciones.map((t, i) => (
                        <li key={t.id} className="flex justify-between text-sm">
                          <span className="font-medium text-blue-900">{i+1}. {t.nombre}</span>
                          <span className="font-bold text-blue-700">{t.promedioCalificacion} / 5.0</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cuadrante 3: Alerta Asistencia */}
                  <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
                    <h3 className="text-orange-800 font-bold mb-3">⚠️ talleres con baja asistencia</h3>
                    <ul className="space-y-2">
                      {metricas.rendimiento.peoresAsistencia.map((t, i) => (
                        <li key={t.id} className="flex justify-between text-sm">
                          <span className="font-medium text-orange-900">{i+1}. {t.nombre}</span>
                          <span className="font-bold text-orange-700">{t.totalAsistenciasReal} asist.</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cuadrante 4: Alerta Calidad */}
                  <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                    <h3 className="text-red-800 font-bold mb-3">📉 talleres con evaluaciones bajas</h3>
                    <ul className="space-y-2">
                      {metricas.rendimiento.peoresCalificaciones.map((t, i) => (
                        <li key={t.id} className="flex justify-between text-sm">
                          <span className="font-medium text-red-900">{i+1}. {t.nombre}</span>
                          <span className="font-bold text-red-700">{t.promedioCalificacion} / 5.0</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </>
            ) : null}
          </section>
        )}

        <section>
          <Horario />
        </section>

      </main>
    </div>
  )
}