import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import vucCarousel from 'vuc-carousel'
import vucMaterial from 'vuc-material'

Vue.use(MuseUI)
Vue.use(vucCarousel)
Vue.use(vucMaterial)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
