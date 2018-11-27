<template>
  <div id="app">
    <vucInput 
      type="icon"
      v-model="inputValue"
    />
    <vucInput 
      type="square"
      v-model="inputValue2"
    />
    <vucInput 
      v-model="inputValue3"
      styleType="stroke"
      type="arc"
    />
  </div>
</template>

<script>
import {vucInput} from '../src/main.js'
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
