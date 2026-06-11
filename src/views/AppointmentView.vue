<template>
  <div>
    <div class="destaque-pagina">
      <div class="envolvente">
        <h1>Fazer <span>Agendamento</span></h1>
        <p>Reserve seu horário de forma rápida e fácil</p>
      </div>
    </div>

    <section class="secao">
      <div class="envolvente">
        <AppointmentForm @success="onSuccess" />
        <p v-if="confirmacao" class="mensagem-sucesso">✅ Agendamento confirmado! Entraremos em contato.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppointmentForm from '@/components/AppointmentForm.vue'

const confirmacao = ref(false)

function onSuccess() {
  confirmacao.value = true
  setTimeout(() => { confirmacao.value = false }, 5000)
}
</script>

<style scoped>
.mensagem-sucesso {
  text-align: center;
  margin-top: 1.5rem;
  color: #4caf50;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>

