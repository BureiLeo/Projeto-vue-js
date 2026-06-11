<template>
  <div>
    <!-- Hero -->
    <section class="destaque">
      <div class="overlay-destaque"></div>
      <div class="envolvente conteudo-destaque">
        <h1>Estilo que define<br /><span>quem você é</span></h1>
        <p>Cortes precisos, barbas impecáveis e atendimento exclusivo.</p>
        <div class="acoes-destaque">
          <RouterLink to="/agendamento" class="botao botao-primario">Agendar Agora</RouterLink>
          <RouterLink to="/servicos" class="botao botao-contorno">Ver Serviços</RouterLink>
        </div>
      </div>
    </section>

    <!-- Serviços em destaque -->
    <section class="secao">
      <div class="envolvente">
        <h2 class="titulo-secao">Nossos <span>Serviços</span></h2>
        <p class="subtitulo-secao">Os mais pedidos pelos nossos clientes</p>

        <div class="grade-3">
          <ServiceCard v-for="s in services" :key="s.id" :service="s" />
        </div>

        <div style="text-align:center; margin-top: 2rem;">
          <RouterLink to="/servicos" class="botao botao-contorno">Ver Todos</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'

const services = [
  { id: 1, icon: '✂️', name: 'Corte Masculino', description: 'Corte personalizado com tesoura ou máquina.', price: '45,00', duration: '40 min' },
  { id: 2, icon: '🪒', name: 'Barba',           description: 'Aparar e modelar com produtos premium.',      price: '35,00', duration: '30 min' },
  { id: 3, icon: '💈', name: 'Corte + Barba',   description: 'O combo completo para sair transformado.',   price: '70,00', duration: '60 min' },
]
</script>

<style scoped>
.destaque {
  position: relative;
  min-height: 90vh;
  background-image: url('@/assets/fundo barber.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
}

.overlay-destaque {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
}

.conteudo-destaque {
  position: relative;
  z-index: 1;
  color: white;
}

.conteudo-destaque h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}

.conteudo-destaque p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .conteudo-destaque h1 {
    font-size: 2rem;
  }

  .destaque {
    background-attachment: scroll;
  }
}
</style>

