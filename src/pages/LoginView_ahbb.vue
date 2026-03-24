<!--
  LoginView_ahbb.vue — Vista de inicio de sesión con Quasar
-->
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAutenticacionStore_ahbb } from '../stores/autenticacionStore_ahbb';

const router_ahbb = useRouter();
const authStore_ahbb = useAutenticacionStore_ahbb();

const correo_ahbb = ref('');
const contrasena_ahbb = ref('');
const cargando_ahbb = ref(false);
const mostrarContrasena_ahbb = ref(false);

const manejarLogin_ahbb = async () => {
  cargando_ahbb.value = true;
  authStore_ahbb.limpiarError_ahbb();

  await new Promise((r) => setTimeout(r, 400));

  const exito_ahbb = await authStore_ahbb.iniciarSesion_ahbb(
    correo_ahbb.value,
    contrasena_ahbb.value
  );

  cargando_ahbb.value = false;

  if (exito_ahbb) {
    void router_ahbb.push({ name: 'dashboard' });
  }
};
</script>

<template>
  <div class="auth-fondo_ahbb flex flex-center">
    <q-card class="auth-card_ahbb" flat bordered>
      <!-- Logo -->
      <q-card-section class="text-center q-pb-none">
        <div style="font-size: 2.5rem">🎓</div>
        <div class="text-h5 text-weight-bold text-primary q-mt-sm">
          Hidalgo <span class="text-accent">Academy</span>
        </div>
        <p class="text-grey-6 q-mt-sm">
          Ingresa tus credenciales para acceder al sistema
        </p>
      </q-card-section>

      <q-card-section>
        <!-- Error -->
        <q-banner
          v-if="authStore_ahbb.errorAuth_ahbb"
          dense
          rounded
          class="bg-negative text-white q-mb-md"
        >
          {{ authStore_ahbb.errorAuth_ahbb }}
        </q-banner>

        <q-form @submit.prevent="manejarLogin_ahbb" class="q-gutter-y-md">
          <q-input
            v-model="correo_ahbb"
            label="Correo electronico"
            type="email"
            outlined
            dense
            :rules="[(v) => !!v || 'El correo es requerido']"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>

          <q-input
            v-model="contrasena_ahbb"
            label="Contrasena"
            :type="mostrarContrasena_ahbb ? 'text' : 'password'"
            outlined
            dense
            :rules="[(v) => !!v || 'La contrasena es requerida']"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="mostrarContrasena_ahbb ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="mostrarContrasena_ahbb = !mostrarContrasena_ahbb"
              />
            </template>
          </q-input>

          <q-btn
            type="submit"
            label="Iniciar Sesion"
            color="primary"
            class="full-width"
            size="md"
            :loading="cargando_ahbb"
            unelevated
          />
        </q-form>

        <p class="text-center text-grey-6 q-mt-md" style="font-size: 0.9rem">
          No tienes cuenta?
          <router-link to="/registro" class="text-secondary text-weight-bold">
            Registrate aqui
          </router-link>
        </p>

        <!-- Credenciales demo -->
        <q-banner dense rounded class="bg-blue-1 text-primary q-mt-md text-center">
          <strong>Demo:</strong> admin@hidalgo.edu / admin123
        </q-banner>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.auth-fondo_ahbb {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1b2a4a 50%, #1e3a6e 100%);
  padding: 1rem;
}
.auth-card_ahbb {
  width: 100%;
  max-width: 440px;
  border-radius: 16px;
}
</style>
