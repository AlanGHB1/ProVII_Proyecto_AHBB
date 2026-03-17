<!--
  Beneficios_ah.vue — Sección c) de la landing page
  Muestra los beneficios clave del merch de Hidalgo Academy.
  Cada beneficio tiene un ícono, título y descripción.
-->
<script setup>
/**
 * listaBeneficios_ah — Arreglo de beneficios a mostrar
 * Cada beneficio tiene un ícono (emoji), título y descripción
 */
const listaBeneficios_ah = [
  {
    icono: "🏅",
    titulo: "Marca Profesional",
    descripcion:
      "Refuerza tu identidad como egresado certificado de Hidalgo Academy en eventos, conferencias y reuniones profesionales.",
  },
  {
    icono: "🎓",
    titulo: "Orgullo Academico",
    descripcion:
      "Demuestra tus logros y certificaciones con disenos exclusivos creados para la comunidad de la academia.",
  },
  {
    icono: "💎",
    titulo: "Calidad Premium",
    descripcion:
      "Materiales de primera: algodon 100%, ceramica resistente, impresion duradera. Hecho para durar y lucir siempre bien.",
  },
  {
    icono: "🎁",
    titulo: "Descuentos Exclusivos",
    descripcion:
      "Precios especiales para estudiantes activos, egresados e instructores de Hidalgo Academy. Aprovecha nuestras ofertas.",
  },
];
</script>

<template>
  <!-- Sección de beneficios con fondo claro -->
  <section id="beneficios_ah" class="seccion_ah beneficios_ah">
    <div class="contenedor_ah">
      <!-- Título de la sección con línea decorativa -->
      <div class="titulo-seccion_ah">
        <h2>Por que elegir nuestro merch</h2>
        <p>
          Mas que productos, es una forma de pertenecer a la comunidad Hidalgo
          Academy
        </p>
      </div>

      <!-- Grid de tarjetas de beneficios -->
      <div class="beneficios-grid_ah">
        <div
          v-for="(beneficio, indice) in listaBeneficios_ah"
          :key="indice"
          class="beneficio-tarjeta_ah"
          :style="{ animationDelay: `${indice * 0.1}s` }"
        >
          <!-- Ícono del beneficio -->
          <div class="beneficio-icono_ah">
            {{ beneficio.icono }}
          </div>
          <!-- Título del beneficio -->
          <h3 class="beneficio-titulo_ah">{{ beneficio.titulo }}</h3>
          <!-- Descripción del beneficio -->
          <p class="beneficio-descripcion_ah">{{ beneficio.descripcion }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ========================
   Estilos de Beneficios _ah
   ======================== */

/* Fondo con textura sutil */
.beneficios_ah {
  background: var(--color-fondo-seccion_ah);
}

/* Grid de 4 tarjetas de beneficios */
.beneficios-grid_ah {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--espacio-xl_ah);
}

/* Tarjeta individual de beneficio */
.beneficio-tarjeta_ah {
  background: var(--color-fondo-tarjeta_ah);
  padding: var(--espacio-xl_ah);
  border-radius: var(--radio-xl_ah);
  text-align: center;
  box-shadow: var(--sombra-suave_ah);
  transition: all var(--transicion-media_ah);
  animation: fadeInUp_ah 0.6s ease forwards;
  opacity: 0;
}

.beneficio-tarjeta_ah:hover {
  transform: translateY(-8px);
  box-shadow: var(--sombra-media_ah);
}

/* Ícono circular con fondo degradado */
.beneficio-icono_ah {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--espacio-lg_ah);
  font-size: 2rem;
  background: linear-gradient(
    135deg,
    rgba(245, 158, 11, 0.1),
    rgba(59, 130, 246, 0.1)
  );
  border-radius: var(--radio-completo_ah);
}

/* Título del beneficio */
.beneficio-titulo_ah {
  font-size: 1.15rem;
  margin-bottom: var(--espacio-sm_ah);
  color: var(--color-primario_ah);
}

/* Descripción del beneficio */
.beneficio-descripcion_ah {
  font-size: 0.9rem;
  color: var(--color-texto-claro_ah);
  line-height: 1.6;
}

/* ========================
   Responsive — Beneficios
   ======================== */
@media (max-width: 968px) {
  .beneficios-grid_ah {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .beneficios-grid_ah {
    grid-template-columns: 1fr;
  }
}
</style>
