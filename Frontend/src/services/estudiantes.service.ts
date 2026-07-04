

const baseUrl = import.meta.env.VITE_API_URL;

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  rut: string;
  correo: string;
}

/**
 * Obtiene la lista de estudiantes del backend
 */
export async function obtenerEstudiantes(): Promise<Estudiante[]> {
  const token = localStorage.getItem("token");
  const headers: HeadersInit = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${baseUrl}/estudiante/listar`, {
    headers,
  });

  if (!response.ok) {
    throw new Error("Error al cargar estudiantes");
  }

  return response.json();
}

/**
 * Obtiene los detalles de un estudiante específico
 */
export async function obtenerEstudiante(id: number): Promise<Estudiante> {
  const token = localStorage.getItem("token");
  const headers: HeadersInit = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${baseUrl}/estudiante/${id}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error("Error al cargar estudiante");
  }

  return response.json();
}
