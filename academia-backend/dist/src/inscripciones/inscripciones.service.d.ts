import { PrismaService } from '../prisma.service';
import { CursosService } from '../cursos/cursos.service';
import { CrearInscripcionDto_ahbb } from './dto/crear-inscripcion.dto_ahbb';
import { ActualizarEstadoInscripcionDto_ahbb } from './dto/actualizar-estado-inscripcion.dto_ahbb';
export declare class InscripcionesService_ahbb {
    private readonly prisma_ahbb;
    private readonly cursosService_ahbb;
    constructor(prisma_ahbb: PrismaService, cursosService_ahbb: CursosService);
    crearInscripcion_ahbb(datos_ahbb: CrearInscripcionDto_ahbb): Promise<{
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
        id_inscripcion_ahbb: number;
        estatus_ahbb: string | null;
        intento_ahbb: number;
        notaFinal_ahbb: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones_ahbb: string | null;
        id_usuario_inscripcion_ahbb: number;
        id_curso_inscripcion_ahbb: number;
    }>;
    obtenerTodas_ahbb(): Promise<({
        alumno: {
            id_usuario_ahbb: number;
            nombre_ahbb: string;
            apellido_ahbb: string;
            correo_ahbb: string;
        };
        curso: {
            nombre_ahbb: string;
            id_curso_ahbb: number;
        };
    } & {
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
        id_inscripcion_ahbb: number;
        estatus_ahbb: string | null;
        intento_ahbb: number;
        notaFinal_ahbb: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones_ahbb: string | null;
        id_usuario_inscripcion_ahbb: number;
        id_curso_inscripcion_ahbb: number;
    })[]>;
    obtenerHistorialAlumno_ahbb(id_usuario_ahbb: number): Promise<({
        curso: {
            profesor: {
                nombre_ahbb: string;
                apellido_ahbb: string;
            };
            horarios: {
                id_horario_ahbb: number;
                diaSemana_ahbb: string;
                horaInicio_ahbb: string;
                horaFin_ahbb: string;
                id_curso_horario_ahbb: number;
            }[];
        } & {
            nombre_ahbb: string;
            creadoEn_ahbb: Date | null;
            actualizadoEn_ahbb: Date | null;
            id_curso_ahbb: number;
            tematica_ahbb: string;
            descripcion_ahbb: string | null;
            diasDefinidos_ahbb: number;
            horasDefinidas_ahbb: number;
            fechaInicio_ahbb: Date | null;
            fechaFin_ahbb: Date | null;
            fechaDuracion_ahbb: Date | null;
            topeEstudiantes_ahbb: number | null;
            temarioTexto_ahbb: string | null;
            imagenBasePdf_ahbb: string | null;
            imagenBloqueada_ahbb: boolean | null;
            isPublished_ahbb: boolean;
            id_usuario_curso_ahbb: number;
            id_curso_curso_ahbb: number | null;
        };
    } & {
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
        id_inscripcion_ahbb: number;
        estatus_ahbb: string | null;
        intento_ahbb: number;
        notaFinal_ahbb: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones_ahbb: string | null;
        id_usuario_inscripcion_ahbb: number;
        id_curso_inscripcion_ahbb: number;
    })[]>;
    obtenerPorCurso_ahbb(id_curso_ahbb: number): Promise<({
        alumno: {
            id_usuario_ahbb: number;
            nombre_ahbb: string;
            apellido_ahbb: string;
            correo_ahbb: string;
        };
    } & {
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
        id_inscripcion_ahbb: number;
        estatus_ahbb: string | null;
        intento_ahbb: number;
        notaFinal_ahbb: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones_ahbb: string | null;
        id_usuario_inscripcion_ahbb: number;
        id_curso_inscripcion_ahbb: number;
    })[]>;
    actualizarEstado_ahbb(id_inscripcion_ahbb: number, datos_ahbb: ActualizarEstadoInscripcionDto_ahbb): Promise<{
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
        id_inscripcion_ahbb: number;
        estatus_ahbb: string | null;
        intento_ahbb: number;
        notaFinal_ahbb: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones_ahbb: string | null;
        id_usuario_inscripcion_ahbb: number;
        id_curso_inscripcion_ahbb: number;
    }>;
    validarSolapamiento_ahbb(id_usuario_ahbb: number, horariosCursoNuevo_ahbb: any[]): Promise<void>;
    validarPrelacion_ahbb(id_usuario_ahbb: number, id_curso_prelacion_ahbb?: number | null): Promise<void>;
    validarReingreso_ahbb(id_usuario_ahbb: number, id_curso_ahbb: number): Promise<void>;
}
