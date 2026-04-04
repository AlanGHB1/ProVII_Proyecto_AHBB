import axios from 'axios';

export const MODO_API_AHBB = true;

export const BASE_URL_API_AHBB =
  import.meta.env.VITE_BASE_URL_API_AHBB ?? 'http://localhost:3000/api';

export const apiCliente_ahbb = axios.create({
  baseURL: BASE_URL_API_AHBB,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiCliente_ahbb.interceptors.request.use(
  (config_ahbb) => {
    const token_ahbb = localStorage.getItem('certificaciones_token_ahbb');
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
    if (error_ahbb.response?.status === 401) {
      localStorage.removeItem('certificaciones_token_ahbb');
      localStorage.removeItem('certificaciones_usuario_ahbb');
      window.location.href = '/#/login';
    }

    if (error_ahbb.response?.status === 403) {
      console.warn('Acceso denegado: no tienes permisos para esta acción.');
    }

    return Promise.reject(error_ahbb);
  },
);
