<!--
  DashboardView_ahbb.vue — Panel principal con Quasar
-->
<script setup>
import { useCursosStore_ahbb } from "../stores/cursosStore_ahbb.js";
import { useAutenticacionStore_ahbb } from "../stores/autenticacionStore_ahbb.js";

const cursosStore_ahbb = useCursosStore_ahbb();
const authStore_ahbb = useAutenticacionStore_ahbb();

const estadisticas_ahbb = [
  { icono: "school", color: "primary", etiqueta: "Total Cursos", getter: () => cursosStore_ahbb.totalCursos_ahbb },
  { icono: "check_circle", color: "positive", etiqueta: "Activos", getter: () => cursosStore_ahbb.cursosActivos_ahbb },
  { icono: "pending", color: "warning", etiqueta: "Pendientes", getter: () => cursosStore_ahbb.cursosPendientes_ahbb },
  { icono: "groups", color: "info", etiqueta: "Estudiantes", getter: () => cursosStore_ahbb.totalEstudiantes_ahbb },
];
</script>

<template>
  <div>
    <!-- Encabezado -->
    <div class="row items-center justify-between q-mb-lg">
      <div>
        <div class="text-h4 text-weight-bold text-primary">Dashboard</div>
        <div class="text-grey-6">Bienvenido, {{ authStore_ahbb.nombreCompleto_ahbb }}</div>
      </div>
      <q-btn
        label="Nuevo Curso"
        icon="add"
        color="primary"
        unelevated
        to="/cursos/nuevo"
      />
    </div>

    <!-- Stats -->
    <div class="row q-col-gutter-md q-mb-lg">
      <div
        v-for="stat in estadisticas_ahbb"
        :key="stat.etiqueta"
        class="col-12 col-sm-6 col-md-3"
      >
        <q-card flat bordered>
          <q-card-section class="row items-center q-gutter-md">
            <q-avatar :color="stat.color" text-color="white" :icon="stat.icono" size="50px" />
            <div>
              <div class="text-h4 text-weight-bold">{{ stat.getter() }}</div>
              <div class="text-caption text-grey-6">{{ stat.etiqueta }}</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Accesos rápidos -->
    <q-card flat bordered class="q-mb-lg">
      <q-card-section>
        <div class="text-h6 text-weight-bold q-mb-md">Accesos Rapidos</div>
        <div class="q-gutter-sm">
          <q-btn outline color="primary" icon="list" label="Ver Cursos" to="/cursos" />
          <q-btn outline color="primary" icon="add" label="Crear Curso" to="/cursos/nuevo" />
        </div>
      </q-card-section>
    </q-card>

    <!-- Cursos recientes -->
    <q-card flat bordered>
      <q-card-section>
        <div class="text-h6 text-weight-bold q-mb-md">Cursos Recientes</div>
      </q-card-section>

      <q-list separator v-if="cursosStore_ahbb.listaCursos_ahbb.length > 0">
        <q-item
          v-for="curso in cursosStore_ahbb.listaCursos_ahbb.slice(0, 5)"
          :key="curso.id"
          clickable
          :to="`/cursos/${curso.id}`"
        >
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white" icon="menu_book" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">{{ curso.nombre }}</q-item-label>
            <q-item-label caption>
              {{ curso.profesor }} · {{ curso.estudiantesInscritos }}/{{ curso.topeEstudiantes }} estudiantes
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-badge
              :color="curso.estatus === 'activo' ? 'positive' : curso.estatus === 'pendiente' ? 'warning' : 'negative'"
              :label="curso.estatus"
            />
          </q-item-section>
        </q-item>
      </q-list>

      <q-card-section v-else class="text-center text-grey-5 q-py-xl">
        <q-icon name="inbox" size="3rem" class="q-mb-sm" />
        <div>No hay cursos registrados todavia.</div>
      </q-card-section>
    </q-card>
  </div>
</template>
