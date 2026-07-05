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

export interface TallerApi {
  id: number;
  nombre: string;
  descripcion: string;
  horario: string;
  semestre: string;
  estado: boolean;
  lugar: string;
  dia: number;
  bloque: string;
  profesorId: number;
}
export interface ProfesorApi {
  id: number;
  nombre: string;
  apellido: string;
}

export interface CrearTallerPayload {
  nombre: string;
  descripcion?: string;
  horario?: string;
  semestre: string;
  lugar: string;
  profesorId: number;
  dia?: number;
  bloque?: string;
}

export async function obtenerProfesores(): Promise<ProfesorApi[]> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  const baseUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${baseUrl}/talleres/profesores`, { headers });

  if (!response.ok) {
    throw new Error('Error al cargar los profesores.');
  }

  return response.json();
}

export async function crearTallerEnBD(payload: CrearTallerPayload): Promise<TallerApi> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;

  const baseUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${baseUrl}/talleres`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Error al crear el taller.');
  }

  const data = await response.json();
  return data.data;
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
    `${baseUrl}/asistencia/resumen?${params.toString()}`,
    { headers }
  );

  if (!response.ok) {
    throw new Error('Error al cargar el resumen de asistencia.');
  }

  return response.json();
}

export async function obtenerTalleresPorSemestre(semestre: string): Promise<TallerApi[]> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const baseUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(
    `${baseUrl}/talleres?semestre=${encodeURIComponent(semestre)}`,
    { headers }
  );

  if (!response.ok) {
    throw new Error('Error al cargar los talleres.');
  }

  return response.json();
}

export async function actualizarTallerEnBD(tallerId: number, dia: number, bloque: string): Promise<TallerApi> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const baseUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(
    `${baseUrl}/talleres/${tallerId}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({ dia, bloque })
    }
  );

  if (!response.ok) {
    throw new Error('Error al actualizar el taller.');
  }

  const data = await response.json();
  return data.data;
}