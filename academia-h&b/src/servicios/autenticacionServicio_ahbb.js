import { apiCliente_ahbb } from './api_ahbb';

const CLAVE_TOKEN_AHBB = 'certificaciones_token_ahbb';
const CLAVE_USUARIO_AHBB = 'certificaciones_usuario_ahbb';

export const obtenerUsuarios_ahbb = async () => {
  const respuesta_ahbb = await apiCliente_ahbb.get('/usuarios');
  return respuesta_ahbb.data;
};

export const guardarUsuarios_ahbb = () => {
  throw new Error('La persistencia de usuarios se realiza únicamente en el backend.');
};

export const iniciarSesion_ahbb = async (correo_ahbb, contrasena_ahbb) => {
  try {
    const respuesta_ahbb = await apiCliente_ahbb.post('/auth/iniciar-sesion', {
      correo_ahbb,
      contrasena_ahbb,
    });

    const { usuario, token, requiereCambioContrasena } = respuesta_ahbb.data;
    localStorage.setItem(CLAVE_TOKEN_AHBB, token);
    localStorage.setItem(CLAVE_USUARIO_AHBB, JSON.stringify(usuario));

    return {
      exito: true,
      usuario,
      token,
      requiereCambioContrasena,
      mensaje: respuesta_ahbb.data.mensaje,
    };
  } catch (error_ahbb) {
    return {
      exito: false,
      usuario: null,
      mensaje:
        error_ahbb.response?.data?.mensaje ?? 'Correo o contraseña incorrectos.',
    };
  }
};

export const registrarUsuario_ahbb = async (datosUsuario_ahbb) => {
  try {
    const respuesta_ahbb = await apiCliente_ahbb.post('/auth/registrar', {
      nombre_ahbb: datosUsuario_ahbb.nombre,
      apellido_ahbb: datosUsuario_ahbb.apellido,
      correo_ahbb: datosUsuario_ahbb.correo,
      contrasena_ahbb: datosUsuario_ahbb.contrasena,
      rol_ahbb: datosUsuario_ahbb.rol,
      cedula_ahbb: datosUsuario_ahbb.cedula,
      referenciaPagoMovil_ahbb: datosUsuario_ahbb.referenciaPagoMovil,
    });

    return {
      exito: true,
      usuario: respuesta_ahbb.data.usuario,
      mensaje: respuesta_ahbb.data.mensaje,
    };
  } catch (error_ahbb) {
    return {
      exito: false,
      usuario: null,
      mensaje: error_ahbb.response?.data?.mensaje ?? 'Error al registrar usuario.',
    };
  }
};

export const cerrarSesion_ahbb = async () => {
  try {
    await apiCliente_ahbb.post('/auth/cerrar-sesion');
  } catch {
    // Ignorar error de red al cerrar sesión.
  }

  localStorage.removeItem(CLAVE_TOKEN_AHBB);
  localStorage.removeItem(CLAVE_USUARIO_AHBB);
};

export const recuperarSesion_ahbb = async () => {
  const token_ahbb = localStorage.getItem(CLAVE_TOKEN_AHBB);
  if (!token_ahbb) {
    return null;
  }

  try {
    const respuesta_ahbb = await apiCliente_ahbb.get('/auth/perfil');
    localStorage.setItem(CLAVE_USUARIO_AHBB, JSON.stringify(respuesta_ahbb.data));
    return respuesta_ahbb.data;
  } catch {
    localStorage.removeItem(CLAVE_TOKEN_AHBB);
    localStorage.removeItem(CLAVE_USUARIO_AHBB);
    return null;
  }
};
