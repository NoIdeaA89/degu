import type { MetricasDashboard } from "../interfaces/MetricasDashBoard"

export async function obtenerMetricasDashboard(): Promise<MetricasDashboard> {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No hay sesión activa.');
  }

  const baseUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${baseUrl}/metricas/dashboard`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  if (response.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/login'; 
    throw new Error('Sesión expirada. Por favor, inicia sesión nuevamente.');
  }

  if (!response.ok) {
    throw new Error('Error al cargar el panel directivo.');
  }

  return response.json();
}