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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapService_ahbb = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../prisma.service");
let BootstrapService_ahbb = class BootstrapService_ahbb {
    prisma_ahbb;
    constructor(prisma_ahbb) {
        this.prisma_ahbb = prisma_ahbb;
    }
    async onModuleInit() {
        await this.sembrarUsuariosBase_ahbb();
    }
    async sembrarUsuariosBase_ahbb() {
        const totalUsuarios_ahbb = await this.prisma_ahbb.td_usuario_ahbb.count();
        if (totalUsuarios_ahbb > 0) {
            return;
        }
        const [adminHash_ahbb, profesorHash_ahbb, alumnoHash_ahbb] = await Promise.all([
            bcrypt.hash('admin123', 10),
            bcrypt.hash('prof123', 10),
            bcrypt.hash('alum123', 10),
        ]);
        const [admin_ahbb, profesor_ahbb, alumno_ahbb] = await this.prisma_ahbb.$transaction([
            this.prisma_ahbb.td_usuario_ahbb.create({
                data: {
                    cedula_ahbb: 'V-10000001',
                    nombre_ahbb: 'Administrador',
                    apellido_ahbb: 'H&B',
                    correo_ahbb: 'admin@academiah-b.edu',
                    contrasena_ahbb: adminHash_ahbb,
                    rol_ahbb: 'ADMIN',
                    estadoCuenta_ahbb: 'ACTIVO',
                },
            }),
            this.prisma_ahbb.td_usuario_ahbb.create({
                data: {
                    cedula_ahbb: 'V-10000002',
                    nombre_ahbb: 'Carlos',
                    apellido_ahbb: 'Mendez',
                    correo_ahbb: 'carlos@academiah-b.edu',
                    contrasena_ahbb: profesorHash_ahbb,
                    rol_ahbb: 'PROFESOR',
                    estadoCuenta_ahbb: 'ACTIVO',
                },
            }),
            this.prisma_ahbb.td_usuario_ahbb.create({
                data: {
                    cedula_ahbb: 'V-10000003',
                    nombre_ahbb: 'Maria',
                    apellido_ahbb: 'Garcia',
                    correo_ahbb: 'maria@estudiante.edu',
                    contrasena_ahbb: alumnoHash_ahbb,
                    rol_ahbb: 'ALUMNO',
                    estadoCuenta_ahbb: 'ACTIVO',
                    requiereCambioContrasena_ahbb: true,
                },
            }),
        ]);
        const totalCursos_ahbb = await this.prisma_ahbb.td_curso_ahbb.count();
        if (totalCursos_ahbb === 0) {
            await this.prisma_ahbb.td_curso_ahbb.create({
                data: {
                    nombre_ahbb: 'Fundamentos de JavaScript',
                    tematica_ahbb: 'JavaScript inicial',
                    descripcion_ahbb: 'Curso introductorio de JavaScript.',
                    temarioTexto_ahbb: '1. Variables\n2. Funciones\n3. Objetos\n4. Arrays\n5. DOM y eventos',
                    fechaInicio_ahbb: new Date(),
                    fechaFin_ahbb: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
                    fechaDuracion_ahbb: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
                    horasDefinidas_ahbb: 40,
                    diasDefinidos_ahbb: 20,
                    topeEstudiantes_ahbb: 5,
                    isPublished_ahbb: true,
                    id_usuario_curso_ahbb: profesor_ahbb.id_usuario_ahbb,
                    horarios: {
                        create: [
                            {
                                diaSemana_ahbb: 'LUNES',
                                horaInicio_ahbb: '09:00',
                                horaFin_ahbb: '11:00',
                            },
                            {
                                diaSemana_ahbb: 'MIERCOLES',
                                horaInicio_ahbb: '09:00',
                                horaFin_ahbb: '11:00',
                            },
                        ],
                    },
                },
            });
        }
    }
};
exports.BootstrapService_ahbb = BootstrapService_ahbb;
exports.BootstrapService_ahbb = BootstrapService_ahbb = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BootstrapService_ahbb);
//# sourceMappingURL=bootstrap.service_ahbb.js.map