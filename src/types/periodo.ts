/**
 * periodo.ts — Interfaces para períodos académicos y categorías
 */

/** Período académico (semestre, trimestre, etc.) */
export interface IPeriodoAcademico_ahbb {
  id: string;
  nombre: string;         // '2026-I', '2026-II', etc.
  fechaInicio: string;
  fechaFin: string;
  activo: boolean;
  creado_en: string;
}

/** Categoría / área temática de cursos */
export interface ICategoriaCurso_ahbb {
  id: string;
  nombre: string;
  descripcion: string;
  activa: boolean;
  creado_en: string;
}

/** Parámetro de configuración del sistema */
export interface IConfiguracionSistema_ahbb {
  id: string;
  clave: string;      // Ej: 'nombre_institucion', 'logo_url', 'correo_remitente'
  valor: string;
  tipo: 'texto' | 'numero' | 'booleano' | 'imagen';
  descripcion: string;
  actualizado_en: string;
}
