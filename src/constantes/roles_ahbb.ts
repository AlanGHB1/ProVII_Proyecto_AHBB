/**
 * roles_ahbb.ts — Constantes y tipos relacionados con los roles del sistema
 * Define los roles posibles y utilidades para validación de permisos.
 */

/** Roles disponibles en el sistema */
export const ROLES_AHBB = {
  ADMINISTRADOR: 'administrador',
  PROFESOR: 'profesor',
  ALUMNO: 'alumno',
} as const;

/** Tipo unión generado a partir de las constantes */
export type TipoRol_ahbb = (typeof ROLES_AHBB)[keyof typeof ROLES_AHBB];

/** Lista de roles para iteraciones (selects, validaciones) */
export const LISTA_ROLES_AHBB: { valor: TipoRol_ahbb; etiqueta: string }[] = [
  { valor: ROLES_AHBB.ADMINISTRADOR, etiqueta: 'Administrador' },
  { valor: ROLES_AHBB.PROFESOR, etiqueta: 'Profesor' },
  { valor: ROLES_AHBB.ALUMNO, etiqueta: 'Alumno' },
];

/**
 * Verifica si un rol dado es válido.
 * @param rol_ahbb - Rol a verificar
 * @returns true si el rol existe en el sistema
 */
export const esRolValido_ahbb = (rol_ahbb: string): rol_ahbb is TipoRol_ahbb => {
  return Object.values(ROLES_AHBB).includes(rol_ahbb as TipoRol_ahbb);
};
