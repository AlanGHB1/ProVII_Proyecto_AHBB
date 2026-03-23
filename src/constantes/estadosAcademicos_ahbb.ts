/**
 * estadosAcademicos_ahbb.ts — Constantes para estados académicos de inscripciones
 */

export const ESTADOS_ACADEMICOS_AHBB = {
  INSCRITO: 'inscrito',
  AUN_NO_EMPIEZA: 'aun_no_empieza',
  OYENTE: 'oyente',
  APROBADO: 'aprobado',
  REPROBADO: 'reprobado',
} as const;

export type TipoEstadoAcademico_ahbb =
  (typeof ESTADOS_ACADEMICOS_AHBB)[keyof typeof ESTADOS_ACADEMICOS_AHBB];

export const LISTA_ESTADOS_ACADEMICOS_AHBB: {
  valor: TipoEstadoAcademico_ahbb;
  etiqueta: string;
  color: string;
}[] = [
  { valor: ESTADOS_ACADEMICOS_AHBB.INSCRITO, etiqueta: 'Inscrito', color: 'blue' },
  { valor: ESTADOS_ACADEMICOS_AHBB.AUN_NO_EMPIEZA, etiqueta: 'Aún no empieza', color: 'grey' },
  { valor: ESTADOS_ACADEMICOS_AHBB.OYENTE, etiqueta: 'Oyente', color: 'purple' },
  { valor: ESTADOS_ACADEMICOS_AHBB.APROBADO, etiqueta: 'Aprobado', color: 'green' },
  { valor: ESTADOS_ACADEMICOS_AHBB.REPROBADO, etiqueta: 'Reprobado', color: 'red' },
];

/** Estados del ciclo de vida de un curso */
export const ESTADOS_CURSO_AHBB = {
  PROGRAMADO: 'programado',
  ACTIVO: 'activo',
  EN_CURSO: 'en_curso',
  FINALIZADO: 'finalizado',
  CANCELADO: 'cancelado',
} as const;

export type TipoEstadoCurso_ahbb =
  (typeof ESTADOS_CURSO_AHBB)[keyof typeof ESTADOS_CURSO_AHBB];
