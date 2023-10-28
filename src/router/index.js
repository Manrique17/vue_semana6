import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import NosotrosView from '../views/NosotrosView.vue'
import CarrerasView from '../views/CarrerasView.vue'
import CarrerasSede from '../views/CarrerasSede.vue'
import ErrorView from '../views/ErrorView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: NosotrosView
  },
  {
    path: '/carreras',
    name: 'carreras',
    component: CarrerasView
  },
  {
    path: '/sede/:id/:sede',
    name: 'sede',
    component: CarrerasSede
  },
  {
    path: '/:ruta(.*)',
    component: ErrorView
  }
  ,
  {
    path: '/inicio',
    redirect: '/'
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
