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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionesService_ahbb = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const cursos_service_1 = require("../cursos/cursos.service");
let InscripcionesService_ahbb = class InscripcionesService_ahbb {
    prisma_ahbb;
    cursosService_ahbb;
    constructor(prisma_ahbb, cursosService_ahbb) {
        this.prisma_ahbb = prisma_ahbb;
        this.cursosService_ahbb = cursosService_ahbb;
    }
    async crearInscripcion_ahbb(datos_ahbb) {
        const curso_ahbb = await this.prisma_ahbb.td_curso_ahbb.findUnique({
            where: { id_curso_ahbb: datos_ahbb.id_curso_inscripcion_ahbb },
            include: {
                horarios: true,
                inscripciones: true,
                prelacion: true,
            },
        });
        if (!curso_ahbb) {
            throw new common_1.NotFoundException('Curso no encontrado.');
        }
        await this.validarPrelacion_ahbb(datos_ahbb.id_usuario_inscripcion_ahbb, curso_ahbb.id_curso_curso_ahbb);
        await this.validarReingreso_ahbb(datos_ahbb.id_usuario_inscripcion_ahbb, datos_ahbb.id_curso_inscripcion_ahbb);
        await this.validarSolapamiento_ahbb(datos_ahbb.id_usuario_inscripcion_ahbb, curso_ahbb.horarios, curso_ahbb.fechaInicio_ahbb ?? new Date(), curso_ahbb.fechaFin_ahbb ?? new Date());
        return this.prisma_ahbb.$transaction(async (tx_ahbb) => {
            const totalActivos_ahbb = await tx_ahbb.td_inscripcion_ahbb.count({
                where: {
                    id_curso_inscripcion_ahbb: datos_ahbb.id_curso_inscripcion_ahbb,
                    estatus_ahbb: { in: ['INSCRITO', 'OYENTE', 'APROBADO'] },
                },
            });
            const capacidad_ahbb = Number(curso_ahbb.topeEstudiantes_ahbb ?? 5);
            if (totalActivos_ahbb >= capacidad_ahbb) {
                throw new common_1.BadRequestException('El curso alcanzó el tope máximo de 5 alumnos.');
            }
            const intentosPrevios_ahbb = await tx_ahbb.td_inscripcion_ahbb.count({
                where: {
                    id_usuario_inscripcion_ahbb: datos_ahbb.id_usuario_inscripcion_ahbb,
                    id_curso_inscripcion_ahbb: datos_ahbb.id_curso_inscripcion_ahbb,
                },
            });
            return tx_ahbb.td_inscripcion_ahbb.create({
                data: {
                    id_usuario_inscripcion_ahbb: datos_ahbb.id_usuario_inscripcion_ahbb,
                    id_curso_inscripcion_ahbb: datos_ahbb.id_curso_inscripcion_ahbb,
                    estatus_ahbb: 'INSCRITO',
                    intento_ahbb: intentosPrevios_ahbb + 1,
                },
            });
        });
    }
    async obtenerTodas_ahbb() {
        return this.prisma_ahbb.td_inscripcion_ahbb.findMany({
            include: {
                alumno: {
                    select: {
                        id_usuario_ahbb: true,
                        nombre_ahbb: true,
                        apellido_ahbb: true,
                        correo_ahbb: true,
                    },
                },
                curso: {
                    select: {
                        id_curso_ahbb: true,
                        nombre_ahbb: true,
                    },
                },
            },
            orderBy: { creadoEn_ahbb: 'desc' },
        });
    }
    async obtenerHistorialAlumno_ahbb(id_usuario_ahbb) {
        return this.prisma_ahbb.td_inscripcion_ahbb.findMany({
            where: { id_usuario_inscripcion_ahbb: id_usuario_ahbb },
            include: {
                curso: {
                    include: {
                        horarios: true,
                        profesor: {
                            select: { nombre_ahbb: true, apellido_ahbb: true },
                        },
                    },
                },
            },
            orderBy: { creadoEn_ahbb: 'desc' },
        });
    }
    async obtenerPorCurso_ahbb(id_curso_ahbb) {
        return this.prisma_ahbb.td_inscripcion_ahbb.findMany({
            where: { id_curso_inscripcion_ahbb: id_curso_ahbb },
            include: {
                alumno: {
                    select: {
                        id_usuario_ahbb: true,
                        nombre_ahbb: true,
                        apellido_ahbb: true,
                        correo_ahbb: true,
                        cedula_ahbb: true,
                    },
                },
                curso: true,
            },
            orderBy: { alumno: { apellido_ahbb: 'asc' } },
        });
    }
    async obtenerAlumnosPorProfesor_ahbb(id_profesor_ahbb) {
        return this.prisma_ahbb.td_inscripcion_ahbb.findMany({
            where: {
                curso: { id_usuario_curso_ahbb: id_profesor_ahbb },
            },
            include: {
                alumno: {
                    select: {
                        id_usuario_ahbb: true,
                        nombre_ahbb: true,
                        apellido_ahbb: true,
                        correo_ahbb: true,
                        cedula_ahbb: true,
                    },
                },
                curso: {
                    select: {
                        id_curso_ahbb: true,
                        nombre_ahbb: true,
                    },
                },
            },
            orderBy: [
                { curso: { nombre_ahbb: 'asc' } },
                { alumno: { apellido_ahbb: 'asc' } },
            ],
        });
    }
    async actualizarEstado_ahbb(id_inscripcion_ahbb, datos_ahbb) {
        return this.prisma_ahbb.td_inscripcion_ahbb.update({
            where: { id_inscripcion_ahbb },
            data: {
                estatus_ahbb: datos_ahbb.estatus_ahbb,
            },
        });
    }
    async validarSolapamiento_ahbb(id_usuario_ahbb, horariosCursoNuevo_ahbb, fechaInicioBase_ahbb, fechaFinBase_ahbb) {
        const solapamientos_ahbb = await this.cursosService_ahbb.obtenerSolapamientos_ahbb(id_usuario_ahbb, 'ALUMNO', horariosCursoNuevo_ahbb, fechaInicioBase_ahbb, fechaFinBase_ahbb);
        if (solapamientos_ahbb.length > 0) {
            const huecos_ahbb = await this.cursosService_ahbb.obtenerHuecosDisponibles_ahbb(id_usuario_ahbb, 'ALUMNO', fechaInicioBase_ahbb, fechaFinBase_ahbb);
            throw new common_1.BadRequestException({
                message: 'SOLAPAMIENTO_DETECTADO',
                payload: {
                    solapamientos: solapamientos_ahbb,
                    huecosDisponibles: huecos_ahbb,
                },
            });
        }
    }
    async validarPrelacion_ahbb(id_usuario_ahbb, id_curso_prelacion_ahbb) {
        if (!id_curso_prelacion_ahbb) {
            return;
        }
        const aprobada_ahbb = await this.prisma_ahbb.td_inscripcion_ahbb.findFirst({
            where: {
                id_usuario_inscripcion_ahbb: id_usuario_ahbb,
                id_curso_inscripcion_ahbb: id_curso_prelacion_ahbb,
                estatus_ahbb: 'APROBADO',
            },
        });
        if (!aprobada_ahbb) {
            throw new common_1.BadRequestException('No cumple la prelación requerida para inscribirse en este curso.');
        }
    }
    async validarReingreso_ahbb(id_usuario_ahbb, id_curso_ahbb) {
        const inscripcionesPrevias_ahbb = await this.prisma_ahbb.td_inscripcion_ahbb.findMany({
            where: {
                id_usuario_inscripcion_ahbb: id_usuario_ahbb,
                id_curso_inscripcion_ahbb: id_curso_ahbb,
            },
            orderBy: { creadoEn_ahbb: 'desc' },
        });
        const tieneAprobado_ahbb = inscripcionesPrevias_ahbb.some((inscripcion_ahbb) => inscripcion_ahbb.estatus_ahbb === 'APROBADO');
        if (tieneAprobado_ahbb) {
            throw new common_1.BadRequestException('El alumno ya aprobó este curso.');
        }
        const tieneActivo_ahbb = inscripcionesPrevias_ahbb.some((inscripcion_ahbb) => ['INSCRITO', 'OYENTE'].includes(String(inscripcion_ahbb.estatus_ahbb)));
        if (tieneActivo_ahbb) {
            throw new common_1.BadRequestException('Usted ya está inscrito en este curso.');
        }
        const ultima_ahbb = inscripcionesPrevias_ahbb[0];
        if (ultima_ahbb) {
            if (ultima_ahbb.estatus_ahbb !== 'REPROBADO') {
                throw new common_1.BadRequestException('Solo es posible inscribirse nuevamente si el estado previo es REPROBADO.');
            }
        }
    }
};
exports.InscripcionesService_ahbb = InscripcionesService_ahbb;
exports.InscripcionesService_ahbb = InscripcionesService_ahbb = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        cursos_service_1.CursosService])
], InscripcionesService_ahbb);
//# sourceMappingURL=inscripciones.service.js.map