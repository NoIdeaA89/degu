// services/inscripcion.service.ts
const baseUrl = import.meta.env.VITE_API_URL;

import type{ Estudiante as EstudianteApi } from "../interfaces/Estudiante";

export interface ParInscripcion {
  estudianteId: number;
  tallerId: number;
}

export type EstadoInscripcion = 'inscrito' | 'ya_inscrito' | 'taller_no_encontrado';

export interface ResultadoInscripcion {
  estudianteId: number;
  tallerId: number;
  status: EstadoInscripcion;
}

interface RespuestaInscribirBatch {
  mensaje: string;
  inscritos: number;
  resultados: ResultadoInscripcion[];
}

export async function obtenerInscritosPorTaller(tallerId: number): Promise<EstudianteApi[]> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${baseUrl}/talleres/${tallerId}/inscritos`, { headers });

  if (!response.ok) throw new Error('Error al cargar los inscritos.');
  return response.json();
}

export async function inscribirEstudianteEnTaller(estudianteId: number, tallerId: number): Promise<any> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

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

export async function inscribirEstudiantesBatch(
  inscripciones: ParInscripcion[]
): Promise<RespuestaInscribirBatch> {
  const token = localStorage.getItem("token");
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${baseUrl}/talleres/inscribir/batch`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ inscripciones }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || data.message || data.detalle || 'Error al inscribir estudiantes en batch');
  }

  return data as RespuestaInscribirBatch;
}