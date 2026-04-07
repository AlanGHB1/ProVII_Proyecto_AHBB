/**
 * seed-sql-pg_ahbb.js — Script de datos de prueba usando pg (directo a SQL)
 */
const { Client } = require('pg');
require('dotenv').config();

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error('DATABASE_URL no definida');
    process.exit(1);
  }

  const client = new Client({
    connectionString: connectionString.includes('?') ? connectionString.split('?')[0] : connectionString,
  });

  try {
    await client.connect();
    console.log('Conectado a la base de datos.');

    // 1. Asignar a Jarmony (ID: 21)
    const idProf = 21;
    console.log(`Asignando cursos al profesor Jarmony (ID: ${idProf})`);

    // 2. Buscar alumnos
    const resAlum = await client.query("SELECT id_usuario_ahbb FROM td_usuario_ahbb WHERE rol_ahbb = 'ALUMNO' LIMIT 2");
    if (resAlum.rows.length < 2) throw new Error('Se necesitan al menos 2 alumnos');
    const idAlumnos = resAlum.rows.map(r => r.id_usuario_ahbb);

    const fechaHoy = new Date();
    const fechaAyer = new Date(); fechaAyer.setDate(fechaHoy.getDate() - 5);
    const fechaFinAyer = new Date(); fechaFinAyer.setDate(fechaHoy.getDate() - 1);
    const fechaFinMañana = new Date(); fechaFinMañana.setDate(fechaHoy.getDate() + 10);

    // 3. Crear Curso Finalizado
    const resCursoFin = await client.query(
      `INSERT INTO td_curso_ahbb (nombre_ahbb, tematica_ahbb, descripcion_ahbb, "horasDefinidas_ahbb", "diasDefinidos_ahbb", "fechaInicio_ahbb", "fechaFin_ahbb", "fechaDuracion_ahbb", "topeEstudiantes_ahbb", "estadoAprobacion_ahbb", "isPublished_ahbb", "id_usuario_curso_ahbb") 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id_curso_ahbb`,
      ['Curso Finalizado (SQL Demo)', 'Mecánica', 'Curso de prueba que ya terminó', 20, 5, fechaAyer, fechaFinAyer, fechaFinAyer, 10, 'ACTIVO', true, idProf]
    );
    const idCursoFin = resCursoFin.rows[0].id_curso_ahbb;

    // 4. Crear Curso en Progreso
    const resCursoProg = await client.query(
      `INSERT INTO td_curso_ahbb (nombre_ahbb, tematica_ahbb, descripcion_ahbb, "horasDefinidas_ahbb", "diasDefinidos_ahbb", "fechaInicio_ahbb", "fechaFin_ahbb", "fechaDuracion_ahbb", "topeEstudiantes_ahbb", "estadoAprobacion_ahbb", "isPublished_ahbb", "id_usuario_curso_ahbb") 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id_curso_ahbb`,
      ['Curso en Progreso (SQL Demo)', 'Electrónica', 'Curso de prueba que no ha terminado', 20, 5, fechaAyer, fechaFinMañana, fechaFinMañana, 10, 'ACTIVO', true, idProf]
    );
    const idCursoProg = resCursoProg.rows[0].id_curso_ahbb;

    // 5. Inscribir alumnos
    for (const idAlum of idAlumnos) {
      await client.query(
        'INSERT INTO td_inscripcion_ahbb (id_usuario_inscripcion_ahbb, id_curso_inscripcion_ahbb, estatus_ahbb, intento_ahbb) VALUES ($1, $2, $3, $4)',
        [idAlum, idCursoFin, 'OYENTE', 1]
      );
      await client.query(
        'INSERT INTO td_inscripcion_ahbb (id_usuario_inscripcion_ahbb, id_curso_inscripcion_ahbb, estatus_ahbb, intento_ahbb) VALUES ($1, $2, $3, $4)',
        [idAlum, idCursoProg, 'OYENTE', 1]
      );
    }

    console.log('Datos de prueba insertados correctamente.');
    console.log(`Profesor ID: ${idProf}, Curso Finalizado: ${idCursoFin}, Curso Progreso: ${idCursoProg}`);

  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await client.end();
  }
}

main();
