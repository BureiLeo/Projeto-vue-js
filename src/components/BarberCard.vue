<template>
  <div class="card-barbeiro">
    <div class="avatar-barbeiro">
      <img v-if="barber.photo" :src="barber.photo" :alt="`Foto de ${barber.name}`" />
      <span v-else>{{ barber.initials }}</span>
    </div>
    <h3>{{ barber.name }}</h3>
    <span class="cargo-barbeiro">{{ barber.role }}</span>
    <p>{{ barber.bio }}</p>
  </div>
</template>

<script setup>
defineProps({ barber: { type: Object, required: true } })
</script>

