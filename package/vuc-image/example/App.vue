<template>
  <div id="app">
    <vuc-image 
      :imgUrl="imgUrl" 
      :type="type" 
      waterText="NICE"
      :imgageMode="imgageMode"
    />
  </div>
</template>

<script>
import {vucImage} from '../src/main.js'
import img from './assets/three.jpg'
export default {
  data () {
    return {
      imgUrl: [img],
      type: 'prints',
      imgageMode: true
    }
  },
  components: {vucImage},
  created () {
    setTimeout(() => {
      this.type = 'blackWhite'
    }, 3000)
    setTimeout(() => {
      this.type = 'monochrome'
      this.imgageMode = false
    }, 5000)
    setTimeout(() => {
      this.type = 'prints'
    }, 7000)
    setTimeout(() => {
      this.type = 'blur'
    }, 9000)
    setTimeout(() => {
      this.imgageMode = true
    }, 10000)
    setTimeout(() => {
      this.type = 'watermark'
    }, 11000)
    setTimeout(() => {
      this.type = 'cameo'
    }, 13000)
  }
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
