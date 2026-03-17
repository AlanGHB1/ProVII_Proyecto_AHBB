/**
 * autenticacionStore_ahbb.js — Store de Pinia para autenticación
 * Maneja registro, login, logout, sesión activa y persistencia
 * en LocalStorage. Incluye un usuario admin de prueba.
 */

import { defineStore } from "pinia";
import {
  obtenerDato_ahbb,
  guardarDato_ahbb,
  eliminarDato_ahbb,
  generarId_ahbb,
  CLAVES_STORAGE_AHBB,
} from "../helpers/almacenamiento_ahbb.js";

// Usuario administrador de prueba (se crea al inicializar)
const ADMIN_POR_DEFECTO_AHBB = {
  id: "admin001",
  nombre: "Administrador",
  apellido: "Hidalgo",
  correo: "admin@hidalgo.edu",
  contrasena: "admin123",
  rol: "administrador",
  fechaCreacion: new Date().toISOString(),
};

export const useAutenticacionStore_ahbb = defineStore("autenticacion_ahbb", {
  // ─── Estado ─────────────────────────────────────────
  state: () => ({
    usuarioActivo_ahbb: null,
    listaUsuarios_ahbb: [],
    errorAuth_ahbb: "",
    cargando_ahbb: false,
  }),

  // ─── Getters ────────────────────────────────────────
  getters: {
    estaAutenticado_ahbb: (estado) => estado.usuarioActivo_ahbb !== null,

    nombreCompleto_ahbb: (estado) => {
      if (!estado.usuarioActivo_ahbb) return "";
      return `${estado.usuarioActivo_ahbb.nombre} ${estado.usuarioActivo_ahbb.apellido}`;
    },

    iniciales_ahbb: (estado) => {
      if (!estado.usuarioActivo_ahbb) return "";
      const nombre_ahbb = estado.usuarioActivo_ahbb.nombre || "";
      const apellido_ahbb = estado.usuarioActivo_ahbb.apellido || "";
      return (nombre_ahbb.charAt(0) + apellido_ahbb.charAt(0)).toUpperCase();
    },

    rolUsuario_ahbb: (estado) => {
      return estado.usuarioActivo_ahbb?.rol || "";
    },

    totalUsuarios_ahbb: (estado) => estado.listaUsuarios_ahbb.length,
  },

  // ─── Acciones ───────────────────────────────────────
  actions: {
    /**
     * Inicializa el store: carga usuarios y sesión desde LocalStorage.
     * Si no hay usuarios, crea el admin por defecto.
     */
    inicializar_ahbb() {
      const usuarios_ahbb = obtenerDato_ahbb(
        CLAVES_STORAGE_AHBB.USUARIOS,
        []
      );

      // Si no hay usuarios, crear el admin de prueba
      if (usuarios_ahbb.length === 0) {
        this.listaUsuarios_ahbb = [ADMIN_POR_DEFECTO_AHBB];
        guardarDato_ahbb(CLAVES_STORAGE_AHBB.USUARIOS, this.listaUsuarios_ahbb);
      } else {
        this.listaUsuarios_ahbb = usuarios_ahbb;
      }

      // Recuperar sesión activa si existe
      const sesion_ahbb = obtenerDato_ahbb(CLAVES_STORAGE_AHBB.SESION, null);
      if (sesion_ahbb) {
        // Verificar que el usuario de la sesión siga existiendo
        const usuario_ahbb = this.listaUsuarios_ahbb.find(
          (u) => u.id === sesion_ahbb.id
        );
        this.usuarioActivo_ahbb = usuario_ahbb || null;
        if (!usuario_ahbb) {
          eliminarDato_ahbb(CLAVES_STORAGE_AHBB.SESION);
        }
      }
    },

    /**
     * Registra un nuevo usuario.
     * @param {Object} datosUsuario_ahbb - { nombre, apellido, correo, contrasena }
     * @returns {boolean} true si el registro fue exitoso
     */
    registrarUsuario_ahbb(datosUsuario_ahbb) {
      this.errorAuth_ahbb = "";

      // Validar que el correo no exista
      const existeCorreo_ahbb = this.listaUsuarios_ahbb.some(
        (u) => u.correo.toLowerCase() === datosUsuario_ahbb.correo.toLowerCase()
      );

      if (existeCorreo_ahbb) {
        this.errorAuth_ahbb = "Ya existe un usuario con ese correo electrónico.";
        return false;
      }

      const nuevoUsuario_ahbb = {
        id: generarId_ahbb(),
        nombre: datosUsuario_ahbb.nombre.trim(),
        apellido: datosUsuario_ahbb.apellido.trim(),
        correo: datosUsuario_ahbb.correo.trim().toLowerCase(),
        contrasena: datosUsuario_ahbb.contrasena,
        rol: "profesor",
        fechaCreacion: new Date().toISOString(),
      };

      this.listaUsuarios_ahbb.push(nuevoUsuario_ahbb);
      guardarDato_ahbb(CLAVES_STORAGE_AHBB.USUARIOS, this.listaUsuarios_ahbb);

      return true;
    },

    /**
     * Inicia sesión con correo y contraseña.
     * @param {string} correo_ahbb
     * @param {string} contrasena_ahbb
     * @returns {boolean} true si el login fue exitoso
     */
    iniciarSesion_ahbb(correo_ahbb, contrasena_ahbb) {
      this.errorAuth_ahbb = "";

      const usuario_ahbb = this.listaUsuarios_ahbb.find(
        (u) =>
          u.correo.toLowerCase() === correo_ahbb.toLowerCase() &&
          u.contrasena === contrasena_ahbb
      );

      if (!usuario_ahbb) {
        this.errorAuth_ahbb = "Correo o contrasena incorrectos.";
        return false;
      }

      this.usuarioActivo_ahbb = usuario_ahbb;
      guardarDato_ahbb(CLAVES_STORAGE_AHBB.SESION, {
        id: usuario_ahbb.id,
      });

      return true;
    },

    /**
     * Cierra la sesión actual.
     */
    cerrarSesion_ahbb() {
      this.usuarioActivo_ahbb = null;
      eliminarDato_ahbb(CLAVES_STORAGE_AHBB.SESION);
    },

    /**
     * Limpia el mensaje de error.
     */
    limpiarError_ahbb() {
      this.errorAuth_ahbb = "";
    },
  },
});
