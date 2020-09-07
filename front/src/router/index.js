import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Splash',
    component: () => import('../views/Splash.vue')
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: () => import('../views/Onboarding.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/story',
    name: 'Story',
    component: () => import('../views/Story.vue')
  },

  {
    path: '/review',
    name: 'Review',
    component: () => import('../views/Review.vue')
  },

  {
    path: '/game-first',
    name: 'GameFirst',
    component: () => import('../views/GameFirst.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
