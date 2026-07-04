export interface TransferirMandoParams {
  rutNuevoAdmin: string;
  palabraConfirmacion: string;
}

export interface TransferirMandoResponse {
  mensaje: string;
  [key: string]: any;
}

/**
 * Transfiere el mando administrativo a otro usuario.
 * Requiere autenticación con token Bearer.
 */
export async function transferirMando(
  params: TransferirMandoParams
): Promise<TransferirMandoResponse> {
  const token = localStorage.getItem("token");

  const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/transferir-mando`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detalle || data.error || "Error al transferir el mando");
  }

  return data as TransferirMandoResponse;
}
