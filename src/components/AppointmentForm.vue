<template>
  <div class="formulario-agendamento">
    <form @submit.prevent="handleSubmit" novalidate>

      <div class="linha-campos">
        <!-- Nome -->
        <div class="grupo-campo">
          <label for="name">Nome Completo *</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Seu nome completo"
            :class="{ 'campo-invalido': errors.name }"
            autocomplete="name"
          />
          <span v-if="errors.name" class="erro-campo">{{ errors.name }}</span>
        </div>

        <!-- Telefone -->
        <div class="grupo-campo">
          <label for="phone">Telefone / WhatsApp *</label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            placeholder="(11) 99999-9999"
            :class="{ 'campo-invalido': errors.phone }"
            autocomplete="tel"
          />
          <span v-if="errors.phone" class="erro-campo">{{ errors.phone }}</span>
        </div>
      </div>

      <div class="linha-campos">
        <div class="grupo-campo">
          <label for="service">Serviço Desejado *</label>
          <select
            id="service"
            v-model="form.service"
            :class="{ 'campo-invalido': errors.service }"
          >
            <option value="" disabled>Selecione um serviço</option>
            <option v-for="s in services" :key="s.id" :value="s.name">
              {{ s.name }} – R$ {{ s.price }}
            </option>
          </select>
          <span v-if="errors.service" class="erro-campo">{{ errors.service }}</span>
        </div>

        <div class="grupo-campo">
          <label for="barber">Barbeiro *</label>
          <select
            id="barber"
            v-model="form.barber"
            :class="{ 'campo-invalido': errors.barber }"
          >
            <option value="" disabled>Selecione um barbeiro</option>
            <option v-for="b in barbers" :key="b.id" :value="b.name">
              {{ b.name }}
            </option>
          </select>
          <span v-if="errors.barber" class="erro-campo">{{ errors.barber }}</span>
        </div>
      </div>

      <div class="linha-campos">

        <div class="grupo-campo">
          <label for="date">Data *</label>
          <input
            id="date"
            v-model="form.date"
            type="date"
            :min="minDate"
            :class="{ 'campo-invalido': errors.date }"
          />
          <span v-if="errors.date" class="erro-campo">{{ errors.date }}</span>
        </div>

        <div class="grupo-campo">
          <label for="time">Horário *</label>
          <select
            id="time"
            v-model="form.time"
            :class="{ 'campo-invalido': errors.time }"
          >
            <option value="" disabled>Selecione um horário</option>
            <option v-for="slot in timeSlots" :key="slot" :value="slot">
              {{ slot }}
            </option>
          </select>
          <span v-if="errors.time" class="erro-campo">{{ errors.time }}</span>
        </div>
      </div>

 
      <div class="grupo-campo">
        <label for="notes">Observações (opcional)</label>
        <textarea
          id="notes"
          v-model="form.notes"
          placeholder="Alguma preferência ou observação especial?"
          rows="3"
        ></textarea>
      </div>

      <button type="submit" class="botao botao-primario botao-enviar" :disabled="isSubmitting">
        <span v-if="isSubmitting">Agendando...</span>
        <span v-else>Confirmar Agendamento</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['success'])

const form = ref({
  name: '',
  phone: '',
  service: '',
  barber: '',
  date: '',
  time: '',
  notes: '',
})

const errors = ref({})
const isSubmitting = ref(false)

const services = [
  { id: 1, name: 'Corte Masculino', price: '45,00' },
  { id: 2, name: 'Barba', price: '35,00' },
  { id: 3, name: 'Corte + Barba', price: '70,00' },
  { id: 4, name: 'Sobrancelha', price: '20,00' },
  { id: 5, name: 'Pigmentação', price: '80,00' },
  { id: 6, name: 'Hidratação', price: '55,00' },
]

const barbers = [
  { id: 1, name: 'Carlos Silva' },
  { id: 2, name: 'João Mendes' },
  { id: 3, name: 'Rafael Costa' },
  { id: 4, name: 'Lucas Barbosa' },
]

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00',
]

const minDate = computed(() => new Date().toISOString().split('T')[0])

/* Valida todos os campos obrigatórios */
function validate() {
  const e = {}
  if (!form.value.name.trim()) e.name = 'Nome é obrigatório.'
  if (!form.value.phone.trim()) e.phone = 'Telefone é obrigatório.'
  if (!form.value.service) e.service = 'Selecione um serviço.'
  if (!form.value.barber) e.barber = 'Selecione um barbeiro.'
  if (!form.value.date) e.date = 'Selecione uma data.'
  if (!form.value.time) e.time = 'Selecione um horário.'
  errors.value = e
  return Object.keys(e).length === 0
}

function handleSubmit() {
  if (!validate()) return
  isSubmitting.value = true

  setTimeout(() => {
    isSubmitting.value = false
    emit('success', { ...form.value })
    resetForm()
  }, 1000)
}

function resetForm() {
  form.value = { name: '', phone: '', service: '', barber: '', date: '', time: '', notes: '' }
  errors.value = {}
}
</script>