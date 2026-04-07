import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';
export declare class AuthService {
    private readonly usuariosService_ahbb;
    private readonly jwtService_ahbb;
    constructor(usuariosService_ahbb: UsuariosService, jwtService_ahbb: JwtService);
    iniciarSesion_ahbb(correo_ahbb: string, contrasena_ahbb: string): Promise<{
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
    registrarUsuario_ahbb(datos_ahbb: any): Promise<{
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
        correoEnviado: boolean;
        mensaje: string;
    }>;
    cambiarContrasena_ahbb(id_usuario_ahbb: number, contrasenaActual_ahbb: string, contrasenaNueva_ahbb: string): Promise<{
        exito: boolean;
        mensaje: string;
    }>;
}
