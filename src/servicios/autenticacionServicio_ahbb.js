/**
 * autenticacionServicio_ahbb.js — Servicio de autenticación
 * Capa intermedia entre el store y la fuente de datos.
 *
 * Modo LocalStorage: lee/escribe en el navegador (actual).
 * Modo API: llama a endpoints del backend NestJS (futuro).
 */

import { MODO_API_AHBB, apiCliente_ahbb } from './api_ahbb';
import {
  obtenerDato_ahbb,
  guardarDato_ahbb,
  eliminarDato_ahbb,
  generarId_ahbb,
  CLAVES_STORAGE_AHBB,
} from '../helpers/almacenamiento_ahbb';
import { ROLES_AHBB } from '../constantes/roles_ahbb';

// ─── Servicio ─────────────────────────────────────────

/**
 * Obtiene la lista de todos los usuarios.
 */
export const obtenerUsuarios_ahbb = async () => {
  if (MODO_API_AHBB) {
    const respuesta_ahbb = await apiCliente_ahbb.get('/usuarios');
    return respuesta_ahbb.data;
  }

  // Modo LocalStorage
  return obtenerDato_ahbb(CLAVES_STORAGE_AHBB.USUARIOS, []);
};

/**
 * Guarda la lista completa de usuarios en LocalStorage.
 * Solo aplica en modo LS.
 */
export const guardarUsuarios_ahbb = (usuarios_ahbb) => {
  if (!MODO_API_AHBB) {
    guardarDato_ahbb(CLAVES_STORAGE_AHBB.USUARIOS, usuarios_ahbb);
  }
};

/**
 * Inicia sesión con correo y contraseña.
 */
export const iniciarSesion_ahbb = async (correo_ahbb, contrasena_ahbb) => {
  if (MODO_API_AHBB) {
    try {
      const respuesta_ahbb = await apiCliente_ahbb.post('/auth/iniciar-sesion', {
        correo: correo_ahbb,
        contrasena: contrasena_ahbb,
      });
      const { usuario, token } = respuesta_ahbb.data;
      localStorage.setItem('certificaciones_token_ahbb', token);
      return { exito: true, usuario, mensaje: 'Sesión iniciada', token };
    } catch {
      return { exito: false, usuario: null, mensaje: 'Correo o contraseña incorrectos.' };
    }
  }

  // Modo LocalStorage
  const usuarios_ahbb = obtenerDato_ahbb(CLAVES_STORAGE_AHBB.USUARIOS, []);
  const usuario_ahbb = usuarios_ahbb.find(
    (u) =>
      u.correo.toLowerCase() === correo_ahbb.toLowerCase() &&
      u.contrasena === contrasena_ahbb,
  );

  if (!usuario_ahbb) {
    return { exito: false, usuario: null, mensaje: 'Correo o contrasena incorrectos.' };
  }

  // Guardar sesión
  guardarDato_ahbb(CLAVES_STORAGE_AHBB.SESION, { id: usuario_ahbb.id });
  return { exito: true, usuario: usuario_ahbb, mensaje: 'Sesión iniciada' };
};

/**
 * Registra un nuevo usuario.
 */
export const registrarUsuario_ahbb = async (datosUsuario_ahbb) => {
  if (MODO_API_AHBB) {
    try {
      const respuesta_ahbb = await apiCliente_ahbb.post('/auth/registrar', datosUsuario_ahbb);
      return { exito: true, usuario: respuesta_ahbb.data.usuario, mensaje: 'Registro exitoso' };
    } catch {
      return { exito: false, usuario: null, mensaje: 'Error al registrar usuario.' };
    }
  }

  // Modo LocalStorage
  const usuarios_ahbb = obtenerDato_ahbb(CLAVES_STORAGE_AHBB.USUARIOS, []);

  const existeCorreo_ahbb = usuarios_ahbb.some(
    (u) => u.correo.toLowerCase() === datosUsuario_ahbb.correo.toLowerCase(),
  );

  if (existeCorreo_ahbb) {
    return { exito: false, usuario: null, mensaje: 'Ya existe un usuario con ese correo electrónico.' };
  }

  const nuevoUsuario_ahbb = {
    id: generarId_ahbb(),
    nombre: datosUsuario_ahbb.nombre.trim(),
    apellido: datosUsuario_ahbb.apellido.trim(),
    correo: datosUsuario_ahbb.correo.trim().toLowerCase(),
    contrasena: datosUsuario_ahbb.contrasena,
    rol: datosUsuario_ahbb.rol ?? ROLES_AHBB.PROFESOR,
    estado: 'activo',
    requiereCambioContrasena: false,
    fechaCreacion: new Date().toISOString(),
  };

  usuarios_ahbb.push(nuevoUsuario_ahbb);
  guardarDato_ahbb(CLAVES_STORAGE_AHBB.USUARIOS, usuarios_ahbb);

  return { exito: true, usuario: nuevoUsuario_ahbb, mensaje: 'Registro exitoso' };
};

/**
 * Cierra la sesión actual.
 */
export const cerrarSesion_ahbb = async () => {
  if (MODO_API_AHBB) {
    try {
      await apiCliente_ahbb.post('/auth/cerrar-sesion');
    } catch {
      // Ignorar error de red al cerrar sesión
    }
    localStorage.removeItem('certificaciones_token_ahbb');
  }

  eliminarDato_ahbb(CLAVES_STORAGE_AHBB.SESION);
};

/**
 * Recupera la sesión activa (si existe).
 */
export const recuperarSesion_ahbb = async () => {
  if (MODO_API_AHBB) {
    try {
      const respuesta_ahbb = await apiCliente_ahbb.get('/auth/perfil');
      return respuesta_ahbb.data;
    } catch {
      return null;
    }
  }

  // Modo LocalStorage
  const sesion_ahbb = obtenerDato_ahbb(CLAVES_STORAGE_AHBB.SESION, null);
  if (!sesion_ahbb) return null;

  const usuarios_ahbb = obtenerDato_ahbb(CLAVES_STORAGE_AHBB.USUARIOS, []);
  return usuarios_ahbb.find((u) => u.id === sesion_ahbb.id) ?? null;
};
