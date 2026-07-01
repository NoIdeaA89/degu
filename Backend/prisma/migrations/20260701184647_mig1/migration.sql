/*
  Warnings:

  - Changed the type of `bloque` on the `Sesion` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Asistencia" ADD COLUMN     "comentario" TEXT;

-- AlterTable
ALTER TABLE "Sesion" DROP COLUMN "bloque",
ADD COLUMN     "bloque" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Taller" ADD COLUMN     "bloque" "BloqueHorario" NOT NULL DEFAULT 'A',
ADD COLUMN     "dia" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "lugar" TEXT NOT NULL DEFAULT 'Galpón Cultural';
