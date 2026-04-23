import axios from 'axios';

export const MODO_API_AHBB = true;

export const BASE_URL_API_AHBB =
  import.meta.env.VITE_BASE_URL_API_AHBB ?? 'http://localhost:3000/api';

export const apiCliente_ahbb = axios.create({
  baseURL: BASE_URL_API_AHBB,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiCliente_ahbb.interceptors.request.use(
  (config_ahbb) => {
    const token_ahbb = sessionStorage.getItem('certificaciones_token_ahbb');
    if (token_ahbb && config_ahbb.headers) {
      config_ahbb.headers.Authorization = `Bearer ${token_ahbb}`;
    }
    return config_ahbb;
  },
  (error_ahbb) => Promise.reject(error_ahbb),
);

apiCliente_ahbb.interceptors.response.use(
  (respuesta_ahbb) => respuesta_ahbb,
  (error_ahbb) => {
    const status_ahbb = error_ahbb.response?.status;

    // Redirección si la sesión expiró (401), pero NO si es el login
    if (status_ahbb === 401 && !error_ahbb.config.url.includes('iniciar-sesion')) {
      console.warn('Sesión expirada o inválida. Redirigiendo al login...');
      sessionStorage.removeItem('certificaciones_token_ahbb');
      localStorage.removeItem('certificaciones_usuario_ahbb');
      window.location.href = '/#/login';
    }

    // Errores de servidor (5xx) y fallos de red: loguear para diagnóstico
    if (!error_ahbb.response) {
      console.error('[API Red]:', error_ahbb.message);
    } else if (status_ahbb >= 500) {
      console.error(`[API Error ${status_ahbb}]:`, error_ahbb.response.data?.mensaje ?? error_ahbb.message);
    }

    // Errores de cliente (4xx) se propagan silenciosamente para que
    // el store o componente los muestre al usuario a través de la UI.
    return Promise.reject(error_ahbb);
  },
);
