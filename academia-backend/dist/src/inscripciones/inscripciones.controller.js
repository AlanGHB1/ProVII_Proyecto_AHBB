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
exports.InscripcionesController_ahbb = void 0;
const common_1 = require("@nestjs/common");
const inscripciones_service_1 = require("./inscripciones.service");
const crear_inscripcion_dto_ahbb_1 = require("./dto/crear-inscripcion.dto_ahbb");
const actualizar_estado_inscripcion_dto_ahbb_1 = require("./dto/actualizar-estado-inscripcion.dto_ahbb");
const jwt_auth_guard_ahbb_1 = require("../common/guards/jwt-auth.guard_ahbb");
const roles_guard_ahbb_1 = require("../common/guards/roles.guard_ahbb");
const roles_decorator_ahbb_1 = require("../common/decorators/roles.decorator_ahbb");
let InscripcionesController_ahbb = class InscripcionesController_ahbb {
    inscripcionesService_ahbb;
    constructor(inscripcionesService_ahbb) {
        this.inscripcionesService_ahbb = inscripcionesService_ahbb;
    }
    async obtenerInscripciones_ahbb() {
        return this.inscripcionesService_ahbb.obtenerTodas_ahbb();
    }
    async crearInscripcion_ahbb(datos_ahbb) {
        return this.inscripcionesService_ahbb.crearInscripcion_ahbb(datos_ahbb);
    }
    async obtenerHistorialAlumno_ahbb(id_usuario_ahbb) {
        return this.inscripcionesService_ahbb.obtenerHistorialAlumno_ahbb(id_usuario_ahbb);
    }
    async obtenerPorCurso_ahbb(id_curso_ahbb) {
        return this.inscripcionesService_ahbb.obtenerPorCurso_ahbb(id_curso_ahbb);
    }
    async actualizarEstado_ahbb(id_inscripcion_ahbb, datos_ahbb) {
        return this.inscripcionesService_ahbb.actualizarEstado_ahbb(id_inscripcion_ahbb, datos_ahbb);
    }
};
exports.InscripcionesController_ahbb = InscripcionesController_ahbb;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN', 'PROFESOR'),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InscripcionesController_ahbb.prototype, "obtenerInscripciones_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ALUMNO', 'ADMIN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_inscripcion_dto_ahbb_1.CrearInscripcionDto_ahbb]),
    __metadata("design:returntype", Promise)
], InscripcionesController_ahbb.prototype, "crearInscripcion_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ALUMNO', 'ADMIN', 'PROFESOR'),
    (0, common_1.Get)('historial/:id_usuario_ahbb'),
    __param(0, (0, common_1.Param)('id_usuario_ahbb', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InscripcionesController_ahbb.prototype, "obtenerHistorialAlumno_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN', 'PROFESOR'),
    (0, common_1.Get)('curso/:id_curso_ahbb'),
    __param(0, (0, common_1.Param)('id_curso_ahbb', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InscripcionesController_ahbb.prototype, "obtenerPorCurso_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN', 'PROFESOR'),
    (0, common_1.Patch)(':id_inscripcion_ahbb/estado'),
    __param(0, (0, common_1.Param)('id_inscripcion_ahbb', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, actualizar_estado_inscripcion_dto_ahbb_1.ActualizarEstadoInscripcionDto_ahbb]),
    __metadata("design:returntype", Promise)
], InscripcionesController_ahbb.prototype, "actualizarEstado_ahbb", null);
exports.InscripcionesController_ahbb = InscripcionesController_ahbb = __decorate([
    (0, common_1.Controller)('inscripciones'),
    __metadata("design:paramtypes", [inscripciones_service_1.InscripcionesService_ahbb])
], InscripcionesController_ahbb);
//# sourceMappingURL=inscripciones.controller.js.map