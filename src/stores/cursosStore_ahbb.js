/**
 * cursosStore_ahbb.js — Store de Pinia para gestión de Cursos
 * Maneja crear, leer, actualizar, eliminar, filtrar y buscar cursos.
 * Delega la persistencia al servicio de cursos.
 */

import { defineStore } from 'pinia';
import {
  obtenerCursos_ahbb as servicioObtenerCursos_ahbb,
  crearCurso_ahbb as servicioCrearCurso_ahbb,
  actualizarCurso_ahbb as servicioActualizarCurso_ahbb,
  eliminarCurso_ahbb as servicioEliminarCurso_ahbb,
  inicializarCursos_ahbb as servicioInicializarCursos_ahbb,
} from '../servicios/cursosServicio_ahbb';

// ─── Cursos de ejemplo para la primera carga ──────────
const CURSOS_INICIALES_AHBB = [
  {
    id: 'curso001',
    nombre: 'Fundamentos de JavaScript',
    descripcion:
      'Curso introductorio que cubre variables, funciones, objetos, arrays, DOM y eventos. Ideal para quienes inician en el desarrollo web.',
    profesor: 'Carlos Mendez',
    duracionHoras: 40,
    cantidadDias: 20,
    dias: ['lunes', 'miercoles'],
    horaInicio: '09:00',
    horaFin: '11:00',
    topeEstudiantes: 5,
    estudiantesInscritos: 3,
    tienePrelacion: false,
    prelacionCursoId: null,
    estatus: 'activo',
    temario:
      '1. Variables y tipos de datos\n2. Funciones y scope\n3. Objetos y arrays\n4. Manipulacion del DOM\n5. Eventos y formularios',
    fechaCreacion: '2026-01-15T10:00:00.000Z',
  },
  {
    id: 'curso002',
    nombre: 'Vue.js 3 Avanzado',
    descripcion:
      'Domina la Composition API, Pinia, Vue Router, directivas personalizadas y patrones de arquitectura para aplicaciones Vue escalables.',
    profesor: 'Maria Rodriguez',
    duracionHoras: 60,
    cantidadDias: 30,
    dias: ['martes', 'jueves'],
    horaInicio: '14:00',
    horaFin: '16:00',
    topeEstudiantes: 5,
    estudiantesInscritos: 5,
    tienePrelacion: true,
    prelacionCursoId: 'curso001',
    estatus: 'activo',
    temario:
      '1. Composition API a fondo\n2. Pinia: estado global\n3. Vue Router avanzado\n4. Directivas personalizadas\n5. Testing con Vitest',
    fechaCreacion: '2026-02-01T10:00:00.000Z',
  },
  {
    id: 'curso003',
    nombre: 'Base de Datos SQL',
    descripcion:
      'Aprende el diseno de bases de datos relacionales, consultas SQL, joins, subqueries, indices y optimizacion de consultas.',
    profesor: 'Luis Hernandez',
    duracionHoras: 45,
    cantidadDias: 15,
    dias: ['lunes', 'miercoles', 'viernes'],
    horaInicio: '16:00',
    horaFin: '19:00',
    topeEstudiantes: 5,
    estudiantesInscritos: 1,
    tienePrelacion: false,
    prelacionCursoId: null,
    estatus: 'pendiente',
    temario:
      '1. Modelo relacional\n2. DDL: CREATE, ALTER, DROP\n3. DML: SELECT, INSERT, UPDATE, DELETE\n4. JOIN y subqueries\n5. Indices y optimizacion',
    fechaCreacion: '2026-02-20T10:00:00.000Z',
  },
  {
    id: 'curso004',
    nombre: 'Node.js y Express',
    descripcion:
      'Desarrollo de APIs RESTful con Node.js, Express, middleware, autenticacion JWT, conexion a bases de datos y despliegue.',
    profesor: 'Carlos Mendez',
    duracionHoras: 50,
    cantidadDias: 25,
    dias: ['martes', 'jueves', 'sabado'],
    horaInicio: '10:00',
    horaFin: '12:00',
    topeEstudiantes: 5,
    estudiantesInscritos: 0,
    tienePrelacion: true,
    prelacionCursoId: 'curso001',
    estatus: 'inactivo',
    temario:
      '1. Fundamentos de Node.js\n2. Express y rutas\n3. Middleware y manejo de errores\n4. Autenticacion con JWT\n5. Despliegue en produccion',
    fechaCreacion: '2026-03-01T10:00:00.000Z',
  },
];

// ─── Store ─────────────────────────────────────────────

export const useCursosStore_ahbb = defineStore('cursos_ahbb', {
  // ─── Estado ─────────────────────────────────────────
  state: () => ({
    listaCursos_ahbb: [],
    terminoBusqueda_ahbb: '',
    filtroEstatus_ahbb: 'todos',
    cursoSeleccionado_ahbb: null,
    cargando_ahbb: false,
  }),

  // ─── Getters ────────────────────────────────────────
  getters: {
    /** Cursos filtrados por búsqueda y estatus. */
    cursosFiltrados_ahbb: (estado) => {
      let resultado_ahbb = [...estado.listaCursos_ahbb];

      if (estado.filtroEstatus_ahbb !== 'todos') {
        resultado_ahbb = resultado_ahbb.filter(
          (curso) => curso.estatus === estado.filtroEstatus_ahbb,
        );
      }

      if (estado.terminoBusqueda_ahbb.trim() !== '') {
        const termino_ahbb = estado.terminoBusqueda_ahbb.toLowerCase().trim();
        resultado_ahbb = resultado_ahbb.filter(
          (curso) =>
            curso.nombre.toLowerCase().includes(termino_ahbb) ||
            curso.profesor.toLowerCase().includes(termino_ahbb) ||
            curso.descripcion.toLowerCase().includes(termino_ahbb),
        );
      }

      return resultado_ahbb;
    },

    totalCursos_ahbb: (estado) => estado.listaCursos_ahbb.length,

    cursosActivos_ahbb: (estado) =>
      estado.listaCursos_ahbb.filter((c) => c.estatus === 'activo').length,

    cursosPendientes_ahbb: (estado) =>
      estado.listaCursos_ahbb.filter((c) => c.estatus === 'pendiente').length,

    totalEstudiantes_ahbb: (estado) =>
      estado.listaCursos_ahbb.reduce(
        (acc, c) => acc + (c.estudiantesInscritos || 0),
        0,
      ),

    /** Lista de nombres de cursos para selects de prelación. */
    opcionesPrelacion_ahbb: (estado) =>
      estado.listaCursos_ahbb.map((c) => ({
        id: c.id,
        nombre: c.nombre,
      })),
  },

  // ─── Acciones ───────────────────────────────────────
  actions: {
    /**
     * Inicializa los cursos desde el servicio.
     * Si no existen, carga los cursos de ejemplo.
     */
    async inicializar_ahbb() {
      this.cargando_ahbb = true;
      try {
        this.listaCursos_ahbb = servicioInicializarCursos_ahbb(CURSOS_INICIALES_AHBB);
      } finally {
        this.cargando_ahbb = false;
      }
    },

    /**
     * Recarga los cursos desde el servicio.
     */
    async recargarCursos_ahbb() {
      this.cargando_ahbb = true;
      try {
        this.listaCursos_ahbb = await servicioObtenerCursos_ahbb();
      } finally {
        this.cargando_ahbb = false;
      }
    },

    /**
     * Obtiene un curso por su ID.
     */
    obtenerCursoPorId_ahbb(id_ahbb) {
      return this.listaCursos_ahbb.find((c) => c.id === id_ahbb) ?? null;
    },

    /**
     * Crea un curso nuevo.
     */
    async crearCurso_ahbb(datosCurso_ahbb) {
      this.cargando_ahbb = true;
      try {
        const nuevoCurso_ahbb = await servicioCrearCurso_ahbb(datosCurso_ahbb);
        this.listaCursos_ahbb.push(nuevoCurso_ahbb);
        return nuevoCurso_ahbb;
      } finally {
        this.cargando_ahbb = false;
      }
    },

    /**
     * Actualiza un curso existente.
     */
    async actualizarCurso_ahbb(id_ahbb, datosCurso_ahbb) {
      this.cargando_ahbb = true;
      try {
        const exito_ahbb = await servicioActualizarCurso_ahbb(id_ahbb, datosCurso_ahbb);
        if (exito_ahbb) {
          // Actualizar localmente
          const indice_ahbb = this.listaCursos_ahbb.findIndex((c) => c.id === id_ahbb);
          if (indice_ahbb !== -1) {
            this.listaCursos_ahbb[indice_ahbb] = {
              ...this.listaCursos_ahbb[indice_ahbb],
              ...datosCurso_ahbb,
            };
          }
        }
        return exito_ahbb;
      } finally {
        this.cargando_ahbb = false;
      }
    },

    /**
     * Elimina un curso por su ID.
     */
    async eliminarCurso_ahbb(id_ahbb) {
      this.cargando_ahbb = true;
      try {
        const exito_ahbb = await servicioEliminarCurso_ahbb(id_ahbb);
        if (exito_ahbb) {
          this.listaCursos_ahbb = this.listaCursos_ahbb.filter((c) => c.id !== id_ahbb);
        }
        return exito_ahbb;
      } finally {
        this.cargando_ahbb = false;
      }
    },

    /** Actualiza el término de búsqueda. */
    buscar_ahbb(termino_ahbb) {
      this.terminoBusqueda_ahbb = termino_ahbb;
    },

    /** Actualiza el filtro de estatus. */
    filtrarPorEstatus_ahbb(estatus_ahbb) {
      this.filtroEstatus_ahbb = estatus_ahbb;
    },

    /** Limpia todos los filtros. */
    limpiarFiltros_ahbb() {
      this.terminoBusqueda_ahbb = '';
      this.filtroEstatus_ahbb = 'todos';
    },
  },
});
