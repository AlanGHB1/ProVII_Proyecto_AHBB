<script setup>
import { useQuasar } from 'quasar';
import FirmaDigitalPad_ahbb from '../../components/profesor/FirmaDigitalPad_ahbb.vue';
import { useAutenticacionStore_ahbb } from '../../stores/autenticacionStore_ahbb';
import { guardarFirmaDigitalUsuario_ahbb } from '../../servicios/usuariosServicio_ahbb';

const $q_ahbb = useQuasar();
const autenticacionStore_ahbb = useAutenticacionStore_ahbb();

const guardarFirma_ahbb = async (imagenBase64_ahbb) => {
  try {
    const respuesta_ahbb = await guardarFirmaDigitalUsuario_ahbb(
      autenticacionStore_ahbb.usuarioActivo_ahbb.id,
      imagenBase64_ahbb,
    );

    if (!respuesta_ahbb.exito) {
      $q_ahbb.notify({ type: 'negative', message: respuesta_ahbb.mensaje ?? 'No se pudo guardar la firma.' });
      return;
    }

    $q_ahbb.notify({
      type: 'positive',
      message: 'Firma digital guardada correctamente.',
    });
  } catch {
    $q_ahbb.notify({
      type: 'negative',
      message: 'Ocurrió un error al guardar la firma digital.',
    });
  }
};
</script>

<template>
  <div class="q-pa-md">
    <div class="row items-center justify-between q-mb-lg">
      <div>
        <div class="text-h4 text-weight-bold text-primary">Firma digital</div>
        <div class="text-caption text-grey-7">
          Captura la firma del profesor para certificados y constancias.
        </div>
      </div>
    </div>

    <FirmaDigitalPad_ahbb @guardar="guardarFirma_ahbb" />
  </div>
</template>
