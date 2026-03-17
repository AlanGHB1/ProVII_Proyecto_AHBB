<!--
  FormularioCurso_ahbb.vue — Componente 2: Formulario con Quasar
-->
<script setup>
import { ref, onMounted, computed } from "vue";
import { useCursosStore_ahbb } from "../../stores/cursosStore_ahbb.js";

const props = defineProps({
  cursoInicial_ahbb: { type: Object, default: null },
  esEdicion_ahbb: { type: Boolean, default: false },
});

const emit = defineEmits(["guardar", "cancelar"]);
const cursosStore_ahbb = useCursosStore_ahbb();

const diasDisponibles_ahbb = [
  { label: "Lunes", value: "lunes" },
  { label: "Martes", value: "martes" },
  { label: "Miercoles", value: "miercoles" },
  { label: "Jueves", value: "jueves" },
  { label: "Viernes", value: "viernes" },
  { label: "Sabado", value: "sabado" },
];

const opcionesEstatus_ahbb = [
  { label: "Pendiente", value: "pendiente" },
  { label: "Activo", value: "activo" },
  { label: "Inactivo", value: "inactivo" },
];

const formulario_ahbb = ref({
  nombre: "",
  descripcion: "",
  profesor: "",
  duracionHoras: 20,
  cantidadDias: 10,
  dias: [],
  horaInicio: "08:00",
  horaFin: "10:00",
  topeEstudiantes: 5,
  tienePrelacion: false,
  prelacionCursoId: null,
  estatus: "pendiente",
  temario: "",
});

const opcionesPrelacion_ahbb = computed(() =>
  cursosStore_ahbb.opcionesPrelacion_ahbb
    .filter((c) => c.id !== props.cursoInicial_ahbb?.id)
    .map((c) => ({ label: c.nombre, value: c.id }))
);

onMounted(() => {
  if (props.cursoInicial_ahbb) {
    formulario_ahbb.value = {
      nombre: props.cursoInicial_ahbb.nombre || "",
      descripcion: props.cursoInicial_ahbb.descripcion || "",
      profesor: props.cursoInicial_ahbb.profesor || "",
      duracionHoras: props.cursoInicial_ahbb.duracionHoras || 20,
      cantidadDias: props.cursoInicial_ahbb.cantidadDias || 10,
      dias: [...(props.cursoInicial_ahbb.dias || [])],
      horaInicio: props.cursoInicial_ahbb.horaInicio || "08:00",
      horaFin: props.cursoInicial_ahbb.horaFin || "10:00",
      topeEstudiantes: props.cursoInicial_ahbb.topeEstudiantes || 5,
      tienePrelacion: props.cursoInicial_ahbb.tienePrelacion || false,
      prelacionCursoId: props.cursoInicial_ahbb.prelacionCursoId || null,
      estatus: props.cursoInicial_ahbb.estatus || "pendiente",
      temario: props.cursoInicial_ahbb.temario || "",
    };
  }
});

const enviarFormulario_ahbb = () => {
  if (!formulario_ahbb.value.tienePrelacion) {
    formulario_ahbb.value.prelacionCursoId = null;
  }
  emit("guardar", { ...formulario_ahbb.value });
};
</script>

<template>
  <q-card flat bordered>
    <q-card-section>
      <q-form @submit.prevent="enviarFormulario_ahbb" class="q-gutter-md">
        <!-- Nombre y profesor -->
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6">
            <q-input
              v-model="formulario_ahbb.nombre"
              label="Nombre del curso"
              outlined
              dense
              :rules="[(v) => !!v || 'Requerido']"
            >
              <template v-slot:prepend><q-icon name="school" /></template>
            </q-input>
          </div>
          <div class="col-12 col-sm-6">
            <q-input
              v-model="formulario_ahbb.profesor"
              label="Profesor"
              outlined
              dense
              :rules="[(v) => !!v || 'Requerido']"
            >
              <template v-slot:prepend><q-icon name="person" /></template>
            </q-input>
          </div>
        </div>

        <!-- Descripción -->
        <q-input
          v-model="formulario_ahbb.descripcion"
          label="Descripcion"
          type="textarea"
          outlined
          dense
          :rules="[(v) => !!v || 'Requerida']"
        />

        <!-- Duración, días, tope -->
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-4">
            <q-input
              v-model.number="formulario_ahbb.duracionHoras"
              label="Duracion (horas)"
              type="number"
              outlined
              dense
              min="1"
            >
              <template v-slot:prepend><q-icon name="schedule" /></template>
            </q-input>
          </div>
          <div class="col-12 col-sm-4">
            <q-input
              v-model.number="formulario_ahbb.cantidadDias"
              label="Cantidad de dias"
              type="number"
              outlined
              dense
              min="1"
            />
          </div>
          <div class="col-12 col-sm-4">
            <q-input
              v-model.number="formulario_ahbb.topeEstudiantes"
              label="Tope de estudiantes"
              type="number"
              outlined
              dense
              min="1"
              max="30"
            >
              <template v-slot:prepend><q-icon name="groups" /></template>
            </q-input>
          </div>
        </div>

        <!-- Horario y estatus -->
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-4">
            <q-input
              v-model="formulario_ahbb.horaInicio"
              label="Hora inicio"
              type="time"
              outlined
              dense
            />
          </div>
          <div class="col-12 col-sm-4">
            <q-input
              v-model="formulario_ahbb.horaFin"
              label="Hora fin"
              type="time"
              outlined
              dense
            />
          </div>
          <div class="col-12 col-sm-4">
            <q-select
              v-model="formulario_ahbb.estatus"
              :options="opcionesEstatus_ahbb"
              label="Estatus"
              outlined
              dense
              emit-value
              map-options
            />
          </div>
        </div>

        <!-- Días de clase -->
        <div>
          <div class="text-subtitle2 q-mb-xs">Dias de clase</div>
          <q-option-group
            v-model="formulario_ahbb.dias"
            :options="diasDisponibles_ahbb"
            type="checkbox"
            inline
            color="secondary"
          />
        </div>

        <!-- Prelación -->
        <div>
          <q-toggle
            v-model="formulario_ahbb.tienePrelacion"
            label="Este curso tiene prelacion"
            color="secondary"
          />
          <q-select
            v-if="formulario_ahbb.tienePrelacion"
            v-model="formulario_ahbb.prelacionCursoId"
            :options="opcionesPrelacion_ahbb"
            label="Curso de prelacion"
            outlined
            dense
            emit-value
            map-options
            clearable
            class="q-mt-sm"
          />
        </div>

        <!-- Temario -->
        <q-input
          v-model="formulario_ahbb.temario"
          label="Temario"
          type="textarea"
          outlined
          dense
          hint="Escribe el temario con numeracion, un tema por linea."
          rows="4"
        />

        <!-- Acciones -->
        <q-separator />
        <div class="row justify-end q-gutter-sm">
          <q-btn
            label="Cancelar"
            outline
            color="grey-7"
            @click="emit('cancelar')"
          />
          <q-btn
            type="submit"
            :label="esEdicion_ahbb ? 'Guardar Cambios' : 'Crear Curso'"
            color="primary"
            unelevated
            icon="save"
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
