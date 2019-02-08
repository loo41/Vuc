import vucPictureContrast from './PictureContrast.vue'

function install (Vue) {
  Vue.component('vucPictureContrast', vucPictureContrast);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export {
  vucPictureContrast,
  install
}

export default install
