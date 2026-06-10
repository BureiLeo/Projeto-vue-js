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
        <form class="formulario-agendamento">
          <div class="linha-campos">
            <div class="grupo-campo">
              <label>Nome Completo</label>
              <input type="text" placeholder="Seu nome completo" />
            </div>
            <div class="grupo-campo">
              <label>Telefone</label>
              <input type="tel" placeholder="(11) 99999-9999" />
            </div>
          </div>
          <div class="linha-campos">
            <div class="grupo-campo">
              <label>Serviço</label>
              <select>
                <option>Corte Masculino</option>
                <option>Barba</option>
                <option>Corte + Barba</option>
              </select>
            </div>
            <div class="grupo-campo">
              <label>Barbeiro</label>
              <select>
                <option>Carlos Silva</option>
                <option>João Mendes</option>
                <option>Rafael Costa</option>
                <option>Lucas Barbosa</option>
              </select>
            </div>
          </div>
          <div class="linha-campos">
            <div class="grupo-campo">
              <label>Data</label>
              <input type="date" />
            </div>
            <div class="grupo-campo">
              <label>Horário</label>
              <select>
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>14:00</option>
                <option>15:00</option>
                <option>16:00</option>
              </select>
            </div>
          </div>
          <div class="grupo-campo">
            <label>Observações</label>
            <textarea rows="3" placeholder="Alguma observação especial?"></textarea>
          </div>
          <button type="submit" class="botao botao-primario">Confirmar Agendamento</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

