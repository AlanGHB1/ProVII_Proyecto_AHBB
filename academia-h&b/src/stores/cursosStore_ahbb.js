import { defineStore } from 'pinia';
import {
  obtenerCursos_ahbb as servicioObtenerCursos_ahbb,
  crearCurso_ahbb as servicioCrearCurso_ahbb,
  actualizarCurso_ahbb as servicioActualizarCurso_ahbb,
  eliminarCurso_ahbb as servicioEliminarCurso_ahbb,
  inicializarCursos_ahbb as servicioInicializarCursos_ahbb,
} from '../servicios/cursosServicio_ahbb';

export const useCursosStore_ahbb = defineStore('cursos_ahbb', {
  state: () => ({
    listaCursos_ahbb: [],
    terminoBusqueda_ahbb: '',
    filtroEstatus_ahbb: 'todos',
    cursoSeleccionado_ahbb: null,
    cargando_ahbb: false,
  }),

  getters: {
    cursosFiltrados_ahbb: (estado) => {
      let resultado_ahbb = [...estado.listaCursos_ahbb];

      if (estado.filtroEstatus_ahbb !== 'todos') {
        resultado_ahbb = resultado_ahbb.filter(
          (curso_ahbb) => curso_ahbb.estatus === estado.filtroEstatus_ahbb,
        );
      }

      if (estado.terminoBusqueda_ahbb.trim() !== '') {
        const termino_ahbb = estado.terminoBusqueda_ahbb.toLowerCase().trim();
        resultado_ahbb = resultado_ahbb.filter(
          (curso_ahbb) =>
            curso_ahbb.nombre.toLowerCase().includes(termino_ahbb) ||
            curso_ahbb.profesor.toLowerCase().includes(termino_ahbb) ||
            curso_ahbb.descripcion.toLowerCase().includes(termino_ahbb),
        );
      }

      return resultado_ahbb;
    },
    totalCursos_ahbb: (estado) => estado.listaCursos_ahbb.length,
    cursosActivos_ahbb: (estado) =>
      estado.listaCursos_ahbb.filter((curso_ahbb) => curso_ahbb.estatus === 'activo').length,
    cursosPendientes_ahbb: (estado) =>
      estado.listaCursos_ahbb.filter((curso_ahbb) => curso_ahbb.estatus === 'pendiente').length,
    totalEstudiantes_ahbb: (estado) =>
      estado.listaCursos_ahbb.reduce(
        (acumulado_ahbb, curso_ahbb) => acumulado_ahbb + (curso_ahbb.estudiantesInscritos || 0),
        0,
      ),
    opcionesPrelacion_ahbb: (estado) =>
      estado.listaCursos_ahbb.map((curso_ahbb) => ({
        id: curso_ahbb.id,
        nombre: curso_ahbb.nombre,
      })),
  },

  actions: {
    async inicializar_ahbb() {
      this.cargando_ahbb = true;
      try {
        this.listaCursos_ahbb = await servicioInicializarCursos_ahbb();
      } finally {
        this.cargando_ahbb = false;
      }
    },

    async recargarCursos_ahbb() {
      this.cargando_ahbb = true;
      try {
        this.listaCursos_ahbb = await servicioObtenerCursos_ahbb();
      } finally {
        this.cargando_ahbb = false;
      }
    },

    obtenerCursoPorId_ahbb(id_ahbb) {
      return (
        this.listaCursos_ahbb.find((curso_ahbb) => String(curso_ahbb.id) === String(id_ahbb)) ??
        null
      );
    },

    async crearCurso_ahbb(datosCurso_ahbb) {
      this.cargando_ahbb = true;
      try {
        const nuevoCurso_ahbb = await servicioCrearCurso_ahbb(datosCurso_ahbb);
        this.listaCursos_ahbb.unshift(nuevoCurso_ahbb);
        return nuevoCurso_ahbb;
      } finally {
        this.cargando_ahbb = false;
      }
    },

    async actualizarCurso_ahbb(id_ahbb, datosCurso_ahbb) {
      this.cargando_ahbb = true;
      try {
        const exito_ahbb = await servicioActualizarCurso_ahbb(id_ahbb, datosCurso_ahbb);
        if (exito_ahbb) {
          await this.recargarCursos_ahbb();
        }
        return exito_ahbb;
      } finally {
        this.cargando_ahbb = false;
      }
    },

    async eliminarCurso_ahbb(id_ahbb) {
      this.cargando_ahbb = true;
      try {
        const exito_ahbb = await servicioEliminarCurso_ahbb(id_ahbb);
        if (exito_ahbb) {
          this.listaCursos_ahbb = this.listaCursos_ahbb.filter(
            (curso_ahbb) => String(curso_ahbb.id) !== String(id_ahbb),
          );
        }
        return exito_ahbb;
      } finally {
        this.cargando_ahbb = false;
      }
    },

    buscar_ahbb(termino_ahbb) {
      this.terminoBusqueda_ahbb = termino_ahbb;
    },

    filtrarPorEstatus_ahbb(estatus_ahbb) {
      this.filtroEstatus_ahbb = estatus_ahbb;
    },

    limpiarFiltros_ahbb() {
      this.terminoBusqueda_ahbb = '';
      this.filtroEstatus_ahbb = 'todos';
    },
  },
});
