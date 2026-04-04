import { AuthService } from './auth.service';
import { IniciarSesionDto_ahbb } from './dto/iniciar-sesion.dto_ahbb';
import { RegistrarUsuarioDto_ahbb } from './dto/registrar-usuario.dto_ahbb';
import { CambiarContrasenaDto_ahbb } from './dto/cambiar-contrasena.dto_ahbb';
import { UsuariosService } from '../usuarios/usuarios.service';
import type { RequestConUsuario_ahbb } from '../common/interfaces/request-usuario.interface_ahbb';
export declare class AuthController {
    private readonly authService_ahbb;
    private readonly usuariosService_ahbb;
    constructor(authService_ahbb: AuthService, usuariosService_ahbb: UsuariosService);
    iniciarSesion_ahbb(datos_ahbb: IniciarSesionDto_ahbb): Promise<{
        exito: boolean;
        usuario: {
            id: any;
            cedula: any;
            nombre: any;
            apellido: any;
            correo: any;
            rol: string;
            estadoCuenta: any;
            requiereCambioContrasena: any;
            firmaDigital: any;
            creadoEn: any;
        };
        token: string;
        requiereCambioContrasena: boolean;
        mensaje: string;
    }>;
    registrar_ahbb(datos_ahbb: RegistrarUsuarioDto_ahbb): Promise<{
        exito: boolean;
        usuario: {
            id: any;
            cedula: any;
            nombre: any;
            apellido: any;
            correo: any;
            rol: string;
            estadoCuenta: any;
            requiereCambioContrasena: any;
            firmaDigital: any;
            creadoEn: any;
        };
        mensaje: string;
    }>;
    obtenerPerfil_ahbb(request_ahbb: RequestConUsuario_ahbb): Promise<{
        id: any;
        cedula: any;
        nombre: any;
        apellido: any;
        correo: any;
        rol: string;
        estadoCuenta: any;
        requiereCambioContrasena: any;
        firmaDigital: any;
        creadoEn: any;
    }>;
    cambiarContrasena_ahbb(request_ahbb: RequestConUsuario_ahbb, datos_ahbb: CambiarContrasenaDto_ahbb): Promise<{
        exito: boolean;
        mensaje: string;
    }>;
    cerrarSesion_ahbb(): Promise<{
        exito: boolean;
        mensaje: string;
    }>;
}
