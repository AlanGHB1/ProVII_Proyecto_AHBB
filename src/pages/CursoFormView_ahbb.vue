<!--
  CursoFormView_ahbb.vue — Vista crear/editar con Quasar Notify
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import type { ICurso, ICursoFormulario } from '../types';
import { useCursosStore_ahbb } from '../stores/cursosStore_ahbb';
import FormularioCurso_ahbb from '../components/cursos/FormularioCurso_ahbb.vue';

const $q_ahbb = useQuasar();
const route_ahbb = useRoute();
const router_ahbb = useRouter();
const cursosStore_ahbb = useCursosStore_ahbb();

const esEdicion_ahbb = ref<boolean>(false);
const cursoActual_ahbb = ref<ICurso | null>(null);

onMounted((): void => {
  const id_ahbb = route_ahbb.params['id'] as string | undefined;
  if (id_ahbb) {
    esEdicion_ahbb.value = true;
    const curso_ahbb = cursosStore_ahbb.obtenerCursoPorId_ahbb(id_ahbb);
    if (curso_ahbb) {
      cursoActual_ahbb.value = { ...curso_ahbb };
    } else {
      void router_ahbb.push({ name: 'cursos' });
    }
  }
});

const manejarGuardar_ahbb = (datos_ahbb: ICursoFormulario): void => {
  if (esEdicion_ahbb.value && cursoActual_ahbb.value) {
    cursosStore_ahbb.actualizarCurso_ahbb(cursoActual_ahbb.value.id, datos_ahbb);
    $q_ahbb.notify({ type: 'positive', message: 'Curso actualizado correctamente.' });
  } else {
    cursosStore_ahbb.crearCurso_ahbb(datos_ahbb);
    $q_ahbb.notify({ type: 'positive', message: 'Curso creado correctamente.' });
  }
  setTimeout(() => void router_ahbb.push({ name: 'cursos' }), 800);
};

const manejarCancelar_ahbb = (): void => {
  void router_ahbb.push({ name: 'cursos' });
};
</script>

<template>
  <div>
    <div class="row items-center justify-between q-mb-lg">
      <div class="text-h4 text-weight-bold text-primary">
        {{ esEdicion_ahbb ? 'Editar Curso' : 'Nuevo Curso' }}
      </div>
      <q-btn label="Volver a Cursos" icon="arrow_back" outline color="grey-7" @click="manejarCancelar_ahbb" />
    </div>

    <FormularioCurso_ahbb
      :curso-inicial_ahbb="cursoActual_ahbb"
      :es-edicion_ahbb="esEdicion_ahbb"
      @guardar="manejarGuardar_ahbb"
      @cancelar="manejarCancelar_ahbb"
    />
  </div>
</template>
