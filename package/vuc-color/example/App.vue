<template>
  <div id="app">
    <vuc-color :img="img" :H="300"/>
  </div>
</template>

<script>
import imgOne from './assets/one.jpg'
export default {
  data () {
    return {
      img: imgOne
    }
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
