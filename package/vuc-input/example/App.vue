<template>
  <div id="app">
    <vucInput 
      type="icon"
      v-model="inputValue"
    />
    <vucInput 
      type="arc"
      :alpha="false"
      v-model="inputValue2"
      :color="['red', 'green', 'blue']"
    />
    <vucInput 
      v-model="inputValue3"
      styleType="stroke"
      :alpha="3"
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
