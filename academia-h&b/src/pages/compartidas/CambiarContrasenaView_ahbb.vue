<!-- CambiarContrasenaView_ahbb.vue — Cambio de contraseña (compartida) -->
<script setup>
import { ref } from 'vue';

const contrasenaActual_ahbb = ref('');
const nuevaContrasena_ahbb = ref('');
const confirmarContrasena_ahbb = ref('');

const mostrarActual_ahbb = ref(false);
const mostrarNueva_ahbb = ref(false);
const mostrarConfirmar_ahbb = ref(false);

const manejarCambio_ahbb = () => {
  // TODO: Conectar con authStore_ahbb.cambiarContrasena_ahbb()
  console.log('Solicitud de cambio de contraseña enviada');
};
</script>

<template>
  <div class="q-pa-md">
    <div class="text-h5 q-mb-md">
      <q-icon name="lock" class="q-mr-sm" />
      Cambiar Contraseña
    </div>

    <q-card flat bordered class="q-pa-lg shadow-1" style="max-width: 500px; border-radius: 12px;">
      <q-form @submit.prevent="manejarCambio_ahbb" class="q-gutter-md">
        <q-input
          v-model="contrasenaActual_ahbb"
          label="Contraseña actual / temporal"
          :type="mostrarActual_ahbb ? 'text' : 'password'"
          outlined
          dense
          placeholder="Ingresa tu clave actual"
        >
          <template v-slot:append>
            <q-icon
              :name="mostrarActual_ahbb ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="mostrarActual_ahbb = !mostrarActual_ahbb"
            />
          </template>
        </q-input>

        <q-input
          v-model="nuevaContrasena_ahbb"
          label="Nueva contraseña"
          :type="mostrarNueva_ahbb ? 'text' : 'password'"
          outlined
          dense
          placeholder="Mínimo 8 caracteres"
        >
          <template v-slot:append>
            <q-icon
              :name="mostrarNueva_ahbb ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="mostrarNueva_ahbb = !mostrarNueva_ahbb"
            />
          </template>
        </q-input>

        <q-input
          v-model="confirmarContrasena_ahbb"
          label="Confirmar nueva contraseña"
          :type="mostrarConfirmar_ahbb ? 'text' : 'password'"
          outlined
          dense
          placeholder="Repite la nueva clave"
        >
          <template v-slot:append>
            <q-icon
              :name="mostrarConfirmar_ahbb ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="mostrarConfirmar_ahbb = !mostrarConfirmar_ahbb"
            />
          </template>
        </q-input>

        <div class="q-mt-lg">
          <q-btn
            type="submit"
            label="Establecer Nueva Contraseña"
            color="primary"
            unelevated
            class="full-width"
            size="md"
          />
        </div>

        <div class="text-caption text-grey-6 q-mt-md text-center">
          <q-icon name="info" size="14px" class="q-mr-xs" />
          Se recomienda una combinación de letras, números y símbolos.
        </div>
      </q-form>
    </q-card>
  </div>
</template>
