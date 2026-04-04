<!-- OfertaAcademicaView_ahbb.vue — Catálogo de cursos para alumnos -->
<script setup>
/**
 * Vista de la oferta académica disponible para inscripción.
 * El alumno puede ver cursos, horarios y profesores.
 */
</script>

<template>
  <div class="q-pa-md">
    <div class="text-h5 q-mb-md">
      <q-icon name="menu_book" class="q-mr-sm" />
      Oferta Académica
    </div>
    <q-banner class="bg-green-1 text-green-9 q-mb-md" rounded>
      <template v-slot:avatar>
        <q-icon name="info" color="green" />
      </template>
      Explora los cursos disponibles, revisa horarios y profesores, e inscríbete en los que te interesen.
    </q-banner>
    <q-card flat bordered class="q-pa-lg text-center text-grey-6">
      <q-icon name="construction" size="xl" class="q-mb-md" />
      <div class="text-subtitle1">Módulo en construcción</div>
    </q-card>
  </div>
</template>
