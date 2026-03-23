<!-- CargaMasivaView_ahbb.vue — Carga masiva de datos (solo Administrador) -->
<script setup lang="ts">
/**
 * Página para carga masiva de instructores, estudiantes y cursos.
 * Funcionalidad completa pendiente de conexión con backend.
 */
</script>

<template>
  <div class="q-pa-md">
    <div class="text-h5 q-mb-md">
      <q-icon name="upload_file" class="q-mr-sm" />
      Carga Masiva
    </div>
    <q-banner class="bg-blue-1 text-blue-9 q-mb-md" rounded>
      <template v-slot:avatar>
        <q-icon name="info" color="blue" />
      </template>
      Carga masiva de instructores, estudiantes y cursos mediante archivos CSV o Excel.
    </q-banner>
    <q-card flat bordered class="q-pa-lg text-center text-grey-6">
      <q-icon name="construction" size="xl" class="q-mb-md" />
      <div class="text-subtitle1">Módulo en construcción</div>
    </q-card>
  </div>
</template>
