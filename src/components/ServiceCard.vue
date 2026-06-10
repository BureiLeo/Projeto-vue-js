<template>
  <div class="card-servico">
    <div class="icone-servico">{{ service.icon }}</div>
    <h3>{{ service.name }}</h3>
    <p>{{ service.description }}</p>
    <div class="rodape-servico">
      <strong>R$ {{ service.price }}</strong>
      <span>⏱ {{ service.duration }}</span>
    </div>
    <RouterLink to="/agendamento" class="botao botao-contorno">Agendar</RouterLink>
  </div>
</template>

<script setup>
defineProps({ service: { type: Object, required: true } })
</script>

