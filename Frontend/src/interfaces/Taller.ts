export interface TallerUI {
  id: number;
  nombre: string;
  dia: number;
  bloque: number;
  lugar: string;
  horario?: number;
}
export interface TallerUI {
  id: number;
  nombre: string;
  dia: number;
  bloque: number;
  lugar: string;
  horario?: number;
}

export interface TallerBackend {
  id: number;
  nombre: string;
  descripcion: string;
  horario: string;
  semestre: string;
  estado: boolean;
  lugar: string;
  dia: number;
  bloque: string; // Enum: "A" | "B" | "C" | "C2" | "D" | "E" | "F"
  profesorId: number;
}