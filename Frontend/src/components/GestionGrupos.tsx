import React, { useEffect, useState } from 'react';
import { 
  obtenerTalleresPorSemestre, 
  crearGrupoTallerEnBD, 
  agregarTallerAGrupoEnBD, 
  salirDeGrupoEnBD,
  type TallerApi 
} from '../services/talleres.service';
import { obtenerSemestreActual } from '../utils/semestre.utils';

const DIAS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export const GestionGrupos: React.FC = () => {
  const [talleres, setTalleres] = useState<TallerApi[]>([]);
  const [cargando, setCargando] = useState(true);
  const [mensajeExito, setMensajeExito] = useState<string | null>(null);
  const [mensajeError, setMensajeError] = useState<string | null>(null);

  const semestre = obtenerSemestreActual();

  const cargarDatos = async () => {
    try {
      setCargando(true);
      const data = await obtenerTalleresPorSemestre(semestre);
      setTalleres(data);
    } catch (err: any) {
      setMensajeError(err.message || 'Error al cargar talleres');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const mostrarExito = (msg: string) => {
    setMensajeExito(msg);
    setMensajeError(null);
    setTimeout(() => setMensajeExito(null), 3000);
  };

  const mostrarError = (msg: string) => {
    setMensajeError(msg);
    setMensajeExito(null);
    setTimeout(() => setMensajeError(null), 5000);
  };

  const handleCrearGrupo = async (tallerIds: number[]) => {
    try {
      await crearGrupoTallerEnBD(tallerIds);
      mostrarExito('Grupo creado exitosamente.');
      await cargarDatos();
    } catch (err: any) {
      mostrarError(err.message);
    }
  };

  const handleAgregarAlGrupo = async (grupoId: number, tallerId: number) => {
    try {
      await agregarTallerAGrupoEnBD(grupoId, tallerId);
      mostrarExito('Taller agregado al grupo exitosamente.');
      await cargarDatos();
    } catch (err: any) {
      mostrarError(err.message);
    }
  };

  const handleSalirGrupo = async (tallerId: number) => {
    try {
      await salirDeGrupoEnBD(tallerId);
      mostrarExito('Taller removido del grupo exitosamente.');
      await cargarDatos();
    } catch (err: any) {
      mostrarError(err.message);
    }
  };

  // Group talleres by normalized name
  const talleresAgrupadosPorNombre = React.useMemo(() => {
    const groups: Record<string, TallerApi[]> = {};
    talleres.forEach(t => {
      const nombreNorm = t.nombre.trim().toLowerCase();
      if (!groups[nombreNorm]) {
        groups[nombreNorm] = [];
      }
      groups[nombreNorm].push(t);
    });
    return groups;
  }, [talleres]);

  if (cargando) {
    return <p className="text-gray-600 text-sm">Cargando gestión de grupos...</p>;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mt-8">
      <div className="border-b pb-4 mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Gestión de Grupos de Talleres</h3>
        <p className="text-sm text-gray-500 mt-2">
          Los talleres con el mismo nombre dictados en distintos horarios deben agruparse para que los estudiantes inscritos en uno queden registrados en todos automáticamente.
        </p>
      </div>

      {mensajeExito && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 text-sm rounded border border-green-200">
          {mensajeExito}
        </div>
      )}

      {mensajeError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded border border-red-200">
          {mensajeError}
        </div>
      )}

      <div className="space-y-6">
        {Object.entries(talleresAgrupadosPorNombre).map(([nombreNorm, lista]) => {
          const nombreTaller = lista[0].nombre;
          
          // Find if any taller in this list has a group
          const tallerConGrupo = lista.find(t => t.grupoId !== null && t.grupoId !== undefined);
          const grupoId = tallerConGrupo ? tallerConGrupo.grupoId : null;

          // Check if we can create a group (if at least 2 are not grouped)
          const talleresSinGrupo = lista.filter(t => !t.grupoId);

          return (
            <div key={nombreNorm} className="p-5 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 capitalize">{nombreTaller}</h4>
                  <span className="text-xs text-gray-500">
                    {lista.length} bloque(s) registrado(s) en este semestre ({semestre})
                  </span>
                </div>
                
                {/* Action buttons */}
                <div className="mt-2 sm:mt-0 flex gap-2">
                  {/* Create group if multiple workshops are ungrouped */}
                  {grupoId === null && talleresSinGrupo.length >= 2 && talleresSinGrupo.length <= 3 && (
                    <button
                      onClick={() => handleCrearGrupo(talleresSinGrupo.map(t => t.id))}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded shadow transition"
                    >
                      Crear Grupo ({talleresSinGrupo.length} talleres)
                    </button>
                  )}
                </div>
              </div>

              {/* Workshops list inside the name-group */}
              <div className="space-y-3">
                {lista.map(t => {
                  const diaNombre = DIAS[t.dia] || `Día ${t.dia}`;
                  return (
                    <div key={t.id} className="flex justify-between items-center p-3.5 bg-white rounded-lg border border-gray-150 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">{diaNombre} - Bloque {t.bloque}</span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="text-gray-600">{t.lugar}</span>
                        {t.grupoId ? (
                          <span className="ml-2.5 bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-medium">
                            Grupo #{t.grupoId}
                          </span>
                        ) : (
                          <span className="ml-2.5 bg-yellow-100 text-yellow-800 text-xs px-2.5 py-0.5 rounded-full font-medium">
                            Sin Grupo
                          </span>
                        )}
                      </div>

                      <div>
                        {t.grupoId ? (
                          <button
                            onClick={() => handleSalirGrupo(t.id)}
                            className="px-3 py-1 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 text-xs font-medium rounded transition"
                          >
                            Sacar del Grupo
                          </button>
                        ) : (
                          // If there's an existing group, allow adding to it
                          grupoId !== null && (
                            <button
                              onClick={() => handleAgregarAlGrupo(grupoId as number, t.id)}
                              className="px-3 py-1 bg-green-50 hover:bg-green-100 text-green-600 hover:text-green-700 text-xs font-medium rounded transition"
                            >
                              Agregar al Grupo #{grupoId}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
