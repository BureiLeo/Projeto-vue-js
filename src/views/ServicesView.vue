<template>
  <div>
    <div class="destaque-pagina">
      <div class="envolvente">
        <h1>Nossos <span>Serviços</span></h1>
        <p>Tudo o que você precisa para estar sempre impecável</p>
      </div>
    </div>

    <section class="secao">
      <div class="envolvente">
        <div class="busca-servicos">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar serviço..."
            class="campo-busca"
          />
        </div>
        <div v-if="servicosFiltrados.length" class="grade-3">
          <ServiceCard v-for="service in servicosFiltrados" :key="service.name" :service="service" />
        </div>
        <p v-else class="mensagem-vazia">Nenhum serviço encontrado.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ServiceCard from '@/components/ServiceCard.vue'

const searchQuery = ref('')

const servicos = [
  { icon: '✂️', name: 'Corte Masculino', description: 'Corte personalizado com tesoura ou máquina.', price: '45,00', duration: '40 min' },
  { icon: '🪒', name: 'Barba', description: 'Aparar e modelar com produtos premium.', price: '35,00', duration: '30 min' },
  { icon: '💈', name: 'Corte + Barba', description: 'O combo completo para sair transformado.', price: '70,00', duration: '60 min' },
  { icon: '👁️', name: 'Sobrancelha', description: 'Design e alinhamento de sobrancelha.', price: '20,00', duration: '15 min' },
  { icon: '🎨', name: 'Pigmentação', description: 'Pigmentação capilar para um visual jovem.', price: '80,00', duration: '60 min' },
  { icon: '💧', name: 'Hidratação', description: 'Tratamento hidratante profundo.', price: '55,00', duration: '45 min' },
]

const servicosFiltrados = computed(() =>
  servicos.filter(s =>
    s.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)
</script>

<style scoped>
.busca-servicos {
  margin-bottom: 2rem;
  text-align: center;
}

.campo-busca {
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  border: 1px solid #333;
  border-radius: 8px;
  background: #1a1a1a;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.campo-busca:focus {
  border-color: #c9a84c;
}

.campo-busca::placeholder {
  color: #666;
}

.mensagem-vazia {
  text-align: center;
  color: #c9a84c;
  font-size: 1.05rem;
}
</style>
