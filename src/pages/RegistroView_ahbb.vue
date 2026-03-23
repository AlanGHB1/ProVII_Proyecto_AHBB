<!--
  RegistroView_ahbb.vue — Vista de registro con Quasar
-->
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useAutenticacionStore_ahbb } from '../stores/autenticacionStore_ahbb';

const $q_ahbb = useQuasar();
const router_ahbb = useRouter();
const authStore_ahbb = useAutenticacionStore_ahbb();

const nombre_ahbb = ref<string>('');
const apellido_ahbb = ref<string>('');
const correo_ahbb = ref<string>('');
const contrasena_ahbb = ref<string>('');
const confirmarContrasena_ahbb = ref<string>('');
const cargando_ahbb = ref<boolean>(false);
const mostrarContrasena_ahbb = ref<boolean>(false);

const manejarRegistro_ahbb = async (): Promise<void> => {
  authStore_ahbb.limpiarError_ahbb();

  if (contrasena_ahbb.value.length < 6) {
    $q_ahbb.notify({ type: 'negative', message: 'La contrasena debe tener al menos 6 caracteres.' });
    return;
  }
  if (contrasena_ahbb.value !== confirmarContrasena_ahbb.value) {
    $q_ahbb.notify({ type: 'negative', message: 'Las contrasenas no coinciden.' });
    return;
  }

  cargando_ahbb.value = true;
  await new Promise((r) => setTimeout(r, 400));

  const exito_ahbb = authStore_ahbb.registrarUsuario_ahbb({
    nombre: nombre_ahbb.value,
    apellido: apellido_ahbb.value,
    correo: correo_ahbb.value,
    contrasena: contrasena_ahbb.value,
  });

  cargando_ahbb.value = false;

  if (exito_ahbb) {
    $q_ahbb.notify({ type: 'positive', message: 'Cuenta creada exitosamente. Inicia sesion.' });
    void router_ahbb.push({ name: 'login' });
  }
};
</script>

<template>
  <div class="auth-fondo_ahbb flex flex-center">
    <q-card class="auth-card_ahbb" flat bordered>
      <q-card-section class="text-center q-pb-none">
        <div style="font-size: 2.5rem">🎓</div>
        <div class="text-h5 text-weight-bold text-primary q-mt-sm">
          Hidalgo <span class="text-accent">Academy</span>
        </div>
        <p class="text-grey-6 q-mt-sm">Crea tu cuenta para acceder al sistema</p>
      </q-card-section>

      <q-card-section>
        <q-banner
          v-if="authStore_ahbb.errorAuth_ahbb"
          dense
          rounded
          class="bg-negative text-white q-mb-md"
        >
          {{ authStore_ahbb.errorAuth_ahbb }}
        </q-banner>

        <q-form @submit.prevent="manejarRegistro_ahbb" class="q-gutter-y-md">
          <div class="row q-col-gutter-md">
            <div class="col-12 col-sm-6">
              <q-input
                v-model="nombre_ahbb"
                label="Nombre"
                outlined
                dense
                :rules="[(v: string) => !!v || 'Requerido']"
              >
                <template v-slot:prepend><q-icon name="person" /></template>
              </q-input>
            </div>
            <div class="col-12 col-sm-6">
              <q-input
                v-model="apellido_ahbb"
                label="Apellido"
                outlined
                dense
                :rules="[(v: string) => !!v || 'Requerido']"
              >
                <template v-slot:prepend><q-icon name="person_outline" /></template>
              </q-input>
            </div>
          </div>

          <q-input
            v-model="correo_ahbb"
            label="Correo electronico"
            type="email"
            outlined
            dense
            :rules="[(v: string) => !!v || 'Requerido']"
          >
            <template v-slot:prepend><q-icon name="email" /></template>
          </q-input>

          <q-input
            v-model="contrasena_ahbb"
            label="Contrasena"
            :type="mostrarContrasena_ahbb ? 'text' : 'password'"
            outlined
            dense
            hint="Minimo 6 caracteres"
            :rules="[(v: string) => !!v || 'Requerida']"
          >
            <template v-slot:prepend><q-icon name="lock" /></template>
            <template v-slot:append>
              <q-icon
                :name="mostrarContrasena_ahbb ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="mostrarContrasena_ahbb = !mostrarContrasena_ahbb"
              />
            </template>
          </q-input>

          <q-input
            v-model="confirmarContrasena_ahbb"
            label="Confirmar contrasena"
            :type="mostrarContrasena_ahbb ? 'text' : 'password'"
            outlined
            dense
            :rules="[(v: string) => !!v || 'Requerida']"
          >
            <template v-slot:prepend><q-icon name="lock_outline" /></template>
          </q-input>

          <q-btn
            type="submit"
            label="Crear Cuenta"
            color="primary"
            class="full-width"
            size="md"
            :loading="cargando_ahbb"
            unelevated
          />
        </q-form>

        <p class="text-center text-grey-6 q-mt-md" style="font-size: 0.9rem">
          Ya tienes cuenta?
          <router-link to="/login" class="text-secondary text-weight-bold">
            Inicia sesion
          </router-link>
        </p>
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
  max-width: 480px;
  border-radius: 16px;
}
</style>
