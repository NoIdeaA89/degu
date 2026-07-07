export interface TallerUI {
  id: number;
  nombre: string;
  dia: number;
  bloque: number;
  lugar: string;
  horario?: number;
  pendienteAsignacion?: boolean;
  grupoId?: number | null;
}