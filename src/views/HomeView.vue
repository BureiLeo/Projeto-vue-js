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
          <div class="card-servico">
            <div class="icone-servico">✂️</div>
            <h3>Corte Masculino</h3>
            <p>Corte personalizado com tesoura ou máquina.</p>
            <div class="rodape-servico">
              <strong>R$ 45,00</strong>
              <span>⏱ 40 min</span>
            </div>
            <RouterLink to="/agendamento" class="botao botao-contorno">Agendar</RouterLink>
          </div>
          <div class="card-servico">
            <div class="icone-servico">🪒</div>
            <h3>Barba</h3>
            <p>Aparar e modelar com produtos premium.</p>
            <div class="rodape-servico">
              <strong>R$ 35,00</strong>
              <span>⏱ 30 min</span>
            </div>
            <RouterLink to="/agendamento" class="botao botao-contorno">Agendar</RouterLink>
          </div>
          <div class="card-servico">
            <div class="icone-servico">💈</div>
            <h3>Corte + Barba</h3>
            <p>O combo completo para sair transformado.</p>
            <div class="rodape-servico">
              <strong>R$ 70,00</strong>
              <span>⏱ 60 min</span>
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
</script>

