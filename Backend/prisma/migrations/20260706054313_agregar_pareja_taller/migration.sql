/*
  Warnings:

  - A unique constraint covering the columns `[parejaId]` on the table `Taller` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "BloqueHorario" ADD VALUE 'G';

-- AlterTable
ALTER TABLE "Taller" ADD COLUMN     "parejaId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Taller_parejaId_key" ON "Taller"("parejaId");

-- AddForeignKey
ALTER TABLE "Taller" ADD CONSTRAINT "Taller_parejaId_fkey" FOREIGN KEY ("parejaId") REFERENCES "Taller"("id") ON DELETE SET NULL ON UPDATE CASCADE;
