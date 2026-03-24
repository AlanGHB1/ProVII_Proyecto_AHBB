/**
 * api_ahbb.js — Instancia central de Axios y configuración del modo de datos
 *
 * MODO_API_AHBB controla de dónde se leen/escriben los datos:
 *   - false (actual): Los servicios usan LocalStorage
 *   - true  (futuro): Los servicios llaman al backend NestJS
 *
 * Cuando el backend esté listo, solo cambia este flag a true.
 */

import axios from 'axios';

/**
 * Flag maestro: ¿usar API real o LocalStorage?
 * Cambiar a true cuando el backend NestJS esté levantado.
 */
export const MODO_API_AHBB = false;

/**
 * URL base del backend (se usará cuando MODO_API_AHBB sea true).
 */
export const BASE_URL_API_AHBB = 'http://localhost:3000/api';

/**
 * Instancia de Axios preconfigurada para el backend.
 * Incluye interceptor para inyectar token JWT automáticamente.
 */
export const apiCliente_ahbb = axios.create({
  baseURL: BASE_URL_API_AHBB,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Interceptor de petición: agrega token JWT si existe.
 */
apiCliente_ahbb.interceptors.request.use(
  (config_ahbb) => {
    if (MODO_API_AHBB) {
      const token_ahbb = localStorage.getItem('certificaciones_token_ahbb');
      if (token_ahbb && config_ahbb.headers) {
        config_ahbb.headers.Authorization = `Bearer ${token_ahbb}`;
      }
    }
    return config_ahbb;
  },
  (error_ahbb) => Promise.reject(error_ahbb),
);

/**
 * Interceptor de respuesta: maneja errores comunes (401, 403, 500).
 */
apiCliente_ahbb.interceptors.response.use(
  (respuesta_ahbb) => respuesta_ahbb,
  (error_ahbb) => {
    if (error_ahbb.response) {
      const estado_ahbb = error_ahbb.response.status;

      if (estado_ahbb === 401) {
        // Token expirado o no válido → cerrar sesión
        localStorage.removeItem('certificaciones_token_ahbb');
        localStorage.removeItem('certificaciones_sesion_ahbb');
        window.location.href = '/#/login';
      }

      if (estado_ahbb === 403) {
        console.warn('Acceso denegado: no tienes permisos para esta acción.');
      }
    }
    return Promise.reject(error_ahbb);
  },
);
