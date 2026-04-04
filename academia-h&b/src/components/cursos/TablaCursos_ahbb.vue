<!--
  TablaCursos_ahbb.vue — Componente 1: QTable de cursos
-->
<script setup>
import { useCursosStore_ahbb } from '../../stores/cursosStore_ahbb';

const cursosStore_ahbb = useCursosStore_ahbb();
const emit = defineEmits(['eliminar']);

// Definición de columnas para QTable
const columnas_ahbb = [
  { name: 'nombre', label: 'Curso', field: 'nombre', align: 'left', sortable: true },
  { name: 'profesor', label: 'Profesor', field: 'profesor', align: 'left', sortable: true },
  {
    name: 'dias',
    label: 'Dias',
    field: 'dias',
    align: 'left',
    format: (val) =>
      val?.map((d) => d.charAt(0).toUpperCase() + d.slice(1, 3)).join(', ') || '—',
  },
  {
    name: 'horario',
    label: 'Horario',
    align: 'left',
    field: (row) => `${row.horaInicio} - ${row.horaFin}`,
  },
  {
    name: 'inscritos',
    label: 'Inscritos',
    align: 'center',
    field: (row) => `${row.estudiantesInscritos}/${row.topeEstudiantes}`,
  },
  { name: 'estatus', label: 'Estatus', field: 'estatus', align: 'center', sortable: true },
  { name: 'acciones', label: 'Acciones', align: 'center', field: '' },
];

const colorEstatus_ahbb = (estatus) => {
  const mapa = {
    activo: 'positive',
    pendiente: 'warning',
    inactivo: 'negative',
  };
  return mapa[estatus] || 'grey';
};
</script>

<template>
  <q-table
    :rows="cursosStore_ahbb.cursosFiltrados_ahbb"
    :columns="columnas_ahbb"
    row-key="id"
    flat
    bordered
    :rows-per-page-options="[5, 10, 0]"
    :no-data-label="'No se encontraron cursos con los filtros actuales.'"
  >
    <!-- Slot para estatus con badge -->
    <template v-slot:body-cell-estatus="props">
      <q-td :props="props">
        <q-badge :color="colorEstatus_ahbb(props.row.estatus)" :label="props.row.estatus" />
      </q-td>
    </template>

    <!-- Slot para acciones -->
    <template v-slot:body-cell-acciones="props">
      <q-td :props="props">
        <q-btn
          flat
          dense
          round
          icon="visibility"
          color="primary"
          size="sm"
          :to="`/cursos/${props.row.id}`"
        >
          <q-tooltip>Ver detalle</q-tooltip>
        </q-btn>
        <q-btn
          flat
          dense
          round
          icon="edit"
          color="info"
          size="sm"
          :to="`/cursos/editar/${props.row.id}`"
        >
          <q-tooltip>Editar</q-tooltip>
        </q-btn>
        <q-btn
          flat
          dense
          round
          icon="delete"
          color="negative"
          size="sm"
          @click="emit('eliminar', props.row)"
        >
          <q-tooltip>Eliminar</q-tooltip>
        </q-btn>
      </q-td>
    </template>

    <!-- Estado vacío -->
    <template v-slot:no-data>
      <div class="full-width column items-center q-pa-xl text-grey-5">
        <q-icon name="inbox" size="3rem" class="q-mb-sm" />
        <div>No se encontraron cursos con los filtros actuales.</div>
      </div>
    </template>
  </q-table>
</template>
