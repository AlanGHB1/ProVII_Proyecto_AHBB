/**
 * menuSistema_ahbb.ts — Definición de menús del sidebar por rol
 * Cada rol tiene su propio conjunto de enlaces de navegación.
 */

import { ROLES_AHBB, type TipoRol_ahbb } from './roles_ahbb';

export interface IEnlaceMenu_ahbb {
  icono: string;
  etiqueta: string;
  ruta: string;
  separador?: boolean; // Muestra separador antes de este item
  encabezado?: string; // Encabezado de sección antes de este item
}

/** Menú del Administrador */
const MENU_ADMINISTRADOR_AHBB: IEnlaceMenu_ahbb[] = [
  { icono: 'dashboard', etiqueta: 'Dashboard', ruta: '/dashboard', encabezado: 'Principal' },
  { icono: 'people', etiqueta: 'Usuarios', ruta: '/admin/usuarios' },
  { icono: 'upload_file', etiqueta: 'Carga Masiva', ruta: '/admin/carga-masiva' },
  { icono: 'school', etiqueta: 'Cursos', ruta: '/cursos', encabezado: 'Académico', separador: true },
  { icono: 'how_to_reg', etiqueta: 'Inscripciones', ruta: '/inscripciones' },
  { icono: 'workspace_premium', etiqueta: 'Certificados', ruta: '/certificados', encabezado: 'Certificación', separador: true },
  { icono: 'image', etiqueta: 'Plantillas', ruta: '/plantillas-certificados' },
  { icono: 'settings', etiqueta: 'Configuración', ruta: '/admin/configuracion', encabezado: 'Sistema', separador: true },
];

/** Menú del Profesor */
const MENU_PROFESOR_AHBB: IEnlaceMenu_ahbb[] = [
  { icono: 'dashboard', etiqueta: 'Mi Dashboard', ruta: '/dashboard', encabezado: 'Principal' },
  { icono: 'school', etiqueta: 'Mis Cursos', ruta: '/cursos', encabezado: 'Académico', separador: true },
  { icono: 'add_circle', etiqueta: 'Crear Curso', ruta: '/cursos/nuevo' },
  { icono: 'groups', etiqueta: 'Mis Alumnos', ruta: '/profesor/mis-alumnos' },
  { icono: 'workspace_premium', etiqueta: 'Certificados', ruta: '/certificados', encabezado: 'Certificación', separador: true },
  { icono: 'draw', etiqueta: 'Mi Firma Digital', ruta: '/profesor/firma-digital' },
  { icono: 'image', etiqueta: 'Plantilla Certificado', ruta: '/plantillas-certificados' },
];

/** Menú del Alumno */
const MENU_ALUMNO_AHBB: IEnlaceMenu_ahbb[] = [
  { icono: 'dashboard', etiqueta: 'Mi Dashboard', ruta: '/dashboard', encabezado: 'Principal' },
  { icono: 'menu_book', etiqueta: 'Oferta Académica', ruta: '/alumno/oferta-academica', encabezado: 'Académico', separador: true },
  { icono: 'assignment', etiqueta: 'Mis Inscripciones', ruta: '/alumno/mis-inscripciones' },
  { icono: 'history_edu', etiqueta: 'Historial Académico', ruta: '/alumno/historial' },
  { icono: 'workspace_premium', etiqueta: 'Mis Certificados', ruta: '/alumno/mis-certificados', encabezado: 'Certificación', separador: true },
];

/**
 * Mapa de menús por rol para acceso rápido.
 */
const MENUS_POR_ROL_AHBB: Record<TipoRol_ahbb, IEnlaceMenu_ahbb[]> = {
  [ROLES_AHBB.ADMINISTRADOR]: MENU_ADMINISTRADOR_AHBB,
  [ROLES_AHBB.PROFESOR]: MENU_PROFESOR_AHBB,
  [ROLES_AHBB.ALUMNO]: MENU_ALUMNO_AHBB,
};

/**
 * Obtiene la lista de enlaces del menú según el rol del usuario.
 * @param rol_ahbb - Rol del usuario autenticado
 * @returns Lista de enlaces para el sidebar
 */
export const obtenerMenuPorRol_ahbb = (rol_ahbb: TipoRol_ahbb): IEnlaceMenu_ahbb[] => {
  return MENUS_POR_ROL_AHBB[rol_ahbb] ?? [];
};
