/**
 * Utilidades para cálculo de semestres
 */

export const obtenerSemestreActual = (): string => {
  const fecha = new Date();
  const anio = fecha.getFullYear();
  const mes = fecha.getMonth();
  
  // Semestre 1: enero-junio (meses 0-5)
  // Semestre 2: julio-diciembre (meses 6-11)
  const semestre = mes <= 5 ? 1 : 2;
  return `${anio}-${semestre}`;
};

export const obtenerSemestreAnterior = (semestre: string): string => {
  const [anioTexto, semestreTexto] = semestre.split("-");
  const anio = Number(anioTexto);
  const numeroSemestre = Number(semestreTexto);

  if (numeroSemestre === 2) {
    return `${anio}-1`;
  }

  return `${anio - 1}-2`;
};

/**
 * Obtiene el semestre anterior al actual
 */
export const obtenerSemestreAnteriorActual = (): string => {
  const actual = obtenerSemestreActual();
  return obtenerSemestreAnterior(actual);
};
