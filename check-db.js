const { PrismaClient } = require('./academia-backend/src/generated/prisma_ahbb');
const prisma = new PrismaClient();

async function main() {
  const cursos = await prisma.td_curso_ahbb.findMany({
    select: {
      nombre_ahbb: true,
      fechaInicio_ahbb: true,
      fechaFin_ahbb: true,
      fechaDuracion_ahbb: true,
      diasDefinidos_ahbb: true,
    }
  });
  console.log(JSON.stringify(cursos, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
