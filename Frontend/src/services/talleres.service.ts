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
  grupoId?: number | null;
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
  if (token) headers.Authorization = `Bearer ${token}`;

  const baseUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(
    `${baseUrl}/talleres?semestre=${encodeURIComponent(semestre)}`,
    { headers }
  );

  const text = await response.text();

  if (!response.ok) {
    console.error('Respuesta de error del backend:', response.status, text);
    throw new Error(`Error al cargar los talleres (status ${response.status}).`);
  }

  if (!text) {
    console.warn('El backend devolvió un body vacío para talleres');
    return [];
  }

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error('Respuesta no es JSON válido:', text);
    throw new Error('El servidor devolvió una respuesta inesperada.');
  }
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

export async function crearGrupoTallerEnBD(tallerIds: number[]): Promise<any> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const baseUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${baseUrl}/talleres/grupos`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ tallerIds })
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || 'Error al crear el grupo de taller.');
  }

  return response.json();
}

export async function agregarTallerAGrupoEnBD(grupoId: number, tallerId: number): Promise<any> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const baseUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${baseUrl}/talleres/grupos/${grupoId}/agregar`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ tallerId })
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || 'Error al agregar el taller al grupo.');
  }

  return response.json();
}

export async function salirDeGrupoEnBD(tallerId: number): Promise<any> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  const baseUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${baseUrl}/talleres/${tallerId}/salir-grupo`, {
    method: 'PATCH',
    headers
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || 'Error al remover el taller del grupo.');
  }

  return response.json();
}