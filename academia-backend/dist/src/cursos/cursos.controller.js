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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursosController = void 0;
const common_1 = require("@nestjs/common");
const cursos_service_1 = require("./cursos.service");
const crear_curso_dto_ahbb_1 = require("./dto/crear-curso.dto_ahbb");
const actualizar_curso_dto_ahbb_1 = require("./dto/actualizar-curso.dto_ahbb");
const jwt_auth_guard_ahbb_1 = require("../common/guards/jwt-auth.guard_ahbb");
const jwt_optional_auth_guard_ahbb_1 = require("../common/guards/jwt-optional-auth.guard_ahbb");
const roles_guard_ahbb_1 = require("../common/guards/roles.guard_ahbb");
const roles_decorator_ahbb_1 = require("../common/decorators/roles.decorator_ahbb");
let CursosController = class CursosController {
    cursosService_ahbb;
    constructor(cursosService_ahbb) {
        this.cursosService_ahbb = cursosService_ahbb;
    }
    async obtenerSesiones_ahbb(request_ahbb, id_usuario_ahbb, rol_ahbb, id_curso_ahbb) {
        return this.cursosService_ahbb.obtenerSesiones_ahbb(request_ahbb.usuario_ahbb?.rol || 'ALUMNO', Number(request_ahbb.usuario_ahbb?.sub), rol_ahbb, id_usuario_ahbb ? Number(id_usuario_ahbb) : undefined, id_curso_ahbb ? Number(id_curso_ahbb) : undefined);
    }
    async obtenerCursos_ahbb(request_ahbb, solo_propios, solo_inscritos) {
        const requiereSesion_ahbb = solo_propios === 'true' || solo_inscritos === 'true';
        if (requiereSesion_ahbb && !request_ahbb.usuario_ahbb) {
            throw new common_1.UnauthorizedException('Debes iniciar sesion para consultar ese filtro de cursos.');
        }
        return this.cursosService_ahbb.obtenerTodos_ahbb(request_ahbb.usuario_ahbb?.rol || 'ALUMNO', Number(request_ahbb.usuario_ahbb?.sub), solo_propios === 'true', solo_inscritos === 'true');
    }
    async obtenerCursoPorId_ahbb(id_curso_ahbb) {
        return this.cursosService_ahbb.obtenerPorId_ahbb(id_curso_ahbb);
    }
    async obtenerDisponibilidad_ahbb(id_curso_ahbb) {
        return this.cursosService_ahbb.obtenerDisponibilidad_ahbb(id_curso_ahbb);
    }
    async crearCurso_ahbb(datos_ahbb, request_ahbb) {
        return this.cursosService_ahbb.crearCurso_ahbb(Number(request_ahbb.usuario_ahbb?.sub), datos_ahbb, request_ahbb.usuario_ahbb?.rol);
    }
    async actualizarCurso_ahbb(id_curso_ahbb, datos_ahbb, request_ahbb) {
        return this.cursosService_ahbb.actualizarCurso_ahbb(id_curso_ahbb, Number(request_ahbb.usuario_ahbb?.sub), datos_ahbb, request_ahbb.usuario_ahbb?.rol);
    }
    async eliminarCurso_ahbb(id_curso_ahbb) {
        return this.cursosService_ahbb.eliminarCurso_ahbb(id_curso_ahbb);
    }
    async evaluarCurso_ahbb(id_curso_ahbb, datos) {
        return this.cursosService_ahbb.evaluarCurso_ahbb(id_curso_ahbb, datos);
    }
    async actualizarImagenCertificadoCurso_ahbb(id_curso_ahbb, datos, request_ahbb) {
        return this.cursosService_ahbb.actualizarImagenCertificadoCurso_ahbb(id_curso_ahbb, datos.imagenBase64, Number(request_ahbb.usuario_ahbb?.sub), request_ahbb.usuario_ahbb?.rol ?? 'PROFESOR');
    }
};
exports.CursosController = CursosController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb),
    (0, common_1.Get)('sesiones'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('id_usuario_ahbb')),
    __param(2, (0, common_1.Query)('rol')),
    __param(3, (0, common_1.Query)('id_curso_ahbb')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "obtenerSesiones_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_optional_auth_guard_ahbb_1.JwtOptionalAuthGuard_ahbb),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('solo_propios')),
    __param(2, (0, common_1.Query)('solo_inscritos')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "obtenerCursos_ahbb", null);
__decorate([
    (0, common_1.Get)(':id_curso_ahbb'),
    __param(0, (0, common_1.Param)('id_curso_ahbb', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "obtenerCursoPorId_ahbb", null);
__decorate([
    (0, common_1.Get)(':id_curso_ahbb/disponibilidad'),
    __param(0, (0, common_1.Param)('id_curso_ahbb', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "obtenerDisponibilidad_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN', 'PROFESOR'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_curso_dto_ahbb_1.CrearCursoDto_ahbb, Object]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "crearCurso_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN', 'PROFESOR'),
    (0, common_1.Put)(':id_curso_ahbb'),
    __param(0, (0, common_1.Param)('id_curso_ahbb', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, actualizar_curso_dto_ahbb_1.ActualizarCursoDto_ahbb, Object]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "actualizarCurso_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN', 'PROFESOR'),
    (0, common_1.Delete)(':id_curso_ahbb'),
    __param(0, (0, common_1.Param)('id_curso_ahbb', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "eliminarCurso_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Patch)(':id_curso_ahbb/evaluar-curso'),
    __param(0, (0, common_1.Param)('id_curso_ahbb', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "evaluarCurso_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN', 'PROFESOR'),
    (0, common_1.Patch)(':id_curso_ahbb/imagen-certificado'),
    __param(0, (0, common_1.Param)('id_curso_ahbb', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "actualizarImagenCertificadoCurso_ahbb", null);
exports.CursosController = CursosController = __decorate([
    (0, common_1.Controller)('cursos'),
    __metadata("design:paramtypes", [cursos_service_1.CursosService])
], CursosController);
//# sourceMappingURL=cursos.controller.js.map