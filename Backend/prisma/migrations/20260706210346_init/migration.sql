-- CreateEnum
CREATE TYPE "RolUsuario" AS ENUM ('Administrador', 'Profesor', 'Ayudante', 'Estudiante');

-- CreateEnum
CREATE TYPE "BloqueHorario" AS ENUM ('A', 'B', 'C', 'C2', 'D', 'E', 'F', 'G');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "rut" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" "RolUsuario" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Taller" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "semestre" TEXT NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,
    "profesorId" INTEGER NOT NULL,
    "bloques" "BloqueHorario"[] DEFAULT ARRAY['A']::"BloqueHorario"[],
    "dia" INTEGER NOT NULL DEFAULT 1,
    "lugar" TEXT NOT NULL DEFAULT 'Galpón Cultural',

    CONSTRAINT "Taller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inscripcion" (
    "id" SERIAL NOT NULL,
    "fechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estudianteId" INTEGER NOT NULL,
    "tallerId" INTEGER NOT NULL,

    CONSTRAINT "Inscripcion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sesion" (
    "id" SERIAL NOT NULL,
    "tallerId" INTEGER NOT NULL,
    "fecha" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "qrToken" TEXT NOT NULL,
    "validoHasta" TIMESTAMP(3) NOT NULL,
    "bloque" INTEGER NOT NULL,

    CONSTRAINT "Sesion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asistencia" (
    "id" SERIAL NOT NULL,
    "sesionId" INTEGER NOT NULL,
    "estudianteId" INTEGER NOT NULL,
    "fechaHora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" TEXT NOT NULL DEFAULT 'Ausente',
    "notaSatisfaccion" INTEGER,
    "comentario" TEXT,

    CONSTRAINT "Asistencia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_rut_key" ON "Usuario"("rut");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Inscripcion_estudianteId_tallerId_key" ON "Inscripcion"("estudianteId", "tallerId");

-- CreateIndex
CREATE UNIQUE INDEX "Sesion_qrToken_key" ON "Sesion"("qrToken");

-- CreateIndex
CREATE UNIQUE INDEX "Asistencia_sesionId_estudianteId_key" ON "Asistencia"("sesionId", "estudianteId");

-- AddForeignKey
ALTER TABLE "Taller" ADD CONSTRAINT "Taller_profesorId_fkey" FOREIGN KEY ("profesorId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscripcion" ADD CONSTRAINT "Inscripcion_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscripcion" ADD CONSTRAINT "Inscripcion_tallerId_fkey" FOREIGN KEY ("tallerId") REFERENCES "Taller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sesion" ADD CONSTRAINT "Sesion_tallerId_fkey" FOREIGN KEY ("tallerId") REFERENCES "Taller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_sesionId_fkey" FOREIGN KEY ("sesionId") REFERENCES "Sesion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
