import type { CellValue } from "exceljs";

export const obtenerTextoCelda = (value: CellValue): string => {
  if (value === null || value === undefined) return '';

  if (typeof value === 'object' && 'text' in value) {
    return String((value as any).text ?? '').trim();
  }

  if (typeof value === 'object' && 'richText' in value) {
    return (value as any).richText.map((rt: any) => rt.text).join('').trim();
  }

  if (typeof value === 'object' && 'result' in value) {
    return String((value as any).result ?? '').trim();
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  return String(value).trim();
};