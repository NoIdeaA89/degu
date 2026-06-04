import { useMemo, useState, type ReactElement } from "react"
import { useNavigate } from "react-router-dom"
import { type EstudiantePerfil } from "./Perfil"
import Navbar from "../components/navbar"

interface TallerHistorico {
  id: number
  codigo: string
  nombre: string
  semestre: string
  asistencia: number
  estado: "Calificado" | "No califica"
}

interface EstudianteBuscable extends EstudiantePerfil {
  historialTalleres: TallerHistorico[]
}

const estudiantes: EstudianteBuscable[] = [
  {
    nombre: "Camila Rojas Pérez",
    rut: "20123456-7",
    carrera: "Pedagogía en Artes",
    correo: "camila.rojas@ucn.cl",
    semestreActual: "2026-1",
    promedioAsistencia: 82,
    talleresInscritos: 4,
    talleresAprobados: 3,
    historialTalleres: [
      { id: 1, codigo: "TALL-001", nombre: "Teatro", semestre: "2025-1", asistencia: 92, estado: "Calificado" },
      { id: 2, codigo: "TALL-002", nombre: "Danza Contemporánea", semestre: "2025-2", asistencia: 78, estado: "No califica" },
    ],
  },
  {
    nombre: "Diego Torres Álvarez",
    rut: "18456789-0",
    carrera: "Ingeniería Civil",
    correo: "diego.torres@ucn.cl",
    semestreActual: "2026-1",
    promedioAsistencia: 74,
    talleresInscritos: 3,
    talleresAprobados: 2,
    historialTalleres: [
      { id: 1, codigo: "TALL-010", nombre: "Música", semestre: "2025-2", asistencia: 85, estado: "Calificado" },
      { id: 2, codigo: "TALL-011", nombre: "Fotografía", semestre: "2025-1", asistencia: 68, estado: "No califica" },
    ],
  },
]

export default function BuscadorEstudiantes(): ReactElement {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  const resultados = useMemo(() => {
    const texto = query.trim().toLowerCase()
    if (!texto) return estudiantes

    return estudiantes.filter(
      (estudiante) =>
        estudiante.nombre.toLowerCase().includes(texto) ||
        estudiante.rut.toLowerCase().includes(texto),
    )
  }, [query])

  const irAlPerfil = (estudiante: EstudianteBuscable) => {
    navigate("/perfil", {
      state: {
        estudiante,
        historialTalleres: estudiante.historialTalleres,
      },
    })
  }

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-[#f6f7f8] px-4 py-8 sm:px-6">
        <section className="mx-auto w-full max-w-6xl">
          <header className="mb-6 rounded-2xl border border-[#dfe3e7] bg-white p-6 shadow-[0_8px_22px_-18px_rgba(31,35,40,0.28)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2f363d]">
              Buscador de estudiantes
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-[#2f363d]">Buscar por nombre o RUT</h1>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ej: Camila o 20123456-7"
              className="mt-4 w-full rounded-xl border border-[#dfe3e7] bg-[#f8fafc] px-4 py-3 text-[#2f363d] outline-none transition focus:border-[#bfc8d1]"
            />
          </header>

          <div className="grid gap-3">
            {resultados.map((estudiante) => (
              <button
                key={estudiante.rut}
                type="button"
                onClick={() => irAlPerfil(estudiante)}
                className="rounded-xl border border-[#dfe3e7] bg-[#f8fafc] p-4 text-left transition hover:border-[#bfc8d1] hover:bg-white"
              >
                <p className="font-semibold text-[#2f363d]">{estudiante.nombre}</p>
                <p className="text-sm text-[#5a636d]">RUT: {estudiante.rut}</p>
                <p className="text-sm text-[#5a636d]">{estudiante.carrera}</p>
              </button>
            ))}

            {resultados.length === 0 && (
              <p className="text-sm text-[#5a636d]">No se encontraron estudiantes.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}