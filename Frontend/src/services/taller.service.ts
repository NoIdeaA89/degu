import type { TallerBackend, TallerUI } from "../interfaces/Taller"
import { bloqueLetraANumero } from "../utils/bloqueMapper"

const baseUrl = `http://${window.location.hostname}:3000/api`

export async function obtenerTalleres(): Promise<TallerBackend[]> {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseUrl}/talleres`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  if (!response.ok) throw new Error('Error al cargar los talleres.');

  return response.json();
}

export async function obtenerTallerPorId(id: number): Promise<TallerBackend> {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseUrl}/talleres/${id}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  if (!response.ok) throw new Error('Error al cargar el taller.');

  return response.json();
}

export interface CrearTallerParams {
  nombre: string;
  descripcion: string;
  semestre: string;
  lugar: string;
  profesorId: number;
}

export async function crearTaller(params: CrearTallerParams): Promise<TallerBackend> {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseUrl}/talleres`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(params)
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.message || 'Error al crear el taller.');

  return data;
}

// Trae los talleres reales del backend y los convierte al formato que usa la grilla (TallerUI)
export async function obtenerTalleresUI(): Promise<TallerUI[]> {
  const talleres = await obtenerTalleres();

  return talleres.map((t) => ({
    id: t.id,
    nombre: t.nombre,
    dia: t.dia ?? 0,
    bloque: t.bloque ? bloqueLetraANumero(t.bloque) : 0,
    lugar: t.lugar,
  }));
}

// Crea un taller en el backend y lo devuelve ya convertido a TallerUI (sin asignar: dia/bloque = 0)
export async function crearTallerUI(params: CrearTallerParams): Promise<TallerUI> {
  const nuevo = await crearTaller(params);

  return {
    id: nuevo.id,
    nombre: nuevo.nombre,
    dia: nuevo.dia ?? 0,
    bloque: nuevo.bloque ? bloqueLetraANumero(nuevo.bloque) : 0,
    lugar: nuevo.lugar,
  };
}