import vucIdentify from './Identify.vue'

function install (Vue) {
  Vue.component('vucIdentify', vucIdentify)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export {
  vucIdentify,
  install
}

export default install
