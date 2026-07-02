// src/services/authService.ts

const baseUrl = import.meta.env.VITE_API_URL

export interface LoginResponse {
  token: string
  [key: string]: any
}

/**
 * Llama al backend para autenticar con correo y contraseña.
 * Lanza un Error con mensaje legible si la respuesta no es OK.
 */
export async function loginConCorreo(
  correo: string,
  password: string
): Promise<LoginResponse> {
  const response = await fetch(`${baseUrl}auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo, password }),
  })

  const data = await response.json()

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("No encontramos ninguna cuenta asociada a este correo.")
    } else if (response.status === 401) {
      throw new Error("La contraseña ingresada es incorrecta. Inténtalo nuevamente.")
    } else {
      throw new Error(data.message || data.error || "Credenciales incorrectas")
    }
  }

  return data as LoginResponse
}

/**
 * Llama al backend para autenticar con un token de Google (JWT credential).
 */
export async function loginConGoogle(credentialToken: string): Promise<LoginResponse> {
  const response = await fetch(`${baseUrl}/api/auth/google`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: credentialToken }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Error al autenticar con Google en el servidor.")
  }

  return data as LoginResponse
}