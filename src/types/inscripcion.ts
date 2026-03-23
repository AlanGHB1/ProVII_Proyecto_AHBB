/**
 * inscripcion.ts — Interfaces para inscripciones y estados académicos
 * Representa la relación alumno ↔ curso con seguimiento de estado.
 */

import type { TipoEstadoAcademico_ahbb } from '../constantes/estadosAcademicos_ahbb';

/** Inscripción de un alumno en un curso */
export interface IInscripcion_ahbb {
  id: string;
  alumnoId: string;
  cursoId: string;
  estado: TipoEstadoAcademico_ahbb;
  fechaInscripcion: string;
  fechaFinalizacion: string | null;
  notaFinal: number | null;
  intento: number;          // Número de intento (reinscripción si reprobó)
  observaciones: string;
  creado_en: string;
  actualizado_en: string;
}

/** Datos del formulario para inscribirse */
export interface IInscripcionFormulario_ahbb {
  alumnoId: string;
  cursoId: string;
  observaciones?: string;
}

/** Vista enriquecida de inscripción (con datos del curso y alumno) */
export interface IInscripcionDetalle_ahbb extends IInscripcion_ahbb {
  nombreCurso: string;
  nombreProfesor: string;
  nombreAlumno: string;
  apellidoAlumno: string;
  correoAlumno: string;
}
