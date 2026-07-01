const DICCIONARIO_DIAS: Record<string, number> = {
  'lunes': 1,
  'martes': 2,
  'miercoles': 3,
  'miércoles': 3, 
  'jueves': 4,
  'viernes': 5,
  'sabado': 6,
  'sábado': 6,
  'domingo': 7
};

const DICCIONARIO_BLOQUES = [
  { bloque: 1, inicio: "08:10", fin: "09:30" },
  { bloque: 2, inicio: "09:55", fin: "11:20" },
  { bloque: 3, inicio: "11:30", fin: "12:50" },
  { bloque: 4, inicio: "14:30", fin: "15:50" }, 
  { bloque: 5, inicio: "16:00", fin: "17:20" },
  { bloque: 6, inicio: "17:30", fin: "18:50" }
];

export const extraerCoordenadasGrilla = (horarioTexto: string) => {
  let diaResult = 1;
  let bloqueResult = 1;

  const textoMinusculas = horarioTexto.toLowerCase();

  for (const [diaNombre, diaNumero] of Object.entries(DICCIONARIO_DIAS)) {
    if (textoMinusculas.includes(diaNombre)) {
      diaResult = diaNumero;
      break;
    }
  }

  for (const item of DICCIONARIO_BLOQUES) {
    if (textoMinusculas.includes(item.inicio) && textoMinusculas.includes(item.fin)) {
      bloqueResult = item.bloque;
      break;
    }
  }

  return {
    dia: diaResult,
    bloque: bloqueResult
  };
};