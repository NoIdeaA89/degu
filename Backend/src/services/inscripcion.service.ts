// services/inscripcion.service.ts
import { prisma } from '../lib/prisma';

export const listarInscritosPorTaller = async (tallerId: number) => {
  const inscripciones = await prisma.inscripcion.findMany({
    where: { tallerId },
    include: {
      estudiante: {
        select: { id: true, nombre: true, apellido: true, rut: true, correo: true }
      }
    },
    orderBy: { estudiante: { nombre: 'asc' } }
  });
  return inscripciones.map((i) => i.estudiante);
};
export const inscribirEstudiante = async (estudianteId: number, tallerId: number) => {
  const taller = await prisma.taller.findUnique({
    where: { id: tallerId },
    select: { id: true, grupoId: true }
  });

  if (!taller) {
    const error: any = new Error('Taller no encontrado');
    error.status = 404;
    throw error;
  }

  let tallerIds = [taller.id];

  if (taller.grupoId) {
    const hermanos = await prisma.taller.findMany({
      where: { grupoId: taller.grupoId },
      select: { id: true }
    });
    tallerIds = hermanos.map((h) => h.id);
  }

  const inscripciones = [];
  for (const id of tallerIds) {
    const inscripcion = await prisma.inscripcion.upsert({
      where: { estudianteId_tallerId: { estudianteId, tallerId: id } },
      update: {},
      create: { estudianteId, tallerId: id },
    });
    inscripciones.push(inscripcion);
  }

  return inscripciones;
};

type EstadoInscripcion = 'inscrito' | 'ya_inscrito' | 'taller_no_encontrado';

export interface ResultadoInscripcion {
  estudianteId: number;
  tallerId: number;
  status: EstadoInscripcion;
}

export const inscribirEstudiantesBatch = async (
  pares: { estudianteId: number; tallerId: number }[]
): Promise<{ inscritos: number; resultados: ResultadoInscripcion[] }> => {
  if (pares.length === 0) return { inscritos: 0, resultados: [] };

  const tallerIdsUnicos = [...new Set(pares.map(p => p.tallerId))];

  const talleres = await prisma.taller.findMany({
    where: { id: { in: tallerIdsUnicos } },
    select: { id: true, grupoId: true }
  });
  const tallerMap = new Map(talleres.map(t => [t.id, t]));

  const gruposIds = [...new Set(talleres.filter(t => t.grupoId).map(t => t.grupoId!))];

  const hermanos = gruposIds.length > 0
    ? await prisma.taller.findMany({
        where: { grupoId: { in: gruposIds } },
        select: { id: true, grupoId: true }
      })
    : [];

  const hermanosPorGrupo = new Map<number, number[]>();
  hermanos.forEach(h => {
    const lista = hermanosPorGrupo.get(h.grupoId!) ?? [];
    lista.push(h.id);
    hermanosPorGrupo.set(h.grupoId!, lista);
  });

  type Expandida = { estudianteId: number; tallerId: number; origen: { estudianteId: number; tallerId: number } };
  const expandidas: Expandida[] = [];
  const noEncontrados: { estudianteId: number; tallerId: number }[] = [];

  for (const par of pares) {
    const taller = tallerMap.get(par.tallerId);
    if (!taller) {
      noEncontrados.push(par);
      continue;
    }
    const idsFinales = taller.grupoId
      ? (hermanosPorGrupo.get(taller.grupoId) ?? [taller.id])
      : [taller.id];
    idsFinales.forEach(id => {
      expandidas.push({ estudianteId: par.estudianteId, tallerId: id, origen: par });
    });
  }

  const existentes = expandidas.length > 0
    ? await prisma.inscripcion.findMany({
        where: { OR: expandidas.map(e => ({ estudianteId: e.estudianteId, tallerId: e.tallerId })) },
        select: { estudianteId: true, tallerId: true },
      })
    : [];
  const existSet = new Set(existentes.map(e => `${e.estudianteId}-${e.tallerId}`));

  const nuevas = expandidas.filter(e => !existSet.has(`${e.estudianteId}-${e.tallerId}`));

  if (nuevas.length > 0) {
    await prisma.inscripcion.createMany({
      data: nuevas.map(n => ({ estudianteId: n.estudianteId, tallerId: n.tallerId })),
      skipDuplicates: true,
    });
  }

  const clavesNuevasPorOrigen = new Set(
    nuevas.map(n => `${n.origen.estudianteId}-${n.origen.tallerId}`)
  );

  const resultados: ResultadoInscripcion[] = pares.map(par => {
    const esNoEncontrado = noEncontrados.some(
      n => n.estudianteId === par.estudianteId && n.tallerId === par.tallerId
    );
    if (esNoEncontrado) {
      return { ...par, status: 'taller_no_encontrado' };
    }
    const clave = `${par.estudianteId}-${par.tallerId}`;
    return { ...par, status: clavesNuevasPorOrigen.has(clave) ? 'inscrito' : 'ya_inscrito' };
  });

  return { inscritos: nuevas.length, resultados };
};