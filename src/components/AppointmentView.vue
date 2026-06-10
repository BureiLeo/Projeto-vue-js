<template>
  <main class="pagina-agendamento">

    <h1>Agende seu horário</h1>

    <AppointmentForm @success="showConfirmation" />

    <ConfirmationModal
      v-if="showModal"
      :appointment="appointmentData"
      @close="closeModal"
    />

  </main>
</template>

<script setup>
import { ref } from 'vue'

import AppointmentForm from '../components/AppointmentForm.vue'
import ConfirmationModal from '../components/ConfirmationModal.vue'

const showModal = ref(false)

const appointmentData = ref(null)

function showConfirmation(data) {
  appointmentData.value = data
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}
</script>

<style scoped>
.pagina-agendamento {
  padding: 40px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}
</style>