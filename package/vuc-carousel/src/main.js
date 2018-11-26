import vucCarousel from './Carousel.vue'

function install (Vue) {
  Vue.component('vucCarousel', vucCarousel)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export {
  vucCarousel,
  install
}

export default install
