<template>
  <div class="head-box">
    <mu-tabs :value.sync="active" @change="_change">
      <mu-tab>VUC-Identify</mu-tab>
      <mu-tab>VUC-Carousel</mu-tab>
      <mu-tab>VUC-Materia</mu-tab>
      <mu-tab>VUC-Image</mu-tab>
      <mu-tab>VUC-Input</mu-tab>
    </mu-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    _change (value) {
      if (!value) return this.$router.push(`/`)
      if (value == 1) return this.$router.push(`/carousel`)
      if (value == 2) return this.$router.push('/materia')
      if (value == 3) return this.$router.push('/image')
      if (value == 4) return this.$router.push('/identify')
    }
  }
}
</script>

<style scoped>
.head-box {
  height: 60px;
  background: #2196f3;
  box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 12;
}
.head-box div {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  letter-spacing: 2px;
}
</style>
