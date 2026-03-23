/**
 * almacenamiento_ahbb.ts — Utilidades de LocalStorage
 * Funciones auxiliares para leer, guardar y eliminar datos
 * en LocalStorage con manejo de errores.
 * Preparado para migrar a API REST sin cambiar la interfaz.
 */

/**
 * Obtiene un valor del LocalStorage y lo parsea.
 * @param clave_ahbb - Clave del item en LocalStorage
 * @param valorPorDefecto_ahbb - Valor por defecto si no existe
 * @returns El valor parseado o el valor por defecto
 */
export const obtenerDato_ahbb = <T>(
  clave_ahbb: string,
  valorPorDefecto_ahbb: T
): T => {
  try {
    const dato_ahbb = localStorage.getItem(clave_ahbb);
    if (dato_ahbb === null) return valorPorDefecto_ahbb;
    return JSON.parse(dato_ahbb) as T;
  } catch (error_ahbb) {
    console.error(`Error al leer "${clave_ahbb}" de LocalStorage:`, error_ahbb);
    return valorPorDefecto_ahbb;
  }
};

/**
 * Guarda un valor en LocalStorage serializado como JSON.
 * @param clave_ahbb - Clave del item
 * @param valor_ahbb - Valor a guardar
 */
export const guardarDato_ahbb = <T>(clave_ahbb: string, valor_ahbb: T): void => {
  try {
    localStorage.setItem(clave_ahbb, JSON.stringify(valor_ahbb));
  } catch (error_ahbb) {
    console.error(
      `Error al guardar "${clave_ahbb}" en LocalStorage:`,
      error_ahbb
    );
  }
};

/**
 * Elimina un item del LocalStorage.
 * @param clave_ahbb - Clave del item a eliminar
 */
export const eliminarDato_ahbb = (clave_ahbb: string): void => {
  try {
    localStorage.removeItem(clave_ahbb);
  } catch (error_ahbb) {
    console.error(
      `Error al eliminar "${clave_ahbb}" de LocalStorage:`,
      error_ahbb
    );
  }
};

/**
 * Genera un ID único simple basado en timestamp + random.
 * @returns ID único
 */
export const generarId_ahbb = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
};

/**
 * Constantes para las claves de LocalStorage del proyecto.
 * Centraliza las claves para evitar errores tipográficos.
 */
export const CLAVES_STORAGE_AHBB = {
  USUARIOS: 'certificaciones_usuarios_ahbb',
  SESION: 'certificaciones_sesion_ahbb',
  CURSOS: 'certificaciones_cursos_ahbb',
} as const;
