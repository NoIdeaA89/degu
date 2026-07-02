export interface Profesor {
  id: number;
  nombre: string;
  apellido: string;
  rut: string;
  correo: string;
}

const baseUrl = `http://${window.location.hostname}:3000/api`;

export async function obtenerProfesores(): Promise<Profesor[]> {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseUrl}/profesores`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) throw new Error('Error al cargar los profesores.');

  return response.json();
}

export async function crearProfesor(
  nombre: string,
  apellido: string,
  rut: string,
  correo: string
): Promise<Profesor> {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseUrl}/profesores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ nombre, apellido, rut, correo }),
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.error || 'Error al crear el profesor.');

  return data;
}