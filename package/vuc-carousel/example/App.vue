<template>
  <div id="app">
    <vuc-carousel 
      :imgs="imgs"
      :nums="200"
      :time="2000"
      type="rect"
      :color="['red', 'green', 'gray', 'blue']"
      dir="bottom"
    />
  </div>
</template>

<script>
import imgOne from './assets/one.jpg'
import imgTwo from './assets/two.jpg'
import imgThree from './assets/three.jpg'
export default {
  data () {
    return {
      imgs: [imgOne, imgTwo, imgThree, imgOne, imgTwo, imgThree]
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
