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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
const usuarios_service_1 = require("../usuarios/usuarios.service");
let AuthService = class AuthService {
    usuariosService_ahbb;
    jwtService_ahbb;
    constructor(usuariosService_ahbb, jwtService_ahbb) {
        this.usuariosService_ahbb = usuariosService_ahbb;
        this.jwtService_ahbb = jwtService_ahbb;
    }
    async iniciarSesion_ahbb(correo_ahbb, contrasena_ahbb) {
        const usuario_ahbb = await this.usuariosService_ahbb.encontrarPorCorreo_ahbb(correo_ahbb.toLowerCase());
        if (!usuario_ahbb) {
            throw new common_1.UnauthorizedException({
                exito: false,
                mensaje: 'Correo o contraseña incorrectos.',
            });
        }
        const contrasenaValida_ahbb = await bcrypt.compare(contrasena_ahbb, usuario_ahbb.contrasena_ahbb);
        if (!contrasenaValida_ahbb && contrasena_ahbb !== usuario_ahbb.contrasena_ahbb) {
            throw new common_1.UnauthorizedException({
                exito: false,
                mensaje: 'Correo o contraseña incorrectos.',
            });
        }
        if (usuario_ahbb.estadoCuenta_ahbb !== 'ACTIVO') {
            throw new common_1.UnauthorizedException({
                exito: false,
                mensaje: 'Tu cuenta todavía no ha sido aprobada por administración.',
            });
        }
        const payload_ahbb = {
            sub: usuario_ahbb.id_usuario_ahbb,
            correo: usuario_ahbb.correo_ahbb,
            rol: usuario_ahbb.rol_ahbb,
        };
        const token_ahbb = await this.jwtService_ahbb.signAsync(payload_ahbb);
        const perfil_ahbb = await this.usuariosService_ahbb.obtenerPerfilPorId_ahbb(usuario_ahbb.id_usuario_ahbb);
        return {
            exito: true,
            usuario: perfil_ahbb,
            token: token_ahbb,
            requiereCambioContrasena: usuario_ahbb.requiereCambioContrasena_ahbb,
            mensaje: 'Sesión iniciada',
        };
    }
    async registrarUsuario_ahbb(datos_ahbb) {
        const existe_ahbb = await this.usuariosService_ahbb.encontrarPorCorreo_ahbb(datos_ahbb.correo_ahbb ?? datos_ahbb.correo);
        if (existe_ahbb) {
            throw new common_1.BadRequestException({
                exito: false,
                mensaje: 'Ya existe un usuario con ese correo electrónico.',
            });
        }
        const contrasenaBase_ahbb = datos_ahbb.contrasena_ahbb ?? datos_ahbb.contrasena ?? this.usuariosService_ahbb.generarContrasenaTemporal_ahbb();
        const contrasenaEncriptada_ahbb = await bcrypt.hash(contrasenaBase_ahbb, 10);
        const cedulaGenerada_ahbb = datos_ahbb.cedula_ahbb ?? datos_ahbb.cedula ?? `V-${Math.floor(Math.random() * 100000000)}`;
        const rol_ahbb = String(datos_ahbb.rol_ahbb ?? datos_ahbb.rol ?? 'ALUMNO').toUpperCase();
        const nuevoUsuario_ahbb = await this.usuariosService_ahbb.crearUsuario_ahbb({
            cedula: cedulaGenerada_ahbb,
            nombre: datos_ahbb.nombre_ahbb ?? datos_ahbb.nombre,
            apellido: datos_ahbb.apellido_ahbb ?? datos_ahbb.apellido,
            correo: datos_ahbb.correo_ahbb ?? datos_ahbb.correo,
            contrasena: contrasenaEncriptada_ahbb,
            rol: rol_ahbb,
            estadoCuenta: rol_ahbb === 'ALUMNO' ? 'PENDIENTE_APROBACION' : 'ACTIVO',
            requiereCambioContrasena: rol_ahbb !== 'ALUMNO',
            referenciaPagoMovil: datos_ahbb.referenciaPagoMovil_ahbb ?? datos_ahbb.referenciaPagoMovil,
        });
        return {
            exito: true,
            usuario: nuevoUsuario_ahbb,
            mensaje: rol_ahbb === 'ALUMNO'
                ? 'Registro recibido. Debe ser aprobado por administración.'
                : 'Usuario creado exitosamente.',
        };
    }
    async cambiarContrasena_ahbb(id_usuario_ahbb, contrasenaActual_ahbb, contrasenaNueva_ahbb) {
        const usuario_ahbb = await this.usuariosService_ahbb.obtenerUsuarioPorId_ahbb(id_usuario_ahbb);
        if (!usuario_ahbb) {
            throw new common_1.UnauthorizedException('Usuario no encontrado.');
        }
        const contrasenaValida_ahbb = await bcrypt.compare(contrasenaActual_ahbb, usuario_ahbb.contrasena_ahbb);
        if (!contrasenaValida_ahbb && contrasenaActual_ahbb !== usuario_ahbb.contrasena_ahbb) {
            throw new common_1.UnauthorizedException('La contraseña actual no coincide.');
        }
        const hashNueva_ahbb = await bcrypt.hash(contrasenaNueva_ahbb, 10);
        await this.usuariosService_ahbb.actualizarContrasena_ahbb(id_usuario_ahbb, hashNueva_ahbb);
        return { exito: true, mensaje: 'Contraseña actualizada correctamente.' };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map