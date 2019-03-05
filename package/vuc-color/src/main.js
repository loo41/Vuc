import vucColor from './Color.vue'

function install (Vue) {
  Vue.component('vucColor', vucColor);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export {
  vucColor,
  install
}

export default install
