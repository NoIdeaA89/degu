const baseUrl = import.meta.env.VITE_API_URL;

export interface RegistrarAsistenciaParams {
  rut: string;
  qrToken: string;
  satisfaccion: number | null;
  comentarios: string;
}

export interface RegistrarAsistenciaResponse {
  mensaje: string;
  [key: string]: any;
}
export interface AsistenciaApi {
  id: number;
  sesionId: number;
  estudianteId: number;
  estado: string;
}

/**
 * Registra la asistencia de un estudiante en un taller usando el token QR.
 */
export async function registrarAsistencia(
  params: RegistrarAsistenciaParams
): Promise<RegistrarAsistenciaResponse> {
  const response = await fetch(`${baseUrl}/asistencia/registrar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al registrar asistencia");
  }

  return data as RegistrarAsistenciaResponse;
}
// services/asistencia.service.ts (frontend)

export async function obtenerAsistenciaPorSesion(sesionId: number): Promise<AsistenciaApi[]> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  const baseUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${baseUrl}/asistencia/sesion/${sesionId}`, { headers });

  if (!response.ok) throw new Error('Error al cargar la asistencia.');
  return response.json();
}

export async function guardarAsistenciaManual(
  sesionId: number,
  registros: { estudianteId: number; presente: boolean }[]
): Promise<void> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const baseUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${baseUrl}/asistencia/sesion/${sesionId}/manual`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ registros })
  });

  if (!response.ok) throw new Error('Error al guardar la asistencia.');
}
