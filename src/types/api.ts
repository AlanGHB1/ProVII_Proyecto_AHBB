/**
 * api.ts — Tipos genéricos para respuestas de API y paginación
 * Preparados para cuando se conecte al backend NestJS.
 * Mientras tanto, los servicios los usan como contratos.
 */

/** Respuesta estándar de la API */
export interface IRespuestaApi_ahbb<T> {
  exito: boolean;
  datos: T;
  mensaje: string;
  errores?: string[];
}

/** Parámetros de paginación para listados */
export interface IParametrosPaginacion_ahbb {
  pagina: number;
  porPagina: number;
  busqueda?: string;
  ordenarPor?: string;
  direccion?: 'asc' | 'desc';
}

/** Respuesta paginada de la API */
export interface IRespuestaPaginada_ahbb<T> {
  datos: T[];
  total: number;
  pagina: number;
  porPagina: number;
  totalPaginas: number;
}

/** Resultado de carga masiva */
export interface IResultadoCargaMasiva_ahbb {
  totalProcesados: number;
  totalExitosos: number;
  totalFallidos: number;
  errores: {
    fila: number;
    mensaje: string;
  }[];
}
