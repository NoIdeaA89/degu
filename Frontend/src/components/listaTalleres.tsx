import React, { useState } from 'react';

interface Taller {
  id: number;
  codigo: string;
  nombre: string;
  porcentajeAsistencia: number;
  satisfaccion: number;
  semestres: string[];
  meses: number[];
  dias: number[];
}

interface Asistencia {
  id: string;
  alumno: string;
  taller: string;
  dia: string;
  bloque: string;
  fecha: string;
  satisfaccion?: number;
}

const asistenciaData: Asistencia[] = [ 

  {"id":"AS001","alumno":"ALU001","taller":"Club TCG","dia":"Lunes","bloque":"3","fecha":"2026-06-01","satisfaccion":4},
{"id":"AS002","alumno":"ALU002","taller":"Club TCG","dia":"Lunes","bloque":"4","fecha":"2026-06-01","satisfaccion":5},
{"id":"AS003","alumno":"ALU003","taller":"Cueca","dia":"Lunes","bloque":"4","fecha":"2026-06-01","satisfaccion":3},
{"id":"AS004","alumno":"ALU004","taller":"Club TCG","dia":"Lunes","bloque":"5","fecha":"2026-06-01","satisfaccion":4},
{"id":"AS005","alumno":"ALU005","taller":"Bandas","dia":"Lunes","bloque":"5","fecha":"2026-06-01","satisfaccion":2},
{"id":"AS006","alumno":"ALU006","taller":"Pole Dance","dia":"Lunes","bloque":"6","fecha":"2026-06-01","satisfaccion":5},

{"id":"AS007","alumno":"ALU007","taller":"Club TCG","dia":"Martes","bloque":"3","fecha":"2026-06-02","satisfaccion":4},
{"id":"AS008","alumno":"ALU008","taller":"Club Gamer","dia":"Martes","bloque":"3","fecha":"2026-06-02","satisfaccion":3},
{"id":"AS009","alumno":"ALU009","taller":"Club TCG","dia":"Martes","bloque":"4","fecha":"2026-06-02","satisfaccion":5},
{"id":"AS010","alumno":"ALU010","taller":"Club Gamer","dia":"Martes","bloque":"4","fecha":"2026-06-02","satisfaccion":4},
{"id":"AS011","alumno":"ALU011","taller":"Cueca","dia":"Martes","bloque":"4","fecha":"2026-06-02","satisfaccion":3},
{"id":"AS012","alumno":"ALU012","taller":"Club TCG","dia":"Martes","bloque":"5","fecha":"2026-06-02","satisfaccion":4},
{"id":"AS013","alumno":"ALU013","taller":"Club Gamer","dia":"Martes","bloque":"5","fecha":"2026-06-02","satisfaccion":5},
{"id":"AS014","alumno":"ALU014","taller":"Jazz Band","dia":"Martes","bloque":"6","fecha":"2026-06-02","satisfaccion":4},

{"id":"AS015","alumno":"ALU015","taller":"Pintura","dia":"Miércoles","bloque":"1","fecha":"2026-06-03","satisfaccion":5},
{"id":"AS016","alumno":"ALU016","taller":"Pintura","dia":"Miércoles","bloque":"2","fecha":"2026-06-03","satisfaccion":4},
{"id":"AS017","alumno":"ALU017","taller":"Canto","dia":"Miércoles","bloque":"2","fecha":"2026-06-03","satisfaccion":3},
{"id":"AS018","alumno":"ALU018","taller":"Danza","dia":"Miércoles","bloque":"2","fecha":"2026-06-03","satisfaccion":5},
{"id":"AS019","alumno":"ALU019","taller":"Pintura","dia":"Miércoles","bloque":"3","fecha":"2026-06-03","satisfaccion":4},
{"id":"AS020","alumno":"ALU020","taller":"Canto","dia":"Miércoles","bloque":"3","fecha":"2026-06-03","satisfaccion":5},
{"id":"AS021","alumno":"ALU001","taller":"Danza","dia":"Miércoles","bloque":"4","fecha":"2026-06-03","satisfaccion":4},
{"id":"AS022","alumno":"ALU002","taller":"Teatro","dia":"Miércoles","bloque":"4","fecha":"2026-06-03","satisfaccion":3},
{"id":"AS023","alumno":"ALU003","taller":"Música","dia":"Miércoles","bloque":"6","fecha":"2026-06-03","satisfaccion":5},
{"id":"AS024","alumno":"ALU004","taller":"Música","dia":"Miércoles","bloque":"7","fecha":"2026-06-03","satisfaccion":4},

{"id":"AS025","alumno":"ALU005","taller":"Club de literatura","dia":"Jueves","bloque":"2","fecha":"2026-06-04","satisfaccion":4},
{"id":"AS026","alumno":"ALU006","taller":"Fotografía","dia":"Jueves","bloque":"2","fecha":"2026-06-04","satisfaccion":5},
{"id":"AS027","alumno":"ALU007","taller":"Fotografía","dia":"Jueves","bloque":"3","fecha":"2026-06-04","satisfaccion":4},
{"id":"AS028","alumno":"ALU008","taller":"Teatro","dia":"Jueves","bloque":"4","fecha":"2026-06-04","satisfaccion":3},
{"id":"AS029","alumno":"ALU009","taller":"Club TCG","dia":"Jueves","bloque":"4","fecha":"2026-06-04","satisfaccion":5},
{"id":"AS030","alumno":"ALU010","taller":"Pole Dance","dia":"Jueves","bloque":"6","fecha":"2026-06-04","satisfaccion":4},

{"id":"AS031","alumno":"ALU011","taller":"Club TCG","dia":"Viernes","bloque":"4","fecha":"2026-06-05","satisfaccion":4},
{"id":"AS032","alumno":"ALU012","taller":"Jazz Band","dia":"Viernes","bloque":"5","fecha":"2026-06-05","satisfaccion":5},
{"id":"AS033","alumno":"ALU013","taller":"Bandas","dia":"Viernes","bloque":"5","fecha":"2026-06-05","satisfaccion":3},

{"id":"AS034","alumno":"ALU014","taller":"Club TCG","dia":"Lunes","bloque":"3","fecha":"2026-06-08","satisfaccion":4},
{"id":"AS035","alumno":"ALU015","taller":"Club TCG","dia":"Martes","bloque":"4","fecha":"2026-06-09","satisfaccion":5},
{"id":"AS036","alumno":"ALU016","taller":"Club Gamer","dia":"Martes","bloque":"5","fecha":"2026-06-09","satisfaccion":4},
{"id":"AS037","alumno":"ALU017","taller":"Pintura","dia":"Miércoles","bloque":"1","fecha":"2026-06-10","satisfaccion":5},
{"id":"AS038","alumno":"ALU018","taller":"Canto","dia":"Miércoles","bloque":"2","fecha":"2026-06-10","satisfaccion":4},
{"id":"AS039","alumno":"ALU019","taller":"Teatro","dia":"Jueves","bloque":"4","fecha":"2026-06-11","satisfaccion":5},
{"id":"AS040","alumno":"ALU020","taller":"Bandas","dia":"Viernes","bloque":"5","fecha":"2026-06-12","satisfaccion":4},

{"id":"AS041","alumno":"ALU001","taller":"Club TCG","dia":"Lunes","bloque":"5","fecha":"2026-06-15","satisfaccion":4},
{"id":"AS042","alumno":"ALU002","taller":"Club Gamer","dia":"Martes","bloque":"3","fecha":"2026-06-16","satisfaccion":5},
{"id":"AS043","alumno":"ALU003","taller":"Jazz Band","dia":"Martes","bloque":"6","fecha":"2026-06-16","satisfaccion":4},
{"id":"AS044","alumno":"ALU004","taller":"Música","dia":"Miércoles","bloque":"6","fecha":"2026-06-17","satisfaccion":5},
{"id":"AS045","alumno":"ALU005","taller":"Fotografía","dia":"Jueves","bloque":"3","fecha":"2026-06-18","satisfaccion":4},
{"id":"AS046","alumno":"ALU006","taller":"Club TCG","dia":"Viernes","bloque":"4","fecha":"2026-06-19","satisfaccion":5},
{"id":"AS047","alumno":"ALU007","taller":"Cueca","dia":"Martes","bloque":"4","fecha":"2026-06-23","satisfaccion":4},
{"id":"AS048","alumno":"ALU008","taller":"Danza","dia":"Miércoles","bloque":"4","fecha":"2026-06-24","satisfaccion":5},
{"id":"AS049","alumno":"ALU009","taller":"Club de literatura","dia":"Jueves","bloque":"2","fecha":"2026-06-25","satisfaccion":4},
{"id":"AS050","alumno":"ALU010","taller":"Pole Dance","dia":"Jueves","bloque":"6","fecha":"2026-06-25","satisfaccion":5} ];

const talleresBase: Record<string, string> = {
  TAL001: 'Teatro',
  TAL002: 'Danza Contemporánea',
  TAL003: 'Pintura',
  TAL004: 'Música Andina',
  TAL005: 'Taller 5',
};

const obtenerSemestreDesdeFecha = (fecha: string): string => {
  const date = new Date(`${fecha}T00:00:00`);
  const año = date.getFullYear();
  const mes = date.getMonth() + 1;
  const semestre = mes <= 6 ? 1 : 2;
  return `${año}-${semestre}`;
};

const obtenerMesDesdeFecha = (fecha: string): number => {
  return new Date(`${fecha}T00:00:00`).getMonth() + 1;
};

const obtenerNombreMes = (mes: number): string => {
  const meses = ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  return meses[mes] || '';
};

const obtenerDiaDesdeFecha = (fecha: string): number => {
  return new Date(`${fecha}T00:00:00`).getDay();
};

const obtenerNombreDia = (dia: number): string => {
  const dias = ['', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  return dias[dia] || '';
};

const resumenPorTaller = asistenciaData.reduce((acc, item) => {
  const mes = obtenerMesDesdeFecha(item.fecha);
  const semestre = obtenerSemestreDesdeFecha(item.fecha);
  const dia = obtenerDiaDesdeFecha(item.fecha);

  if (!acc[item.taller]) {
    acc[item.taller] = {
      codigo: item.taller,
      nombre: talleresBase[item.taller] ?? item.taller,
      asistenciasReales: 0,
      alumnosUnicos: new Set<string>(),
      diasUnicos: new Set<string>(),
      semestres: new Set<string>(),
      meses: new Set<number>(),
      dias: new Set<number>(),
      sumaSatisfaccion: 0,
      conteoSatisfaccion: 0,
    };
  }

  acc[item.taller].asistenciasReales += 1;
  acc[item.taller].alumnosUnicos.add(item.alumno);
  acc[item.taller].diasUnicos.add(item.fecha);
  acc[item.taller].semestres.add(semestre);
  acc[item.taller].meses.add(mes);
  acc[item.taller].dias.add(dia);

  if (typeof item.satisfaccion === 'number') {
    acc[item.taller].sumaSatisfaccion += item.satisfaccion;
    acc[item.taller].conteoSatisfaccion += 1;
  }

  return acc;
}, {} as Record<string, {
  codigo: string;
  nombre: string;
  asistenciasReales: number;
  alumnosUnicos: Set<string>;
  diasUnicos: Set<string>;
  semestres: Set<string>;
  meses: Set<number>;
  dias: Set<number>;
  sumaSatisfaccion: number;
  conteoSatisfaccion: number;
}>);

const talleresData: Taller[] = Object.values(resumenPorTaller).map((taller, index) => {
  const alumnosInscritos = taller.alumnosUnicos.size;
  const diasDictados = taller.diasUnicos.size;
  const asistenciasEsperadas = alumnosInscritos * diasDictados;
  const porcentaje = asistenciasEsperadas > 0
    ? +(taller.asistenciasReales / asistenciasEsperadas * 100).toFixed(1)
    : 0;

  const satisfaccionPromedio = taller.conteoSatisfaccion > 0
    ? +(taller.sumaSatisfaccion / taller.conteoSatisfaccion).toFixed(1)
    : 0;

  return {
    id: index + 1,
    codigo: taller.codigo,
    nombre: taller.nombre,
    porcentajeAsistencia: porcentaje,
    satisfaccion: satisfaccionPromedio,
    semestres: Array.from(taller.semestres).sort(),
    meses: Array.from(taller.meses).sort((a, b) => a - b),
    dias: Array.from(taller.dias).sort((a, b) => a - b),
  };
});

const obtenerColorBarra = (porcentaje: number): string => {
  if (porcentaje >= 80) return 'bg-green-500';
  if (porcentaje >= 50) return 'bg-yellow-500';
  return 'bg-red-500';
};

const ListaTalleres: React.FC = () => {
  const semestresDisponibles = Array.from(new Set(talleresData.flatMap(t => t.semestres))).sort().reverse();
  const semestreDefault = semestresDisponibles[0] || "";

  const [filtro, setFiltro] = useState<string>("");
  const [semestreFiltro, setSemestreFiltro] = useState<string>(semestreDefault);
  const [mesFiltro, setMesFiltro] = useState<string>("");
  const [diaFiltro, setDiaFiltro] = useState<string>("");
  const [fechaInicioFiltro, setFechaInicioFiltro] = useState<string>("");
  const [fechaFinFiltro, setFechaFinFiltro] = useState<string>("");

  const talleresFiltrados = [...talleresData]
    .filter(taller => !semestreFiltro || taller.semestres.includes(semestreFiltro))
    .filter(taller => !mesFiltro || taller.meses.includes(Number(mesFiltro)))
    .filter(taller => !diaFiltro || taller.dias.includes(Number(diaFiltro)))
    .filter(taller => {
      if (!fechaInicioFiltro && !fechaFinFiltro) return true;

      const fechasDelTaller = asistenciaData
        .filter(a => a.taller === taller.nombre)
        .map(a => a.fecha);

      return fechasDelTaller.some((fecha) => {
        const cumpleInicio = !fechaInicioFiltro || fecha >= fechaInicioFiltro;
        const cumpleFin = !fechaFinFiltro || fecha <= fechaFinFiltro;
        return cumpleInicio && cumpleFin;
      });
    })
    .sort((a, b) => {
      if (filtro === "mas") return b.porcentajeAsistencia - a.porcentajeAsistencia;
      if (filtro === "menos") return a.porcentajeAsistencia - b.porcentajeAsistencia;
      return a.id - b.id;
    });

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 text-left">Control de Asistencia</h1>
          <p className="text-gray-600 mt-2">Vista general de participación en los talleres del galpón cultural.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ordenar por</label>
            <select
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Ordenar por...</option>
              <option value="mas">Mayor asistencia</option>
              <option value="menos">Menor asistencia</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Semestre</label>
            <select
              value={semestreFiltro}
              onChange={(e) => setSemestreFiltro(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {semestresDisponibles.map((semestre) => (
                <option key={semestre} value={semestre}>
                  {semestre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mes</label>
            <select
              value={mesFiltro}
              onChange={(e) => setMesFiltro(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              style={{ backgroundColor: 'white', color: '#111827' }}
            >
              <option value="" className="bg-white text-gray-900">
                Todos los meses
              </option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((mes) => (
                <option key={mes} value={mes} className="bg-white text-gray-900">
                  {obtenerNombreMes(mes)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Día</label>
            <select
              value={diaFiltro}
              onChange={(e) => setDiaFiltro(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todos los días</option>
              <option value="1">Lunes</option>
              <option value="2">Martes</option>
              <option value="3">Miércoles</option>
              <option value="4">Jueves</option>
              <option value="5">Viernes</option>
              <option value="6">Sábado</option>
              <option value="0">Domingo</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fecha inicio</label>
            <input
              type="date"
              value={fechaInicioFiltro}
              onChange={(e) => setFechaInicioFiltro(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fecha fin</label>
            <input
              type="date"
              value={fechaFinFiltro}
              onChange={(e) => setFechaFinFiltro(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={() => {
                setFiltro("");
                setSemestreFiltro(semestreDefault);
                setMesFiltro("");
                setDiaFiltro("");
                setFechaInicioFiltro("");
                setFechaFinFiltro("");
              }}
              className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors duration-150"
            >
              Limpiar filtros
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {talleresFiltrados.map((taller) => {
            const promedio = taller.satisfaccion;
            const satisfaccionPercent = (promedio / 5) * 100;
            return (
              <li
                key={taller.id}
                className="p-5 hover:bg-gray-50 transition-colors duration-150 ease-in-out"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">

                  <div className="mb-4 sm:mb-0 w-full sm:w-1/2">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-800 bg-blue-100 rounded-full">
                        {taller.codigo}
                      </span>
                      {taller.semestres.length > 0 && (
                        <span className="text-xs text-gray-600 font-medium">
                          S{taller.semestres.join(', S')}
                        </span>
                      )}
                      <div>·</div>
                      {taller.dias.length > 0 && (
                        <span className="text-xs text-gray-600 font-medium">
                          {taller.dias.map(obtenerNombreDia).join(', ')}
                        </span>
                      )}
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