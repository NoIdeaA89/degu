/*
  Warnings:

  - Added the required column `carrera` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefono` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "carrera" TEXT NOT NULL,
ADD COLUMN     "telefono" TEXT NOT NULL;
