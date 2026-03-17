<!--
  CursoDetalleView_ahbb.vue — Vista de detalle con Quasar
-->
<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCursosStore_ahbb } from "../stores/cursosStore_ahbb.js";
import DetalleCurso_ahbb from "../components/cursos/DetalleCurso_ahbb.vue";

const route_ahbb = useRoute();
const router_ahbb = useRouter();
const cursosStore_ahbb = useCursosStore_ahbb();
const curso_ahbb = ref(null);

onMounted(() => {
  const id_ahbb = route_ahbb.params.id;
  const encontrado_ahbb = cursosStore_ahbb.obtenerCursoPorId_ahbb(id_ahbb);
  if (encontrado_ahbb) {
    curso_ahbb.value = encontrado_ahbb;
  } else {
    router_ahbb.push({ name: "cursos" });
  }
});
</script>

<template>
  <div>
    <div class="row items-center justify-between q-mb-lg">
      <div class="text-h4 text-weight-bold text-primary">Detalle del Curso</div>
      <q-btn label="Volver a Cursos" icon="arrow_back" outline color="grey-7" to="/cursos" />
    </div>
    <DetalleCurso_ahbb v-if="curso_ahbb" :curso_ahbb="curso_ahbb" />
  </div>
</template>
