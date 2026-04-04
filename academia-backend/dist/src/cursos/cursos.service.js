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
exports.CursosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CursosService = class CursosService {
    prisma_ahbb;
    constructor(prisma_ahbb) {
        this.prisma_ahbb = prisma_ahbb;
    }
    async obtenerTodos_ahbb() {
        const cursos_ahbb = await this.prisma_ahbb.td_curso_ahbb.findMany({
            include: {
                profesor: {
                    select: { nombre_ahbb: true, apellido_ahbb: true },
                },
                horarios: true,
                prelacion: {
                    select: { id_curso_ahbb: true, nombre_ahbb: true },
                },
                inscripciones: {
                    where: {
                        estatus_ahbb: {
                            in: ['INSCRITO', 'OYENTE', 'APROBADO'],
                        },
                    },
                },
            },
            orderBy: { creadoEn_ahbb: 'desc' },
        });
        return cursos_ahbb.map((curso_ahbb) => this.mapearCurso_ahbb(curso_ahbb));
    }
    async obtenerPorId_ahbb(id_curso_ahbb) {
        const curso_ahbb = await this.prisma_ahbb.td_curso_ahbb.findUnique({
            where: { id_curso_ahbb },
            include: {
                profesor: {
                    select: { nombre_ahbb: true, apellido_ahbb: true },
                },
                horarios: true,
                prelacion: {
                    select: { id_curso_ahbb: true, nombre_ahbb: true },
                },
                inscripciones: true,
            },
        });
        if (!curso_ahbb) {
            throw new common_1.NotFoundException('Curso no encontrado.');
        }
        return this.mapearCurso_ahbb(curso_ahbb);
    }
    async crearCurso_ahbb(id_profesor_ahbb, datos_ahbb) {
        await this.validarSolapamientoProfesor_ahbb(id_profesor_ahbb, datos_ahbb.horarios_ahbb);
        const fechaInicio_ahbb = datos_ahbb.fechaInicio_ahbb
            ? new Date(datos_ahbb.fechaInicio_ahbb)
            : new Date();
        const fechaFin_ahbb = datos_ahbb.fechaFin_ahbb
            ? new Date(datos_ahbb.fechaFin_ahbb)
            : new Date(fechaInicio_ahbb.getTime() +
                Number(datos_ahbb.diasDefinidos_ahbb ?? 1) * 24 * 60 * 60 * 1000);
        const curso_ahbb = await this.prisma_ahbb.td_curso_ahbb.create({
            data: {
                nombre_ahbb: datos_ahbb.nombre_ahbb,
                tematica_ahbb: datos_ahbb.tematica_ahbb,
                descripcion_ahbb: datos_ahbb.descripcion_ahbb ?? null,
                temarioTexto_ahbb: datos_ahbb.temarioTexto_ahbb ?? null,
                fechaInicio_ahbb,
                fechaFin_ahbb,
                fechaDuracion_ahbb: fechaFin_ahbb,
                horasDefinidas_ahbb: Number(datos_ahbb.horasDefinidas_ahbb),
                diasDefinidos_ahbb: Number(datos_ahbb.diasDefinidos_ahbb),
                topeEstudiantes_ahbb: Number(datos_ahbb.topeEstudiantes_ahbb ?? 5),
                isPublished_ahbb: Boolean(datos_ahbb.isPublished_ahbb),
                id_usuario_curso_ahbb: id_profesor_ahbb,
                id_curso_curso_ahbb: datos_ahbb.id_curso_curso_ahbb ?? null,
                horarios: {
                    create: datos_ahbb.horarios_ahbb.map((horario_ahbb) => ({
                        diaSemana_ahbb: horario_ahbb.diaSemana_ahbb.toUpperCase(),
                        horaInicio_ahbb: horario_ahbb.horaInicio_ahbb,
                        horaFin_ahbb: horario_ahbb.horaFin_ahbb,
                    })),
                },
            },
            include: {
                profesor: {
                    select: { nombre_ahbb: true, apellido_ahbb: true },
                },
                horarios: true,
                prelacion: {
                    select: { id_curso_ahbb: true, nombre_ahbb: true },
                },
                inscripciones: true,
            },
        });
        return this.mapearCurso_ahbb(curso_ahbb);
    }
    async actualizarCurso_ahbb(id_curso_ahbb, id_usuario_ahbb, datos_ahbb) {
        const cursoExistente_ahbb = await this.prisma_ahbb.td_curso_ahbb.findUnique({
            where: { id_curso_ahbb },
        });
        if (!cursoExistente_ahbb) {
            throw new common_1.NotFoundException('Curso no encontrado.');
        }
        const fechaInicio_ahbb = datos_ahbb.fechaInicio_ahbb
            ? new Date(datos_ahbb.fechaInicio_ahbb)
            : (cursoExistente_ahbb.fechaInicio_ahbb ?? new Date());
        const fechaFin_ahbb = datos_ahbb.fechaFin_ahbb
            ? new Date(datos_ahbb.fechaFin_ahbb)
            : new Date(fechaInicio_ahbb.getTime() +
                Number(datos_ahbb.diasDefinidos_ahbb ??
                    cursoExistente_ahbb.diasDefinidos_ahbb ??
                    1) *
                    24 *
                    60 *
                    60 *
                    1000);
        await this.validarSolapamientoProfesor_ahbb(id_usuario_ahbb, datos_ahbb.horarios_ahbb ?? []);
        const cursoActualizado_ahbb = await this.prisma_ahbb.$transaction(async (tx_ahbb) => {
            await tx_ahbb.td_horario_ahbb.deleteMany({
                where: { id_curso_horario_ahbb: id_curso_ahbb },
            });
            return tx_ahbb.td_curso_ahbb.update({
                where: { id_curso_ahbb },
                data: {
                    nombre_ahbb: datos_ahbb.nombre_ahbb,
                    tematica_ahbb: datos_ahbb.tematica_ahbb,
                    descripcion_ahbb: datos_ahbb.descripcion_ahbb ?? null,
                    temarioTexto_ahbb: datos_ahbb.temarioTexto_ahbb ?? null,
                    fechaInicio_ahbb,
                    fechaFin_ahbb,
                    fechaDuracion_ahbb: fechaFin_ahbb,
                    horasDefinidas_ahbb: Number(datos_ahbb.horasDefinidas_ahbb),
                    diasDefinidos_ahbb: Number(datos_ahbb.diasDefinidos_ahbb),
                    topeEstudiantes_ahbb: Number(datos_ahbb.topeEstudiantes_ahbb ?? 5),
                    isPublished_ahbb: Boolean(datos_ahbb.isPublished_ahbb),
                    id_curso_curso_ahbb: datos_ahbb.id_curso_curso_ahbb ?? null,
                    horarios: {
                        create: (datos_ahbb.horarios_ahbb ?? []).map((horario_ahbb) => ({
                            diaSemana_ahbb: horario_ahbb.diaSemana_ahbb.toUpperCase(),
                            horaInicio_ahbb: horario_ahbb.horaInicio_ahbb,
                            horaFin_ahbb: horario_ahbb.horaFin_ahbb,
                        })),
                    },
                },
                include: {
                    profesor: {
                        select: { nombre_ahbb: true, apellido_ahbb: true },
                    },
                    horarios: true,
                    prelacion: {
                        select: { id_curso_ahbb: true, nombre_ahbb: true },
                    },
                    inscripciones: true,
                },
            });
        });
        return this.mapearCurso_ahbb(cursoActualizado_ahbb);
    }
    async eliminarCurso_ahbb(id_curso_ahbb) {
        await this.prisma_ahbb.td_curso_ahbb.delete({
            where: { id_curso_ahbb },
        });
        return { exito: true };
    }
    async obtenerDisponibilidad_ahbb(id_curso_ahbb) {
        const curso_ahbb = await this.prisma_ahbb.td_curso_ahbb.findUnique({
            where: { id_curso_ahbb },
            include: {
                inscripciones: {
                    where: {
                        estatus_ahbb: { in: ['INSCRITO', 'OYENTE', 'APROBADO'] },
                    },
                },
            },
        });
        if (!curso_ahbb) {
            throw new common_1.NotFoundException('Curso no encontrado.');
        }
        const ocupados_ahbb = curso_ahbb.inscripciones.length;
        const capacidad_ahbb = Number(curso_ahbb.topeEstudiantes_ahbb ?? 5);
        return {
            id_curso_ahbb,
            capacidad_ahbb,
            ocupados_ahbb,
            disponible_ahbb: ocupados_ahbb < capacidad_ahbb,
            cuposRestantes_ahbb: Math.max(capacidad_ahbb - ocupados_ahbb, 0),
        };
    }
    async validarSolapamientoProfesor_ahbb(id_profesor_ahbb, horariosNuevos_ahbb) {
        const cursos_ahbb = await this.prisma_ahbb.td_curso_ahbb.findMany({
            where: { id_usuario_curso_ahbb: id_profesor_ahbb },
            include: { horarios: true },
        });
        for (const curso_ahbb of cursos_ahbb) {
            for (const horarioExistente_ahbb of curso_ahbb.horarios) {
                for (const horarioNuevo_ahbb of horariosNuevos_ahbb) {
                    const mismoDia_ahbb = horarioExistente_ahbb.diaSemana_ahbb ===
                        horarioNuevo_ahbb.diaSemana_ahbb.toUpperCase();
                    if (mismoDia_ahbb &&
                        this.hayCruceHoras_ahbb(horarioExistente_ahbb.horaInicio_ahbb, horarioExistente_ahbb.horaFin_ahbb, horarioNuevo_ahbb.horaInicio_ahbb, horarioNuevo_ahbb.horaFin_ahbb)) {
                        throw new common_1.BadRequestException(`El profesor ya imparte otro curso en ${horarioExistente_ahbb.diaSemana_ahbb} ${horarioExistente_ahbb.horaInicio_ahbb}-${horarioExistente_ahbb.horaFin_ahbb}.`);
                    }
                }
            }
        }
    }
    hayCruceHoras_ahbb(inicioA_ahbb, finA_ahbb, inicioB_ahbb, finB_ahbb) {
        return inicioA_ahbb < finB_ahbb && inicioB_ahbb < finA_ahbb;
    }
    mapearCurso_ahbb(curso_ahbb) {
        const profesorNombre_ahbb = curso_ahbb.profesor
            ? `${curso_ahbb.profesor.nombre_ahbb} ${curso_ahbb.profesor.apellido_ahbb}`
            : 'Sin asignar';
        return {
            id: curso_ahbb.id_curso_ahbb,
            nombre: curso_ahbb.nombre_ahbb,
            descripcion: curso_ahbb.descripcion_ahbb ?? curso_ahbb.tematica_ahbb,
            profesor: profesorNombre_ahbb,
            profesorId: curso_ahbb.id_usuario_curso_ahbb,
            duracionHoras: curso_ahbb.horasDefinidas_ahbb,
            cantidadDias: curso_ahbb.diasDefinidos_ahbb,
            topeEstudiantes: curso_ahbb.topeEstudiantes_ahbb ?? 5,
            estatus: curso_ahbb.isPublished_ahbb ? 'activo' : 'pendiente',
            temario: curso_ahbb.temarioTexto_ahbb,
            fechaInicio: curso_ahbb.fechaInicio_ahbb,
            fechaFin: curso_ahbb.fechaFin_ahbb,
            fechaCreacion: curso_ahbb.creadoEn_ahbb,
            estudiantesInscritos: curso_ahbb.inscripciones?.length ?? 0,
            dias: curso_ahbb.horarios?.map((horario_ahbb) => horario_ahbb.diaSemana_ahbb.toLowerCase()) ?? [],
            horaInicio: curso_ahbb.horarios?.[0]?.horaInicio_ahbb ?? null,
            horaFin: curso_ahbb.horarios?.[0]?.horaFin_ahbb ?? null,
            horarios: curso_ahbb.horarios ?? [],
            tienePrelacion: Boolean(curso_ahbb.prelacion),
            prelacionCursoId: curso_ahbb.prelacion?.id_curso_ahbb ?? null,
            prelacionNombre: curso_ahbb.prelacion?.nombre_ahbb ?? null,
            isPublished: curso_ahbb.isPublished_ahbb,
        };
    }
};
exports.CursosService = CursosService;
exports.CursosService = CursosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CursosService);
//# sourceMappingURL=cursos.service.js.map