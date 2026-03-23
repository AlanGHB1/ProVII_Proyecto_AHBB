<!-- MisAlumnosView_ahbb.vue — Alumnos del profesor -->
<script setup lang="ts">
/**
 * Vista de los alumnos inscritos en los cursos del profesor.
 */
</script>

<template>
  <div class="q-pa-md">
    <div class="text-h5 q-mb-md">
      <q-icon name="groups" class="q-mr-sm" />
      Mis Alumnos
    </div>
    <q-banner class="bg-blue-1 text-blue-9 q-mb-md" rounded>
      <template v-slot:avatar>
        <q-icon name="info" color="blue" />
      </template>
      Aquí verás todos los alumnos inscritos en tus cursos y podrás gestionar sus estados académicos.
    </q-banner>
    <q-card flat bordered class="q-pa-lg text-center text-grey-6">
      <q-icon name="construction" size="xl" class="q-mb-md" />
      <div class="text-subtitle1">Módulo en construcción</div>
    </q-card>
  </div>
</template>
