<!--
  HorariosView_ahbb.vue — Vista compartida de Horarios
-->
<script setup>
</script>

<template>
  <div class="q-pa-md flex flex-center" style="min-height: 70vh;">
    <q-card flat bordered class="text-center q-pa-xl" style="max-width: 600px;">
      <q-card-section>
        <q-icon name="construction" color="warning" size="5rem" class="q-mb-md" />
        <div class="text-h4 text-weight-bold text-primary q-mb-sm">Sección en Construcción</div>
        <p class="text-grey-7 text-h6">
          Módulo de Horarios de Academia H&B
        </p>
      </q-card-section>

      <q-card-section class="text-left bg-blue-1 rounded-borders q-mt-md">
        <div class="text-weight-bold q-mb-sm">Próximamente esta sección permitirá:</div>
        <q-list dense>
          <q-item>
            <q-item-section avatar><q-icon name="admin_panel_settings" color="primary" /></q-item-section>
            <q-item-section>
              <q-item-label><strong>Administradores:</strong> Podrán ver y gestionar todos los horarios y cursos que hay activos en la academia.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><q-icon name="school" color="primary" /></q-item-section>
            <q-item-section>
              <q-item-label><strong>Profesores:</strong> Necesitan ver los horarios de los cursos que imparten para garantizar que no haya solapamientos (gestión interna del backend).</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar><q-icon name="menu_book" color="primary" /></q-item-section>
            <q-item-section>
              <q-item-label><strong>Estudiantes:</strong> Podrán consultar rápidamente sus horarios de los cursos en los que están inscritos actualmente.</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>
