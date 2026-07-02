export interface ResumenAsistenciaQuery {
  semestre: string;
  mes?: number;
  dia?: number;
  fechaInicio?: string;
  fechaFin?: string;
}

export interface ResumenAsistenciaTallerApi {
  tallerId: number;
  nombre: string;
  totalSesiones: number;
  totalAlumnos: number;
  promedioAsistencia: number;
  promedioSatisfaccion: number | null;
}

export async function obtenerResumenAsistencia(
  query: ResumenAsistenciaQuery
): Promise<ResumenAsistenciaTallerApi[]> {
  const params = new URLSearchParams();

  params.set('semestre', query.semestre);
  if (query.mes !== undefined) params.set('mes', String(query.mes));
  if (query.dia !== undefined) params.set('dia', String(query.dia));
  if (query.fechaInicio) params.set('fechaInicio', query.fechaInicio);
  if (query.fechaFin) params.set('fechaFin', query.fechaFin);

  const token = localStorage.getItem('token');
  const headers: HeadersInit = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const baseUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(
    `${baseUrl}asistencia/resumen?${params.toString()}`,
    { headers }
  );

  if (!response.ok) {
    throw new Error('Error al cargar el resumen de asistencia.');
  }

  return response.json();
}