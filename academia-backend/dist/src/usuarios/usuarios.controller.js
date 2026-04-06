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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const usuarios_service_1 = require("./usuarios.service");
const jwt_auth_guard_ahbb_1 = require("../common/guards/jwt-auth.guard_ahbb");
const roles_guard_ahbb_1 = require("../common/guards/roles.guard_ahbb");
const roles_decorator_ahbb_1 = require("../common/decorators/roles.decorator_ahbb");
const carga_masiva_usuarios_dto_ahbb_1 = require("./dto/carga-masiva-usuarios.dto_ahbb");
const aprobar_alumno_dto_ahbb_1 = require("./dto/aprobar-alumno.dto_ahbb");
const guardar_firma_dto_ahbb_1 = require("./dto/guardar-firma.dto_ahbb");
const bcrypt = __importStar(require("bcrypt"));
const actualizar_usuario_dto_ahbb_1 = require("./dto/actualizar-usuario.dto_ahbb");
const actualizar_estado_usuario_dto_ahbb_1 = require("./dto/actualizar-estado-usuario.dto_ahbb");
let UsuariosController = class UsuariosController {
    usuariosService_ahbb;
    constructor(usuariosService_ahbb) {
        this.usuariosService_ahbb = usuariosService_ahbb;
    }
    async obtenerUsuarios_ahbb(rol_ahbb) {
        return this.usuariosService_ahbb.obtenerTodos_ahbb(rol_ahbb);
    }
    async obtenerAlumnosSuscripciones_ahbb() {
        return this.usuariosService_ahbb.obtenerAlumnosPendientes_ahbb();
    }
    async obtenerUsuarioPorId_ahbb(id_usuario_ahbb) {
        return this.usuariosService_ahbb.obtenerPerfilPorId_ahbb(id_usuario_ahbb);
    }
    async validarCargaMasiva_ahbb(datos_ahbb) {
        return this.usuariosService_ahbb.validarCargaMasivaUsuarios_ahbb(datos_ahbb.usuarios_ahbb);
    }
    async confirmarCargaMasiva_ahbb(datos_ahbb) {
        return this.usuariosService_ahbb.crearUsuariosMasivos_ahbb(datos_ahbb.usuarios_ahbb);
    }
    async importarProfesoresExcel_ahbb(file) {
        if (!file) {
            throw new common_1.BadRequestException('No se ha proporcionado ningún archivo');
        }
        return this.usuariosService_ahbb.importarProfesoresDesdeExcel_ahbb(file.buffer);
    }
    async exportarProfesoresExcel_ahbb(res) {
        const buffer = await this.usuariosService_ahbb.exportarProfesoresExcel_ahbb();
        res.set({
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition': 'attachment; filename=Listado_Profesores.xlsx',
            'Content-Length': buffer.length,
        });
        res.send(buffer);
    }
    async aprobarAlumno_ahbb(datos_ahbb, request_ahbb) {
        const contrasenaTemporalPlano_ahbb = this.usuariosService_ahbb.generarContrasenaTemporal_ahbb();
        const hashTemporal_ahbb = await bcrypt.hash(contrasenaTemporalPlano_ahbb, 10);
        const usuario_ahbb = await this.usuariosService_ahbb.aprobarAlumno_ahbb(datos_ahbb.id_usuario_ahbb, Number(request_ahbb.usuario_ahbb?.sub), datos_ahbb.referenciaPagoMovil_ahbb, hashTemporal_ahbb, contrasenaTemporalPlano_ahbb);
        return {
            exito: true,
            usuario: usuario_ahbb,
            mensaje: 'Alumno aprobado. Se enviaron sus credenciales por correo.',
        };
    }
    async aprobarAlumnosMasivo_ahbb(datos_ahbb, request_ahbb) {
        return this.usuariosService_ahbb.aprobarAlumnosMasivo_ahbb(datos_ahbb.ids, Number(request_ahbb.usuario_ahbb?.sub));
    }
    async guardarFirmaDigital_ahbb(id_usuario_ahbb, datos_ahbb) {
        return this.usuariosService_ahbb.guardarFirmaDigital_ahbb(id_usuario_ahbb, datos_ahbb.imagenBase64_ahbb);
    }
    async actualizarUsuario_ahbb(id_usuario_ahbb, datos_ahbb) {
        return this.usuariosService_ahbb.actualizarPerfil_ahbb(id_usuario_ahbb, datos_ahbb);
    }
    async actualizarEstadoUsuario_ahbb(id_usuario_ahbb, datos_ahbb) {
        return this.usuariosService_ahbb.actualizarEstadoCuenta_ahbb(id_usuario_ahbb, datos_ahbb.estadoCuenta_ahbb ?? datos_ahbb.estado);
    }
    async eliminarUsuario_ahbb(id_usuario_ahbb) {
        return this.usuariosService_ahbb.eliminarUsuario_ahbb(id_usuario_ahbb);
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('rol')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "obtenerUsuarios_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Get)('alumnos-suscripciones'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "obtenerAlumnosSuscripciones_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN', 'PROFESOR', 'ALUMNO'),
    (0, common_1.Get)(':id_usuario_ahbb'),
    __param(0, (0, common_1.Param)('id_usuario_ahbb', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "obtenerUsuarioPorId_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Post)('carga-masiva/validar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carga_masiva_usuarios_dto_ahbb_1.CargaMasivaUsuariosDto_ahbb]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "validarCargaMasiva_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Post)('carga-masiva/confirmar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carga_masiva_usuarios_dto_ahbb_1.CargaMasivaUsuariosDto_ahbb]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "confirmarCargaMasiva_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Post)('carga-masiva/profesores-excel'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "importarProfesoresExcel_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Get)('carga-masiva/exportar-profesores'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "exportarProfesoresExcel_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Post)('aprobar-alumno'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [aprobar_alumno_dto_ahbb_1.AprobarAlumnoDto_ahbb, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "aprobarAlumno_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Post)('aprobar-alumnos-masivo'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "aprobarAlumnosMasivo_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('PROFESOR', 'ADMIN'),
    (0, common_1.Post)(':id_usuario_ahbb/firma-digital'),
    __param(0, (0, common_1.Param)('id_usuario_ahbb', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, guardar_firma_dto_ahbb_1.GuardarFirmaDto_ahbb]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "guardarFirmaDigital_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN', 'PROFESOR', 'ALUMNO'),
    (0, common_1.Patch)(':id_usuario_ahbb'),
    __param(0, (0, common_1.Param)('id_usuario_ahbb', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, actualizar_usuario_dto_ahbb_1.ActualizarUsuarioDto_ahbb]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "actualizarUsuario_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Patch)(':id_usuario_ahbb/estado'),
    __param(0, (0, common_1.Param)('id_usuario_ahbb', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, actualizar_estado_usuario_dto_ahbb_1.ActualizarEstadoUsuarioDto_ahbb]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "actualizarEstadoUsuario_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb, roles_guard_ahbb_1.RolesGuard_ahbb),
    (0, roles_decorator_ahbb_1.RolesDecorator_ahbb)('ADMIN'),
    (0, common_1.Delete)(':id_usuario_ahbb'),
    __param(0, (0, common_1.Param)('id_usuario_ahbb', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "eliminarUsuario_ahbb", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map