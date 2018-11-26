import vucMaterial from './Materia.vue'

function install (Vue) {
  Vue.component('vucMaterial', vucMaterial)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export {
  vucMaterial,
  install
}

export default install
