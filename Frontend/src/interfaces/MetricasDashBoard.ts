export interface TallerMetrica {
  id: number;
  nombre: string;
  totalAsistenciasReal: number;
  promedioCalificacion: number | null;
}

export interface MetricasDashboard {
  volumen: {
    totalAsistenciasFisicas: number;
    estudiantesUnicos: number;
  };
  calidad: {
    satisfaccionPromedio: number;
  };
  rendimiento: {
    mejoresAsistencia: TallerMetrica[];
    peoresAsistencia: TallerMetrica[];
    mejoresCalificaciones: TallerMetrica[];
    peoresCalificaciones: TallerMetrica[];
  };
}