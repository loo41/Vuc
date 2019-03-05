import Vue from 'vue'
import App from './App.vue'
import vucColor from '../src/main.js'

Vue.use(vucColor)
new Vue({
  el: '#app',
  render: h => h(App)
})
