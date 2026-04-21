const { Client } = require('pg');
require('dotenv').config({ path: './academia-backend/.env' });

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  const res = await client.query('SELECT "nombre_ahbb", "fechaInicio_ahbb", "fechaFin_ahbb", "fechaDuracion_ahbb", "diasDefinidos_ahbb" FROM td_curso_ahbb');
  console.log(JSON.stringify(res.rows, null, 2));
  await client.end();
}

main().catch(console.error);
