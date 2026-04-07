<template>
  <div class="calendario-contenedor-ahbb q-pa-sm">
    <!-- Cabecera: Mes y Navegación -->
    <div class="row items-center justify-between q-mb-md">
      <div class="text-h6 text-weight-bold capitalize">
        {{ nombreMes_ahbb }} {{ anioActual_ahbb }}
      </div>
      <div class="row q-gutter-x-sm">
        <q-btn flat round dense icon="chevron_left" @click="cambiarMes_ahbb(-1)" />
        <q-btn flat round dense icon="today" @click="irHoy_ahbb" />
        <q-btn flat round dense icon="chevron_right" @click="cambiarMes_ahbb(1)" />
      </div>
    </div>

    <!-- Días de la semana -->
    <div class="grid-calendario-ahbb text-center text-weight-medium text-grey-7 q-mb-sm">
      <div v-for="d in diasSemana_ahbb" :key="d">{{ d }}</div>
    </div>

    <!-- Días del mes -->
    <div class="grid-calendario-ahbb">
      <div
        v-for="(dia, index) in diasDelMes_ahbb"
        :key="index"
        class="dia-celda-ahbb flex flex-center relative-position"
        :class="{
          'dia-fuera-mes-ahbb': !dia.esMesActual,
          'dia-hoy-ahbb': dia.esHoy,
          'dia-seleccionado-ahbb': esDiaSeleccionado_ahbb(dia.fechaStr)
        }"
        @click="seleccionarDia_ahbb(dia)"
      >
        <span class="z-index-1">{{ dia.numero }}</span>
        
        <!-- Indicador de Estado (Puntito) -->
        <div 
          v-if="dia.esMesActual"
          class="indicador-estado-ahbb"
          :class="obtenerClaseEstado_ahbb(dia.fechaStr)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { date } from 'quasar';

const props = defineProps({
  sesiones_ahbb: { type: Array, default: () => [] }
});

const emit = defineEmits(['seleccionar-dia']);

const hoy_ahbb = new Date();
const fechaVisualizada_ahbb = ref(new Date(hoy_ahbb.getFullYear(), hoy_ahbb.getMonth(), 1));
const diaSeleccionadoStr_ahbb = ref(date.formatDate(hoy_ahbb, 'YYYY-MM-DD'));

const diasSemana_ahbb = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

const anioActual_ahbb = computed(() => fechaVisualizada_ahbb.value.getFullYear());
const nombreMes_ahbb = computed(() => {
  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  return meses[fechaVisualizada_ahbb.value.getMonth()];
});

// Generar los días de la cuadrícula (incluyendo relleno del mes anterior/siguiente)
const diasDelMes_ahbb = computed(() => {
  const anio = fechaVisualizada_ahbb.value.getFullYear();
  const mes = fechaVisualizada_ahbb.value.getMonth();
  
  // Primer día del mes
  const primerDia_ahbb = new Date(anio, mes, 1);
  const diaSemanaInicio = primerDia_ahbb.getDay(); // 0 = Dom
  
  // Rellenar días del mes anterior
  const dias = [];
  const ultimoDiaMesAnt = new Date(anio, mes, 0).getDate();
  for (let i = diaSemanaInicio - 1; i >= 0; i--) {
    const f = new Date(anio, mes - 1, ultimoDiaMesAnt - i);
    dias.push(crearObjetoDia_ahbb(f, false));
  }
  
  // Días del mes actual
  const totalDiasMes = new Date(anio, mes + 1, 0).getDate();
  for (let i = 1; i <= totalDiasMes; i++) {
    const f = new Date(anio, mes, i);
    dias.push(crearObjetoDia_ahbb(f, true));
  }
  
  // Rellenar días del mes siguiente para completar la cuadrícula (6 semanas = 42 celdas)
  const celdasRestantes = 42 - dias.length;
  for (let i = 1; i <= celdasRestantes; i++) {
    const f = new Date(anio, mes + 1, i);
    dias.push(crearObjetoDia_ahbb(f, false));
  }
  
  return dias;
});

function crearObjetoDia_ahbb(f, esMesActual) {
  const fechaStr = date.formatDate(f, 'YYYY-MM-DD');
  return {
    numero: f.getDate(),
    fechaStr,
    esMesActual,
    esHoy: date.isSameDate(f, hoy_ahbb, 'day')
  };
}

function cambiarMes_ahbb(offset) {
  fechaVisualizada_ahbb.value = date.addToDate(fechaVisualizada_ahbb.value, { month: offset });
}

function irHoy_ahbb() {
  fechaVisualizada_ahbb.value = new Date(hoy_ahbb.getFullYear(), hoy_ahbb.getMonth(), 1);
  seleccionarDia_ahbb(crearObjetoDia_ahbb(hoy_ahbb, true));
}

function seleccionarDia_ahbb(dia) {
  diaSeleccionadoStr_ahbb.value = dia.fechaStr;
  emit('seleccionar-dia', dia.fechaStr);
}

function esDiaSeleccionado_ahbb(fechaStr) {
  return diaSeleccionadoStr_ahbb.value === fechaStr;
}

// Lógica de colores (Rojo = Ocupado, Verde = Libre)
function obtenerClaseEstado_ahbb(fechaStr) {
  const tieneSesion = props.sesiones_ahbb.some(s => {
    // Manejar fechas de la DB que vienen como strings o Date
    const sFecha = typeof s.fecha === 'string' ? s.fecha.split('T')[0] : date.formatDate(s.fecha, 'YYYY-MM-DD');
    return sFecha === fechaStr;
  });

  return tieneSesion ? 'estado-ocupado-ahbb' : 'estado-libre-ahbb';
}
</script>

<style scoped>
.grid-calendario-ahbb {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.dia-celda-ahbb {
  height: 50px;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.2s ease;
  font-size: 1.1rem;
}

.dia-celda-ahbb:hover {
  background: rgba(var(--q-primary), 0.1);
}

.dia-fuera-mes-ahbb {
  color: #ccc;
  opacity: 0.5;
}

.dia-hoy-ahbb {
  color: var(--q-primary);
  font-weight: bold;
  background: rgba(var(--q-primary), 0.05);
}

.dia-seleccionado-ahbb {
  background: var(--q-primary) !important;
  color: white !important;
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.indicador-estado-ahbb {
  position: absolute;
  bottom: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.estado-ocupado-ahbb {
  background-color: #f44336; /* Rojo */
  box-shadow: 0 0 5px rgba(244, 67, 54, 0.4);
}

.estado-libre-ahbb {
  background-color: #4caf50; /* Verde */
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.4);
}

.dia-seleccionado-ahbb .indicador-estado-ahbb {
  background-color: white !important;
}

.capitalize {
  text-transform: capitalize;
}
</style>
