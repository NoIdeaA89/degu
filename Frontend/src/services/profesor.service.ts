import type {
  AgregarProfesorParams,
  AgregarProfesorResponse,
  Profesor
} from "../interfaces/Profesor";

/**
 * Registra un nuevo profesor en el sistema.
 * El profesor no puede iniciar sesión; solo se guarda su información
 * (nombre, apellido, rut) para poder asignarlo a talleres.
 * Requiere autenticación con token Bearer.
 */
export async function agregarProfesor(
  params: AgregarProfesorParams
): Promise<AgregarProfesorResponse> {
  const token = localStorage.getItem("token");

  const response = await fetch(`${import.meta.env.VITE_API_URL}/profesores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detalle || data.error || "Error al agregar el profesor");
  }

  return data as AgregarProfesorResponse;
}

/**
 * Obtiene la lista de profesores registrados.
 * Requiere autenticación con token Bearer.
 */
export async function obtenerProfesores(): Promise<Profesor[]> {
  const token = localStorage.getItem("token");

  const response = await fetch(`${import.meta.env.VITE_API_URL}/profesores`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detalle || data.error || "Error al obtener los profesores");
  }

  return data as Profesor[];
}