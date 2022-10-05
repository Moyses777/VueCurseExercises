import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/Register.vue'
import LoginView from '../views/Login.vue'
import DashboardView from '../views/Dashboard.vue'
import ContactConsultView from '../views/ContactConsult.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: () => RegisterView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => DashboardView
    },
    {
      path: '/contactconsult',
      name: 'contactconsult',
      component: () => ContactConsultView
    }
  ]
})

export default router
