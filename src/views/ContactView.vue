<template>
  <div>
    <div class="destaque-pagina">
      <div class="envolvente">
        <h1>Entre em <span>Contato</span></h1>
        <p>Estamos aqui para atendê-lo</p>
      </div>
    </div>

    <section class="secao">
      <div class="envolvente">
        <div class="layout-contato">

          <!-- Informações de contato -->
          <div class="painel-contato">
            <h2>Fale <span>Conosco</span></h2>
            <p class="intro-contato">Tem alguma dúvida? Entre em contato ou venha nos visitar.</p>

            <div class="lista-contato">
              <div class="card-contato">
                <span class="icone-card">📍</span>
                <div><h4>Endereço</h4><p>Rua dos Barbeiros, 123 – São Paulo, SP</p></div>
              </div>
              <div class="card-contato">
                <span class="icone-card">📞</span>
                <div><h4>Telefone</h4><p>(11) 99999-9999</p></div>
              </div>
              <div class="card-contato">
                <span class="icone-card">✉️</span>
                <div><h4>E-mail</h4><p>contato@barberpro.com</p></div>
              </div>
              <div class="card-contato">
                <span class="icone-card">⏰</span>
                <div><h4>Horários</h4><p>Seg–Sex: 09h–20h | Sáb: 08h–18h</p></div>
              </div>
            </div>
          </div>

          <!-- Formulário de contato -->
          <div>
            <form class="formulario-contato">
              <h3>Envie uma <span>Mensagem</span></h3>

              <div class="grupo-campo">
                <label>Nome</label>
                <input type="text" placeholder="Seu nome" />
              </div>
              <div class="grupo-campo">
                <label>E-mail</label>
                <input type="email" placeholder="seu@email.com" />
              </div>
              <div class="grupo-campo">
                <label>Assunto</label>
                <input type="text" placeholder="Assunto da mensagem" />
              </div>
              <div class="grupo-campo">
                <label>Mensagem</label>
                <textarea rows="5" placeholder="Escreva sua mensagem..."></textarea>
              </div>

              <button type="submit" class="botao botao-primario">Enviar Mensagem</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

