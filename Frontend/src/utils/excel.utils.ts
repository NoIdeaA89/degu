import ExcelJS from "exceljs";

export const obtenerTextoCelda = (value: ExcelJS.CellValue): string => {
  if (value === null || value === undefined) return "";

  if (typeof value === "object" && "text" in value) {
    return String((value as any).text ?? "").trim();
  }

  if (typeof value === "object" && "richText" in value) {
    return (value as any).richText.map((rt: any) => rt.text).join("").trim();
  }

  if (typeof value === "object" && "result" in value) {
    return String((value as any).result ?? "").trim();
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  return String(value).trim();
};

export interface ExportarPerfilEstudianteExcelArgs {
  nombre: string;
  apellido?: string;
  rut: string;
  correo: string;
  promedioAsistencia: number;
  talleresInscritos: number;
  talleresAprobados: number;
  historial: Array<{
    codigo: string;
    nombre: string;
    semestre: string;
    asistencia: number;
    estado: string;
  }>;
}

export async function exportarPerfilEstudianteExcel({
  nombre,
  apellido,
  rut,
  correo,
  promedioAsistencia,
  talleresInscritos,
  talleresAprobados,
  historial,
}: ExportarPerfilEstudianteExcelArgs): Promise<void> {
  const workbook = new ExcelJS.Workbook();

  workbook.creator = "Degu";
  workbook.created = new Date();
  workbook.modified = new Date();

  const hojaPerfil = workbook.addWorksheet("Perfil");
  hojaPerfil.columns = [
    { header: "Campo", key: "campo", width: 24 },
    { header: "Valor", key: "valor", width: 44 },
  ];

  hojaPerfil.addRows([
    { campo: "Nombre", valor: `${nombre} ${apellido ?? ""}`.trim() },
    { campo: "RUT", valor: rut },
    { campo: "Correo", valor: correo },
    { campo: "Promedio asistencia", valor: `${promedioAsistencia}%` },
    { campo: "Talleres inscritos", valor: talleresInscritos },
    { campo: "Talleres aprobados", valor: talleresAprobados },
  ]);

  hojaPerfil.getRow(1).font = { bold: true };
  hojaPerfil.getRow(1).fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFE5E9EE" },
  };

  hojaPerfil.getColumn("campo").alignment = { vertical: "middle" };
  hojaPerfil.getColumn("valor").alignment = { vertical: "middle" };

  const hojaHistorial = workbook.addWorksheet("Historial");
  hojaHistorial.columns = [
    { header: "Taller", key: "nombre", width: 34 },
    { header: "Semestre", key: "semestre", width: 14 },
    { header: "Asistencia", key: "asistencia", width: 14 },
    { header: "Estado", key: "estado", width: 18 },
  ];

  historial.forEach((taller) => {
    hojaHistorial.addRow({
      nombre: taller.nombre,
      semestre: taller.semestre,
      asistencia: `${taller.asistencia}%`,
      estado: taller.estado,
    });
  });

  hojaHistorial.getRow(1).font = { bold: true };
  hojaHistorial.getRow(1).fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFE5E9EE" },
  };

  hojaHistorial.eachRow((row, rowNumber) => {
    row.alignment = { vertical: "middle" };
    if (rowNumber > 1) {
      row.getCell(4).alignment = { horizontal: "center" };
      row.getCell(5).alignment = { horizontal: "center" };
    }
  });

  const buffer = await workbook.xlsx.writeBuffer();

  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const url = URL.createObjectURL(blob);
  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = `estudiante_${rut}.xlsx`;
  enlace.click();
  URL.revokeObjectURL(url);
}

