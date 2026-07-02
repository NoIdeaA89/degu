import React, { useState } from 'react';

interface Taller {
  id: number;
  codigo: string;
  nombre: string;
  porcentajeAsistencia: number;
  satisfaccion: number;
}

const talleresData: Taller[] = [
  { id: 1, codigo: 'TALL-001', nombre: 'Teatro', porcentajeAsistencia: 85, satisfaccion: 4.0 },
  { id: 2, codigo: 'TALL-002', nombre: 'Danza Contemporánea', porcentajeAsistencia: 65, satisfaccion: 4.3 },
  { id: 3, codigo: 'TALL-003', nombre: 'Pintura', porcentajeAsistencia: 40, satisfaccion: 3.0 },
  { id: 4, codigo: 'TALL-004', nombre: 'Música Andina', porcentajeAsistencia: 95, satisfaccion: 4.8 },
];

const ListaTalleres: React.FC = () => {
  const [filtro, setFiltro] = useState<string>("");

  const obtenerColorBarra = (porcentaje: number): string => {
    if (porcentaje >= 80) return 'bg-green-500';
    if (porcentaje >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const talleresFiltrados = [...talleresData].sort((a, b) => {
    if (filtro === "mas") return b.porcentajeAsistencia - a.porcentajeAsistencia;
    if (filtro === "menos") return a.porcentajeAsistencia - b.porcentajeAsistencia;
    return a.id - b.id;
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 text-left">Control de Asistencia</h1>
          <p className="text-gray-600 mt-2">Vista general de participación en los talleres del galpón cultural.</p>
        </div>

        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Ordenar por...</option>
          <option value="mas">Mayor asistencia</option>
          <option value="menos">Menor asistencia</option>
        </select>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {talleresFiltrados.map((taller) => {
            const promedio = taller.satisfaccion; // promedio ya calculado por el backend (1-5)
            const satisfaccionPercent = (promedio / 5) * 100; // para la barra
            return (
              <li
                key={taller.id}
                className="p-5 hover:bg-gray-50 transition-colors duration-150 ease-in-out"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">

                  <div className="mb-4 sm:mb-0 w-full sm:w-1/2">
                    <div className="flex items-center space-x-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-800 bg-blue-100 rounded-full">
                        {taller.codigo}
                      </span>
                    </div>
                    <p className="mt-2 text-lg font-semibold text-gray-900">
                      {taller.nombre}
                    </p>
                  </div>
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-sm font-medium text-gray-600">Porcentaje de asistencia</span>
                      <span className="text-sm font-bold text-gray-800">{taller.porcentajeAsistencia}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${obtenerColorBarra(taller.porcentajeAsistencia)}`}
                        style={{ width: `${taller.porcentajeAsistencia}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-sm font-medium text-gray-600">Satisfacción promedio</span>
                      <span className="text-sm font-bold text-gray-800">{promedio.toFixed(1)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${obtenerColorBarra(satisfaccionPercent)}`}
                        style={{ width: `${satisfaccionPercent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListaTalleres;