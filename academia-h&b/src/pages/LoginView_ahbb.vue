<!--
  LoginView_ahbb.vue — Vista de inicio de sesión con Quasar
-->
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAutenticacionStore_ahbb } from '../stores/autenticacionStore_ahbb';

const router_ahbb = useRouter();
const authStore_ahbb = useAutenticacionStore_ahbb();

const correo_ahbb = ref('');
const contrasena_ahbb = ref('');
const cargando_ahbb = ref(false);
const mostrarContrasena_ahbb = ref(false);

// Sugerencias de correos (Test + Cache)
const sugerenciasCorreos_ahbb = ref([
  'admin@academiah-b.edu',
  'carlos@academiah-b.edu',
  'maria@estudiante.edu'
]);

onMounted(() => {
  const ultimoCorreo = localStorage.getItem('ahbb_ultimo_correo');
  if (ultimoCorreo && !sugerenciasCorreos_ahbb.value.includes(ultimoCorreo)) {
    sugerenciasCorreos_ahbb.value.unshift(ultimoCorreo);
  }
});

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
    // Guardar en cache para el datalist
    localStorage.setItem('ahbb_ultimo_correo', correo_ahbb.value);
    void router_ahbb.push({ name: 'dashboard' });
  }
};
</script>

<template>
  <div class="auth-fondo_ahbb flex flex-center">
    <!-- Botón Volver al Inicio -->
    <q-btn
      round flat
      icon="home"
      color="white"
      to="/"
      size="lg"
      class="absolute-top-left q-mt-md q-ml-md"
      title="Volver al inicio"
    />

    <q-card class="auth-card_ahbb" flat bordered>
      <!-- Logo -->
      <q-card-section class="text-center q-pb-none">
        <div class="flex flex-center q-mb-xs">
          <img src="/graduation-cap.png" alt="Academia H&B" style="width:60px;height:60px;object-fit:contain;" />
        </div>
        <div class="text-h5 text-weight-bold text-primary q-mt-sm">
          Academia <span class="text-accent">H&B</span>
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
            label="Correo electrónico"
            type="email"
            outlined
            dense
            autocomplete="username"
            name="email"
            list="login-emails"
            :rules="[(v) => !!v || 'El correo es requerido']"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>

          <!-- Datalist para sugerencias -->
          <datalist id="login-emails">
            <option v-for="email in sugerenciasCorreos_ahbb" :key="email" :value="email" />
          </datalist>

          <q-input
            v-model="contrasena_ahbb"
            label="Contraseña"
            :type="mostrarContrasena_ahbb ? 'text' : 'password'"
            outlined
            dense
            autocomplete="current-password"
            name="password"
            :rules="[(v) => !!v || 'La contraseña es requerida']"
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
            label="Iniciar Sesión"
            color="primary"
            class="full-width"
            size="md"
            :loading="cargando_ahbb"
            unelevated
          />
        </q-form>

        <p class="text-center text-grey-6 q-mt-md" style="font-size: 0.9rem">
          ¿No tienes cuenta?
          <router-link to="/registro" class="text-secondary text-weight-bold">
            Regístrate aquí
          </router-link>
        </p>

        <!-- Demo credentials removed for security -->
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
