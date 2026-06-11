import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import BarbersView from '../views/BarbersView.vue'
import AppointmentView from '../views/AppointmentView.vue'
import ContactView from '../views/ContactView.vue'
import AppointmentView from '../views/AppointmentView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/servicos', component: ServicesView },
  { path: '/barbeiros', component: BarbersView },
  { path: '/agendamento', component: AppointmentView },
  { path: '/contato', component: ContactView },
  { path: '/', name: 'appointment', component: AppointmentView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
