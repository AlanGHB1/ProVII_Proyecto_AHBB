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
  profesor: string;
  duracionHoras: number;
  cantidadDias: number;
  dias: DiaSemana[];
  horaInicio: string;
  horaFin: string;
  topeEstudiantes: number;
  estudiantesInscritos: number;
  tienePrelacion: boolean;
  prelacionCursoId: string | null;
  estatus: EstatusCurso;
  temario: string;
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
