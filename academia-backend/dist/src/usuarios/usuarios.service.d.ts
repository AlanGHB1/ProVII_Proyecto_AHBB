import { PrismaService } from '../prisma.service';
export declare class UsuariosService {
    private readonly prisma_ahbb;
    constructor(prisma_ahbb: PrismaService);
    obtenerTodos_ahbb(rolFiltro_ahbb?: string): Promise<{
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
    encontrarPorCorreo_ahbb(correo_ahbb: string): Promise<{
        nombre_ahbb: string;
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
        id_usuario_ahbb: number;
        cedula_ahbb: string;
        apellido_ahbb: string;
        correo_ahbb: string;
        contrasena_ahbb: string;
        rol_ahbb: string | null;
        firmaDigital_ahbb: string | null;
        estadoCuenta_ahbb: string;
        requiereCambioContrasena_ahbb: boolean;
        referenciaPagoMovil_ahbb: string | null;
        aprobadoPorUsuarioId_ahbb: number | null;
    } | null>;
    hashearContrasena_ahbb(contrasenaPlana_ahbb: string): Promise<string>;
    crearUsuario_ahbb(datos_ahbb: any): Promise<{
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
    obtenerPerfilPorId_ahbb(id_usuario_ahbb: number): Promise<{
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
    obtenerUsuarioPorId_ahbb(id_usuario_ahbb: number): Promise<{
        nombre_ahbb: string;
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
        id_usuario_ahbb: number;
        cedula_ahbb: string;
        apellido_ahbb: string;
        correo_ahbb: string;
        contrasena_ahbb: string;
        rol_ahbb: string | null;
        firmaDigital_ahbb: string | null;
        estadoCuenta_ahbb: string;
        requiereCambioContrasena_ahbb: boolean;
        referenciaPagoMovil_ahbb: string | null;
        aprobadoPorUsuarioId_ahbb: number | null;
    } | null>;
    actualizarContrasena_ahbb(id_usuario_ahbb: number, hashContrasena_ahbb: string): Promise<void>;
    actualizarPerfil_ahbb(id_usuario_ahbb: number, datos_ahbb: any): Promise<{
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
    actualizarEstadoCuenta_ahbb(id_usuario_ahbb: number, estadoCuenta_ahbb: string): Promise<{
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
    validarCargaMasivaUsuarios_ahbb(usuarios_ahbb: any[]): Promise<{
        exito: boolean;
        totalRegistros_ahbb: number;
        errores_ahbb: string[];
    }>;
    crearUsuariosMasivos_ahbb(usuarios_ahbb: any[]): Promise<{
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
    importarProfesoresDesdeExcel_ahbb(bufferArchivo: Buffer): Promise<{
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
    exportarProfesoresExcel_ahbb(): Promise<Buffer>;
    obtenerAlumnosPendientes_ahbb(): Promise<{
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
    aprobarAlumno_ahbb(id_usuario_ahbb: number, id_aprobador_ahbb: number, referenciaPagoMovil_ahbb: string): Promise<{
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
    aprobarAlumnosMasivo_ahbb(ids_ahbb: number[], id_aprobador_ahbb: number): Promise<{
        aprobados: number;
        detalle: any[];
    }>;
    guardarFirmaDigital_ahbb(id_usuario_ahbb: number, imagenBase64_ahbb: string): Promise<{
        exito: boolean;
        rutaFirma_ahbb: string;
    }>;
    generarContrasenaTemporal_ahbb(): string;
    normalizarRolInterno_ahbb(rol_ahbb: string): "ADMIN" | "ALUMNO" | "PROFESOR";
    mapearRolFrontend_ahbb(rol_ahbb?: string | null): "administrador" | "profesor" | "alumno";
    mapearUsuarioPublico_ahbb(usuario_ahbb: any): {
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
    obtenerAlumnosPorProfesor_ahbb(id_profesor_ahbb: number): Promise<any[]>;
}
