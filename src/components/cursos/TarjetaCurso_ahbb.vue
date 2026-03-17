<!--
  TarjetaCurso_ahbb.vue — Componente 5: Tarjeta individual con Quasar
-->
<script setup>
const props = defineProps({
  curso_ahbb: { type: Object, required: true },
});

const colorEstatus_ahbb = (estatus) => {
  const m = { activo: "positive", pendiente: "warning", inactivo: "negative" };
  return m[estatus] || "grey";
};

const formatearDias_ahbb = (dias) => {
  if (!dias || dias.length === 0) return "Sin definir";
  return dias.map((d) => d.charAt(0).toUpperCase() + d.slice(1, 3)).join(", ");
};
</script>

<template>
  <q-card flat bordered>
    <q-card-section>
      <div class="row items-start justify-between">
        <div class="text-subtitle1 text-weight-bold text-primary">
          {{ curso_ahbb.nombre }}
        </div>
        <q-badge :color="colorEstatus_ahbb(curso_ahbb.estatus)" :label="curso_ahbb.estatus" />
      </div>
      <div class="text-caption text-grey-7 q-mt-xs">
        <q-icon name="person" size="xs" /> {{ curso_ahbb.profesor }}
      </div>
      <div class="text-caption text-grey-6">
        <q-icon name="event" size="xs" />
        {{ formatearDias_ahbb(curso_ahbb.dias) }} · {{ curso_ahbb.horaInicio }} - {{ curso_ahbb.horaFin }}
      </div>
      <div class="text-caption text-grey-6">
        <q-icon name="schedule" size="xs" /> {{ curso_ahbb.duracionHoras }}h ·
        <q-icon name="groups" size="xs" /> {{ curso_ahbb.estudiantesInscritos }}/{{ curso_ahbb.topeEstudiantes }}
      </div>
    </q-card-section>
    <q-separator />
    <q-card-actions>
      <q-btn flat dense color="primary" label="Ver detalle" :to="`/cursos/${curso_ahbb.id}`" />
    </q-card-actions>
  </q-card>
</template>
