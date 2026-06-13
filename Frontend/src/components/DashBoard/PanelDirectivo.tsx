import { useMetricas } from "../../pages/hooks/useMetricas"

export default function PanelDirectivo() {
  const { metricas, isLoading, error } = useMetricas();

  if (isLoading) return <p className="text-center text-gray-500">Cargando panel directivo...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;
  if (!metricas) return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 text-center">
          <h3 className="text-blue-800 font-bold mb-2">Asistencias totales</h3>
          <p className="text-3xl font-bold text-blue-900">{metricas.volumen.totalAsistenciasFisicas}</p>
        </div>
        <div className="bg-green-50 p-5 rounded-lg border border-green-200 text-center">
          <h3 className="text-green-800 font-bold mb-2">Estudiantes únicos</h3>
          <p className="text-3xl font-bold text-green-900">{metricas.volumen.estudiantesUnicos}</p>
        </div>
        <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200 text-center">
          <h3 className="text-yellow-800 font-bold mb-2">Satisfacción promedio</h3>
          <p className="text-3xl font-bold text-yellow-900">{metricas.calidad.satisfaccionPromedio} / 5.0</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h3 className="text-green-800 font-bold mb-3">📈 Talleres con más asistencia</h3>
          <ul className="space-y-2">
            {metricas.rendimiento.mejoresAsistencia.map((t, i) => (
              <li key={t.id} className="flex justify-between text-sm">
                <span className="font-medium text-green-900">{i + 1}. {t.nombre}</span>
                <span className="font-bold text-green-700">{t.totalAsistenciasReal}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 p-5 rounded-lg border border-red-200">
          <h3 className="text-red-800 font-bold mb-3">📉 Talleres con menos asistencia</h3>
          <ul className="space-y-2">
            {metricas.rendimiento.peoresAsistencia.map((t, i) => (
              <li key={t.id} className="flex justify-between text-sm">
                <span className="font-medium text-red-900">{i + 1}. {t.nombre}</span>
                <span className="font-bold text-red-700">{t.totalAsistenciasReal}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <h3 className="text-blue-800 font-bold mb-3">⭐ Mejores evaluaciones</h3>
          <ul className="space-y-2">
            {metricas.rendimiento.mejoresCalificaciones.map((t, i) => (
              <li key={t.id} className="flex justify-between text-sm">
                <span className="font-medium text-blue-900">{i + 1}. {t.nombre}</span>
                <span className="font-bold text-blue-700">{t.promedioCalificacion} / 5.0</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 p-5 rounded-lg border border-red-200">
          <h3 className="text-red-800 font-bold mb-3">📉 Talleres con evaluaciones bajas</h3>
          <ul className="space-y-2">
            {metricas.rendimiento.peoresCalificaciones.map((t, i) => (
              <li key={t.id} className="flex justify-between text-sm">
                <span className="font-medium text-red-900">{i + 1}. {t.nombre}</span>
                <span className="font-bold text-red-700">{t.promedioCalificacion} / 5.0</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}