<template>
  <header class="header">

    <div class="logo">
      Barbearia StyleCut
    </div>

    <!-- Menu desktop (sempre visível em telas grandes) -->
    <nav class="nav-desktop">
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/servicos">Serviços</RouterLink>
      <RouterLink to="/barbeiros">Barbeiros</RouterLink>
      <RouterLink to="/agendamento">Agendamento</RouterLink>
    </nav>

    <!-- Botão hamburguer (somente mobile) -->
    <button class="menu-btn" @click="toggleMenu">☰</button>

    <!-- Menu mobile -->
    <nav class="nav-mobile" :class="{ aberto: menuOpen }">
      <RouterLink to="/" @click="toggleMenu">Início</RouterLink>
      <RouterLink to="/servicos" @click="toggleMenu">Serviços</RouterLink>
      <RouterLink to="/barbeiros" @click="toggleMenu">Barbeiros</RouterLink>
      <RouterLink to="/agendamento" @click="toggleMenu">Agendamento</RouterLink>
    </nav>

    <!-- Overlay -->
    <div v-if="menuOpen" class="overlay" @click="toggleMenu"></div>

  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #111;
  color: white;
}

.logo {
  font-size: 22px;
  font-weight: bold;
}

/* Desktop: exibe nav horizontal, esconde hamburguer */
.nav-desktop {
  display: flex;
  gap: 24px;
}

.nav-desktop a {
  color: white;
  text-decoration: none;
  font-size: 15px;
}

.nav-desktop a:hover {
  color: #f0a500;
}

.menu-btn {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
}

/* Mobile */
.nav-mobile {
  display: none;
  flex-direction: column;
  gap: 15px;
  background: #222;
  padding: 20px;
  position: absolute;
  top: 70px;
  right: 20px;
  border-radius: 10px;
  z-index: 1000;
}

.nav-mobile.aberto {
  display: flex;
}

.nav-mobile a {
  color: white;
  text-decoration: none;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .menu-btn {
    display: block;
  }
}
</style>
