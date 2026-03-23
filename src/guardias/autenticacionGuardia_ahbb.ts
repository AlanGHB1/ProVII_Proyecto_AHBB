/**
 * autenticacionGuardia_ahbb.ts — Guardia de navegación por rol
 * Verifica autenticación y autorización antes de acceder a rutas protegidas.
 * Compatible con la fase actual (LocalStorage) y preparada para JWT.
 */

import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import type { TipoRol_ahbb } from '../constantes/roles_ahbb';
import { CLAVES_STORAGE_AHBB, obtenerDato_ahbb } from '../helpers/almacenamiento_ahbb';
import type { IClaveSesion, IUsuario } from '../types';

/**
 * Obtiene el usuario activo desde LocalStorage.
 * Cuando se migre a JWT, esta función leerá el token decodificado.
 */
const obtenerUsuarioActivo_ahbb = (): IUsuario | null => {
  const sesion_ahbb = obtenerDato_ahbb<IClaveSesion | null>(
    CLAVES_STORAGE_AHBB.SESION,
    null,
  );

  if (!sesion_ahbb) return null;

  const usuarios_ahbb = obtenerDato_ahbb<IUsuario[]>(
    CLAVES_STORAGE_AHBB.USUARIOS,
    [],
  );

  return usuarios_ahbb.find((u) => u.id === sesion_ahbb.id) ?? null;
};

/**
 * Guardia principal de navegación.
 * Verifica:
 * 1. Si la ruta es pública → permite acceso
 * 2. Si no hay sesión → redirige a login
 * 3. Si hay sesión y va a login/registro → redirige a dashboard
 * 4. Si la ruta requiere roles específicos → verifica rol del usuario
 */
export const guardiaNavegacion_ahbb = (
  destino_ahbb: RouteLocationNormalized,
  _origen_ahbb: RouteLocationNormalized,
  siguiente_ahbb: NavigationGuardNext,
): void => {
  const esPublica_ahbb = destino_ahbb.meta.publica_ahbb === true;
  const usuario_ahbb = obtenerUsuarioActivo_ahbb();
  const estaAutenticado_ahbb = usuario_ahbb !== null;

  // 1. Ruta pública → permitir
  if (esPublica_ahbb && !estaAutenticado_ahbb) {
    siguiente_ahbb();
    return;
  }

  // 2. Si ya está autenticado y va a login/registro → redirigir a dashboard
  if (
    estaAutenticado_ahbb &&
    (destino_ahbb.name === 'login' || destino_ahbb.name === 'registro')
  ) {
    siguiente_ahbb({ name: 'dashboard' });
    return;
  }

  // 3. Si la ruta es pública y está autenticado → permitir (ej: landing)
  if (esPublica_ahbb && estaAutenticado_ahbb) {
    siguiente_ahbb();
    return;
  }

  // 4. Ruta protegida sin sesión → redirigir a login
  if (!estaAutenticado_ahbb) {
    siguiente_ahbb({ name: 'login' });
    return;
  }

  // 5. Verificar permisos de rol
  const rolesPermitidos_ahbb = destino_ahbb.meta.rolesPermitidos_ahbb as
    | TipoRol_ahbb[]
    | undefined;

  if (rolesPermitidos_ahbb && rolesPermitidos_ahbb.length > 0) {
    const tienePermiso_ahbb = rolesPermitidos_ahbb.includes(
      usuario_ahbb!.rol as TipoRol_ahbb,
    );

    if (!tienePermiso_ahbb) {
      // Redirigir al dashboard si no tiene permiso para esa ruta
      siguiente_ahbb({ name: 'dashboard' });
      return;
    }
  }

  // 6. Todo OK → permitir navegación
  siguiente_ahbb();
};
