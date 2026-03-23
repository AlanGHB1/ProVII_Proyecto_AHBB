/**
 * routes.ts — Rutas de la aplicación academia_ahbb
 * Incluye tipado de meta para layout y visibilidad pública.
 */

import type { RouteRecordRaw } from 'vue-router';

// Extensión global de RouteMeta para tipado estricto
declare module 'vue-router' {
  interface RouteMeta {
    publica_ahbb?: boolean;
    layout_ahbb?: 'landing' | 'auth' | 'sistema';
  }
}

const routes: RouteRecordRaw[] = [
  // ─── Rutas públicas ─────────────────────────────────
  {
    path: '/',
    name: 'inicio',
    component: () => import('pages/LandingView_ah.vue'),
    meta: { publica_ahbb: true, layout_ahbb: 'landing' },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/LoginView_ahbb.vue'),
    meta: { publica_ahbb: true, layout_ahbb: 'auth' },
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import('pages/RegistroView_ahbb.vue'),
    meta: { publica_ahbb: true, layout_ahbb: 'auth' },
  },

  // ─── Rutas privadas ──────────────────────────────────
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('pages/DashboardView_ahbb.vue'),
    meta: { publica_ahbb: false, layout_ahbb: 'sistema' },
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: () => import('pages/CursosView_ahbb.vue'),
    meta: { publica_ahbb: false, layout_ahbb: 'sistema' },
  },
  {
    path: '/cursos/nuevo',
    name: 'cursoNuevo',
    component: () => import('pages/CursoFormView_ahbb.vue'),
    meta: { publica_ahbb: false, layout_ahbb: 'sistema' },
  },
  {
    path: '/cursos/editar/:id',
    name: 'cursoEditar',
    component: () => import('pages/CursoFormView_ahbb.vue'),
    meta: { publica_ahbb: false, layout_ahbb: 'sistema' },
  },
  {
    path: '/cursos/:id',
    name: 'cursoDetalle',
    component: () => import('pages/CursoDetalleView_ahbb.vue'),
    meta: { publica_ahbb: false, layout_ahbb: 'sistema' },
  },

  // Catch-all
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
