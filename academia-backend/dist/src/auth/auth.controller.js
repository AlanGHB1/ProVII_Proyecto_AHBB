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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const iniciar_sesion_dto_ahbb_1 = require("./dto/iniciar-sesion.dto_ahbb");
const registrar_usuario_dto_ahbb_1 = require("./dto/registrar-usuario.dto_ahbb");
const cambiar_contrasena_dto_ahbb_1 = require("./dto/cambiar-contrasena.dto_ahbb");
const jwt_auth_guard_ahbb_1 = require("../common/guards/jwt-auth.guard_ahbb");
const usuarios_service_1 = require("../usuarios/usuarios.service");
let AuthController = class AuthController {
    authService_ahbb;
    usuariosService_ahbb;
    constructor(authService_ahbb, usuariosService_ahbb) {
        this.authService_ahbb = authService_ahbb;
        this.usuariosService_ahbb = usuariosService_ahbb;
    }
    async iniciarSesion_ahbb(datos_ahbb) {
        return this.authService_ahbb.iniciarSesion_ahbb(datos_ahbb.correo_ahbb ?? datos_ahbb.correo, datos_ahbb.contrasena_ahbb ?? datos_ahbb.contrasena);
    }
    async registrar_ahbb(datos_ahbb) {
        return this.authService_ahbb.registrarUsuario_ahbb(datos_ahbb);
    }
    async obtenerPerfil_ahbb(request_ahbb) {
        return this.usuariosService_ahbb.obtenerPerfilPorId_ahbb(Number(request_ahbb.usuario_ahbb?.sub));
    }
    async cambiarContrasena_ahbb(request_ahbb, datos_ahbb) {
        return this.authService_ahbb.cambiarContrasena_ahbb(Number(request_ahbb.usuario_ahbb?.sub), datos_ahbb.contrasenaActual_ahbb, datos_ahbb.contrasenaNueva_ahbb);
    }
    async cerrarSesion_ahbb() {
        return { exito: true, mensaje: 'Sesión cerrada exitosamente.' };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('iniciar-sesion'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [iniciar_sesion_dto_ahbb_1.IniciarSesionDto_ahbb]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "iniciarSesion_ahbb", null);
__decorate([
    (0, common_1.Post)('registrar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registrar_usuario_dto_ahbb_1.RegistrarUsuarioDto_ahbb]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registrar_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb),
    (0, common_1.Get)('perfil'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "obtenerPerfil_ahbb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_ahbb_1.JwtAuthGuard_ahbb),
    (0, common_1.Post)('cambiar-contrasena'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cambiar_contrasena_dto_ahbb_1.CambiarContrasenaDto_ahbb]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "cambiarContrasena_ahbb", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('cerrar-sesion'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "cerrarSesion_ahbb", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        usuarios_service_1.UsuariosService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map