<template>
  <header class="header">

    <div class="logo">
      Barbearia StyleCut
    </div>

    <!-- Botão hamburguer -->
    <button class="menu-btn" @click="toggleMenu">
      ☰
    </button>

    <!-- Menu -->
    <nav :class="{ aberto: menuOpen }">
      <a href="#">Início</a>
      <a href="#">Serviços</a>
      <a href="#">Barbeiros</a>
      <a href="#">Agendamento</a>
    </nav>

    <!-- Overlay -->
    <div
      v-if="menuOpen"
      class="overlay"
      @click="toggleMenu"
    ></div>

  </header>
</template>

<script setup>
import { ref } from 'vue'

// Controla abertura do menu mobile
const menuOpen = ref(false)

// Abre e fecha menu
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.header {
  position: relative;
  padding: 20px;
  background: #111;
  color: white;
}

.logo {
  font-size: 22px;
  font-weight: bold;
}

.menu-btn {
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
}

nav {
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

nav.aberto {
  display: flex;
}

nav a {
  color: white;
  text-decoration: none;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>
