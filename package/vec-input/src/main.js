import vucInput from './Input.vue'

function install (Vue) {
  Vue.component('vucInput', vucInput);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export {
  vucInput,
  install
}

export default install
