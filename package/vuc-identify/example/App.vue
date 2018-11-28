<template>
  <div id="app">
    <vuc-identify 
      :text="text" 
      :textValue="textValue" 
      :clickQr="clickQr"
      :random="false"
      :clickStatus="true"
    />
  </div>
</template>

<script>
import {vucIdentify} from '../src/main.js'
export default {
  data () {
    return {
      text: 'adwwd'
    }
  },
  components: {vucIdentify},
  mounted () {},
  methods: {
    clickQr (text) {
      console.log(text)
      this.text = 'adwa'
    },
    textValue (text) {
      console.log(text)
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
