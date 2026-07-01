import type { TallerBackend } from "../interfaces/Taller"
import type { TallerUI } from "../interfaces/Taller"
import { bloqueLetraANumero } from "../utils/bloqueMapper"

export async function obtenerTalleres(): Promise<TallerBackend[]> {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:3000/api/talleres', {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  if (!response.ok) throw new Error('Error al cargar los talleres.');

  return response.json();
}

export async function obtenerTallerPorId(id: number): Promise<TallerBackend> {
  const token = localStorage.getItem('token');
  const response = await fetch(`http://localhost:3000/api/talleres/${id}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  if (!response.ok) throw new Error('Error al cargar el taller.');

  return response.json();
}

// Trae los talleres reales del backend y los convierte al formato que usa la grilla (TallerUI)
export async function obtenerTalleresUI(): Promise<TallerUI[]> {
  const talleres = await obtenerTalleres();

  return talleres.map((t) => ({
    id: t.id,
    nombre: t.nombre,
    dia: t.dia,
    bloque: bloqueLetraANumero(t.bloque),
    lugar: t.lugar,
  }));
}