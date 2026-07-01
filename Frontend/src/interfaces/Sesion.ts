export interface Sesion {
  id: number;
  bloque: number;
  qrToken: string;
  validoHasta: Date;
  fecha: Date;
  tallerId: number;
}
