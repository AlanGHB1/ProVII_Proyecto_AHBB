<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const emit = defineEmits(['guardar']);

const canvasFirma_ahbb = ref(null);
const dibujando_ahbb = ref(false);
const contexto_ahbb = ref(null);
const tuvoTrazo_ahbb = ref(false);

// Tracker de puntos para estabilizador de trazo por Bezier
const puntosTrazo_ahbb = ref([]);

const estilosCanvas_ahbb = computed(() => ({
  width: '100%',
  height: '260px',
  borderRadius: '16px',
  background:
    'linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(244,247,251,0.98) 100%)',
  border: '1px solid rgba(23,43,77,0.12)',
  cursor: 'crosshair',
}));

const obtenerPosicion_ahbb = (evento_ahbb) => {
  const rectangulo_ahbb = canvasFirma_ahbb.value.getBoundingClientRect();
  const punto_ahbb = evento_ahbb.touches?.[0] ?? evento_ahbb;
  return {
    x: punto_ahbb.clientX - rectangulo_ahbb.left,
    y: punto_ahbb.clientY - rectangulo_ahbb.top,
  };
};

const iniciarTrazo_ahbb = (evento_ahbb) => {
  evento_ahbb.preventDefault();
  dibujando_ahbb.value = true;
  tuvoTrazo_ahbb.value = true;
  const pos_ahbb = obtenerPosicion_ahbb(evento_ahbb);
  puntosTrazo_ahbb.value = [pos_ahbb];

  contexto_ahbb.value.beginPath();
  contexto_ahbb.value.moveTo(pos_ahbb.x, pos_ahbb.y);
};

const moverTrazo_ahbb = (evento_ahbb) => {
  if (!dibujando_ahbb.value) return;
  evento_ahbb.preventDefault();
  const pos_ahbb = obtenerPosicion_ahbb(evento_ahbb);
  puntosTrazo_ahbb.value.push(pos_ahbb);

  const historico_ahbb = puntosTrazo_ahbb.value;
  const numPuntos_ahbb = historico_ahbb.length;

  if (numPuntos_ahbb > 2) {
    const ultimo_ahbb = historico_ahbb[numPuntos_ahbb - 1];
    const penultimo_ahbb = historico_ahbb[numPuntos_ahbb - 2];
    
    // Punto medio estabilizador
    const cuadMediaX = (ultimo_ahbb.x + penultimo_ahbb.x) / 2;
    const cuadMediaY = (ultimo_ahbb.y + penultimo_ahbb.y) / 2;
    
    contexto_ahbb.value.quadraticCurveTo(penultimo_ahbb.x, penultimo_ahbb.y, cuadMediaX, cuadMediaY);
    contexto_ahbb.value.stroke();
    
    contexto_ahbb.value.beginPath();
    contexto_ahbb.value.moveTo(cuadMediaX, cuadMediaY);
  }
};

const finalizarTrazo_ahbb = () => {
  if (dibujando_ahbb.value && puntosTrazo_ahbb.value.length > 0) {
    const objUltimo_ahbb = puntosTrazo_ahbb.value[puntosTrazo_ahbb.value.length - 1];
    contexto_ahbb.value.lineTo(objUltimo_ahbb.x, objUltimo_ahbb.y);
    contexto_ahbb.value.stroke();
  }
  dibujando_ahbb.value = false;
  puntosTrazo_ahbb.value = [];
};

const limpiarFirma_ahbb = () => {
  const canvas_ahbb = canvasFirma_ahbb.value;
  contexto_ahbb.value.clearRect(0, 0, canvas_ahbb.width, canvas_ahbb.height);
  tuvoTrazo_ahbb.value = false;
};

const guardarFirma_ahbb = () => {
  if (!tuvoTrazo_ahbb.value) return;
  emit('guardar', canvasFirma_ahbb.value.toDataURL('image/png'));
};

const redimensionarCanvas_ahbb = () => {
  const canvas_ahbb = canvasFirma_ahbb.value;
  const ratio_ahbb = window.devicePixelRatio || 1;
  const ancho_ahbb = canvas_ahbb.offsetWidth || 640;
  const alto_ahbb = 260;

  canvas_ahbb.width = ancho_ahbb * ratio_ahbb;
  canvas_ahbb.height = alto_ahbb * ratio_ahbb;
  contexto_ahbb.value = canvas_ahbb.getContext('2d');
  contexto_ahbb.value.scale(ratio_ahbb, ratio_ahbb);
  contexto_ahbb.value.lineWidth = 2.6;
  contexto_ahbb.value.lineCap = 'round';
  contexto_ahbb.value.lineJoin = 'round';
  contexto_ahbb.value.strokeStyle = '#132238';
}

onMounted(() => {
  redimensionarCanvas_ahbb();
  window.addEventListener('resize', redimensionarCanvas_ahbb);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', redimensionarCanvas_ahbb);
});
</script>

<template>
  <q-card flat bordered class="q-pa-md">
    <q-card-section class="q-pa-none q-mb-md">
      <div class="text-h6 text-weight-bold">Firma digital del instructor</div>
      <div class="text-caption text-grey-7">
        Dibuja tu firma en el canvas. Se almacenará en PNG con fondo transparente.
      </div>
    </q-card-section>

    <canvas
      ref="canvasFirma_ahbb"
      :style="estilosCanvas_ahbb"
      @mousedown="iniciarTrazo_ahbb"
      @mousemove="moverTrazo_ahbb"
      @mouseup="finalizarTrazo_ahbb"
      @mouseleave="finalizarTrazo_ahbb"
      @touchstart="iniciarTrazo_ahbb"
      @touchmove="moverTrazo_ahbb"
      @touchend="finalizarTrazo_ahbb"
    />

    <q-card-actions align="right" class="q-px-none q-pt-md">
      <q-btn unelevated color="primary" text-color="white" icon="ink_eraser" label="Limpiar" @click="limpiarFirma_ahbb" />
      <q-btn
        color="primary"
        unelevated
        icon="save"
        label="Guardar firma"
        :disable="!tuvoTrazo_ahbb"
        @click="guardarFirma_ahbb"
      />
    </q-card-actions>
  </q-card>
</template>
