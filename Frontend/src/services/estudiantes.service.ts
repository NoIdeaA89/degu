const baseUrl = import.meta.env.VITE_API_URL;

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  rut: string;
  correo: string;
}

export interface BusquedaEstudiantesResponse {
  data: Estudiante[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export interface RegistroUsuarioPayload {
  nombre: string
  apellido: string
  rut: string
  correo: string
  password?: string
  rol: 'Administrador' | 'Profesor' | 'Ayudante' | 'Estudiante'
  carrera?: string
  telefono?: string
}

export interface RegistroUsuarioResponse {
  mensaje: string
  usuario: {
    id: number
    nombre: string
    apellido: string
    rut: string
    correo: string
    rol: string
    carrera?: string
    telefono?: string
  }
}

export async function buscarEstudiantes(
  query: string,
  page = 1,
  limit = 10
): Promise<BusquedaEstudiantesResponse> {
  const token = localStorage.getItem("token");
  const headers: HeadersInit = {};

  if (token) headers.Authorization = `Bearer ${token}`;

  const params = new URLSearchParams({
    query,
    page: String(page),
    limit: String(limit),
  });

  const response = await fetch(`${baseUrl}/estudiantes/buscar?${params.toString()}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error("Error al buscar estudiantes");
  }

  return response.json();
}

export async function registrarUsuario(
  payload: RegistroUsuarioPayload
): Promise<RegistroUsuarioResponse> {
  const token = localStorage.getItem("token");
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${baseUrl}/estudiantes`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || data.message || data.detalle || 'Error al registrar usuario')
  }

  return data as RegistroUsuarioResponse
}
