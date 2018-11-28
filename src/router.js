import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Image from './views/Image.vue'
import Identify from './views/Identify.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Identify
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: resolve => require(['./views/Carousel.vue'], resolve)
    },
    {
      path: '/materia',
      name: 'materia',
      component: resolve => require(['./views/Materia.vue'], resolve)
    },
    {
      path: '/image',
      name: 'image',
      component: Image
    },
    {
      path: '/identify',
      name: 'identify',
      component: Home
    },
  ]
})
