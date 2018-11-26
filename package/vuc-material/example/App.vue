<template>
  <div id="app">
    <vuc-material :output="output"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      output: 'background'
    }
  },
  created () {
    setTimeout(() => {
      this.output = 'image'
    }, 5000)
    setTimeout(() => {
      this.output = 'background'
    }, 7000)
    setTimeout(() => {
      this.output = 'image'
    }, 10000)
    setTimeout(() => {
      this.output = 'canvas'
    }, 12000)
    setTimeout(() => {
      this.output = 'image'
    }, 15000)
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
