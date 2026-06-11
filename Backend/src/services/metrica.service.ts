import { prisma } from '../lib/prisma';

export const obtenerResumenMetricas = async () => {
  const [totalAsistenciasGlobal, estudiantesAgrupados, agregacionSatisfaccion, talleresBD] = await Promise.all([
    prisma.asistencia.count({ where: { estado: { not: 'Ausente' } } }),
    prisma.asistencia.groupBy({ by: ['estudianteId'], where: { estado: { not: 'Ausente' } } }),
    prisma.asistencia.aggregate({ _avg: { notaSatisfaccion: true }, where: { notaSatisfaccion: { not: null } } }),
    
    prisma.taller.findMany({
      where: { estado: true },
      select: {
        id: true,
        nombre: true,
        sesiones: {
          select: {
            _count: { select: { asistencias: { where: { estado: { not: 'Ausente' } } } } },
            asistencias: {
              where: { notaSatisfaccion: { not: null } },
              select: { notaSatisfaccion: true }
            }
          }
        }
      }
    })
  ]);

  const talleresProcesados = talleresBD.map(taller => {
    let totalAsistencias = 0;
    let sumaNotas = 0;
    let cantidadNotas = 0;

    taller.sesiones.forEach(sesion => {
      totalAsistencias += sesion._count.asistencias;
      sesion.asistencias.forEach(asistencia => {
        if (asistencia.notaSatisfaccion) {
          sumaNotas += asistencia.notaSatisfaccion;
          cantidadNotas++;
        }
      });
    });

    return {
      id: taller.id,
      nombre: taller.nombre,
      totalAsistenciasReal: totalAsistencias,
      promedioCalificacion: cantidadNotas > 0 ? Number((sumaNotas / cantidadNotas).toFixed(1)) : null
    };
  });

  const talleresConAsistencia = talleresProcesados.filter(t => t.totalAsistenciasReal > 0);
  const talleresEvaluados = talleresProcesados.filter(t => t.promedioCalificacion !== null);

  return {
    volumen: {
      totalAsistenciasFisicas: totalAsistenciasGlobal,
      estudiantesUnicos: estudiantesAgrupados.length
    },
    calidad: {
      satisfaccionPromedio: agregacionSatisfaccion._avg.notaSatisfaccion 
        ? Number(agregacionSatisfaccion._avg.notaSatisfaccion.toFixed(1)) 
        : 0
    },
    rendimiento: {
      mejoresAsistencia: [...talleresConAsistencia]
        .sort((a, b) => b.totalAsistenciasReal - a.totalAsistenciasReal).slice(0, 3),
      
      peoresAsistencia: [...talleresConAsistencia]
        .sort((a, b) => a.totalAsistenciasReal - b.totalAsistenciasReal).slice(0, 3),
      
      mejoresCalificaciones: [...talleresEvaluados]
        .sort((a, b) => (b.promedioCalificacion as number) - (a.promedioCalificacion as number)).slice(0, 3),

      peoresCalificaciones: [...talleresEvaluados]
        .sort((a, b) => (a.promedioCalificacion as number) - (b.promedioCalificacion as number)).slice(0, 3)
    }
  };
};