<template>
  <div>
    <div class="destaque-pagina">
      <div class="envolvente">
        <h1>Nossos <span>Serviços</span></h1>
        <p>Tudo o que você precisa para estar sempre impecável</p>
      </div>
    </div>

    <section class="secao">
      <div class="envolvente">
        <div class="grade-3">
          <ServiceCard v-for="service in servicos" :key="service.name" :service="service" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'

const servicos = [
  { icon: '✂️', name: 'Corte Masculino', description: 'Corte personalizado com tesoura ou máquina.', price: '45,00', duration: '40 min' },
  { icon: '🪒', name: 'Barba', description: 'Aparar e modelar com produtos premium.', price: '35,00', duration: '30 min' },
  { icon: '💈', name: 'Corte + Barba', description: 'O combo completo para sair transformado.', price: '70,00', duration: '60 min' },
  { icon: '👁️', name: 'Sobrancelha', description: 'Design e alinhamento de sobrancelha.', price: '20,00', duration: '15 min' },
  { icon: '🎨', name: 'Pigmentação', description: 'Pigmentação capilar para um visual jovem.', price: '80,00', duration: '60 min' },
  { icon: '💧', name: 'Hidratação', description: 'Tratamento hidratante profundo.', price: '55,00', duration: '45 min' },
]
</script>
