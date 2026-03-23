<!-- FirmaDigitalView_ahbb.vue — Firma digital del profesor -->
<script setup lang="ts">
/**
 * Vista para subir y gestionar la firma digital del profesor.
 */
</script>

<template>
  <div class="q-pa-md">
    <div class="text-h5 q-mb-md">
      <q-icon name="draw" class="q-mr-sm" />
      Mi Firma Digital
    </div>
    <q-banner class="bg-blue-1 text-blue-9 q-mb-md" rounded>
      <template v-slot:avatar>
        <q-icon name="info" color="blue" />
      </template>
      Sube tu firma digital para que aparezca en los certificados de tus cursos.
    </q-banner>
    <q-card flat bordered class="q-pa-lg text-center text-grey-6">
      <q-icon name="construction" size="xl" class="q-mb-md" />
      <div class="text-subtitle1">Módulo en construcción</div>
    </q-card>
  </div>
</template>
