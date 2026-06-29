import type { MetricasDashboard } from "../interfaces/MetricasDashBoard"

export async function obtenerMetricasDashboard(): Promise<MetricasDashboard> {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:3000/api/metricas/dashboard', {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  if (!response.ok) throw new Error('Error al cargar el panel directivo.');

  return response.json();
}