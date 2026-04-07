"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./src/generated/prisma_ahbb/index.js");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = __importDefault(require("pg"));
require("dotenv/config");
const bcrypt = __importStar(require("bcrypt"));
const crypto_1 = require("crypto");
async function main() {
    const pool = new pg_1.default.Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new adapter_pg_1.PrismaPg(pool);
    const prisma = new index_js_1.PrismaClient({ adapter });
    const email = 'test_approval_kombai@example.com';
    const user = await prisma.td_usuario_ahbb.upsert({
        where: { correo_ahbb: email },
        update: { estadoCuenta_ahbb: 'PENDIENTE_APROBACION' },
        create: {
            correo_ahbb: email,
            nombre_ahbb: 'Test',
            apellido_ahbb: 'User',
            contrasena_ahbb: 'init',
            cedula_ahbb: 'T-123456',
            estadoCuenta_ahbb: 'PENDIENTE_APROBACION',
            rol_ahbb: 'ALUMNO',
        }
    });
    console.log(`User ${email} created/ready.`);
    const contrasenaTemporalPlano = (0, crypto_1.randomBytes)(6).toString('base64url');
    const hashTemporal = await bcrypt.hash(contrasenaTemporalPlano, 10);
    console.log(`Generated Temporal Password: ${contrasenaTemporalPlano}`);
    console.log(`Generated Hash: ${hashTemporal}`);
    const updated = await prisma.td_usuario_ahbb.update({
        where: { id_usuario_ahbb: user.id_usuario_ahbb },
        data: {
            estadoCuenta_ahbb: 'ACTIVO',
            contrasena_ahbb: hashTemporal,
            requiereCambioContrasena_ahbb: true,
        }
    });
    const match = await bcrypt.compare(contrasenaTemporalPlano, updated.contrasena_ahbb);
    console.log(`Fresh Approval Login Test: ${match ? 'SUCCESS' : 'FAILED'}`);
    await prisma.$disconnect();
}
main().catch(console.error);
//# sourceMappingURL=test_fresh_approval.js.map