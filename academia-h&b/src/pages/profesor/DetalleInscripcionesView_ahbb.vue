<!-- DetalleInscripcionesView_ahbb.vue — Calificación de alumnos (Aprobado/Reprobado) -->
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { obtenerInscripcionesPorCurso_ahbb, actualizarEstadoInscripcion_ahbb } from 'src/servicios/inscripcionesServicio_ahbb';
import { obtenerCursoPorId_ahbb } from 'src/servicios/cursosServicio_ahbb';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const route = useRoute();
const router = useRouter();
const idCurso = route.params.id;

const cargando = ref(true);
const curso = ref(null);
const inscripciones = ref([]);
const filtroNombre = ref('');

const columnas = [
  { name: 'alumno', label: 'Estudiante', field: row => `${row.alumno.nombre_ahbb} ${row.alumno.apellido_ahbb}`, align: 'left', sortable: true },
  { name: 'cedula', label: 'Cédula', field: row => row.alumno.cedula_ahbb, align: 'left' },
  { name: 'correo', label: 'Correo', field: row => row.alumno.correo_ahbb, align: 'left' },
  { name: 'estado', label: 'Calificación (Switch)', field: 'estatus_ahbb', align: 'center' },
  { name: 'estadoLabel', label: 'Estado Actual', field: 'estatus_ahbb', align: 'center' },
];

const cargarDatos = async () => {
  cargando.value = true;
  try {
    const [cursoData, insData] = await Promise.all([
      obtenerCursoPorId_ahbb(idCurso),
      obtenerInscripcionesPorCurso_ahbb(idCurso)
    ]);
    curso.value = cursoData;
    inscripciones.value = insData;
  } catch (error) {
    $q.notify({
      color: 'negative',
      message: 'Error al cargar los datos del curso',
      icon: 'report_problem'
    });
  } finally {
    cargando.value = false;
  }
};

const cursoFinalizado = computed(() => {
  if (!curso.value) return false;
  return curso.value.estatus === 'inactivo';
});

const inscripcionesFiltradas = computed(() => {
  // Deduplicar: cada alumno solo una vez (el más reciente)
  const mapaUnicos = new Map();
  const sorted = [...inscripciones.value].sort((a,b) => b.id_inscripcion_ahbb - a.id_inscripcion_ahbb);
  
  sorted.forEach(ins => {
    if (!mapaUnicos.has(ins.alumno.id_usuario_ahbb)) {
      mapaUnicos.set(ins.alumno.id_usuario_ahbb, ins);
    }
  });

  return Array.from(mapaUnicos.values()).filter(ins => {
    const nombreCompleto = `${ins.alumno.nombre_ahbb} ${ins.alumno.apellido_ahbb}`.toLowerCase();
    return nombreCompleto.includes(filtroNombre.value.toLowerCase()) || 
           ins.alumno.cedula_ahbb?.includes(filtroNombre.value);
  });
});

const cambiarEstadoSilencioso = async (row, valorSwitch) => {
  const nuevoEstado = valorSwitch ? 'APROBADO' : 'REPROBADO';
  const exito = await actualizarEstadoInscripcion_ahbb(row.id_inscripcion_ahbb, nuevoEstado);
  
  if (exito) {
    row.estatus_ahbb = nuevoEstado;
    $q.notify({
      color: valorSwitch ? 'positive' : 'orange',
      message: `${row.alumno.nombre_ahbb} ahora está ${nuevoEstado.toLowerCase()}`,
      timeout: 1500,
      icon: valorSwitch ? 'check_circle' : 'cancel'
    });
  } else {
    $q.notify({
      color: 'negative',
      message: 'Error al actualizar calificación',
      icon: 'error'
    });
    // Forzar redibujado o recarga si falló para revertir UI
    cargarDatos();
  }
};

onMounted(cargarDatos);
</script>

<template>
  <div class="q-pa-md">
    <div class="row items-center q-mb-lg">
      <q-btn flat round icon="arrow_back" color="primary" @click="router.back()" class="q-mr-sm" />
      <div class="col" v-if="curso">
        <div class="text-h5 text-primary">
          <q-icon name="how_to_reg" class="q-mr-sm" />
          {{ curso.nombre }}
        </div>
        <div class="text-caption text-grey-7">Gestión de calificaciones finales</div>
      </div>
    </div>

    <!-- Alerta de estado del curso -->
    <q-banner v-if="!cursoFinalizado && !cargando" class="bg-blue-1 text-blue-9 shadow-1 q-mb-lg" rounded inline-actions>
      <template v-slot:avatar>
        <q-icon name="lock" color="blue-9" />
      </template>
      Este curso aún se encuentra en progreso (Termina: {{ new Date(curso.fechaFin).toLocaleDateString() }}). 
      No se pueden asignar calificaciones finales hasta que el curso haya culminado.
    </q-banner>

    <q-banner v-else-if="cursoFinalizado && !cargando" class="bg-green-1 text-green-9 shadow-1 q-mb-lg" rounded inline-actions>
      <template v-slot:avatar>
        <q-icon name="check_circle" color="green-9" />
      </template>
      El curso ha finalizado. Puedes usar los interruptores para Aprobar o Reprobar a los estudiantes.
    </q-banner>

    <q-card flat bordered class="q-pa-md q-mb-md shadow-1">
      <div class="row q-col-gutter-md items-center">
        <div class="col-12 col-sm-6">
          <q-input v-model="filtroNombre" dense outlined placeholder="Filtrar por estudiante..." clearable>
            <template v-slot:prepend><q-icon name="search" /></template>
          </q-input>
        </div>
        <div class="col-12 col-sm-6 text-right">
          <div class="text-subtitle2 text-grey-8">Total Alumnos: {{ inscripciones.length }}</div>
        </div>
      </div>
    </q-card>

    <q-table
      :rows="inscripcionesFiltradas"
      :columns="columnas"
      row-key="id_inscripcion_ahbb"
      :loading="cargando"
      flat
      bordered
      no-data-label="No hay estudiantes inscritos en este curso"
      rows-per-page-label="Registros por página"
    >
      <!-- Slot para el switch de calificación -->
      <template v-slot:body-cell-estado="props">
        <q-td :props="props">
          <q-toggle
            :model-value="props.row.estatus_ahbb === 'APROBADO'"
            @update:model-value="(val) => cambiarEstadoSilencioso(props.row, val)"
            color="green"
            keep-color
            icon="check"
            unchecked-icon="close"
            :disable="!cursoFinalizado"
          >
            <q-tooltip v-if="!cursoFinalizado">Solo disponible al culminar el curso</q-tooltip>
          </q-toggle>
        </q-td>
      </template>

      <!-- Slot para la etiqueta de estado -->
      <template v-slot:body-cell-estadoLabel="props">
        <q-td :props="props">
          <q-chip
            dense
            :color="props.value === 'APROBADO' ? 'green-1' : props.value === 'REPROBADO' ? 'red-1' : 'blue-1'"
            :text-color="props.value === 'APROBADO' ? 'green-9' : props.value === 'REPROBADO' ? 'red-9' : 'blue-9'"
            class="text-weight-bold"
          >
            {{ props.value }}
          </q-chip>
        </q-td>
      </template>

      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
    </q-table>
  </div>
</template>

<style scoped>
.shadow-1 {
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
}
</style>
