<template>
  <div class="image-box">
    <div class="image">
      <vuc-image 
        :imgUrl="imgUrl" 
        :type="type"
        :mode="mode"
        :tone="tone"
        :imgageMode="imgageMode"/>
      </div>
    <div class="select-box">
      <p>
        <mu-switch v-model="imgageMode"></mu-switch>
      </p>
      <p>
        <mu-radio v-model="type" style="margin-right: 16px;" value="" label="无"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="blur" label="blur"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="inverse" label="inverse"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="blackWhite" label="blackWhite"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="monochrome" label="monochrome"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="prints" label="prints"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="watermark" label="watermark"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="cameo" label="cameo"></mu-radio>
      </p>
      <p>
        <mu-radio v-model="mode" style="margin-right: 16px;" value="red" label="red"></mu-radio>
        <mu-radio v-model="mode" style="margin-right: 16px;" value="blue" label="blue"></mu-radio>
        <mu-radio v-model="mode" style="margin-right: 16px;" value="green" label="green"></mu-radio>
      </p>
      <p>
        <mu-slider class="slider" :min="0" :max="1000" thumb-color="orange" v-model="tone"></mu-slider>
      </p>
    </div>
  </div>
</template>

<script>
import {vucImage} from 'vuc-image'
import img from '@/assets/three.jpg'
export default {
  data () {
    return {
      imgUrl: [img],
      type: 'blur',
      imgageMode: false,
      mode: 'red',
      tone: 128
    }
  },
  components: {vucImage}
}
</script>

<style scoped>
.image-box {
  height: 100%;
  width: 100%;
  flex-direction: column;
}
.image {
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.select-box p{
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider {
  width: 500px;
}
</style>
