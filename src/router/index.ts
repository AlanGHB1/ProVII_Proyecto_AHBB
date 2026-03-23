import { defineRouter } from '#q-app/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  // ─── Guard de navegación ────────────────────────────
  Router.beforeEach((to_ahbb, _from_ahbb, next_ahbb) => {
    const esPublica_ahbb = to_ahbb.meta.publica_ahbb;

    // Verificar sesión desde LocalStorage directamente
    // (evita dependencia circular con el store)
    const sesionRaw_ahbb = localStorage.getItem('certificaciones_sesion_ahbb');
    const estaAutenticado_ahbb = sesionRaw_ahbb !== null;

    if (!esPublica_ahbb && !estaAutenticado_ahbb) {
      // Redirigir al login si intenta acceder a ruta privada sin sesión
      next_ahbb({ name: 'login' });
    } else if (
      estaAutenticado_ahbb &&
      (to_ahbb.name === 'login' || to_ahbb.name === 'registro')
    ) {
      // Si ya tiene sesión y va al login/registro, redirigir al dashboard
      next_ahbb({ name: 'dashboard' });
    } else {
      next_ahbb();
    }
  });

  return Router;
});
