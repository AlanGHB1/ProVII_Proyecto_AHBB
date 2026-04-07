"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let DashboardService = class DashboardService {
    prisma_ahbb;
    constructor(prisma_ahbb) {
        this.prisma_ahbb = prisma_ahbb;
    }
    async getDashboardStats_ahbb(userId_ahbb, rol_ahbb) {
        if (rol_ahbb === 'ADMIN') {
            const totalCursos = await this.prisma_ahbb.td_curso_ahbb.count();
            const cursosActivos = await this.prisma_ahbb.td_curso_ahbb.count({
                where: { isPublished_ahbb: true, imagenBloqueada_ahbb: { not: true } },
            });
            const totalEstudiantes = await this.prisma_ahbb.td_usuario_ahbb.count({
                where: { rol_ahbb: 'ALUMNO' },
            });
            const alumnosPendientes = await this.prisma_ahbb.td_usuario_ahbb.count({
                where: { rol_ahbb: 'ALUMNO', estadoCuenta_ahbb: 'PENDIENTE_APROBACION' },
            });
            return { totalCursos, cursosActivos, totalEstudiantes, alumnosPendientes };
        }
        if (rol_ahbb === 'PROFESOR') {
            const totalCursos = await this.prisma_ahbb.td_curso_ahbb.count({
                where: { id_usuario_curso_ahbb: userId_ahbb },
            });
            const cursosActivos = await this.prisma_ahbb.td_curso_ahbb.count({
                where: {
                    id_usuario_curso_ahbb: userId_ahbb,
                    isPublished_ahbb: true,
                    imagenBloqueada_ahbb: { not: true }
                },
            });
            const cursos = await this.prisma_ahbb.td_curso_ahbb.findMany({
                where: { id_usuario_curso_ahbb: userId_ahbb },
                select: { id_curso_ahbb: true },
            });
            const cursoIds = cursos.map(c => c.id_curso_ahbb);
            const uniqueStudents = await this.prisma_ahbb.td_inscripcion_ahbb.groupBy({
                by: ['id_usuario_inscripcion_ahbb'],
                where: {
                    id_curso_inscripcion_ahbb: { in: cursoIds }
                }
            });
            const totalEstudiantes = uniqueStudents.length;
            return { totalCursos, cursosActivos, totalEstudiantes };
        }
        if (rol_ahbb === 'ALUMNO') {
            const cursosInscritos = await this.prisma_ahbb.td_inscripcion_ahbb.count({
                where: {
                    id_usuario_inscripcion_ahbb: userId_ahbb,
                    estatus_ahbb: { in: ['INSCRITO', 'OYENTE', 'APROBADO'] }
                },
            });
            const certificadosCount = await this.prisma_ahbb.td_inscripcion_ahbb.count({
                where: {
                    id_usuario_inscripcion_ahbb: userId_ahbb,
                    certificado: { isNot: null }
                }
            });
            return { cursosInscritos, certificados: certificadosCount };
        }
        return {};
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map