/**
 * prelacion.ts — Interfaces para prelaciones entre cursos
 * Rappresenta los requisitos previos que debe cumplir un alumno
 * antes de inscribirse en un curso.
 */

/** Relación de prerrequisito entre cursos */
export interface IPrelacion_ahbb {
  id: string;
  cursoId: string;              // ID del curso que requiere el prerrequisito
  cursoRequisitoId: string;     // ID del curso que debe estar aprobado
  creado_en: string;
}

/** Vista enriquecida de prelación (con nombres de cursos) */
export interface IPrelacionDetalle_ahbb extends IPrelacion_ahbb {
  nombreCurso: string;
  nombreCursoRequisito: string;
}

/**
 * Resultado de verificación de prelaciones para un alumno.
 * Usado al intentar inscribirse: ¿cumple con todos los requisitos?
 */
export interface IVerificacionPrelacion_ahbb {
  cumple: boolean;
  prelacionesFaltantes: {
    cursoRequisitoId: string;
    nombreCursoRequisito: string;
  }[];
}
