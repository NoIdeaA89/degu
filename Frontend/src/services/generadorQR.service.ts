// src/services/sesionService.ts

const baseUrl = import.meta.env.VITE_API_URL

export interface GenerarSesionParams {
  tallerId: number
  bloque?: number
  minutosValidez?: number
}

export interface GenerarSesionResponse {
  qrToken: string
  [key: string]: any
}

/**
 * Crea una sesión de asistencia en el backend y devuelve el token QR generado.
 * Lanza un Error con mensaje legible si la respuesta no es OK o falta el token.
 */
export async function generarSesion({
  tallerId,
  bloque,
  minutosValidez = 15,
}: GenerarSesionParams): Promise<GenerarSesionResponse> {
  const response = await fetch(`${baseUrl}sesion/generar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      tallerId,
      bloque: Number(bloque),
      minutosValidez,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Error al conectar con el servidor')
  }

  if (!data.qrToken) {
    throw new Error('El servidor no generó un token de seguridad')
  }

  return data as GenerarSesionResponse
}

/**
 * Construye la URL absoluta que se codifica en el QR a partir de un token.
 */
export function construirUrlAsistencia(token: string): string {
  return `${window.location.origin}/formularioAsistencia?token=${token}`
}