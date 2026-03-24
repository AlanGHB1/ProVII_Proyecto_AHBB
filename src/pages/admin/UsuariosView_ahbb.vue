<!-- UsuariosView_ahbb.vue — Gestión de usuarios (solo Administrador) -->
<script setup>
/**
 * Página de gestión de todos los usuarios del sistema.
 * Funcionalidad completa pendiente de conexión con backend.
 */
</script>

<template>
  <div class="q-pa-md">
    <div class="text-h5 q-mb-md">
      <q-icon name="people" class="q-mr-sm" />
      Gestión de Usuarios
    </div>
    <q-banner class="bg-blue-1 text-blue-9 q-mb-md" rounded>
      <template v-slot:avatar>
        <q-icon name="info" color="blue" />
      </template>
      Desde aquí podrás ver, crear, editar y bloquear usuarios (profesores y alumnos).
      Esta funcionalidad estará disponible cuando se conecte el backend.
    </q-banner>
    <q-card flat bordered class="q-pa-lg text-center text-grey-6">
      <q-icon name="construction" size="xl" class="q-mb-md" />
      <div class="text-subtitle1">Módulo en construcción</div>
    </q-card>
  </div>
</template>
