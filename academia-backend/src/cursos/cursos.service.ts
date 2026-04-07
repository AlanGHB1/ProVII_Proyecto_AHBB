import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CrearCursoDto_ahbb } from './dto/crear-curso.dto_ahbb';

@Injectable()
export class CursosService {
  constructor(private readonly prisma_ahbb: PrismaService) {}

  async obtenerTodos_ahbb(
    rol_ahbb?: string,
    id_usuario_ahbb?: number,
    soloPropios_ahbb: boolean = false,
    soloInscritos_ahbb: boolean = false,
  ) {
    let whereClause: any = {
      isPublished_ahbb: true,
      imagenBloqueada_ahbb: { not: true },
    };

    const rolNormal_ahbb = rol_ahbb?.toUpperCase();

    if (rolNormal_ahbb === 'ADMIN') {
      whereClause = {};
      if (soloPropios_ahbb && id_usuario_ahbb) {
        whereClause = { id_usuario_curso_ahbb: id_usuario_ahbb };
      }
    } else if (rolNormal_ahbb === 'PROFESOR' && id_usuario_ahbb) {
      if (soloPropios_ahbb) {
        whereClause = { id_usuario_curso_ahbb: id_usuario_ahbb };
      } else {
        whereClause = {
          OR: [
            { id_usuario_curso_ahbb: id_usuario_ahbb },
            { isPublished_ahbb: true, imagenBloqueada_ahbb: { not: true } },
          ],
        };
      }
    } else if (rolNormal_ahbb === 'ALUMNO' && id_usuario_ahbb) {
      if (soloInscritos_ahbb) {
        whereClause = {
          inscripciones: {
            some: {
              id_usuario_inscripcion_ahbb: id_usuario_ahbb,
              estatus_ahbb: { in: ['INSCRITO', 'OYENTE', 'APROBADO'] },
            },
          },
        };
      }
    }

    const cursos_ahbb = await this.prisma_ahbb.td_curso_ahbb.findMany({
      where: whereClause,
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

    // Sincronizar estados de inscripciones para cursos que ya iniciaron hoy
    await this.sincronizarEstadosInscritos_ahbb();

    return cursos_ahbb.map((curso_ahbb) => this.mapearCurso_ahbb(curso_ahbb));
  }

  async obtenerPorId_ahbb(id_curso_ahbb: number) {
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
      throw new NotFoundException('Curso no encontrado.');
    }

    return this.mapearCurso_ahbb(curso_ahbb);
  }

  /**
   * Validates that fechaInicio is between 3 days and 1 month from now.
   */
  private validarFechaInicio_ahbb(fechaInicio_ahbb: Date) {
    const ahora_ahbb = new Date();
    const minFecha_ahbb = new Date(ahora_ahbb.getTime() + 3 * 24 * 60 * 60 * 1000);
    const maxFecha_ahbb = new Date(ahora_ahbb.getTime() + 31 * 24 * 60 * 60 * 1000);

    if (fechaInicio_ahbb < minFecha_ahbb) {
      throw new BadRequestException(
        'La fecha de inicio debe ser al menos 3 días a partir de hoy, para dar tiempo a los alumnos de inscribirse.',
      );
    }
    if (fechaInicio_ahbb > maxFecha_ahbb) {
      throw new BadRequestException(
        'La fecha de inicio no puede ser mayor a 1 mes desde la fecha actual.',
      );
    }
  }

  async crearCurso_ahbb(
    id_usuario_logueado: number,
    datos_ahbb: CrearCursoDto_ahbb & { id_usuario_curso_ahbb?: number },
    rol_ahbb?: string,
  ) {
    const id_profesor_ahbb =
      rol_ahbb === 'ADMIN' && datos_ahbb.id_usuario_curso_ahbb
        ? Number(datos_ahbb.id_usuario_curso_ahbb)
        : id_usuario_logueado;

    let horasSemanales = 0;
    datos_ahbb.horarios_ahbb.forEach((h) => {
      const [ih, im] = h.horaInicio_ahbb.split(':').map(Number);
      const [fh, fm] = h.horaFin_ahbb.split(':').map(Number);
      horasSemanales += fh + fm / 60 - (ih + im / 60);
    });
    if (horasSemanales <= 0) horasSemanales = 2;

    const diasSemanales = datos_ahbb.horarios_ahbb.length || 1;
    const semanas = Math.ceil(
      Number(datos_ahbb.horasDefinidas_ahbb) / horasSemanales,
    );
    const diasCalculados = semanas * diasSemanales;

    const fechaInicio_ahbb = datos_ahbb.fechaInicio_ahbb
      ? new Date(datos_ahbb.fechaInicio_ahbb.includes('T') ? datos_ahbb.fechaInicio_ahbb : `${datos_ahbb.fechaInicio_ahbb}T12:00:00`)
      : new Date();
    this.validarFechaInicio_ahbb(fechaInicio_ahbb);
    const fechaFin_ahbb = datos_ahbb.fechaFin_ahbb
      ? new Date(datos_ahbb.fechaFin_ahbb.includes('T') ? datos_ahbb.fechaFin_ahbb : `${datos_ahbb.fechaFin_ahbb}T12:00:00`)
      : new Date(
          fechaInicio_ahbb.getTime() + semanas * 7 * 24 * 60 * 60 * 1000,
        );

    await this.validarSolapamientoProfesor_ahbb(
      id_profesor_ahbb,
      datos_ahbb.horarios_ahbb,
      fechaInicio_ahbb,
      fechaFin_ahbb,
    );

    const estadoAprobacion = rol_ahbb === 'ADMIN' ? 'ACTIVO' : 'PENDIENTE';
    const isPublished = rol_ahbb === 'ADMIN';

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
        diasDefinidos_ahbb: diasCalculados,
        topeEstudiantes_ahbb: Number(datos_ahbb.topeEstudiantes_ahbb ?? 5),
        isPublished_ahbb: isPublished,
        estadoAprobacion_ahbb: estadoAprobacion,
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

    // Generar sesiones individuales vía Stored Procedure
    const diasArray_ahbb = datos_ahbb.horarios_ahbb.map(h => h.diaSemana_ahbb.toUpperCase());
    const iniciosArray_ahbb = datos_ahbb.horarios_ahbb.map(h => h.horaInicio_ahbb);
    const finesArray_ahbb = datos_ahbb.horarios_ahbb.map(h => h.horaFin_ahbb);

    await this.prisma_ahbb.$queryRaw`SELECT fn_generar_sesiones_curso_ahbb(
      ${curso_ahbb.id_curso_ahbb}::INT,
      ${fechaInicio_ahbb.toISOString().split('T')[0]}::DATE,
      ${diasArray_ahbb}::TEXT[],
      ${iniciosArray_ahbb}::TEXT[],
      ${finesArray_ahbb}::TEXT[],
      ${Number(datos_ahbb.horasDefinidas_ahbb)}::NUMERIC
    )`;

    return this.mapearCurso_ahbb(curso_ahbb);
  }

  async actualizarCurso_ahbb(
    id_curso_ahbb: number,
    id_usuario_logueado: number,
    datos_ahbb: CrearCursoDto_ahbb & { id_usuario_curso_ahbb?: number },
    rol_ahbb?: string,
  ) {
    const id_profesor_ahbb =
      rol_ahbb === 'ADMIN' && datos_ahbb.id_usuario_curso_ahbb
        ? Number(datos_ahbb.id_usuario_curso_ahbb)
        : id_usuario_logueado;

    const cursoExistente_ahbb = await this.prisma_ahbb.td_curso_ahbb.findUnique(
      {
        where: { id_curso_ahbb },
      },
    );
    if (!cursoExistente_ahbb) {
      throw new NotFoundException('Curso no encontrado.');
    }

    const fechaInicio_ahbb = datos_ahbb.fechaInicio_ahbb
      ? new Date(datos_ahbb.fechaInicio_ahbb.includes('T') ? datos_ahbb.fechaInicio_ahbb : `${datos_ahbb.fechaInicio_ahbb}T12:00:00`)
      : (cursoExistente_ahbb.fechaInicio_ahbb ?? new Date());

    if (datos_ahbb.fechaInicio_ahbb) {
      const nuevaFecha_str = new Date(datos_ahbb.fechaInicio_ahbb.includes('T') ? datos_ahbb.fechaInicio_ahbb : `${datos_ahbb.fechaInicio_ahbb}T12:00:00`).toISOString().split('T')[0];
      const fechaAnterior_str = cursoExistente_ahbb.fechaInicio_ahbb?.toISOString().split('T')[0];
      if (nuevaFecha_str !== fechaAnterior_str) {
        this.validarFechaInicio_ahbb(fechaInicio_ahbb);
      }
    }
    const fechaFin_ahbb = datos_ahbb.fechaFin_ahbb
      ? new Date(datos_ahbb.fechaFin_ahbb.includes('T') ? datos_ahbb.fechaFin_ahbb : `${datos_ahbb.fechaFin_ahbb}T12:00:00`)
      : new Date(
          fechaInicio_ahbb.getTime() +
            Number(
              datos_ahbb.diasDefinidos_ahbb ??
                cursoExistente_ahbb.diasDefinidos_ahbb ??
                1,
            ) *
              24 *
              60 *
              60 *
              1000,
        );

    await this.validarSolapamientoProfesor_ahbb(
      id_profesor_ahbb,
      datos_ahbb.horarios_ahbb ?? [],
      fechaInicio_ahbb,
      fechaFin_ahbb,
      id_curso_ahbb, // Excluir este curso de la validación de solapamiento
    );

    // Si intenta cambiar la fechaInicio y ya hay alumnos, lanzar error
    if (datos_ahbb.fechaInicio_ahbb) {
      const nuevaFecha_str = new Date(datos_ahbb.fechaInicio_ahbb.includes('T') ? datos_ahbb.fechaInicio_ahbb : `${datos_ahbb.fechaInicio_ahbb}T12:00:00`).toISOString().split('T')[0];
      const fechaAnterior_str = cursoExistente_ahbb.fechaInicio_ahbb?.toISOString().split('T')[0];
      
      if (nuevaFecha_str !== fechaAnterior_str) {
        const inscritosCount_ahbb = await this.prisma_ahbb.td_inscripcion_ahbb.count({
          where: {
            id_curso_inscripcion_ahbb: id_curso_ahbb,
            estatus_ahbb: { in: ['INSCRITO', 'OYENTE', 'APROBADO'] },
          },
        });
        if (inscritosCount_ahbb > 0) {
          throw new BadRequestException(
            'No se puede cambiar la fecha de inicio del curso porque ya posee alumnos inscritos activos.',
          );
        }
      }
    }

    // Calcular días automáticamente desde horas lectivas y horario
    let horasSemanales = 0;
    (datos_ahbb.horarios_ahbb ?? []).forEach((h) => {
      const [ih, im] = h.horaInicio_ahbb.split(':').map(Number);
      const [fh, fm] = h.horaFin_ahbb.split(':').map(Number);
      horasSemanales += fh + fm / 60 - (ih + im / 60);
    });
    if (horasSemanales <= 0) horasSemanales = 2;
    const diasSemanales = (datos_ahbb.horarios_ahbb ?? []).length || 1;
    const semanas = Math.ceil(Number(datos_ahbb.horasDefinidas_ahbb) / horasSemanales);
    const diasCalculados = semanas * diasSemanales;

    const cursoActualizado_ahbb = await this.prisma_ahbb.$transaction(
      async (tx_ahbb) => {
        await tx_ahbb.td_horario_ahbb.deleteMany({
          where: { id_curso_horario_ahbb: id_curso_ahbb },
        });

        // When a PROFESOR updates a course, reset it to PENDIENTE for re-approval
        const esProfesorActualizando_ahbb = rol_ahbb === 'PROFESOR';
        const nuevoEstadoAprobacion_ahbb = esProfesorActualizando_ahbb ? 'PENDIENTE' : undefined;
        const nuevoIsPublished_ahbb = esProfesorActualizando_ahbb ? false : undefined;

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
            diasDefinidos_ahbb: diasCalculados,
            topeEstudiantes_ahbb: Number(datos_ahbb.topeEstudiantes_ahbb ?? 5),
            id_usuario_curso_ahbb: id_profesor_ahbb,
            id_curso_curso_ahbb: datos_ahbb.id_curso_curso_ahbb ?? null,
            ...(nuevoEstadoAprobacion_ahbb && { estadoAprobacion_ahbb: nuevoEstadoAprobacion_ahbb }),
            ...(nuevoIsPublished_ahbb !== undefined && { isPublished_ahbb: nuevoIsPublished_ahbb }),
            ...(esProfesorActualizando_ahbb && datos_ahbb.mensajeCorreccion_ahbb && {
              mensajeCorreccion_ahbb: datos_ahbb.mensajeCorreccion_ahbb,
              motivoRechazo_ahbb: null, // clear previous rejection reason on resubmit
            }),
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
      },
    );

    // Regenerar sesiones individuales vía Stored Procedure
    const horarios_ahbb = datos_ahbb.horarios_ahbb ?? [];
    if (horarios_ahbb.length > 0) {
      const diasArray_ahbb = horarios_ahbb.map(h => h.diaSemana_ahbb.toUpperCase());
      const iniciosArray_ahbb = horarios_ahbb.map(h => h.horaInicio_ahbb);
      const finesArray_ahbb = horarios_ahbb.map(h => h.horaFin_ahbb);

      await this.prisma_ahbb.$queryRaw`SELECT fn_generar_sesiones_curso_ahbb(
        ${id_curso_ahbb}::INT,
        ${fechaInicio_ahbb.toISOString().split('T')[0]}::DATE,
        ${diasArray_ahbb}::TEXT[],
        ${iniciosArray_ahbb}::TEXT[],
        ${finesArray_ahbb}::TEXT[],
        ${Number(datos_ahbb.horasDefinidas_ahbb)}::NUMERIC
      )`;
    }

    return this.mapearCurso_ahbb(cursoActualizado_ahbb);
  }

  async eliminarCurso_ahbb(id_curso_ahbb: number) {
    const inscripciones = await this.prisma_ahbb.td_inscripcion_ahbb.count({
      where: { id_curso_inscripcion_ahbb: id_curso_ahbb },
    });

    if (inscripciones > 0) {
      // Soft-delete
      await this.prisma_ahbb.td_curso_ahbb.update({
        where: { id_curso_ahbb },
        data: {
          isPublished_ahbb: false,
          imagenBloqueada_ahbb: true, // Opcional, pero marca visualmente o logicamente otra cosa si se desea
        },
      });
      return {
        exito: true,
        softDeleted: true,
        mensaje:
          'Curso archivado y retirado de la oferta por tener alumnos inscritos.',
      };
    }

    // Hard-delete
    await this.prisma_ahbb.td_curso_ahbb.delete({
      where: { id_curso_ahbb },
    });

    return {
      exito: true,
      softDeleted: false,
      mensaje: 'Curso eliminado permanentemente.',
    };
  }

  async evaluarCurso_ahbb(
    id_curso_ahbb: number,
    data: { estado: string; motivo?: string },
  ) {
    const cursoExistente = await this.prisma_ahbb.td_curso_ahbb.findUnique({
      where: { id_curso_ahbb },
    });

    if (!cursoExistente) {
      throw new NotFoundException('Curso no encontrado');
    }

    const { estado, motivo } = data;

    await this.prisma_ahbb.td_curso_ahbb.update({
      where: { id_curso_ahbb },
      data: {
        estadoAprobacion_ahbb: estado,
        motivoRechazo_ahbb: motivo || null,
        isPublished_ahbb: estado === 'ACTIVO',
      },
    });

    return {
      exito: true,
      mensaje: `Curso ${estado === 'ACTIVO' ? 'aprobado' : 'rechazado'} exitosamente.`,
    };
  }

  async obtenerDisponibilidad_ahbb(id_curso_ahbb: number) {
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
      throw new NotFoundException('Curso no encontrado.');
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

  async validarSolapamientoProfesor_ahbb(
    id_profesor_ahbb: number,
    horariosNuevos_ahbb: any[],
    fechaInicioNivel_ahbb: Date,
    fechaFinNivel_ahbb: Date,
    id_curso_excluir?: number,
  ) {
    const cursos_ahbb = await this.prisma_ahbb.td_curso_ahbb.findMany({
      where: {
        id_usuario_curso_ahbb: id_profesor_ahbb,
        id_curso_ahbb: id_curso_excluir ? { not: id_curso_excluir } : undefined,
        estadoAprobacion_ahbb: { not: 'ARCHIVADO' },
      },
      include: { horarios: true },
    });

    for (const cursoExistente_ahbb of cursos_ahbb) {
      // Solo hay solapamiento si las fechas de los cursos también se cruzan
      const inicioExistente_ahbb = cursoExistente_ahbb.fechaInicio_ahbb ?? new Date();
      const finExistente_ahbb = cursoExistente_ahbb.fechaFin_ahbb ?? new Date();

      const fechasSeCruzan_ahbb = 
        (inicioExistente_ahbb <= fechaFinNivel_ahbb) &&
        (fechaInicioNivel_ahbb <= finExistente_ahbb);

      if (!fechasSeCruzan_ahbb) continue;

      for (const horarioExistente_ahbb of cursoExistente_ahbb.horarios) {
        for (const horarioNuevo_ahbb of horariosNuevos_ahbb) {
          const mismoDia_ahbb =
            horarioExistente_ahbb.diaSemana_ahbb ===
            horarioNuevo_ahbb.diaSemana_ahbb.toUpperCase();

          if (
            mismoDia_ahbb &&
            this.hayCruceHoras_ahbb(
              horarioExistente_ahbb.horaInicio_ahbb,
              horarioExistente_ahbb.horaFin_ahbb,
              horarioNuevo_ahbb.horaInicio_ahbb,
              horarioNuevo_ahbb.horaFin_ahbb,
            )
          ) {
            throw new BadRequestException(
              'Tu disponibilidad para este curso ya se encuentra ocupada parcial o totalmente por otro/s cursos, cambia el horario o espera a que finalice uno de los cursos',
            );
          }
        }
      }
    }
  }

  hayCruceHoras_ahbb(
    inicioA_ahbb: string,
    finA_ahbb: string,
    inicioB_ahbb: string,
    finB_ahbb: string,
  ) {
    return inicioA_ahbb < finB_ahbb && inicioB_ahbb < finA_ahbb;
  }

  async obtenerSesiones_ahbb(
    rolLogueado_ahbb: string,
    idLogueado_ahbb: number,
    rolFiltro_ahbb?: string,
    idUsuarioFiltro_ahbb?: number,
    id_curso_ahbb?: number,
  ) {
    let id_target_ahbb = idLogueado_ahbb;
    let rol_target_ahbb = rolLogueado_ahbb;

    // Lógica de permisos de filtrado
    if (idUsuarioFiltro_ahbb && rolFiltro_ahbb) {
      if (rolLogueado_ahbb === 'ADMIN') {
        id_target_ahbb = idUsuarioFiltro_ahbb;
        rol_target_ahbb = rolFiltro_ahbb;
      } else if (rolLogueado_ahbb === 'PROFESOR') {
        if (rolFiltro_ahbb === 'ALUMNO') {
          // Verificar si el alumno está en alguno de sus cursos
          const estaVinculado_ahbb = await this.prisma_ahbb.td_inscripcion_ahbb.findFirst({
            where: {
              id_usuario_inscripcion_ahbb: idUsuarioFiltro_ahbb,
              curso: { id_usuario_curso_ahbb: idLogueado_ahbb },
            },
          });
          if (!estaVinculado_ahbb) return []; // No tiene permiso para ver este alumno
          id_target_ahbb = idUsuarioFiltro_ahbb;
          rol_target_ahbb = 'ALUMNO';
        } else if (idUsuarioFiltro_ahbb === idLogueado_ahbb) {
          // Puede filtrarse a sí mismo como profesor
          id_target_ahbb = idLogueado_ahbb;
          rol_target_ahbb = 'PROFESOR';
        } else {
          return []; // Un profesor no puede ver a otros profesores
        }
      }
      // Alumno solo puede verse a sí mismo (ya manejado por defecto)
    }

    const rolNormal_ahbb = rol_target_ahbb?.toUpperCase();

    let whereClause: any;

    if (rolNormal_ahbb === 'PROFESOR') {
      whereClause = {
        curso: { id_usuario_curso_ahbb: id_target_ahbb },
      };
    } else if (rolNormal_ahbb === 'ALUMNO') {
      whereClause = {
        curso: {
          inscripciones: {
            some: {
              id_usuario_inscripcion_ahbb: id_target_ahbb,
              estatus_ahbb: { in: ['INSCRITO', 'OYENTE', 'APROBADO'] },
            },
          },
        },
      };
    } else {
      // Admin general (sin filtro específico) o rol no reconocido
      whereClause = {};
    }

    // Filtro adicional por curso si se especifica
    if (id_curso_ahbb) {
      whereClause.id_curso_sesion_ahbb = id_curso_ahbb;
    }

    const sesiones_ahbb = await this.prisma_ahbb.td_sesion_curso_ahbb.findMany({
      where: whereClause,
      select: {
        id_sesion_ahbb: true,
        nroSesion_ahbb: true,
        fechaSesion_ahbb: true,
        horaInicio_ahbb: true,
        horaFin_ahbb: true,
        id_curso_sesion_ahbb: true,
        curso: {
          select: {
            nombre_ahbb: true,
          },
        },
      },
      orderBy: { fechaSesion_ahbb: 'asc' },
    });

    return sesiones_ahbb.map((s) => ({
      id: s.id_sesion_ahbb,
      nroClase: s.nroSesion_ahbb,
      fecha: s.fechaSesion_ahbb,
      horaInicio: s.horaInicio_ahbb,
      horaFin: s.horaFin_ahbb,
      cursoNombre: s.curso.nombre_ahbb,
      idCurso: s.id_curso_sesion_ahbb,
    }));
  }

  mapearCurso_ahbb(curso_ahbb: any) {
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
      estatus: curso_ahbb.imagenBloqueada_ahbb
        ? 'archivado'
        : curso_ahbb.estadoAprobacion_ahbb === 'PENDIENTE'
          ? 'pendiente'
          : curso_ahbb.estadoAprobacion_ahbb === 'RECHAZADO'
            ? 'rechazado'
            : (curso_ahbb.estadoAprobacion_ahbb === 'ACTIVO' &&
               curso_ahbb.isPublished_ahbb &&
               curso_ahbb.fechaInicio_ahbb &&
               new Date(curso_ahbb.fechaInicio_ahbb) <= new Date() &&
               (curso_ahbb.inscripciones?.length ?? 0) > 0)
              ? 'iniciado'
              : 'activo',
      estadoAprobacion: curso_ahbb.estadoAprobacion_ahbb,
      motivoRechazo: curso_ahbb.motivoRechazo_ahbb,
      mensajeCorreccion: curso_ahbb.mensajeCorreccion_ahbb,
      temario: curso_ahbb.temarioTexto_ahbb,
      fechaInicio: curso_ahbb.fechaInicio_ahbb,
      fechaFin: curso_ahbb.fechaFin_ahbb,
      fechaCreacion: curso_ahbb.creadoEn_ahbb,
      estudiantesInscritos: curso_ahbb.inscripciones?.length ?? 0,
      dias:
        curso_ahbb.horarios?.map((horario_ahbb: any) =>
          horario_ahbb.diaSemana_ahbb.toLowerCase(),
        ) ?? [],
      horaInicio: curso_ahbb.horarios?.[0]?.horaInicio_ahbb ?? null,
      horaFin: curso_ahbb.horarios?.[0]?.horaFin_ahbb ?? null,
      horarios: curso_ahbb.horarios ?? [],
      tienePrelacion: Boolean(curso_ahbb.prelacion),
      prelacionCursoId: curso_ahbb.prelacion?.id_curso_ahbb ?? null,
      prelacionNombre: curso_ahbb.prelacion?.nombre_ahbb ?? null,
      isPublished: curso_ahbb.isPublished_ahbb,
    };
  }

  /**
   * Actualiza alumnos de INSCRITO a OYENTE para cursos que ya empezaron.
   */
  private async sincronizarEstadosInscritos_ahbb() {
    const ahora_ahbb = new Date();
    
    // Cursos iniciados (ACTIVO + fechaInicio <= ahora)
    const cursosIniciadosIds_ahbb = await this.prisma_ahbb.td_curso_ahbb.findMany({
      where: {
        estadoAprobacion_ahbb: 'ACTIVO',
        isPublished_ahbb: true,
        fechaInicio_ahbb: { lte: ahora_ahbb },
      },
      select: { id_curso_ahbb: true },
    }).then(res => res.map(c => c.id_curso_ahbb));

    if (cursosIniciadosIds_ahbb.length > 0) {
      await this.prisma_ahbb.td_inscripcion_ahbb.updateMany({
        where: {
          id_curso_inscripcion_ahbb: { in: cursosIniciadosIds_ahbb },
          estatus_ahbb: 'INSCRITO',
        },
        data: { estatus_ahbb: 'OYENTE' },
      });
    }
  }
}
