<!-- PerfilView_ahbb.vue — Página de perfil del usuario (compartida entre roles) -->
<script setup lang="ts">
import { useAutenticacionStore_ahbb } from '../../stores/autenticacionStore_ahbb';

const authStore_ahbb = useAutenticacionStore_ahbb();
</script>

<template>
  <div class="q-pa-md">
    <div class="text-h5 q-mb-md">
      <q-icon name="person" class="q-mr-sm" />
      Mi Perfil
    </div>

    <q-card flat bordered class="q-pa-lg" style="max-width: 600px">
      <div class="row q-col-gutter-md">
        <div class="col-12 col-sm-6">
          <q-input
            :model-value="authStore_ahbb.usuarioActivo_ahbb?.nombre"
            label="Nombre"
            outlined
            readonly
            dense
          />
        </div>
        <div class="col-12 col-sm-6">
          <q-input
            :model-value="authStore_ahbb.usuarioActivo_ahbb?.apellido"
            label="Apellido"
            outlined
            readonly
            dense
          />
        </div>
        <div class="col-12">
          <q-input
            :model-value="authStore_ahbb.usuarioActivo_ahbb?.correo"
            label="Correo electrónico"
            outlined
            readonly
            dense
          />
        </div>
        <div class="col-12">
          <q-badge
            :color="authStore_ahbb.usuarioActivo_ahbb?.rol === 'administrador' ? 'red' : authStore_ahbb.usuarioActivo_ahbb?.rol === 'profesor' ? 'blue' : 'green'"
            :label="authStore_ahbb.usuarioActivo_ahbb?.rol?.toUpperCase()"
            class="q-pa-sm text-caption"
          />
        </div>
      </div>

      <q-separator class="q-my-lg" />

      <div class="text-caption text-grey-6">
        Esta sección se conectará al backend para editar datos del perfil.
      </div>
    </q-card>
  </div>
</template>
