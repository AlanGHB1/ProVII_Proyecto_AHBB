"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./src/generated/prisma_ahbb/index.js");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = __importDefault(require("pg"));
require("dotenv/config");
async function main() {
    const pool = new pg_1.default.Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new adapter_pg_1.PrismaPg(pool);
    const prisma = new index_js_1.PrismaClient({ adapter });
    const users = await prisma.td_usuario_ahbb.findMany({
        select: {
            correo_ahbb: true,
            contrasena_ahbb: true,
        }
    });
    console.log(`Total users: ${users.length}`);
    users.forEach(u => {
        const len = u.contrasena_ahbb.length;
        if (len !== 60) {
            console.log(`User: ${u.correo_ahbb} | Hash: "${u.contrasena_ahbb}" | Length: ${len}`);
        }
    });
    await prisma.$disconnect();
}
main().catch(console.error);
//# sourceMappingURL=check_all_hashes.js.map