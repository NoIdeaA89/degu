export interface Profesor {
  id: number;
  nombre: string;
  apellido: string;
  rut: string;
  rol: string;
  [key: string]: any;
}

export interface AgregarProfesorParams {
  nombre: string;
  apellido: string;
  rut: string;
  correo: string;
}

export type AgregarProfesorResponse = Profesor;