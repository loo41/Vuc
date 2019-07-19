<template>
  <div id="app">
    <vucScratch :recover="recover">
      <div slot="content" class="content" >你是猪啊</div>
    </vucScratch>
  </div>
</template>

<script>
import {vucScratch} from '../src/main'
export default {
  data () {
    return {
      recover: false,
    }
  },
  mounted () {
    setTimeout(() => {
      this.recover = true
    }, 2000)
  },
  components: {vucScratch}
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
.content {
  height: 100%;
  width: 100%;
}
</style>
