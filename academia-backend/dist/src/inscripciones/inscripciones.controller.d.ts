import { InscripcionesService_ahbb } from './inscripciones.service';
import { CrearInscripcionDto_ahbb } from './dto/crear-inscripcion.dto_ahbb';
import { ActualizarEstadoInscripcionDto_ahbb } from './dto/actualizar-estado-inscripcion.dto_ahbb';
export declare class InscripcionesController_ahbb {
    private readonly inscripcionesService_ahbb;
    constructor(inscripcionesService_ahbb: InscripcionesService_ahbb);
    obtenerInscripciones_ahbb(): Promise<({
        alumno: {
            nombre_ahbb: string;
            id_usuario_ahbb: number;
            apellido_ahbb: string;
            correo_ahbb: string;
        };
        curso: {
            id_curso_ahbb: number;
            nombre_ahbb: string;
        };
    } & {
        id_inscripcion_ahbb: number;
        estatus_ahbb: string | null;
        intento_ahbb: number;
        notaFinal_ahbb: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones_ahbb: string | null;
        id_usuario_inscripcion_ahbb: number;
        id_curso_inscripcion_ahbb: number;
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
    })[]>;
    crearInscripcion_ahbb(datos_ahbb: CrearInscripcionDto_ahbb): Promise<{
        id_inscripcion_ahbb: number;
        estatus_ahbb: string | null;
        intento_ahbb: number;
        notaFinal_ahbb: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones_ahbb: string | null;
        id_usuario_inscripcion_ahbb: number;
        id_curso_inscripcion_ahbb: number;
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
    }>;
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
            isPublished_ahbb: boolean;
            id_usuario_curso_ahbb: number;
            creadoEn_ahbb: Date | null;
            actualizadoEn_ahbb: Date | null;
            id_curso_ahbb: number;
            nombre_ahbb: string;
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
            estadoAprobacion_ahbb: string;
            motivoRechazo_ahbb: string | null;
            mensajeCorreccion_ahbb: string | null;
            id_curso_curso_ahbb: number | null;
        };
    } & {
        id_inscripcion_ahbb: number;
        estatus_ahbb: string | null;
        intento_ahbb: number;
        notaFinal_ahbb: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones_ahbb: string | null;
        id_usuario_inscripcion_ahbb: number;
        id_curso_inscripcion_ahbb: number;
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
    })[]>;
    obtenerPorCurso_ahbb(id_curso_ahbb: number): Promise<({
        alumno: {
            nombre_ahbb: string;
            id_usuario_ahbb: number;
            cedula_ahbb: string;
            apellido_ahbb: string;
            correo_ahbb: string;
        };
        curso: {
            isPublished_ahbb: boolean;
            id_usuario_curso_ahbb: number;
            creadoEn_ahbb: Date | null;
            actualizadoEn_ahbb: Date | null;
            id_curso_ahbb: number;
            nombre_ahbb: string;
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
            estadoAprobacion_ahbb: string;
            motivoRechazo_ahbb: string | null;
            mensajeCorreccion_ahbb: string | null;
            id_curso_curso_ahbb: number | null;
        };
    } & {
        id_inscripcion_ahbb: number;
        estatus_ahbb: string | null;
        intento_ahbb: number;
        notaFinal_ahbb: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones_ahbb: string | null;
        id_usuario_inscripcion_ahbb: number;
        id_curso_inscripcion_ahbb: number;
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
    })[]>;
    obtenerAlumnosPorProfesor_ahbb(id_profesor: number): Promise<({
        alumno: {
            nombre_ahbb: string;
            id_usuario_ahbb: number;
            cedula_ahbb: string;
            apellido_ahbb: string;
            correo_ahbb: string;
        };
        curso: {
            id_curso_ahbb: number;
            nombre_ahbb: string;
        };
    } & {
        id_inscripcion_ahbb: number;
        estatus_ahbb: string | null;
        intento_ahbb: number;
        notaFinal_ahbb: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones_ahbb: string | null;
        id_usuario_inscripcion_ahbb: number;
        id_curso_inscripcion_ahbb: number;
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
    })[]>;
    actualizarEstado_ahbb(id_inscripcion_ahbb: number, datos_ahbb: ActualizarEstadoInscripcionDto_ahbb): Promise<{
        id_inscripcion_ahbb: number;
        estatus_ahbb: string | null;
        intento_ahbb: number;
        notaFinal_ahbb: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones_ahbb: string | null;
        id_usuario_inscripcion_ahbb: number;
        id_curso_inscripcion_ahbb: number;
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
    }>;
}
