// services/inscripcion.service.ts
import type{ Estudiante as EstudianteApi } from "../interfaces/Estudiante";

export async function obtenerInscritosPorTaller(tallerId: number): Promise<EstudianteApi[]> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  const baseUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${baseUrl}/talleres/${tallerId}/inscritos`, { headers });

  if (!response.ok) throw new Error('Error al cargar los inscritos.');
  return response.json();
}

export async function inscribirEstudianteEnTaller(estudianteId: number, tallerId: number): Promise<any> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const baseUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${baseUrl}/talleres/${tallerId}/inscribir`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ estudianteId })
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.error || errData.detalle || 'Error al inscribir al estudiante.');
  }
  return response.json();
}