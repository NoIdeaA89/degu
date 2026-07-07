/*
  Warnings:

  - You are about to drop the column `parejaId` on the `Taller` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Taller" DROP CONSTRAINT "Taller_parejaId_fkey";

-- DropIndex
DROP INDEX "Taller_parejaId_key";

-- AlterTable
ALTER TABLE "Taller" DROP COLUMN "parejaId",
ADD COLUMN     "grupoId" INTEGER;

-- CreateTable
CREATE TABLE "GrupoTaller" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "GrupoTaller_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Taller" ADD CONSTRAINT "Taller_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "GrupoTaller"("id") ON DELETE SET NULL ON UPDATE CASCADE;
