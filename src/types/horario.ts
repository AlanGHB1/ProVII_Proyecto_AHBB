/**
 * horario.ts — Interfaces para horarios de cursos
 * Representa los bloques de día + hora asignados a cada curso.
 */

import type { DiaSemana } from './curso';

/** Bloque horario individual de un curso */
export interface IHorario_ahbb {
  id: string;
  cursoId: string;
  dia: DiaSemana;
  horaInicio: string;    // Formato 'HH:mm'
  horaFin: string;       // Formato 'HH:mm'
  creado_en: string;
}

/** Datos del formulario para crear/editar un horario */
export interface IHorarioFormulario_ahbb {
  cursoId: string;
  dia: DiaSemana;
  horaInicio: string;
  horaFin: string;
}

/** Resultado de validación de solapamiento */
export interface IResultadoSolapamiento_ahbb {
  haySolapamiento: boolean;
  cursoConflicto: string | null;   // Nombre del curso que se solapa
  diaConflicto: DiaSemana | null;
  horaConflicto: string | null;    // Franja horaria en conflicto
}
