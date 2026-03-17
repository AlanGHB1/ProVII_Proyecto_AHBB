<!--
  DetalleCurso_ahbb.vue — Componente 3: Detalle con Quasar
-->
<script setup>
import { computed } from "vue";
import { useCursosStore_ahbb } from "../../stores/cursosStore_ahbb.js";

const props = defineProps({
  curso_ahbb: { type: Object, required: true },
});

const cursosStore_ahbb = useCursosStore_ahbb();

const diasFormateados_ahbb = computed(() => {
  if (!props.curso_ahbb.dias || props.curso_ahbb.dias.length === 0) return "No definidos";
  return props.curso_ahbb.dias.map((d) => d.charAt(0).toUpperCase() + d.slice(1)).join(", ");
});

const nombrePrelacion_ahbb = computed(() => {
  if (!props.curso_ahbb.tienePrelacion || !props.curso_ahbb.prelacionCursoId) return "Ninguna";
  const p = cursosStore_ahbb.obtenerCursoPorId_ahbb(props.curso_ahbb.prelacionCursoId);
  return p ? p.nombre : "Curso no encontrado";
});

const colorEstatus_ahbb = computed(() => {
  const m = { activo: "positive", pendiente: "warning", inactivo: "negative" };
  return m[props.curso_ahbb.estatus] || "grey";
});
</script>

<template>
  <q-card flat bordered>
    <!-- Header -->
    <q-card-section class="bg-primary text-white">
      <div class="text-h5 text-weight-bold">{{ curso_ahbb.nombre }}</div>
      <div class="text-caption" style="opacity: 0.8">
        Impartido por {{ curso_ahbb.profesor }}
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-sm-4">
          <div class="text-overline text-grey-7">Estatus</div>
          <q-badge :color="colorEstatus_ahbb" :label="curso_ahbb.estatus" />
        </div>
        <div class="col-12 col-sm-4">
          <div class="text-overline text-grey-7">Duracion</div>
          <div>{{ curso_ahbb.duracionHoras }} horas ({{ curso_ahbb.cantidadDias }} dias)</div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="text-overline text-grey-7">Estudiantes</div>
          <div>{{ curso_ahbb.estudiantesInscritos }} / {{ curso_ahbb.topeEstudiantes }}</div>
        </div>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-sm-4">
          <div class="text-overline text-grey-7">Dias de clase</div>
          <div>{{ diasFormateados_ahbb }}</div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="text-overline text-grey-7">Horario</div>
          <div>{{ curso_ahbb.horaInicio }} - {{ curso_ahbb.horaFin }}</div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="text-overline text-grey-7">Prelacion</div>
          <div>{{ nombrePrelacion_ahbb }}</div>
        </div>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="text-overline text-grey-7">Descripcion</div>
      <div>{{ curso_ahbb.descripcion }}</div>
    </q-card-section>

    <q-card-section v-if="curso_ahbb.temario">
      <div class="text-overline text-grey-7">Temario</div>
      <div style="white-space: pre-line">{{ curso_ahbb.temario }}</div>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn
        label="Editar Curso"
        icon="edit"
        color="primary"
        unelevated
        :to="`/cursos/editar/${curso_ahbb.id}`"
      />
      <q-btn
        label="Volver al listado"
        icon="arrow_back"
        outline
        color="grey-7"
        to="/cursos"
      />
    </q-card-actions>
  </q-card>
</template>
