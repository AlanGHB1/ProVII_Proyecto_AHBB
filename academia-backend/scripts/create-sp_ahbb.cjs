const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error('DATABASE_URL is not defined in .env');
    process.exit(1);
  }

  const client = new Client({
    connectionString: connectionString.includes('?') ? connectionString.split('?')[0] : connectionString,
  });

  const sqlPath = path.join(__dirname, '..', 'prisma', 'sp_generar_sesiones_ahbb.sql');
  const sql = fs.readFileSync(sqlPath, 'utf8');

  console.log('Connecting to database...');
  try {
    await client.connect();
    console.log('Connected. Creating Stored Procedure...');
    await client.query(sql);
    console.log('Stored Procedure created successfully!');

    console.log('Creating Trigger for date consistency...');
    const triggerSql = `
      CREATE OR REPLACE FUNCTION fn_validar_coincidencia_fecha_inicio_ahbb()
      RETURNS TRIGGER AS $$
      BEGIN
          IF NEW."nroSesion_ahbb" = 1 THEN
              IF NEW."fechaSesion_ahbb" != (SELECT "fechaInicio_ahbb"::DATE FROM td_curso_ahbb WHERE "id_curso_ahbb" = NEW."id_curso_sesion_ahbb") THEN
                  RAISE EXCEPTION 'Incoherencia: La fecha de inicio del curso no coincide con el primer dia de clase programado.';
              END IF;
          END IF;
          RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;

      DROP TRIGGER IF EXISTS trg_validar_inicio_sesion_ahbb ON td_sesion_curso_ahbb;
      CREATE TRIGGER trg_validar_inicio_sesion_ahbb
      BEFORE INSERT ON td_sesion_curso_ahbb
      FOR EACH ROW
      EXECUTE FUNCTION fn_validar_coincidencia_fecha_inicio_ahbb();
    `;
    await client.query(triggerSql);
    console.log('Trigger created successfully!');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();
