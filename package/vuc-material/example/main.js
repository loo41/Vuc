import Vue from 'vue'
import App from './App.vue'
import vucMaterial from '../src/main.js'

Vue.use(vucMaterial)
new Vue({
  el: '#app',
  render: h => h(App)
})
