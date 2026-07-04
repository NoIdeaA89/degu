import { prisma } from '../src/lib/prisma';
import { randomUUID } from 'crypto'; 
import bcrypt from 'bcrypt'; 

async function main() {
  console.log('🌱 Iniciando seed analítico para el Galpón Cultural...');

  try {
    console.log('🧹 Limpiando tablas viejas...');
    await prisma.asistencia.deleteMany();
    await prisma.sesion.deleteMany();
    await prisma.inscripcion.deleteMany();
    await prisma.taller.deleteMany();
    await prisma.usuario.deleteMany();

    console.log('🔐 Encriptando contraseñas por defecto...');
    const passwordHasheada = await bcrypt.hash('password123', 10);

    console.log('👨‍🏫 Creando usuarios (Administrador y Equipo de Estudiantes)...');
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

    // Creación masiva de estudiantes
    const estudiantesData = [
      { nombre: "Lucas", apellido: "Guidotti", rut: "19.876.543-2", correo: "lucas@alumnos.ucn.cl" },
      { nombre: "Joaquín", apellido: "Iriarte", rut: "20.123.456-7", correo: "joaquin@alumnos.ucn.cl" },
      { nombre: "Luciano", apellido: "Bastías", rut: "21.111.111-1", correo: "luciano@alumnos.ucn.cl" },
      { nombre: "José", apellido: "Gonzalez", rut: "22.222.222-2", correo: "jose@alumnos.ucn.cl" },
      { nombre: "Matías", apellido: "Manríquez", rut: "23.333.333-3", correo: "matias@alumnos.ucn.cl" }
    ];

    const estudiantes = await Promise.all(
      estudiantesData.map(est => prisma.usuario.create({
        data: { ...est, password: passwordHasheada, rol: "Estudiante" }
      }))
    );

    const [lucas, joaquin, luciano, jose, matias] = estudiantes;

    console.log('📚 Abriendo catálogo de talleres...');
    // AÑADIDO: Ahora declaramos explícitamente el 'dia' y 'bloque' numérico para alimentar tu grilla de React
    const tallerGuitarra = await prisma.taller.create({ 
      data: { nombre: "Taller de Guitarra", descripcion: "Nivel básico e intermedio.", horario: "Lunes 15:00 - 17:00", dia: 1, bloque: "D", semestre: "2026-1", lugar: "Sala de Piano", profesorId: profesor.id } 
    });
    const tallerTeatro = await prisma.taller.create({ 
      data: { nombre: "Taller de Teatro", descripcion: "Expresión corporal.", horario: "Miércoles 17:00 - 19:00", dia: 3, bloque: "F", semestre: "2026-1", lugar: "Salón de Artes Escénicas (Salón Exterior)", profesorId: profesor.id } 
    });
    const tallerDanza = await prisma.taller.create({ 
      data: { nombre: "Danza Contemporánea", descripcion: "Ritmo y movimiento.", horario: "Martes 10:00 - 12:00", dia: 2, bloque: "B", semestre: "2026-1", lugar: "Salón Graciela Ramos (Sala de Espejos)", profesorId: profesor.id } 
    });
    const tallerPintura = await prisma.taller.create({ 
      data: { nombre: "Pintura al Óleo", descripcion: "Técnicas clásicas.", horario: "Viernes 14:00 - 16:00", dia: 5, bloque: "D", semestre: "2026-1", lugar: "Sala de Música", profesorId: profesor.id } 
    });
    const tallerFoto = await prisma.taller.create({ 
      data: { nombre: "Fotografía Digital", descripcion: "Uso de cámara manual.", horario: "Jueves 08:00 - 10:00", dia: 4, bloque: "A", semestre: "2026-1", lugar: "Salón de Artes Escénicas (Salón Exterior)", profesorId: profesor.id } 
    });

    // Talleres para 2026-2 (semestre actual)
    const tallerGuitarra2 = await prisma.taller.create({ 
      data: { nombre: "Taller de Guitarra", descripcion: "Nivel intermedio y avanzado.", horario: "Lunes 15:00 - 17:00", dia: 1, bloque: "D", semestre: "2026-2", lugar: "Sala de Piano", profesorId: profesor.id } 
    });
    const tallerTeatro2 = await prisma.taller.create({ 
      data: { nombre: "Taller de Teatro", descripcion: "Técnicas de actuación.", horario: "Miércoles 17:00 - 19:00", dia: 3, bloque: "F", semestre: "2026-2", lugar: "Salón de Artes Escénicas (Salón Exterior)", profesorId: profesor.id } 
    });
    const tallerDanza2 = await prisma.taller.create({ 
      data: { nombre: "Danza Contemporánea", descripcion: "Movimiento moderno.", horario: "Martes 10:00 - 12:00", dia: 2, bloque: "B", semestre: "2026-2", lugar: "Salón Graciela Ramos (Sala de Espejos)", profesorId: profesor.id } 
    });
    const tallerCine = await prisma.taller.create({ 
      data: { nombre: "Taller de Cine", descripcion: "Producción de cortometrajes.", horario: "Viernes 14:00 - 16:00", dia: 5, bloque: "C", semestre: "2026-2", lugar: "Sala de Música", profesorId: profesor.id } 
    });
    const tallerMusicaElectronica = await prisma.taller.create({ 
      data: { nombre: "Música Electrónica", descripcion: "Producción musical digital.", horario: "Jueves 18:00 - 20:00", dia: 4, bloque: "G", semestre: "2026-2", lugar: "Salón Graciela Ramos (Sala de Espejos)", profesorId: profesor.id } 
    });

    console.log('📝 Inscribiendo alumnos en múltiples talleres...');
    const inscripciones = [
      // 2026-1
      { estudianteId: lucas.id, tallerId: tallerGuitarra.id }, { estudianteId: joaquin.id, tallerId: tallerGuitarra.id }, { estudianteId: luciano.id, tallerId: tallerGuitarra.id }, { estudianteId: jose.id, tallerId: tallerGuitarra.id }, { estudianteId: matias.id, tallerId: tallerGuitarra.id },
      { estudianteId: lucas.id, tallerId: tallerTeatro.id }, { estudianteId: joaquin.id, tallerId: tallerTeatro.id }, { estudianteId: luciano.id, tallerId: tallerTeatro.id },
      { estudianteId: jose.id, tallerId: tallerPintura.id }, { estudianteId: matias.id, tallerId: tallerPintura.id },
      { estudianteId: lucas.id, tallerId: tallerDanza.id }, { estudianteId: luciano.id, tallerId: tallerDanza.id },
      { estudianteId: joaquin.id, tallerId: tallerFoto.id },
      // 2026-2
      { estudianteId: lucas.id, tallerId: tallerGuitarra2.id }, { estudianteId: joaquin.id, tallerId: tallerGuitarra2.id }, { estudianteId: luciano.id, tallerId: tallerGuitarra2.id }, { estudianteId: jose.id, tallerId: tallerGuitarra2.id }, { estudianteId: matias.id, tallerId: tallerGuitarra2.id },
      { estudianteId: lucas.id, tallerId: tallerTeatro2.id }, { estudianteId: joaquin.id, tallerId: tallerTeatro2.id }, { estudianteId: luciano.id, tallerId: tallerTeatro2.id },
      { estudianteId: jose.id, tallerId: tallerCine.id }, { estudianteId: matias.id, tallerId: tallerCine.id },
      { estudianteId: lucas.id, tallerId: tallerDanza2.id }, { estudianteId: luciano.id, tallerId: tallerDanza2.id },
      { estudianteId: joaquin.id, tallerId: tallerMusicaElectronica.id }
    ];
    await prisma.inscripcion.createMany({ data: inscripciones });

    console.log('⏰ Generando sesiones históricas y activas...');
    const ahora = new Date();
    const validez = new Date(ahora.getTime() + 60 * 60000); // 1 hora de validez

    // 2026-1
    const sesionGuitarra = await prisma.sesion.create({ data: { tallerId: tallerGuitarra.id, fecha: ahora, bloque: 4, qrToken: crypto.randomUUID(), validoHasta: validez } });
    const sesionTeatro = await prisma.sesion.create({ data: { tallerId: tallerTeatro.id, fecha: ahora, bloque: 6, qrToken: crypto.randomUUID(), validoHasta: validez } });
    const sesionPintura = await prisma.sesion.create({ data: { tallerId: tallerPintura.id, fecha: ahora, bloque: 4, qrToken: crypto.randomUUID(), validoHasta: validez } });
    const sesionDanza = await prisma.sesion.create({ data: { tallerId: tallerDanza.id, fecha: ahora, bloque: 2, qrToken: crypto.randomUUID(), validoHasta: validez } });
    const sesionFoto = await prisma.sesion.create({ data: { tallerId: tallerFoto.id, fecha: ahora, bloque: 1, qrToken: crypto.randomUUID(), validoHasta: validez } });

    // 2026-2
    const sesionGuitarra2 = await prisma.sesion.create({ data: { tallerId: tallerGuitarra2.id, fecha: ahora, bloque: 4, qrToken: crypto.randomUUID(), validoHasta: validez } });
    const sesionTeatro2 = await prisma.sesion.create({ data: { tallerId: tallerTeatro2.id, fecha: ahora, bloque: 6, qrToken: crypto.randomUUID(), validoHasta: validez } });
    const sesionDanza2 = await prisma.sesion.create({ data: { tallerId: tallerDanza2.id, fecha: ahora, bloque: 2, qrToken: crypto.randomUUID(), validoHasta: validez } });
    const sesionCine = await prisma.sesion.create({ data: { tallerId: tallerCine.id, fecha: ahora, bloque: 3, qrToken: crypto.randomUUID(), validoHasta: validez } });
    const sesionMusica = await prisma.sesion.create({ data: { tallerId: tallerMusicaElectronica.id, fecha: ahora, bloque: 7, qrToken: crypto.randomUUID(), validoHasta: validez } });

    console.log('🙋 Registrando asistencias y encuestas de satisfacción...');
    
    // 2026-1
    // TALLER ESTRELLA (Guitarra): Alta asistencia, notas perfectas
    await prisma.asistencia.createMany({ data: [
      { sesionId: sesionGuitarra.id, estudianteId: lucas.id, estado: "Presente", notaSatisfaccion: 5 },
      { sesionId: sesionGuitarra.id, estudianteId: joaquin.id, estado: "Presente", notaSatisfaccion: 5 },
      { sesionId: sesionGuitarra.id, estudianteId: luciano.id, estado: "Presente", notaSatisfaccion: 4 },
      { sesionId: sesionGuitarra.id, estudianteId: jose.id, estado: "Presente", notaSatisfaccion: 5 }
    ]});

    // TALLER BUENO (Teatro): Buena asistencia, notas mixtas
    await prisma.asistencia.createMany({ data: [
      { sesionId: sesionTeatro.id, estudianteId: lucas.id, estado: "Presente", notaSatisfaccion: 4 },
      { sesionId: sesionTeatro.id, estudianteId: joaquin.id, estado: "Presente", notaSatisfaccion: 3 },
      { sesionId: sesionTeatro.id, estudianteId: luciano.id, estado: "Atrasado", notaSatisfaccion: 4 }
    ]});

    // TALLER DECEPCIONANTE (Pintura): Asistencia regular, pésimas notas
    await prisma.asistencia.createMany({ data: [
      { sesionId: sesionPintura.id, estudianteId: jose.id, estado: "Presente", notaSatisfaccion: 2, comentario: "Faltan materiales" },
      { sesionId: sesionPintura.id, estudianteId: matias.id, estado: "Presente", notaSatisfaccion: 1, comentario: "El profe llegó tarde" }
    ]});

    // TALLER FANTASMA (Fotografía): Casi nula asistencia, notas promedio
    await prisma.asistencia.createMany({ data: [
      { sesionId: sesionFoto.id, estudianteId: joaquin.id, estado: "Presente", notaSatisfaccion: 3 }
    ]});

    // TALLER EXCELENTE PERO VACÍO (Danza): Poca asistencia, pero a los que van les encanta
    await prisma.asistencia.createMany({ data: [
      { sesionId: sesionDanza.id, estudianteId: lucas.id, estado: "Presente", notaSatisfaccion: 5 }
    ]});

    // 2026-2 - SEMESTRE ACTUAL
    // Guitarra 2026-2
    await prisma.asistencia.createMany({ data: [
      { sesionId: sesionGuitarra2.id, estudianteId: lucas.id, estado: "Presente", notaSatisfaccion: 5 },
      { sesionId: sesionGuitarra2.id, estudianteId: joaquin.id, estado: "Presente", notaSatisfaccion: 5 },
      { sesionId: sesionGuitarra2.id, estudianteId: luciano.id, estado: "Presente", notaSatisfaccion: 4 },
      { sesionId: sesionGuitarra2.id, estudianteId: jose.id, estado: "Presente", notaSatisfaccion: 5 },
      { sesionId: sesionGuitarra2.id, estudianteId: matias.id, estado: "Presente", notaSatisfaccion: 5 }
    ]});

    // Teatro 2026-2
    await prisma.asistencia.createMany({ data: [
      { sesionId: sesionTeatro2.id, estudianteId: lucas.id, estado: "Presente", notaSatisfaccion: 4 },
      { sesionId: sesionTeatro2.id, estudianteId: joaquin.id, estado: "Presente", notaSatisfaccion: 3 },
      { sesionId: sesionTeatro2.id, estudianteId: luciano.id, estado: "Presente", notaSatisfaccion: 4 }
    ]});

    // Danza 2026-2
    await prisma.asistencia.createMany({ data: [
      { sesionId: sesionDanza2.id, estudianteId: lucas.id, estado: "Presente", notaSatisfaccion: 5 },
      { sesionId: sesionDanza2.id, estudianteId: luciano.id, estado: "Presente", notaSatisfaccion: 5 }
    ]});

    // Cine 2026-2
    await prisma.asistencia.createMany({ data: [
      { sesionId: sesionCine.id, estudianteId: jose.id, estado: "Presente", notaSatisfaccion: 4 },
      { sesionId: sesionCine.id, estudianteId: matias.id, estado: "Presente", notaSatisfaccion: 4 }
    ]});

    // Música Electrónica 2026-2
    await prisma.asistencia.createMany({ data: [
      { sesionId: sesionMusica.id, estudianteId: joaquin.id, estado: "Presente", notaSatisfaccion: 5 }
    ]});

    console.log('✅ Seed completado impecablemente.');
    console.log('----------------------------------------------------');
    console.log('Inicia sesión con:');
    console.log('Correo: Edgar.Gallardo@ucn.cl');
    console.log('Clave:  password123');
    console.log('Ve a /inicio para ver la matriz de métricas en acción.');
    console.log('----------------------------------------------------');

  } catch (e) {
    console.error('❌ Error fatal en el seed:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();