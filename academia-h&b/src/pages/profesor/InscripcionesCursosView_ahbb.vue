<!-- InscripcionesCursosView_ahbb.vue — Vista de cursos para calificar alumnos -->
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAutenticacionStore_ahbb } from 'src/stores/autenticacionStore_ahbb';
import { obtenerCursos_ahbb } from 'src/servicios/cursosServicio_ahbb';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const router = useRouter();
const authStore = useAutenticacionStore_ahbb();

const cargando = ref(true);
const cursos = ref([]);

const cargarCursos = async () => {
  cargando.value = true;
  try {
    const data = await obtenerCursos_ahbb(authStore.esAdmin_ahbb ? {} : { solo_propios: true });
    // Solo mostrar cursos que estén ACTIVO o finalizados
    cursos.value = data.filter(c => c.estadoAprobacion === 'ACTIVO');
  } catch (error) {
    $q.notify({
      color: 'negative',
      message: 'Error al cargar tus cursos',
      icon: 'report_problem'
    });
  } finally {
    cargando.value = false;
  }
};

const navegarADetalle = (idCurso) => {
  router.push(`/profesor/inscripciones/${idCurso}`);
};

const estaFinalizado = (fechaFin) => {
  return new Date() > new Date(fechaFin);
};

onMounted(cargarCursos);
</script>

<template>
  <div class="q-pa-md">
    <div class="text-h5 q-mb-md">
      <q-icon name="how_to_reg" color="primary" class="q-mr-sm" />
      Calificaciones por Curso
    </div>
    <div class="text-subtitle2 text-grey-7 q-mb-lg">
      Selecciona un curso finalizado para aprobar o reprobar a tus estudiantes.
    </div>

    <div v-if="cargando" class="row justify-center q-pa-xl">
      <q-spinner-dots color="primary" size="3em" />
    </div>

    <div v-else-if="cursos.length === 0" class="row justify-center q-pa-xl">
      <q-card flat bordered class="text-center q-pa-lg text-grey-6 bg-grey-1" style="max-width: 400px">
        <q-icon name="school" size="4em" class="q-mb-md" />
        <div class="text-h6">No tienes cursos activos</div>
        <p>Aún no tienes cursos aprobados por administración para calificar.</p>
      </q-card>
    </div>

    <div v-else class="row q-col-gutter-md">
      <div v-for="curso in cursos" :key="curso.id" class="col-12 col-sm-6 col-md-4">
        <q-card class="curso-card q-hoverable cursor-pointer shadow-2" @click="navegarADetalle(curso.id)">
          <span class="q-focus-helper"></span>
          <q-card-section class="bg-primary text-white row items-center no-wrap">
            <q-icon name="school" size="sm" class="q-mr-sm" />
            <div class="text-h6 ellipsis">{{ curso.nombre }}</div>
          </q-card-section>
          
          <q-card-section class="q-pa-md">
            <div class="row items-center q-mb-sm">
              <q-icon name="event" color="grey-7" class="q-mr-sm" />
              <span class="text-grey-8">Fin: {{ new Date(curso.fechaFin).toLocaleDateString() }}</span>
            </div>
            <div class="row items-center q-mb-sm">
              <q-icon name="group" color="grey-7" class="q-mr-sm" />
              <span class="text-grey-8">Alumnos inscritos: {{ curso.estudiantesInscritos }}</span>
            </div>
            
            <div class="q-mt-md">
              <q-badge
                v-if="curso.estatus === 'inactivo'"
                color="green"
                text-color="white"
                label="Finalizado - Inactivo"
                class="q-pa-xs full-width text-center"
              />
              <q-badge
                v-else
                color="blue"
                text-color="white"
                label="En progreso - Calificación deshabilitada"
                class="q-pa-xs full-width text-center"
              />
            </div>
          </q-card-section>
          
          <q-separator />
          
          <q-card-actions align="right">
            <q-btn flat color="primary" label="Ver Estudiantes" icon-right="chevron_right" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.curso-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border-radius: 12px;
  overflow: hidden;
}
.curso-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}
</style>
