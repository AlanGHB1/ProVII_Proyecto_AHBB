/**
 * curso.ts — Interfaz de datos para el modelo Curso
 */

export type EstatusCurso = 'activo' | 'pendiente' | 'inactivo';

export type DiaSemana =
  | 'lunes'
  | 'martes'
  | 'miercoles'
  | 'jueves'
  | 'viernes'
  | 'sabado';

export interface ICurso {
  id: string;
  nombre: string;
  descripcion: string;
  profesor: string;                    // Nombre del profesor (futuro: profesorId)
  profesorId?: string;                 // FK al profesor (para cuando haya API)
  categoriaId?: string;                // FK a categoría del curso
  periodoId?: string;                  // FK a período académico
  duracionHoras: number;
  cantidadDias: number;
  dias: DiaSemana[];
  horaInicio: string;
  horaFin: string;
  topeEstudiantes: number;
  estudiantesInscritos: number;
  fechaInicio?: string;                // Fecha de inicio del curso
  fechaFin?: string;                   // Fecha de fin del curso
  tienePrelacion: boolean;
  prelacionCursoId: string | null;
  estatus: EstatusCurso;
  temario: string;
  plantillaCertificadoId?: string;     // FK a plantilla de certificado
  fechaCreacion: string;
}

/** Datos del formulario para crear/editar un curso (sin campos auto-generados) */
export type ICursoFormulario = Omit<
  ICurso,
  'id' | 'estudiantesInscritos' | 'fechaCreacion'
>;

export interface IOpcionPrelacion {
  id: string;
  nombre: string;
}

export interface IOpcionSelect {
  label: string;
  value: string;
}
