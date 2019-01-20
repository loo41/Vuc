import vucScratch from './Scratch.vue'

function install (Vue) {
  Vue.component('vucScratch', vucScratch);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export {
  vucScratch,
  install
}

export default install
