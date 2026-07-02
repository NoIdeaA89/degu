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
  horario?: string | null;
  semestre: string;
  estado: boolean;
  lugar: string;
  dia?: number | null;
  bloque?: string | null; // Enum: "A" | "B" | "C" | "C2" | "D" | "E" | "F"
  profesorId: number;
}