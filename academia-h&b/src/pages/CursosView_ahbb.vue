<!--
  CursosView_ahbb.vue — Vista del listado de cursos con Quasar
-->
<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useCursosStore_ahbb } from '../stores/cursosStore_ahbb';
import TablaCursos_ahbb from '../components/cursos/TablaCursos_ahbb.vue';
import FiltroCursos_ahbb from '../components/cursos/FiltroCursos_ahbb.vue';
import ModalConfirmar_ahbb from '../components/cursos/ModalConfirmar_ahbb.vue';

const $q_ahbb = useQuasar();
const cursosStore_ahbb = useCursosStore_ahbb();

const mostrarModal_ahbb = ref(false);
const cursoAEliminar_ahbb = ref(null);

const confirmarEliminacion_ahbb = (curso_ahbb) => {
  cursoAEliminar_ahbb.value = curso_ahbb;
  mostrarModal_ahbb.value = true;
};

const ejecutarEliminacion_ahbb = () => {
  if (cursoAEliminar_ahbb.value) {
    cursosStore_ahbb.eliminarCurso_ahbb(cursoAEliminar_ahbb.value.id);
    mostrarModal_ahbb.value = false;
    cursoAEliminar_ahbb.value = null;
    $q_ahbb.notify({ type: 'positive', message: 'Curso eliminado correctamente.' });
  }
};

const cancelarEliminacion_ahbb = () => {
  mostrarModal_ahbb.value = false;
  cursoAEliminar_ahbb.value = null;
};
</script>

<template>
  <div>
    <!-- Encabezado -->
    <div class="row items-center justify-between q-mb-lg">
      <div class="text-h4 text-weight-bold text-primary">Gestion de Cursos</div>
      <q-btn label="Nuevo Curso" icon="add" color="primary" unelevated to="/cursos/nuevo" />
    </div>

    <!-- Filtros -->
    <FiltroCursos_ahbb />

    <!-- Tabla -->
    <TablaCursos_ahbb @eliminar="confirmarEliminacion_ahbb" />

    <!-- Modal de confirmación -->
    <ModalConfirmar_ahbb
      v-if="mostrarModal_ahbb"
      titulo_ahbb="Eliminar Curso"
      :mensaje_ahbb="`Estas seguro de que deseas eliminar '${cursoAEliminar_ahbb?.nombre}'? Esta accion no se puede deshacer.`"
      @confirmar="ejecutarEliminacion_ahbb"
      @cancelar="cancelarEliminacion_ahbb"
    />
  </div>
</template>
