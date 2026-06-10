<template>
  <div>
    <!-- Hero -->
    <section class="destaque">
      <div class="envolvente">
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
          <div v-for="service in services" :key="service.id" class="card-servico">
            <div class="icone-servico">{{ service.icon }}</div>
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
            <div class="rodape-servico">
              <strong>R$ {{ service.price }}</strong>
              <span>⏱ {{ service.duration }}</span>
            </div>
            <RouterLink to="/agendamento" class="botao botao-contorno">Agendar</RouterLink>
          </div>
        </div>

        <div style="text-align:center; margin-top: 2rem;">
          <RouterLink to="/servicos" class="botao botao-contorno">Ver Todos</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  { id: 1, icon: '✂️', name: 'Corte Masculino', description: 'Corte personalizado com tesoura ou máquina.', price: '45,00', duration: '40 min' },
  { id: 2, icon: '🪒', name: 'Barba',           description: 'Aparar e modelar com produtos premium.',      price: '35,00', duration: '30 min' },
  { id: 3, icon: '💈', name: 'Corte + Barba',   description: 'O combo completo para sair transformado.',   price: '70,00', duration: '60 min' },
]
</script>

