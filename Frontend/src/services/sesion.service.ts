// services/sesion.service.ts
export interface SesionApi {
  id: number;
  tallerId: number;
  bloque: number;
  fecha: string;
  qrToken: string; 
}

export async function obtenerOCrearSesionDeHoy(tallerId: number, bloque: number): Promise<SesionApi> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const baseUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${baseUrl}/sesion/hoy`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ tallerId, bloque, minutosValidez: 120 })
  });

  if (!response.ok) throw new Error('Error al obtener la sesión del día.');
  return response.json();
}