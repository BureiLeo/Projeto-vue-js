<template>
  <div>
    <div class="destaque-pagina">
      <div class="envolvente">
        <h1>Nossa <span>Equipe</span></h1>
        <p>Profissionais apaixonados pelo que fazem</p>
      </div>
    </div>
    <section class="secao">
      <div class="envolvente">
        <h2 class="titulo-secao">Barbeiros <span>Especialistas</span></h2>
        <p class="subtitulo-secao">Cada profissional treinado e apaixonado pela arte da barbearia</p>
        <div class="grade-4">
          <BarberCard v-for="barber in barbers" :key="barber.initials" :barber="barber" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BarberCard from '@/components/BarberCard.vue'

const barbers = [
  { initials: 'LB', name: 'Leo Burei', role: 'Master Barber', bio: 'Mais de 10 anos em cortes clássicos e modernos.' },
  { initials: 'LM', name: 'Luis Molon', role: 'Barber Senior', bio: 'Especialista em degradês modernos e estilos urbanos.' },
  { initials: 'ADB', name: 'Alex David Becker', role: 'Barber', bio: 'Apaixonado por tendências e técnicas contemporâneas.' },
  { initials: 'DM', name: 'Dionatan Markiu', role: 'Barber Junior', bio: 'Talento jovem com foco em atendimento personalizado.' },
]
</script>
