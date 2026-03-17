/**
 * main.js — Punto de entrada principal de la aplicación
 * Configura Vue 3, Pinia, Vue Router y Quasar Framework.
 */

import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Notify, Dialog } from "quasar";
import App from "./App.vue";
import enrutador_ah from "./router/index_ah.js";

// Quasar: íconos y estilos base
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

// Estilos propios de la landing page (se mantienen)
import "./assets/css/main_ah.css";

// Crear la instancia de la aplicación Vue
const app_ah = createApp(App);

// Plugins
const pinia_ah = createPinia();
app_ah.use(pinia_ah);
app_ah.use(enrutador_ah);
app_ah.use(Quasar, {
  plugins: { Notify, Dialog },
  config: {
    notify: {
      position: "top-right",
      timeout: 2500,
    },
  },
});

// Montar
app_ah.mount("#app");
