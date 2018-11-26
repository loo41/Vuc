import vucImage from './Image.vue'

function install (Vue) {
  Vue.component('vucImage', vucImage)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export {
  vucImage,
  install
}

export default install
