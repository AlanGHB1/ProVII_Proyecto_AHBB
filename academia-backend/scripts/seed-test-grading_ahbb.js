/**
 * seed-test-grading_ahbb.js — Script de datos de prueba para calificaciones
 */

const { PrismaClient } = require('../src/generated/prisma_ahbb');
const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando carga de datos de prueba para calificaciones...');

  // 1. Buscar un profesor (id_rol_ahbb = 2)
  const profesor = await prisma.td_usuario_ahbb.findFirst({
    where: { id_rol_ahbb: 2 }
  });

  if (!profesor) {
    console.error('No se encontró ningún profesor en la base de datos. Por favor, corre el seed principal primero.');
    return;
  }

  // 2. Buscar algunos alumnos (id_rol_ahbb = 3)
  const alumnos = await prisma.td_usuario_ahbb.findMany({
    where: { id_rol_ahbb: 3 },
    take: 3
  });

  if (alumnos.length < 2) {
    console.error('Se requieren al menos 2 alumnos para esta prueba.');
    return;
  }

  const fechaAyer = new Date();
  fechaAyer.setDate(fechaAyer.getDate() - 5); // Empezó hace 5 días
  
  const fechaFinAyer = new Date();
  fechaFinAyer.setDate(fechaFinAyer.getDate() - 1); // Terminó ayer

  // 3. Crear el curso finalizado
  const cursoFinalizado = await prisma.td_curso_ahbb.create({
    data: {
      nombre_ahbb: 'Curso de Prueba Finalizado (Demo)',
      tematica_ahbb: 'Mecánica Avanzada',
      descripcion_ahbb: 'Este curso ya terminó y sirve para probar las calificaciones.',
      fechaInicio_ahbb: fechaAyer,
      fechaFin_ahbb: fechaFinAyer,
      fechaDuracion_ahbb: fechaFinAyer,
      horasDefinidas_ahbb: 20,
      diasDefinidos_ahbb: 5,
      topeEstudiantes_ahbb: 10,
      estadoAprobacion_ahbb: 'ACTIVO',
      isPublished_ahbb: true,
      id_usuario_curso_ahbb: profesor.id_usuario_ahbb,
      horarios: {
        create: [
          { diaSemana_ahbb: 'LUNES', horaInicio_ahbb: '08:00', horaFin_ahbb: '10:00' }
        ]
      }
    }
  });

  // 4. Crear un curso EN PROGRESO (para probar el bloqueo)
  const fechaMañanaFin = new Date();
  fechaMañanaFin.setDate(fechaMañanaFin.getDate() + 10);

  const cursoProgreso = await prisma.td_curso_ahbb.create({
    data: {
      nombre_ahbb: 'Curso en Progreso (Demo)',
      tematica_ahbb: 'Mecánica Inicial',
      descripcion_ahbb: 'Este curso no ha terminado y el switch debe estar bloqueado.',
      fechaInicio_ahbb: fechaAyer,
      fechaFin_ahbb: fechaMañanaFin,
      fechaDuracion_ahbb: fechaMañanaFin,
      horasDefinidas_ahbb: 20,
      diasDefinidos_ahbb: 5,
      topeEstudiantes_ahbb: 10,
      estadoAprobacion_ahbb: 'ACTIVO',
      isPublished_ahbb: true,
      id_usuario_curso_ahbb: profesor.id_usuario_ahbb,
      horarios: {
        create: [
          { diaSemana_ahbb: 'MARTES', horaInicio_ahbb: '08:00', horaFin_ahbb: '10:00' }
        ]
      }
    }
  });

  console.log(`Cursos creados: ${cursoFinalizado.nombre_ahbb} e ${cursoProgreso.nombre_ahbb}`);

  // 5. Inscribir alumnos en ambos
  for (const alumno of alumnos) {
    // Inscripción en el finalizado
    await prisma.td_inscripcion_ahbb.create({
      data: {
        id_usuario_inscripcion_ahbb: alumno.id_usuario_ahbb,
        id_curso_inscripcion_ahbb: cursoFinalizado.id_curso_ahbb,
        estatus_ahbb: 'OYENTE', // Se asume que ya empezó, por eso es oyente
        intento_ahbb: 1
      }
    });

    // Inscripción en el de progreso
    await prisma.td_inscripcion_ahbb.create({
      data: {
        id_usuario_inscripcion_ahbb: alumno.id_usuario_ahbb,
        id_curso_inscripcion_ahbb: cursoProgreso.id_curso_ahbb,
        estatus_ahbb: 'OYENTE',
        intento_ahbb: 1
      }
    });
  }

  console.log(`Inscritos ${alumnos.length} alumnos en cada curso de prueba.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
