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
import leoPhoto from '@/assets/leo.jpeg'
import luisPhoto from '@/assets/luis.jpeg'
import alexPhoto from '@/assets/alex.jpeg'
import dionatanPhoto from '@/assets/dionatan.jpeg'

const barbers = [
  { initials: 'LB', name: 'Leo Burei', role: 'Master Barber', bio: 'Mais de 10 anos em cortes clássicos e modernos.', photo: leoPhoto },
  { initials: 'LM', name: 'Luis Molon', role: 'Barber Senior', bio: 'Especialista em degradês modernos e estilos urbanos.', photo: luisPhoto },
  { initials: 'ADB', name: 'Alex David Becker', role: 'Barber', bio: 'Apaixonado por tendências e técnicas contemporâneas.', photo: alexPhoto },
  { initials: 'DM', name: 'Dionatan Markiu', role: 'Barber Junior', bio: 'Talento jovem com foco em atendimento personalizado.', photo: dionatanPhoto },
]
</script>
