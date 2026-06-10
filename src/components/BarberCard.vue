<template>
  <div class="card-barbeiro">
    <div class="avatar-barbeiro">{{ barber.initials }}</div>
    <h3>{{ barber.name }}</h3>
    <span class="cargo-barbeiro">{{ barber.role }}</span>
    <p>{{ barber.bio }}</p>
  </div>
</template>

<script setup>
defineProps({ barber: { type: Object, required: true } })
</script>

