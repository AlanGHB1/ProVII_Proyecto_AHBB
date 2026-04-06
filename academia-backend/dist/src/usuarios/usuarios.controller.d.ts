import type { Response } from 'express';
import { UsuariosService } from './usuarios.service';
import { CargaMasivaUsuariosDto_ahbb } from './dto/carga-masiva-usuarios.dto_ahbb';
import { AprobarAlumnoDto_ahbb } from './dto/aprobar-alumno.dto_ahbb';
import { GuardarFirmaDto_ahbb } from './dto/guardar-firma.dto_ahbb';
import type { RequestConUsuario_ahbb } from '../common/interfaces/request-usuario.interface_ahbb';
import { ActualizarUsuarioDto_ahbb } from './dto/actualizar-usuario.dto_ahbb';
import { ActualizarEstadoUsuarioDto_ahbb } from './dto/actualizar-estado-usuario.dto_ahbb';
export declare class UsuariosController {
    private readonly usuariosService_ahbb;
    constructor(usuariosService_ahbb: UsuariosService);
    obtenerUsuarios_ahbb(rol_ahbb?: string): Promise<{
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
    }[]>;
    obtenerAlumnosSuscripciones_ahbb(): Promise<{
        referenciaPagoMovil: string | null;
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
    }[]>;
    obtenerUsuarioPorId_ahbb(id_usuario_ahbb: number): Promise<{
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
    validarCargaMasiva_ahbb(datos_ahbb: CargaMasivaUsuariosDto_ahbb): Promise<{
        exito: boolean;
        totalRegistros_ahbb: number;
        errores_ahbb: string[];
    }>;
    confirmarCargaMasiva_ahbb(datos_ahbb: CargaMasivaUsuariosDto_ahbb): Promise<{
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
    }[]>;
    importarProfesoresExcel_ahbb(file: Express.Multer.File): Promise<{
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
    }[]>;
    exportarProfesoresExcel_ahbb(res: Response): Promise<void>;
    aprobarAlumno_ahbb(datos_ahbb: AprobarAlumnoDto_ahbb, request_ahbb: RequestConUsuario_ahbb): Promise<{
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
    aprobarAlumnosMasivo_ahbb(datos_ahbb: {
        ids: number[];
    }, request_ahbb: RequestConUsuario_ahbb): Promise<{
        aprobados: number;
        detalle: any[];
    }>;
    guardarFirmaDigital_ahbb(id_usuario_ahbb: number, datos_ahbb: GuardarFirmaDto_ahbb): Promise<{
        exito: boolean;
        rutaFirma_ahbb: string;
    }>;
    actualizarUsuario_ahbb(id_usuario_ahbb: number, datos_ahbb: ActualizarUsuarioDto_ahbb): Promise<{
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
    actualizarEstadoUsuario_ahbb(id_usuario_ahbb: number, datos_ahbb: ActualizarEstadoUsuarioDto_ahbb): Promise<{
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
    eliminarUsuario_ahbb(id_usuario_ahbb: number): Promise<{
        exito: boolean;
    }>;
}
