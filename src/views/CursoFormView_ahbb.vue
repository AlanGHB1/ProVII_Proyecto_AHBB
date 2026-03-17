<!--
  CursoFormView_ahbb.vue — Vista crear/editar con Quasar Notify
-->
<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useCursosStore_ahbb } from "../stores/cursosStore_ahbb.js";
import FormularioCurso_ahbb from "../components/cursos/FormularioCurso_ahbb.vue";

const $q_ahbb = useQuasar();
const route_ahbb = useRoute();
const router_ahbb = useRouter();
const cursosStore_ahbb = useCursosStore_ahbb();

const esEdicion_ahbb = ref(false);
const cursoActual_ahbb = ref(null);

onMounted(() => {
  const id_ahbb = route_ahbb.params.id;
  if (id_ahbb) {
    esEdicion_ahbb.value = true;
    const curso_ahbb = cursosStore_ahbb.obtenerCursoPorId_ahbb(id_ahbb);
    if (curso_ahbb) {
      cursoActual_ahbb.value = { ...curso_ahbb };
    } else {
      router_ahbb.push({ name: "cursos" });
    }
  }
});

const manejarGuardar_ahbb = (datos_ahbb) => {
  if (esEdicion_ahbb.value && cursoActual_ahbb.value) {
    cursosStore_ahbb.actualizarCurso_ahbb(cursoActual_ahbb.value.id, datos_ahbb);
    $q_ahbb.notify({ type: "positive", message: "Curso actualizado correctamente." });
  } else {
    cursosStore_ahbb.crearCurso_ahbb(datos_ahbb);
    $q_ahbb.notify({ type: "positive", message: "Curso creado correctamente." });
  }
  setTimeout(() => router_ahbb.push({ name: "cursos" }), 800);
};

const manejarCancelar_ahbb = () => {
  router_ahbb.push({ name: "cursos" });
};
</script>

<template>
  <div>
    <div class="row items-center justify-between q-mb-lg">
      <div class="text-h4 text-weight-bold text-primary">
        {{ esEdicion_ahbb ? "Editar Curso" : "Nuevo Curso" }}
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
