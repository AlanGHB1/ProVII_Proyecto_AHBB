/**
 * autenticacionStore_ahbb.js — Store de Pinia para autenticación
 * Maneja registro, login, logout, sesión activa.
 * Delega la persistencia al servicio de autenticación.
 * Preparado para migrar a JWT cuando el backend esté listo.
 */

import { defineStore } from 'pinia';
import { ROLES_AHBB } from '../constantes/roles_ahbb';
import {
  obtenerDato_ahbb,
  guardarDato_ahbb,
  CLAVES_STORAGE_AHBB,
} from '../helpers/almacenamiento_ahbb';
import {
  iniciarSesion_ahbb as servicioIniciarSesion_ahbb,
  registrarUsuario_ahbb as servicioRegistrarUsuario_ahbb,
  cerrarSesion_ahbb as servicioCerrarSesion_ahbb,
  recuperarSesion_ahbb as servicioRecuperarSesion_ahbb,
  obtenerUsuarios_ahbb as servicioObtenerUsuarios_ahbb,
  guardarUsuarios_ahbb as servicioGuardarUsuarios_ahbb,
} from '../servicios/autenticacionServicio_ahbb';

// ─── Usuarios de prueba ───────────────────────────────

const ADMIN_POR_DEFECTO_AHBB = {
  id: 'admin001',
  nombre: 'Administrador',
  apellido: 'H&B',
  correo: 'admin@academiah-b.edu',
  contrasena: 'admin123',
  rol: ROLES_AHBB.ADMINISTRADOR,
  estado: 'activo',
  requiereCambioContrasena: false,
  fechaCreacion: new Date().toISOString(),
};

const PROFESOR_POR_DEFECTO_AHBB = {
  id: 'prof001',
  nombre: 'Carlos',
  apellido: 'Mendez',
  correo: 'carlos@academiah-b.edu',
  contrasena: 'prof123',
  rol: ROLES_AHBB.PROFESOR,
  estado: 'activo',
  requiereCambioContrasena: false,
  fechaCreacion: new Date().toISOString(),
};

const ALUMNO_POR_DEFECTO_AHBB = {
  id: 'alum001',
  nombre: 'Maria',
  apellido: 'Garcia',
  correo: 'maria@estudiante.edu',
  contrasena: 'alum123',
  rol: ROLES_AHBB.ALUMNO,
  estado: 'activo',
  requiereCambioContrasena: true,
  fechaCreacion: new Date().toISOString(),
};

// ─── Store ─────────────────────────────────────────────

export const useAutenticacionStore_ahbb = defineStore('autenticacion_ahbb', {
  // ─── Estado ─────────────────────────────────────────
  state: () => ({
    usuarioActivo_ahbb: null,
    listaUsuarios_ahbb: [],
    errorAuth_ahbb: '',
    cargando_ahbb: false,
  }),

  // ─── Getters ────────────────────────────────────────
  getters: {
    estaAutenticado_ahbb: (estado) =>
      estado.usuarioActivo_ahbb !== null,

    nombreCompleto_ahbb: (estado) => {
      if (!estado.usuarioActivo_ahbb) return '';
      return `${estado.usuarioActivo_ahbb.nombre} ${estado.usuarioActivo_ahbb.apellido}`;
    },

    iniciales_ahbb: (estado) => {
      if (!estado.usuarioActivo_ahbb) return '';
      const nombre_ahbb = estado.usuarioActivo_ahbb.nombre || '';
      const apellido_ahbb = estado.usuarioActivo_ahbb.apellido || '';
      return (nombre_ahbb.charAt(0) + apellido_ahbb.charAt(0)).toUpperCase();
    },

    rolUsuario_ahbb: (estado) => {
      return estado.usuarioActivo_ahbb?.rol ?? '';
    },

    totalUsuarios_ahbb: (estado) => estado.listaUsuarios_ahbb.length,

    esAdministrador_ahbb: (estado) =>
      estado.usuarioActivo_ahbb?.rol === ROLES_AHBB.ADMINISTRADOR,

    esProfesor_ahbb: (estado) =>
      estado.usuarioActivo_ahbb?.rol === ROLES_AHBB.PROFESOR,

    esAlumno_ahbb: (estado) =>
      estado.usuarioActivo_ahbb?.rol === ROLES_AHBB.ALUMNO,
  },

  // ─── Acciones ───────────────────────────────────────
  actions: {
    /**
     * Inicializa el store: carga usuarios y sesión.
     * Delega al servicio de autenticación.
     */
    async inicializar_ahbb() {
      // Cargar usuarios
      const usuarios_ahbb = await servicioObtenerUsuarios_ahbb();

      if (usuarios_ahbb.length === 0) {
        this.listaUsuarios_ahbb = [
          ADMIN_POR_DEFECTO_AHBB,
          PROFESOR_POR_DEFECTO_AHBB,
          ALUMNO_POR_DEFECTO_AHBB,
        ];
        servicioGuardarUsuarios_ahbb(this.listaUsuarios_ahbb);
      } else {
        this.listaUsuarios_ahbb = usuarios_ahbb;
      }

      // Recuperar sesión activa si existe
      const usuarioActivo_ahbb = await servicioRecuperarSesion_ahbb();
      this.usuarioActivo_ahbb = usuarioActivo_ahbb;
    },

    /**
     * Registra un nuevo usuario.
     */
    async registrarUsuario_ahbb(datosUsuario_ahbb) {
      this.errorAuth_ahbb = '';
      this.cargando_ahbb = true;

      try {
        const resultado_ahbb = await servicioRegistrarUsuario_ahbb(datosUsuario_ahbb);

        if (!resultado_ahbb.exito) {
          this.errorAuth_ahbb = resultado_ahbb.mensaje;
          return false;
        }

        // Actualizar lista local
        if (resultado_ahbb.usuario) {
          this.listaUsuarios_ahbb.push(resultado_ahbb.usuario);
        }

        return true;
      } finally {
        this.cargando_ahbb = false;
      }
    },

    /**
     * Inicia sesión con correo y contraseña.
     */
    async iniciarSesion_ahbb(correo_ahbb, contrasena_ahbb) {
      this.errorAuth_ahbb = '';
      this.cargando_ahbb = true;

      try {
        const resultado_ahbb = await servicioIniciarSesion_ahbb(correo_ahbb, contrasena_ahbb);

        if (!resultado_ahbb.exito) {
          this.errorAuth_ahbb = resultado_ahbb.mensaje;
          return false;
        }

        this.usuarioActivo_ahbb = resultado_ahbb.usuario;
        return true;
      } finally {
        this.cargando_ahbb = false;
      }
    },

    /**
     * Cierra la sesión actual.
     */
    async cerrarSesion_ahbb() {
      await servicioCerrarSesion_ahbb();
      this.usuarioActivo_ahbb = null;
    },

    /**
     * Limpia el mensaje de error.
     */
    limpiarError_ahbb() {
      this.errorAuth_ahbb = '';
    },
  },
});
