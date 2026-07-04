import { type ReactElement } from "react"
import { useMetricas } from "../pages/hooks/useMetricas"

export default function PanelMetricas(): ReactElement {
  const { metricas, isLoading, error } = useMetricas();

  if (isLoading) {
    return (
      <div className="p-10 text-center text-gray-500 bg-white rounded-lg shadow-sm border border-gray-200">
        Calculando estadísticas del semestre...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-md border border-red-200">
        {error}
      </div>
    );
  }

  if (!metricas) return <></>;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Resumen Directivo</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-semibold uppercase">Impacto Global (Asistencias)</p>
            <p className="text-3xl font-bold text-gray-800">{metricas.volumen.totalAsistenciasFisicas}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Estudiantes Únicos</p>
            <p className="text-xl font-semibold text-blue-600">{metricas.volumen.estudiantesUnicos}</p>
          </div>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-500 font-semibold uppercase">Satisfacción Promedio Galpón</p>
          <p className="text-3xl font-bold text-green-600">{metricas.calidad.satisfaccionPromedio} <span className="text-lg text-gray-400">/ 5.0</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
          <h3 className="text-emerald-800 font-bold mb-3">🔥 Talleres Más Concurridos</h3>
          <ul className="space-y-2">
            {metricas.rendimiento.mejoresAsistencia.map((t, i) => (
              <li key={t.id} className="flex justify-between text-sm">
                <span className="font-medium text-emerald-900 line-clamp-1 pr-2">{i+1}. {t.nombre}</span>
                <span className="font-bold text-emerald-700 whitespace-nowrap">{t.totalAsistenciasReal} asist.</span>
              </li>
            ))}
            {metricas.rendimiento.mejoresAsistencia.length === 0 && <span className="text-xs text-emerald-600">Sin datos</span>}
          </ul>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <h3 className="text-blue-800 font-bold mb-3">⭐ Mejor Evaluados</h3>
          <ul className="space-y-2">
            {metricas.rendimiento.mejoresCalificaciones.map((t, i) => (
              <li key={t.id} className="flex justify-between text-sm">
                <span className="font-medium text-blue-900 line-clamp-1 pr-2">{i+1}. {t.nombre}</span>
                <span className="font-bold text-blue-700 whitespace-nowrap">{t.promedioCalificacion} / 5.0</span>
              </li>
            ))}
            {metricas.rendimiento.mejoresCalificaciones.length === 0 && <span className="text-xs text-blue-600">Sin datos</span>}
          </ul>
        </div>

        <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
          <h3 className="text-orange-800 font-bold mb-3">⚠️ Baja Asistencia</h3>
          <ul className="space-y-2">
            {metricas.rendimiento.peoresAsistencia.map((t, i) => (
              <li key={t.id} className="flex justify-between text-sm">
                <span className="font-medium text-orange-900 line-clamp-1 pr-2">{i+1}. {t.nombre}</span>
                <span className="font-bold text-orange-700 whitespace-nowrap">{t.totalAsistenciasReal} asist.</span>
              </li>
            ))}
            {metricas.rendimiento.peoresAsistencia.length === 0 && <span className="text-xs text-orange-600">Sin datos</span>}
          </ul>
        </div>

        <div className="bg-red-50 p-5 rounded-lg border border-red-200">
          <h3 className="text-red-800 font-bold mb-3">📉 Evaluaciones Bajas</h3>
          <ul className="space-y-2">
            {metricas.rendimiento.peoresCalificaciones.map((t, i) => (
              <li key={t.id} className="flex justify-between text-sm">
                <span className="font-medium text-red-900 line-clamp-1 pr-2">{i+1}. {t.nombre}</span>
                <span className="font-bold text-red-700 whitespace-nowrap">{t.promedioCalificacion} / 5.0</span>
              </li>
            ))}
            {metricas.rendimiento.peoresCalificaciones.length === 0 && <span className="text-xs text-red-600">Sin datos</span>}
          </ul>
        </div>

      </div>
    </div>
  )
}