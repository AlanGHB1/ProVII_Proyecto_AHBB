<!--
  DetallesAdicionales_ah.vue — Sección g) de la landing page
  Layout de 2 columnas: imagen + lista de detalles.
-->
<script setup lang="ts">
interface Detalle {
  icono: string;
  titulo: string;
  descripcion: string;
}

const listaDetalles_ah: Detalle[] = [
  {
    icono: '🧵',
    titulo: 'Materiales de Primera',
    descripcion:
      'Algodon premium, ceramica de alta resistencia y materiales seleccionados para garantizar durabilidad en cada producto.',
  },
  {
    icono: '🎨',
    titulo: 'Disenos Exclusivos',
    descripcion:
      'Cada diseno es creado por nuestro equipo creativo, inspirado en la identidad visual de Hidalgo Academy.',
  },
  {
    icono: '✏️',
    titulo: 'Personalizacion Disponible',
    descripcion:
      'Agrega tu nombre, cohorte o especialidad a franelas y chaquetas. Hazlo unico y personal.',
  },
  {
    icono: '📦',
    titulo: 'Envio Seguro',
    descripcion:
      'Empaque especial para proteger cada producto. Envios nacionales e internacionales con seguimiento.',
  },
];
</script>

<template>
  <!-- Sección de detalles adicionales -->
  <section id="detalles_ah" class="seccion_ah detalles_ah">
    <div class="contenedor_ah">
      <div class="detalles-grid_ah">
        <!-- Columna izquierda: imagen -->
        <div class="detalles-imagen_ah">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=700&fit=crop"
            alt="Merch de Hidalgo Academy - Calidad premium"
            class="detalles-img_ah"
            loading="lazy"
          />
          <!-- Badge decorativo sobre la imagen -->
          <div class="detalles-badge_ah">
            <span class="badge-numero_ah">100%</span>
            <span class="badge-texto_ah">Satisfaccion Garantizada</span>
          </div>
        </div>

        <!-- Columna derecha: contenido textual -->
        <div class="detalles-contenido_ah">
          <span class="detalles-etiqueta_ah">Calidad que Respalda</span>
          <h2 class="detalles-titulo_ah">
            Merch hecho con pasion y atencion al detalle
          </h2>
          <p class="detalles-descripcion_ah">
            En Hidalgo Academy nos tomamos en serio cada producto. Desde la
            seleccion de materiales hasta el diseno final, cada pieza refleja la
            excelencia de nuestra comunidad academica.
          </p>

          <!-- Lista de puntos destacados -->
          <div class="detalles-lista_ah">
            <div
              v-for="(detalle, indice) in listaDetalles_ah"
              :key="indice"
              class="detalle-item_ah"
            >
              <span class="detalle-icono_ah">{{ detalle.icono }}</span>
              <div>
                <h4 class="detalle-titulo_ah">{{ detalle.titulo }}</h4>
                <p class="detalle-descripcion_ah">{{ detalle.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.detalles_ah {
  background: var(--color-fondo-seccion_ah);
}

.detalles-grid_ah {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--espacio-3xl_ah);
  align-items: center;
}

.detalles-imagen_ah {
  position: relative;
}

.detalles-img_ah {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: var(--radio-xl_ah);
  box-shadow: var(--sombra-fuerte_ah);
}

.detalles-badge_ah {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--color-acento_ah);
  color: white;
  padding: var(--espacio-lg_ah);
  border-radius: var(--radio-xl_ah);
  text-align: center;
  box-shadow: var(--sombra-acento_ah);
}

.badge-numero_ah {
  display: block;
  font-family: var(--fuente-titulo_ah);
  font-size: 1.75rem;
  font-weight: 800;
}

.badge-texto_ah {
  font-size: 0.75rem;
  font-weight: 500;
  opacity: 0.9;
}

.detalles-etiqueta_ah {
  display: inline-block;
  background: rgba(245, 158, 11, 0.1);
  color: var(--color-acento_ah);
  padding: 0.4rem 1rem;
  border-radius: var(--radio-completo_ah);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: var(--espacio-md_ah);
}

.detalles-titulo_ah {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: var(--espacio-md_ah);
  color: var(--color-primario_ah);
}

.detalles-descripcion_ah {
  color: var(--color-texto-claro_ah);
  line-height: 1.7;
  margin-bottom: var(--espacio-xl_ah);
}

.detalles-lista_ah {
  display: flex;
  flex-direction: column;
  gap: var(--espacio-lg_ah);
}

.detalle-item_ah {
  display: flex;
  gap: var(--espacio-md_ah);
  align-items: flex-start;
}

.detalle-icono_ah {
  font-size: 1.5rem;
  flex-shrink: 0;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(59, 130, 246, 0.1);
  border-radius: var(--radio-md_ah);
}

.detalle-titulo_ah {
  font-size: 1rem;
  color: var(--color-primario_ah);
  margin-bottom: 2px;
}

.detalle-descripcion_ah {
  font-size: 0.85rem;
  color: var(--color-texto-claro_ah);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .detalles-grid_ah {
    grid-template-columns: 1fr;
    gap: var(--espacio-xl_ah);
  }

  .detalles-img_ah {
    height: 350px;
  }

  .detalles-badge_ah {
    right: 10px;
    bottom: -15px;
  }
}
</style>
