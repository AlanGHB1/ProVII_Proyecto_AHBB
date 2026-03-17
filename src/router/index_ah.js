/**
 * index_ah.js — Configuración de Vue Router
 * Rutas públicas: Landing, Login, Registro
 * Rutas privadas: Dashboard, Cursos (CRUD)
 * Guard de navegación para proteger rutas privadas.
 */

import { createRouter, createWebHistory } from "vue-router";

// Rutas públicas (lazy-loaded)
const LandingView_ah = () => import("../views/LandingView_ah.vue");
const LoginView_ahbb = () => import("../views/LoginView_ahbb.vue");
const RegistroView_ahbb = () => import("../views/RegistroView_ahbb.vue");

// Rutas privadas (lazy-loaded)
const DashboardView_ahbb = () => import("../views/DashboardView_ahbb.vue");
const CursosView_ahbb = () => import("../views/CursosView_ahbb.vue");
const CursoFormView_ahbb = () => import("../views/CursoFormView_ahbb.vue");
const CursoDetalleView_ahbb = () =>
  import("../views/CursoDetalleView_ahbb.vue");

const rutas_ah = [
  // ─── Rutas públicas ────────────────────────────────
  {
    path: "/",
    name: "inicio",
    component: LandingView_ah,
    meta: { publica_ahbb: true, layout_ahbb: "landing" },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView_ahbb,
    meta: { publica_ahbb: true, layout_ahbb: "auth" },
  },
  {
    path: "/registro",
    name: "registro",
    component: RegistroView_ahbb,
    meta: { publica_ahbb: true, layout_ahbb: "auth" },
  },

  // ─── Rutas privadas ───────────────────────────────
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView_ahbb,
    meta: { publica_ahbb: false, layout_ahbb: "sistema" },
  },
  {
    path: "/cursos",
    name: "cursos",
    component: CursosView_ahbb,
    meta: { publica_ahbb: false, layout_ahbb: "sistema" },
  },
  {
    path: "/cursos/nuevo",
    name: "cursoNuevo",
    component: CursoFormView_ahbb,
    meta: { publica_ahbb: false, layout_ahbb: "sistema" },
  },
  {
    path: "/cursos/editar/:id",
    name: "cursoEditar",
    component: CursoFormView_ahbb,
    meta: { publica_ahbb: false, layout_ahbb: "sistema" },
  },
  {
    path: "/cursos/:id",
    name: "cursoDetalle",
    component: CursoDetalleView_ahbb,
    meta: { publica_ahbb: false, layout_ahbb: "sistema" },
  },
];

const enrutador_ah = createRouter({
  history: createWebHistory(),
  routes: rutas_ah,

  scrollBehavior() {
    return { top: 0 };
  },
});

// ─── Guard de navegación ────────────────────────────
enrutador_ah.beforeEach((to_ahbb, from_ahbb, next_ahbb) => {
  const esPublica_ahbb = to_ahbb.meta.publica_ahbb;

  // Verificar sesión desde LocalStorage directamente
  // (evita dependencia circular con el store)
  const sesionRaw_ahbb = localStorage.getItem("certificaciones_sesion_ahbb");
  const estaAutenticado_ahbb = sesionRaw_ahbb !== null;

  if (!esPublica_ahbb && !estaAutenticado_ahbb) {
    // Redirigir al login si intenta acceder a ruta privada sin sesión
    next_ahbb({ name: "login" });
  } else if (
    estaAutenticado_ahbb &&
    (to_ahbb.name === "login" || to_ahbb.name === "registro")
  ) {
    // Si ya tiene sesión y va al login/registro, redirigir al dashboard
    next_ahbb({ name: "dashboard" });
  } else {
    next_ahbb();
  }
});

export default enrutador_ah;
