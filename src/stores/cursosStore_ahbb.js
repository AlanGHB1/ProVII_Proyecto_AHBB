/**
 * cursosStore_ahbb.js — Store de Pinia para CRUD de Cursos
 * Maneja crear, leer, actualizar, eliminar, filtrar y buscar
 * cursos con persistencia en LocalStorage.
 */

import { defineStore } from "pinia";
import {
  obtenerDato_ahbb,
  guardarDato_ahbb,
  generarId_ahbb,
  CLAVES_STORAGE_AHBB,
} from "../helpers/almacenamiento_ahbb.js";

// Cursos de ejemplo para la primera carga
const CURSOS_INICIALES_AHBB = [
  {
    id: "curso001",
    nombre: "Fundamentos de JavaScript",
    descripcion:
      "Curso introductorio que cubre variables, funciones, objetos, arrays, DOM y eventos. Ideal para quienes inician en el desarrollo web.",
    profesor: "Carlos Mendez",
    duracionHoras: 40,
    cantidadDias: 20,
    dias: ["lunes", "miercoles"],
    horaInicio: "09:00",
    horaFin: "11:00",
    topeEstudiantes: 5,
    estudiantesInscritos: 3,
    tienePrelacion: false,
    prelacionCursoId: null,
    estatus: "activo",
    temario:
      "1. Variables y tipos de datos\n2. Funciones y scope\n3. Objetos y arrays\n4. Manipulacion del DOM\n5. Eventos y formularios",
    fechaCreacion: "2026-01-15T10:00:00.000Z",
  },
  {
    id: "curso002",
    nombre: "Vue.js 3 Avanzado",
    descripcion:
      "Domina la Composition API, Pinia, Vue Router, directivas personalizadas y patrones de arquitectura para aplicaciones Vue escalables.",
    profesor: "Maria Rodriguez",
    duracionHoras: 60,
    cantidadDias: 30,
    dias: ["martes", "jueves"],
    horaInicio: "14:00",
    horaFin: "16:00",
    topeEstudiantes: 5,
    estudiantesInscritos: 5,
    tienePrelacion: true,
    prelacionCursoId: "curso001",
    estatus: "activo",
    temario:
      "1. Composition API a fondo\n2. Pinia: estado global\n3. Vue Router avanzado\n4. Directivas personalizadas\n5. Testing con Vitest",
    fechaCreacion: "2026-02-01T10:00:00.000Z",
  },
  {
    id: "curso003",
    nombre: "Base de Datos SQL",
    descripcion:
      "Aprende el diseno de bases de datos relacionales, consultas SQL, joins, subqueries, indices y optimizacion de consultas.",
    profesor: "Luis Hernandez",
    duracionHoras: 45,
    cantidadDias: 15,
    dias: ["lunes", "miercoles", "viernes"],
    horaInicio: "16:00",
    horaFin: "19:00",
    topeEstudiantes: 5,
    estudiantesInscritos: 1,
    tienePrelacion: false,
    prelacionCursoId: null,
    estatus: "pendiente",
    temario:
      "1. Modelo relacional\n2. DDL: CREATE, ALTER, DROP\n3. DML: SELECT, INSERT, UPDATE, DELETE\n4. JOIN y subqueries\n5. Indices y optimizacion",
    fechaCreacion: "2026-02-20T10:00:00.000Z",
  },
  {
    id: "curso004",
    nombre: "Node.js y Express",
    descripcion:
      "Desarrollo de APIs RESTful con Node.js, Express, middleware, autenticacion JWT, conexion a bases de datos y despliegue.",
    profesor: "Carlos Mendez",
    duracionHoras: 50,
    cantidadDias: 25,
    dias: ["martes", "jueves", "sabado"],
    horaInicio: "10:00",
    horaFin: "12:00",
    topeEstudiantes: 5,
    estudiantesInscritos: 0,
    tienePrelacion: true,
    prelacionCursoId: "curso001",
    estatus: "inactivo",
    temario:
      "1. Fundamentos de Node.js\n2. Express y rutas\n3. Middleware y manejo de errores\n4. Autenticacion con JWT\n5. Despliegue en produccion",
    fechaCreacion: "2026-03-01T10:00:00.000Z",
  },
];

export const useCursosStore_ahbb = defineStore("cursos_ahbb", {
  // ─── Estado ─────────────────────────────────────────
  state: () => ({
    listaCursos_ahbb: [],
    terminoBusqueda_ahbb: "",
    filtroEstatus_ahbb: "todos",
    cursoSeleccionado_ahbb: null,
  }),

  // ─── Getters ────────────────────────────────────────
  getters: {
    /**
     * Cursos filtrados por búsqueda y estatus.
     */
    cursosFiltrados_ahbb: (estado) => {
      let resultado_ahbb = [...estado.listaCursos_ahbb];

      // Filtrar por estatus
      if (estado.filtroEstatus_ahbb !== "todos") {
        resultado_ahbb = resultado_ahbb.filter(
          (curso) => curso.estatus === estado.filtroEstatus_ahbb
        );
      }

      // Filtrar por término de búsqueda
      if (estado.terminoBusqueda_ahbb.trim() !== "") {
        const termino_ahbb = estado.terminoBusqueda_ahbb.toLowerCase().trim();
        resultado_ahbb = resultado_ahbb.filter(
          (curso) =>
            curso.nombre.toLowerCase().includes(termino_ahbb) ||
            curso.profesor.toLowerCase().includes(termino_ahbb) ||
            curso.descripcion.toLowerCase().includes(termino_ahbb)
        );
      }

      return resultado_ahbb;
    },

    totalCursos_ahbb: (estado) => estado.listaCursos_ahbb.length,

    cursosActivos_ahbb: (estado) =>
      estado.listaCursos_ahbb.filter((c) => c.estatus === "activo").length,

    cursosPendientes_ahbb: (estado) =>
      estado.listaCursos_ahbb.filter((c) => c.estatus === "pendiente").length,

    totalEstudiantes_ahbb: (estado) =>
      estado.listaCursos_ahbb.reduce(
        (acc, c) => acc + (c.estudiantesInscritos || 0),
        0
      ),

    /**
     * Lista de nombres de cursos para selects de prelación.
     */
    opcionesPrelacion_ahbb: (estado) =>
      estado.listaCursos_ahbb.map((c) => ({
        id: c.id,
        nombre: c.nombre,
      })),
  },

  // ─── Acciones ───────────────────────────────────────
  actions: {
    /**
     * Inicializa los cursos desde LocalStorage.
     * Si no existen, carga los cursos de ejemplo.
     */
    inicializar_ahbb() {
      const cursos_ahbb = obtenerDato_ahbb(CLAVES_STORAGE_AHBB.CURSOS, null);

      if (cursos_ahbb === null) {
        this.listaCursos_ahbb = [...CURSOS_INICIALES_AHBB];
        this.persistir_ahbb();
      } else {
        this.listaCursos_ahbb = cursos_ahbb;
      }
    },

    /**
     * Guarda la lista actual en LocalStorage.
     */
    persistir_ahbb() {
      guardarDato_ahbb(CLAVES_STORAGE_AHBB.CURSOS, this.listaCursos_ahbb);
    },

    /**
     * Obtiene un curso por su ID.
     * @param {string} id_ahbb
     * @returns {Object|null}
     */
    obtenerCursoPorId_ahbb(id_ahbb) {
      return this.listaCursos_ahbb.find((c) => c.id === id_ahbb) || null;
    },

    /**
     * Crea un curso nuevo.
     * @param {Object} datosCurso_ahbb
     * @returns {Object} El curso creado
     */
    crearCurso_ahbb(datosCurso_ahbb) {
      const nuevoCurso_ahbb = {
        id: generarId_ahbb(),
        ...datosCurso_ahbb,
        estudiantesInscritos: 0,
        fechaCreacion: new Date().toISOString(),
      };

      this.listaCursos_ahbb.push(nuevoCurso_ahbb);
      this.persistir_ahbb();
      return nuevoCurso_ahbb;
    },

    /**
     * Actualiza un curso existente.
     * @param {string} id_ahbb - ID del curso
     * @param {Object} datosCurso_ahbb - Campos a actualizar
     * @returns {boolean} true si se encontró y actualizó
     */
    actualizarCurso_ahbb(id_ahbb, datosCurso_ahbb) {
      const indice_ahbb = this.listaCursos_ahbb.findIndex(
        (c) => c.id === id_ahbb
      );

      if (indice_ahbb === -1) return false;

      this.listaCursos_ahbb[indice_ahbb] = {
        ...this.listaCursos_ahbb[indice_ahbb],
        ...datosCurso_ahbb,
      };

      this.persistir_ahbb();
      return true;
    },

    /**
     * Elimina un curso por su ID.
     * @param {string} id_ahbb
     * @returns {boolean} true si se eliminó
     */
    eliminarCurso_ahbb(id_ahbb) {
      const longitudAntes_ahbb = this.listaCursos_ahbb.length;
      this.listaCursos_ahbb = this.listaCursos_ahbb.filter(
        (c) => c.id !== id_ahbb
      );

      if (this.listaCursos_ahbb.length < longitudAntes_ahbb) {
        this.persistir_ahbb();
        return true;
      }
      return false;
    },

    /**
     * Actualiza el término de búsqueda.
     */
    buscar_ahbb(termino_ahbb) {
      this.terminoBusqueda_ahbb = termino_ahbb;
    },

    /**
     * Actualiza el filtro de estatus.
     */
    filtrarPorEstatus_ahbb(estatus_ahbb) {
      this.filtroEstatus_ahbb = estatus_ahbb;
    },

    /**
     * Limpia todos los filtros.
     */
    limpiarFiltros_ahbb() {
      this.terminoBusqueda_ahbb = "";
      this.filtroEstatus_ahbb = "todos";
    },
  },
});
