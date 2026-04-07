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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
let AppService = class AppService {
    prisma_ahbb;
    constructor(prisma_ahbb) {
        this.prisma_ahbb = prisma_ahbb;
    }
    getHello() {
        return 'Backend de la Academia H&B corriendo exitosamente';
    }
    async getDashboardStats(userId, rol) {
        if (rol === 'ADMIN') {
            const totalCursos = await this.prisma_ahbb.td_curso_ahbb.count();
            const cursosActivos = await this.prisma_ahbb.td_curso_ahbb.count({ where: { isPublished_ahbb: true } });
            const cursosBorradores = totalCursos - cursosActivos;
            const totalAlumnos = await this.prisma_ahbb.td_usuario_ahbb.count({ where: { rol_ahbb: 'ALUMNO', estadoCuenta_ahbb: 'ACTIVO' } });
            const alumnosPendientes = await this.prisma_ahbb.td_usuario_ahbb.count({ where: { rol_ahbb: 'ALUMNO', estadoCuenta_ahbb: 'PENDIENTE_APROBACION' } });
            return {
                totalCursos,
                cursosActivos,
                cursosPendientes: cursosBorradores,
                totalEstudiantes: totalAlumnos,
                alumnosPendientes
            };
        }
        else if (rol === 'PROFESOR') {
            const totalCursos = await this.prisma_ahbb.td_curso_ahbb.count({ where: { id_usuario_curso_ahbb: userId } });
            const cursosActivos = await this.prisma_ahbb.td_curso_ahbb.count({ where: { id_usuario_curso_ahbb: userId, isPublished_ahbb: true } });
            const students = await this.prisma_ahbb.td_inscripcion_ahbb.groupBy({
                by: ['id_usuario_inscripcion_ahbb'],
                where: { curso: { id_usuario_curso_ahbb: userId }, estatus_ahbb: { in: ['INSCRITO', 'APROBADO', 'OYENTE'] } }
            });
            const totalEstudiantes = students.length;
            return {
                totalCursos,
                cursosActivos,
                totalEstudiantes
            };
        }
        else if (rol === 'ALUMNO') {
            const enCurso = await this.prisma_ahbb.td_inscripcion_ahbb.count({
                where: { id_usuario_inscripcion_ahbb: userId, estatus_ahbb: { in: ['INSCRITO', 'OYENTE'] } }
            });
            const certificados = await this.prisma_ahbb.td_certificado_ahbb.count({
                where: { inscripcion: { id_usuario_inscripcion_ahbb: userId } }
            });
            return {
                cursosInscritos: enCurso,
                certificados
            };
        }
        return {};
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppService);
//# sourceMappingURL=app.service.js.map