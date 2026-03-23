<!--
  Faq_ah.vue — Sección h) de la landing page
  Preguntas frecuentes (FAQ) con patrón de acordeón.
-->
<script setup lang="ts">
import { ref } from 'vue';

interface PreguntaFaq {
  pregunta: string;
  respuesta: string;
}

const preguntasFrecuentes_ah: PreguntaFaq[] = [
  {
    pregunta: 'Hacen envios nacionales e internacionales?',
    respuesta:
      'Si, realizamos envios a todo el territorio nacional con seguimiento en tiempo real. Para envios internacionales, trabajamos con aliados logisticos que cubren Latinoamerica, Estados Unidos y Europa. Los tiempos de entrega varian segun la ubicacion.',
  },
  {
    pregunta: 'Puedo personalizar mi nombre en las franelas o chaquetas?',
    respuesta:
      'Por supuesto. Ofrecemos un servicio de personalizacion donde puedes agregar tu nombre, cohorte, especialidad o cualquier texto corto. Solo debes indicarlo al momento de realizar tu pedido y nuestro equipo se encarga del diseno.',
  },
  {
    pregunta: 'Que tallas manejan para franelas y chaquetas?',
    respuesta:
      'Nuestras franelas y chaquetas estan disponibles en tallas S, M, L, XL y XXL. Incluimos una guia de tallas en la ficha de cada producto para que puedas elegir la que mejor se ajuste a ti.',
  },
  {
    pregunta: 'Que metodos de pago aceptan?',
    respuesta:
      'Aceptamos pagos con tarjetas de credito y debito (Visa, MasterCard), transferencias bancarias, pagos moviles y PayPal. Todos los pagos se procesan de forma segura a traves de nuestra pasarela de pago.',
  },
  {
    pregunta: 'Cual es la politica de devoluciones?',
    respuesta:
      'Si por algun motivo no estas satisfecho con tu compra, puedes solicitar un cambio o devolucion dentro de los 15 dias posteriores a la recepcion del producto. El articulo debe estar en su estado original, sin uso. Los productos personalizados no aplican para devolucion.',
  },
];

/**
 * preguntaActiva_ah — Índice de la pregunta expandida
 * null significa que ninguna está abierta
 */
const preguntaActiva_ah = ref<number | null>(null);

/**
 * togglePregunta_ah — Alterna la visibilidad de una respuesta
 */
const togglePregunta_ah = (indice: number): void => {
  preguntaActiva_ah.value = preguntaActiva_ah.value === indice ? null : indice;
};
</script>

<template>
  <!-- Sección de preguntas frecuentes -->
  <section id="faq_ah" class="seccion_ah faq_ah">
    <div class="contenedor_ah">
      <!-- Título de la sección -->
      <div class="titulo-seccion_ah">
        <h2>Preguntas Frecuentes</h2>
        <p>
          Resolvemos tus dudas mas comunes sobre nuestros productos y servicios
        </p>
      </div>

      <!-- Lista de preguntas tipo acordeón -->
      <div class="faq-lista_ah">
        <div
          v-for="(faq, indice) in preguntasFrecuentes_ah"
          :key="indice"
          class="faq-item_ah"
          :class="{ 'faq-item-activo_ah': preguntaActiva_ah === indice }"
        >
          <!-- Botón de la pregunta (cabecera del acordeón) -->
          <button
            class="faq-pregunta_ah"
            :id="`faqPregunta_ah_${indice}`"
            @click="togglePregunta_ah(indice)"
            :aria-expanded="preguntaActiva_ah === indice"
          >
            <span class="faq-pregunta-texto_ah">{{ faq.pregunta }}</span>
            <!-- Ícono de expandir/colapsar -->
            <span
              class="faq-icono_ah"
              :class="{ 'faq-icono-rotado_ah': preguntaActiva_ah === indice }"
            >
              +
            </span>
          </button>

          <!-- Respuesta expandible con transición -->
          <div
            class="faq-respuesta-contenedor_ah"
            :class="{
              'faq-respuesta-visible_ah': preguntaActiva_ah === indice,
            }"
          >
            <p class="faq-respuesta_ah">{{ faq.respuesta }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq_ah {
  background: var(--color-fondo_ah);
}

.faq-lista_ah {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--espacio-md_ah);
}

.faq-item_ah {
  background: var(--color-fondo-tarjeta_ah);
  border-radius: var(--radio-lg_ah);
  border: 1px solid var(--color-borde_ah);
  overflow: hidden;
  transition: all var(--transicion-media_ah);
}

.faq-item-activo_ah {
  border-color: var(--color-acento_ah);
  box-shadow: var(--sombra-suave_ah);
}

.faq-pregunta_ah {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--espacio-lg_ah) var(--espacio-xl_ah);
  text-align: left;
  color: var(--color-primario_ah);
  font-weight: 600;
  font-size: 1rem;
  transition: color var(--transicion-rapida_ah);
}

.faq-pregunta_ah:hover {
  color: var(--color-acento_ah);
}

.faq-pregunta-texto_ah {
  flex: 1;
  padding-right: var(--espacio-md_ah);
}

.faq-icono_ah {
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--color-acento_ah);
  transition: transform var(--transicion-media_ah);
  flex-shrink: 0;
}

.faq-icono-rotado_ah {
  transform: rotate(45deg);
}

.faq-respuesta-contenedor_ah {
  max-height: 0;
  overflow: hidden;
  transition:
    max-height var(--transicion-media_ah),
    padding var(--transicion-media_ah);
}

.faq-respuesta-visible_ah {
  max-height: 300px;
}

.faq-respuesta_ah {
  padding: 0 var(--espacio-xl_ah) var(--espacio-lg_ah);
  color: var(--color-texto-claro_ah);
  font-size: 0.9rem;
  line-height: 1.7;
}
</style>
