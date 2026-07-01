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
      data: { nombre: "Taller de Guitarra", descripcion: "Nivel básico e intermedio.", horario: "Lunes 15:00 - 17:00", dia: 1, bloque: 4, semestre: "2026-1", profesorId: profesor.id } 
    });
    const tallerTeatro = await prisma.taller.create({ 
      data: { nombre: "Taller de Teatro", descripcion: "Expresión corporal.", horario: "Miércoles 17:00 - 19:00", dia: 3, bloque: 6, semestre: "2026-1", profesorId: profesor.id } 
    });
    const tallerDanza = await prisma.taller.create({ 
      data: { nombre: "Danza Contemporánea", descripcion: "Ritmo y movimiento.", horario: "Martes 10:00 - 12:00", dia: 2, bloque: 2, semestre: "2026-1", profesorId: profesor.id } 
    });
    const tallerPintura = await prisma.taller.create({ 
      data: { nombre: "Pintura al Óleo", descripcion: "Técnicas clásicas.", horario: "Viernes 14:00 - 16:00", dia: 5, bloque: 4, semestre: "2026-1", profesorId: profesor.id } 
    });
    const tallerFoto = await prisma.taller.create({ 
      data: { nombre: "Fotografía Digital", descripcion: "Uso de cámara manual.", horario: "Jueves 08:00 - 10:00", dia: 4, bloque: 1, semestre: "2026-1", profesorId: profesor.id } 
    });

    console.log('📝 Inscribiendo alumnos en múltiples talleres...');
    const inscripciones = [
      // Todos aman guitarra
      { estudianteId: lucas.id, tallerId: tallerGuitarra.id }, { estudianteId: joaquin.id, tallerId: tallerGuitarra.id }, { estudianteId: luciano.id, tallerId: tallerGuitarra.id }, { estudianteId: jose.id, tallerId: tallerGuitarra.id }, { estudianteId: matias.id, tallerId: tallerGuitarra.id },
      // Varios en teatro
      { estudianteId: lucas.id, tallerId: tallerTeatro.id }, { estudianteId: joaquin.id, tallerId: tallerTeatro.id }, { estudianteId: luciano.id, tallerId: tallerTeatro.id },
      // Algunos en pintura y danza
      { estudianteId: jose.id, tallerId: tallerPintura.id }, { estudianteId: matias.id, tallerId: tallerPintura.id },
      { estudianteId: lucas.id, tallerId: tallerDanza.id }, { estudianteId: luciano.id, tallerId: tallerDanza.id },
      // Solo uno en foto
      { estudianteId: joaquin.id, tallerId: tallerFoto.id }
    ];
    await prisma.inscripcion.createMany({ data: inscripciones });

    console.log('⏰ Generando sesiones históricas y activas...');
    const ahora = new Date();
    const validez = new Date(ahora.getTime() + 60 * 60000); // 1 hora de validez

    // Usamos números enteros para alinear la Sesión con la coordenada de la grilla
    const sesionGuitarra = await prisma.sesion.create({ data: { tallerId: tallerGuitarra.id, fecha: ahora, bloque: 4, qrToken: crypto.randomUUID(), validoHasta: validez } });
    const sesionTeatro = await prisma.sesion.create({ data: { tallerId: tallerTeatro.id, fecha: ahora, bloque: 6, qrToken: crypto.randomUUID(), validoHasta: validez } });
    const sesionPintura = await prisma.sesion.create({ data: { tallerId: tallerPintura.id, fecha: ahora, bloque: 4, qrToken: crypto.randomUUID(), validoHasta: validez } });
    const sesionDanza = await prisma.sesion.create({ data: { tallerId: tallerDanza.id, fecha: ahora, bloque: 2, qrToken: crypto.randomUUID(), validoHasta: validez } });
    const sesionFoto = await prisma.sesion.create({ data: { tallerId: tallerFoto.id, fecha: ahora, bloque: 1, qrToken: crypto.randomUUID(), validoHasta: validez } });

    console.log('🙋 Registrando asistencias y encuestas de satisfacción...');
    
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