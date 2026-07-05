const baseUrl = import.meta.env.VITE_API_URL;

export interface RegistrarAsistenciaParams {
  rut: string;
  qrToken: string;
  satisfaccion: number | null;
  comentarios: string;
}

export interface RegistrarAsistenciaResponse {
  mensaje: string;
  [key: string]: any;
}

/**
 * Registra la asistencia de un estudiante en un taller usando el token QR.
 */
export async function registrarAsistencia(
  params: RegistrarAsistenciaParams
): Promise<RegistrarAsistenciaResponse> {
  const response = await fetch(`${baseUrl}/asistencia/registrar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al registrar asistencia");
  }

  return data as RegistrarAsistenciaResponse;
}
