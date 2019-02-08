<template>
  <div id="app">
    <vuc-picture-contrast :img="[img]" :dir="dir"/>
  </div>
</template>

<script>
import img from '@/assets/rect.jpg'
import moveIcon from '@/assets/move.png'
import {vucPictureContrast} from '../src/main.js' // '../dist/vuc-picture-contrast.js'
export default {
  data () {
    return {
      img: img,
      moveIcon: moveIcon,
      dir: 'left'
    }
  },
  mounted () {
    setTimeout(() => {
      this.dir = 'top'
    }, 3000)
     setTimeout(() => {
      this.dir = 'left'
    }, 6000)
  },
  components: {vucPictureContrast}
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
