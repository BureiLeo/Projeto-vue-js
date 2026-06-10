<template>
  <footer class="rodape">
    <div class="envolvente">
      <p class="logo-rodape">✂ Barber<span>Pro</span></p>
      <p class="texto-opaco">&copy; {{ currentYear }} BarberPro. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

