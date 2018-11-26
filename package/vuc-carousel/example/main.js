import Vue from 'vue'
import App from './App.vue'
import vucCarousel from '../dist/vuc-carousel'

Vue.use(vucCarousel)
new Vue({
  el: '#app',
  render: h => h(App)
})
