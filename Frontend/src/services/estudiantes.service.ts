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