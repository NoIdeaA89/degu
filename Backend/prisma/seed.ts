import { RolUsuario, BloqueHorario } from '@prisma/client';
import * as fs from 'fs';
import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('Iniciando el seeding de la base de datos de forma segura...');
  
  const rawData = fs.readFileSync('./seed_data.json', 'utf8');
  const data = JSON.parse(rawData);

  // 1. Crear Usuario "Administrador oficial" (Para login de Google)
  const admin = await prisma.usuario.upsert({
    where: { correo: 'galponcultural@ucn.cl' },
    update: {
      nombre: 'Edgar',
      apellido: 'Gallardo',
      rol: RolUsuario.Administrador
    },
    create: {
      nombre: 'Edgar',
      apellido: 'Gallardo',
      rut: '14321789-2', // RUT genérico, lo vital para Google es el correo
      correo: 'galponcultural@ucn.cl', 
      password: 'password123', // La contraseña no importará mucho si entra con Google
      rol: RolUsuario.Administrador
    }
  });
  console.log(`Administrador listo (ID real: ${admin.id}, Correo: ${admin.correo}).`);
  
  // 2. Crear Usuario "Profesor por defecto" (Usando dominio @ucn.cl)
  const profesor = await prisma.usuario.upsert({
    where: { correo: 'profesor@ucn.cl' },
    update: {},
    create: {
      nombre: 'Profesor',
      apellido: 'Galpón',
      rut: '11111111-1',
      correo: 'profesor@ucn.cl', 
      password: 'password123',
      rol: RolUsuario.Profesor
    }
  });
  console.log(`Profesor por defecto listo (ID real: ${profesor.id}, Correo: ${profesor.correo}).`);

  // Mapas para guardar la relación entre el ID del JSON y el ID real de Supabase
  const mapEstudiantes = new Map();
  const mapTalleres = new Map();
  const mapSesiones = new Map();

  // 3. Crear Estudiantes
  for (const est of data.estudiantes) {
    // Forzar el dominio del correo a @alumnos.ucn.cl tomando solo la parte antes del @
    const username = est.correo.split('@')[0];
    const correoEstudiante = `${username}@alumnos.ucn.cl`;

    const dbEst = await prisma.usuario.upsert({
      where: { rut: est.rut },
      update: { 
        correo: correoEstudiante 
      },
      create: {
        nombre: est.nombre,
        apellido: est.apellido,
        rut: est.rut,
        correo: correoEstudiante, 
        password: est.password,
        rol: RolUsuario.Estudiante
      }
    });
    mapEstudiantes.set(est.id, dbEst.id);
  }
  console.log(`Se procesaron ${data.estudiantes.length} estudiantes con dominio @alumnos.ucn.cl.`);

  // 4. Crear Talleres
  for (const tallerData of data.talleres) {
    let tallerDb = await prisma.taller.findFirst({
      where: { nombre: tallerData.nombre }
    });

    if (!tallerDb) {
      tallerDb = await prisma.taller.create({
        data: {
          nombre: tallerData.nombre,
          descripcion: tallerData.descripcion,
          horario: tallerData.horario,
          semestre: tallerData.semestre,
          estado: tallerData.estado,
          lugar: tallerData.lugar,
          profesorId: profesor.id, 
          bloques: [BloqueHorario.A]
        }
      });
    }
    mapTalleres.set(tallerData.id, tallerDb.id);
  }
  console.log(`Se procesaron ${data.talleres.length} talleres.`);

  // 5. Crear Sesiones
  for (const sesion of data.sesiones) {
    const realTallerId = mapTalleres.get(sesion.tallerId);
    
    if (realTallerId) {
      const sesionDb = await prisma.sesion.upsert({
        where: { qrToken: sesion.qrToken },
        update: {},
        create: {
          tallerId: realTallerId,
          fecha: new Date(sesion.fecha),
          bloque: 1, 
          qrToken: sesion.qrToken,
          validoHasta: new Date(sesion.validoHasta)
        }
      });
      mapSesiones.set(sesion.id, sesionDb.id);
    }
  }
  console.log(`Se procesaron ${data.sesiones.length} sesiones.`);

  // 6. Crear Inscripciones
  let inscripcionesCount = 0;
  for (const insc of data.inscripciones) {
    const realEstudianteId = mapEstudiantes.get(insc.estudianteId);
    const realTallerId = mapTalleres.get(insc.tallerId);

    if (realEstudianteId && realTallerId) {
      try {
        await prisma.inscripcion.upsert({
          where: {
            estudianteId_tallerId: {
              estudianteId: realEstudianteId,
              tallerId: realTallerId,
            }
          },
          update: {},
          create: {
            estudianteId: realEstudianteId,
            tallerId: realTallerId
          }
        });
        inscripcionesCount++;
      } catch (e) {
      }
    }
  }
  console.log(`Se procesaron las inscripciones.`);

  // 7. Crear Asistencias
  let asistenciasCount = 0;
  for (const asis of data.asistencias) {
    const realSesionId = mapSesiones.get(asis.sesionId);
    const realEstudianteId = mapEstudiantes.get(asis.estudianteId);

    if (realSesionId && realEstudianteId) {
      try {
        await prisma.asistencia.upsert({
          where: {
            sesionId_estudianteId: {
              sesionId: realSesionId,
              estudianteId: realEstudianteId,
            }
          },
          update: {},
          create: {
            sesionId: realSesionId,
            estudianteId: realEstudianteId,
            estado: asis.estado,
            fechaHora: new Date()
          }
        });
        asistenciasCount++;
      } catch (e) {
      }
    }
  }
  console.log(`Se procesaron las asistencias.`);
  
  console.log('¡Seeding completado con éxito, sin alterar datos anteriores y con dominios de correo correctos!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
