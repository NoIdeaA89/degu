// services/inscripcion.service.ts
export interface EstudianteApi {
  id: number;
  nombre: string;
  apellido: string;
  rut: string;
  correo: string;
}

export async function obtenerInscritosPorTaller(tallerId: number): Promise<EstudianteApi[]> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  const baseUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${baseUrl}/talleres/${tallerId}/inscritos`, { headers });

  if (!response.ok) throw new Error('Error al cargar los inscritos.');
  return response.json();
}