<template>
  <Teleport to="body">
    <div v-if="show" class="fundo-escuro" @click.self="$emit('close')">
      <div class="janela">
        <div class="icone-janela">✅</div>
        <h2>Agendamento Confirmado!</h2>
        <p class="mensagem-janela">
          Olá, <strong>{{ appointment.name }}</strong>! Seu agendamento foi realizado com sucesso.
        </p>

        <div class="detalhes-janela">
          <div v-for="detail in detailItems" :key="detail.label" class="linha-detalhe">
            <span>{{ detail.label }}</span>
            <span>{{ detail.value }}</span>
          </div>
        </div>

        <p class="nota-janela">Entraremos em contato pelo número informado para confirmar. 📱</p>

        <button class="botao botao-primario" @click="$emit('close')">Fechar</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  show: Boolean,
  appointment: {
    type: Object,
    default: () => ({}),
  },
})

defineEmits(['close'])

function formatDate(dateStr) {
  if (!dateStr) return ''
  const [year, month, day] = dateStr.split('-')
  return `${day}/${month}/${year}`
}

const detailItems = computed(() => [
  { label: 'Serviço', value: props.appointment.service || '' },
  { label: 'Barbeiro', value: props.appointment.barber || '' },
  { label: 'Data', value: formatDate(props.appointment.date) },
  { label: 'Horário', value: props.appointment.time || '' },
  { label: 'Contato', value: props.appointment.phone || '' },
])
</script>

