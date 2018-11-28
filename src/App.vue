<template>
  <div id="app">
    <Head></Head>
    <div class="main-box">
      <router-view/>
    </div>
    <div class="github" @click="_github">
      <div class="github-logo">
        <img src="@/assets/github.png" />
      </div>
      <div class="github-title">更多配置</div>
    </div>
  </div>
</template>

<script>
import Head from '@/components/Head'
export default {
  data: () => {
    return {}
  },
  components: {
    Head
  },
  methods: {
    _github () {
      window.open('https://github.com/loo41/vuc')
    }
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-box {
  height: 100%;
  box-sizing: border-box;
  padding-top: 60px;
}
.github {
  position: fixed;
  height: 180px;
  width: 180px;
  border-radius: 50%;
  cursor: pointer;
  top: 70px;
  right: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5)
}
.github-logo {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.github-title {
  height: 30%;
  font-size: 18px;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
