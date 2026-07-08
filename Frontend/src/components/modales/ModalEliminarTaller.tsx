import type { ReactElement } from "react"
import type { TallerUI } from "../../interfaces/Taller"

interface Props {
  taller: TallerUI
  onConfirmar: () => void
  onCerrar: () => void
  cargando?: boolean
}

export default function ModalEliminarTaller({ 
  taller, 
  onConfirmar, 
  onCerrar, 
  cargando = false 
}: Props): ReactElement {
  
  return (
   
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onCerrar}
    >
      {/* Contenedor principal del modal */}
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 transform transition-all border border-gray-100"
        onClick={(e) => e.stopPropagation()} 
      >
        
        {/* Ícono de advertencia */}
        <div className="flex justify-center mb-4">
          <div className="h-14 w-14 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-3xl text-red-600">🗑️</span>
          </div>
        </div>

        {/* Textos */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            ¿Eliminar taller?
          </h3>
          <p className="text-sm text-gray-500">
            Estás a punto de archivar el taller <br/>
            <strong className="text-gray-800">{taller.nombre}</strong>.
          </p>
          <p className="text-xs text-gray-400 mt-3 bg-gray-50 p-2 rounded">
            Esta acción lo quitará del horario si está asignado y dejará de aparecer en la lista de pendientes.
          </p>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onCerrar}
            disabled={cargando}
            className="flex-1 py-2 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 font-semibold text-sm hover:bg-gray-50 transition disabled:opacity-50"
          >
            Cancelar
          </button>
          
          <button
            type="button"
            onClick={onConfirmar}
            disabled={cargando}
            className="flex-1 py-2 px-4 bg-red-600 rounded-lg text-white font-semibold text-sm hover:bg-red-700 transition disabled:opacity-50 flex justify-center items-center gap-2"
          >
            {cargando ? "Eliminando..." : "Sí, eliminar"}
          </button>
        </div>
      </div>
    </div>
  )
}