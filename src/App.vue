<!-- Componente raíz de la aplicación con layout condicional -->
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAutenticacionStore_ahbb } from './stores/autenticacionStore_ahbb';
import { useCursosStore_ahbb } from './stores/cursosStore_ahbb';

// Componentes de layout landing
import Navbar_ah from './components/layout/Navbar_ah.vue';
import Footer_ah from './components/layout/Footer_ah.vue';

const route_ahbb = useRoute();
const router_ahbb = useRouter();
const authStore_ahbb = useAutenticacionStore_ahbb();
const cursosStore_ahbb = useCursosStore_ahbb();

// Inicializar stores
authStore_ahbb.inicializar_ahbb();
cursosStore_ahbb.inicializar_ahbb();

interface EnlaceSistema {
  icono: string;
  etiqueta: string;
  ruta: string;
}

/**
 * Detecta el tipo de layout según la meta de la ruta.
 */
const layoutActual_ahbb = computed<string>(() => {
  return route_ahbb.meta.layout_ahbb || 'landing';
});

/**
 * Cierra la sesión y redirige al login.
 */
const cerrarSesion_ahbb = (): void => {
  authStore_ahbb.cerrarSesion_ahbb();
  void router_ahbb.push({ name: 'login' });
};

// Links del drawer
const enlacesSistema_ahbb: EnlaceSistema[] = [
  { icono: 'dashboard', etiqueta: 'Dashboard', ruta: '/dashboard' },
  { icono: 'school', etiqueta: 'Cursos', ruta: '/cursos' },
];
</script>

<template>
  <!-- ========== LAYOUT LANDING ========== -->
  <div v-if="layoutActual_ahbb === 'landing'" id="app_ah" class="app_ah">
    <Navbar_ah />
    <router-view />
    <Footer_ah />
  </div>

  <!-- ========== LAYOUT AUTH ========== -->
  <div v-else-if="layoutActual_ahbb === 'auth'">
    <router-view />
  </div>

  <!-- ========== LAYOUT SISTEMA (Quasar) ========== -->
  <q-layout v-else-if="layoutActual_ahbb === 'sistema'" view="lHh Lpr lFf">
    <!-- Header -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" class="lt-md" />
        <q-toolbar-title class="text-weight-bold">
          🎓 Sistema de Certificaciones
        </q-toolbar-title>
        <q-space />
        <div class="row items-center q-gutter-sm">
          <span class="text-caption gt-xs">
            {{ authStore_ahbb.nombreCompleto_ahbb }}
          </span>
          <q-avatar color="accent" text-color="white" size="36px" font-size="14px">
            {{ authStore_ahbb.iniciales_ahbb }}
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Drawer / Sidebar -->
    <q-drawer
      show-if-above
      :width="240"
      :breakpoint="768"
      bordered
      class="bg-dark text-white"
    >
      <!-- Logo -->
      <q-item clickable to="/dashboard" class="q-py-md">
        <q-item-section avatar>
          <span style="font-size: 1.5rem">🎓</span>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-weight-bold text-white" style="font-size: 1.1rem">
            Hidalgo <span style="color: #f59e0b">Academy</span>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator dark />

      <!-- Navegación principal -->
      <q-list>
        <q-item-label header class="text-grey-6 text-uppercase" style="font-size: 0.7rem">
          Principal
        </q-item-label>

        <q-item
          v-for="enlace in enlacesSistema_ahbb"
          :key="enlace.ruta"
          clickable
          :to="enlace.ruta"
          active-class="bg-grey-9 text-accent"
          class="text-grey-4"
        >
          <q-item-section avatar>
            <q-icon :name="enlace.icono" />
          </q-item-section>
          <q-item-section>{{ enlace.etiqueta }}</q-item-section>
        </q-item>
      </q-list>

      <q-separator dark class="q-my-sm" />

      <q-list>
        <q-item-label header class="text-grey-6 text-uppercase" style="font-size: 0.7rem">
          Otros
        </q-item-label>

        <q-item clickable to="/" class="text-grey-4">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Ir al Inicio</q-item-section>
        </q-item>

        <q-item clickable @click="cerrarSesion_ahbb" class="text-grey-4">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>Cerrar Sesion</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Contenido de la página -->
    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
.app_ah {
  min-height: 100vh;
}
</style>
