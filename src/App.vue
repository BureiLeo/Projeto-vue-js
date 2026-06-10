<template>
  <div id="app">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

