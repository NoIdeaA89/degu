import type { MetricasDashboard } from "../interfaces/MetricasDashBoard"

export async function obtenerMetricasDashboard(): Promise<MetricasDashboard> {
  const token = localStorage.getItem('token');
  const baseUrl = import.meta.env.VITE_API_URL;
  console.log("VITE_API_URL =", import.meta.env.VITE_API_URL);
  const response = await fetch(`${baseUrl}metricas/dashboard`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  if (!response.ok) throw new Error('Error al cargar el panel directivo.');

  return response.json();
}

