import { defineStore } from 'pinia';
import { ROLES_AHBB } from '../constantes/roles_ahbb';
import {
  iniciarSesion_ahbb as servicioIniciarSesion_ahbb,
  registrarUsuario_ahbb as servicioRegistrarUsuario_ahbb,
  cerrarSesion_ahbb as servicioCerrarSesion_ahbb,
  recuperarSesion_ahbb as servicioRecuperarSesion_ahbb,
} from '../servicios/autenticacionServicio_ahbb';

export const useAutenticacionStore_ahbb = defineStore('autenticacion_ahbb', {
  state: () => ({
    usuarioActivo_ahbb: null,
    listaUsuarios_ahbb: [],
    errorAuth_ahbb: '',
    cargando_ahbb: false,
  }),

  getters: {
    estaAutenticado_ahbb: (estado) => estado.usuarioActivo_ahbb !== null,
    nombreCompleto_ahbb: (estado) =>
      estado.usuarioActivo_ahbb
        ? `${estado.usuarioActivo_ahbb.nombre} ${estado.usuarioActivo_ahbb.apellido}`
        : '',
    iniciales_ahbb: (estado) => {
      if (!estado.usuarioActivo_ahbb) return '';
      const nombre_ahbb = estado.usuarioActivo_ahbb.nombre || '';
      const apellido_ahbb = estado.usuarioActivo_ahbb.apellido || '';
      return (nombre_ahbb.charAt(0) + apellido_ahbb.charAt(0)).toUpperCase();
    },
    rolUsuario_ahbb: (estado) => estado.usuarioActivo_ahbb?.rol ?? '',
    totalUsuarios_ahbb: (estado) => estado.listaUsuarios_ahbb.length,
    esAdministrador_ahbb: (estado) =>
      estado.usuarioActivo_ahbb?.rol === ROLES_AHBB.ADMINISTRADOR,
    esProfesor_ahbb: (estado) =>
      estado.usuarioActivo_ahbb?.rol === ROLES_AHBB.PROFESOR,
    esAlumno_ahbb: (estado) =>
      estado.usuarioActivo_ahbb?.rol === ROLES_AHBB.ALUMNO,
  },

  actions: {
    async inicializar_ahbb() {
      this.usuarioActivo_ahbb = await servicioRecuperarSesion_ahbb();
    },

    async registrarUsuario_ahbb(datosUsuario_ahbb) {
      this.errorAuth_ahbb = '';
      this.cargando_ahbb = true;

      try {
        const resultado_ahbb = await servicioRegistrarUsuario_ahbb(datosUsuario_ahbb);
        if (!resultado_ahbb.exito) {
          this.errorAuth_ahbb = resultado_ahbb.mensaje;
          return false;
        }
        return true;
      } finally {
        this.cargando_ahbb = false;
      }
    },

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

    async cerrarSesion_ahbb() {
      await servicioCerrarSesion_ahbb();
      this.usuarioActivo_ahbb = null;
      this.listaUsuarios_ahbb = [];
    },

    limpiarError_ahbb() {
      this.errorAuth_ahbb = '';
    },
  },
});
