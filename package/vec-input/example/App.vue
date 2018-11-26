<template>
  <div id="app">
    <vucInput 
      type="icon"
    />
    <vucInput 
      type="square"
    />
    <vucInput 
      v-model="inputValue3"
      styleType="stroke"
      type="arc"
    />
  </div>
</template>

<script>
import {vucInput} from '../dist/vuc-input.js'
export default {
  data () {
    return {
      inputValue: '',
      inputValue2: '',
      inputValue3: ''
    }
  },
  components: {vucInput},
  watch: {
    inputValue () {
      console.log(this.inputValue)
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
