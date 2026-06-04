import { prisma } from '../src/lib/prisma';
import { randomUUID } from 'crypto'; 
import bcrypt from 'bcrypt'; 

async function main() {
  console.log('🌱 Iniciando seed alineado al esquema oficial...');

  try {
    console.log('🧹 Limpiando tablas viejas...');
    await prisma.asistencia.deleteMany();
    await prisma.sesion.deleteMany();
    await prisma.inscripcion.deleteMany();
    await prisma.taller.deleteMany();
    await prisma.usuario.deleteMany();

    console.log('🔐 Encriptando contraseñas por defecto...');
    const passwordHasheada = await bcrypt.hash('password123', 10);

    console.log('👨‍🏫 Creando usuarios (Profesor y Estudiantes)...');
    const profesor = await prisma.usuario.create({
      data: {
        nombre: "Edgar",
        apellido: "Gallardo",
        rut: "12.345.678-9",
        correo: "Edgar.Gallardo@ucn.cl",
        password: passwordHasheada, 
        rol: "Administrador" 
      }
    });

    const estudiante1 = await prisma.usuario.create({
      data: {
        nombre: "Lucas",
        apellido: "Guidotti",
        rut: "19.876.543-2",
        correo: "lucas@alumnos.ucn.cl",
        password: passwordHasheada, 
        rol: "Estudiante"
      }
    });

    const estudiante2 = await prisma.usuario.create({
      data: {
        nombre: "Joaquín",
        apellido: "Iriarte",
        rut: "20.123.456-7",
        correo: "joaquin@alumnos.ucn.cl",
        password: passwordHasheada, 
        rol: "Estudiante"
      }
    });

    console.log('📚 Abriendo talleres...');
    const tallerTeatro = await prisma.taller.create({
      data: {
        nombre: "Taller de Teatro",
        descripcion: "Expresión corporal en el Galpón Cultural.",
        horario: "Miércoles 17:00 - 19:00",
        semestre: "2026-1",
        profesorId: profesor.id
      }
    });

    console.log('📝 Inscribiendo alumnos...');
    await prisma.inscripcion.createMany({
      data: [
        { estudianteId: estudiante1.id, tallerId: tallerTeatro.id },
        { estudianteId: estudiante2.id, tallerId: tallerTeatro.id }
      ]
    });

    console.log('⏰ Generando la sesión activa y su QR Token...');
    const ahora = new Date();
 
    const tiempoValidez = new Date(ahora.getTime() + 5 * 60000); 

    const sesionActiva = await prisma.sesion.create({
      data: {
        tallerId: tallerTeatro.id,
        fecha: ahora,
        bloque: "C2", 
        qrToken: randomUUID(), 
        validoHasta: tiempoValidez
      }
    });

    console.log('✅ Seed completado impecablemente.');
    console.log('----------------------------------------------------');
    console.log(`📌 Taller ID: ${tallerTeatro.id}`);
    console.log(`📌 Sesión ID: ${sesionActiva.id}`);
    console.log(`🔑 QR Token para probar endpoints: ${sesionActiva.qrToken}`);
    console.log('----------------------------------------------------');

  } catch (e) {
    console.error('❌ Error fatal en el seed:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();