<script setup>
import { onMounted, ref } from 'vue';
import { useTiendaStore_ahbb } from '../../stores/tiendaStore_ahbb';
import { date } from 'quasar';

const tiendaStore = useTiendaStore_ahbb();
const cargando = ref(true);

const formatearFecha = (fechaStr) => {
  return date.formatDate(fechaStr, 'DD/MM/YYYY hh:mm A');
};

const getEstadoColor = (estado) => {
  switch (estado) {
    case 'pagada': return 'positive';
    case 'pendiente': return 'warning';
    case 'cancelada': return 'negative';
    default: return 'grey';
  }
};

onMounted(async () => {
  await tiendaStore.cargarHistorial_ahbb();
  cargando.value = false;
});
</script>

<template>
  <q-page class="q-pa-md">
    <div class="row align-center q-mb-lg">
      <q-btn flat round icon="arrow_back" color="primary" to="/tienda" class="q-mr-sm" />
      <div class="text-h4 text-weight-bold text-primary">Mis Compras</div>
    </div>

    <div v-if="cargando" class="flex flex-center q-pa-xl">
      <q-spinner-dots color="primary" size="40px" />
    </div>

    <div v-else-if="tiendaStore.historialFacturas_ahbb.length > 0">
      <div class="row q-col-gutter-md">
        <div class="col-12" v-for="factura in tiendaStore.historialFacturas_ahbb" :key="factura.id_factura_ahbb">
          <q-card bordered flat class="shadow-1">
            <q-card-section class="bg-grey-2">
              <div class="row justify-between items-center">
                <div>
                  <div class="text-weight-bold">Pedido #{{ factura.id_factura_ahbb }}</div>
                  <div class="text-caption text-grey-8">{{ formatearFecha(factura.fechaFactura_ahbb) }}</div>
                </div>
                <div class="text-right">
                  <q-chip :color="getEstadoColor(factura.estadoFactura_ahbb)" text-color="white" class="text-uppercase" size="sm">
                    {{ factura.estadoFactura_ahbb }}
                  </q-chip>
                  <div class="text-primary text-weight-bold q-mt-xs">Total: ${{ Number(factura.total_ahbb).toFixed(2) }}</div>
                </div>
              </div>
            </q-card-section>

            <q-separator />

            <q-card-section>
              <q-list separator>
                <q-item v-for="detalle in factura.detalles_ahbb" :key="detalle.id_detalle_factura_ahbb">
                  <q-item-section avatar>
                    <q-avatar rounded>
                      <img :src="detalle.producto_ahbb.imagen_ahbb || 'https://via.placeholder.com/150'">
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ detalle.producto_ahbb.nombre_ahbb }}</q-item-label>
                    <q-item-label caption>Cant: {{ detalle.cantidad_ahbb }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <div class="text-weight-medium">${{ Number(detalle.precioUnitario_ahbb).toFixed(2) }}</div>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div v-else class="text-center q-pa-xl text-grey-6">
      <q-icon name="receipt_long" size="64px" />
      <div class="text-h6 q-mt-md">Aún no has realizado ninguna compra</div>
      <q-btn color="primary" outline label="Visitar Tienda" to="/tienda" class="q-mt-md" />
    </div>
  </q-page>
</template>
