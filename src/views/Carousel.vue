<template>
  <div class="carousel-box">
    <div class="carousel">
      <vuc-carousel
        :imgs="imgs"
        :type="type"
        :styleType="styleType"
        :H="350"
        :size="size"
        :time="time"
        :effect="effect"
        :nums="nums"
        :dir="dir"
      />
    </div>
    <div class="select-box">
      <div>
        <mu-radio v-model="styleType" style="margin-right: 16px;" value="fill" label="fill"></mu-radio>
        <mu-radio v-model="styleType" style="margin-right: 16px;" value="stroke" label="stroke"></mu-radio>
      </div>
      <div>
        <mu-radio v-model="dir" style="margin-right: 16px;" value="left" label="left"></mu-radio>
        <mu-radio v-model="dir" style="margin-right: 16px;" value="bottom" label="bottom"></mu-radio>
      </div>
      <div>
        <mu-radio v-model="type" style="margin-right: 16px;" value="rect" label="rect"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="arc" label="arc"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="square" label="square"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="icon" label="icon"></mu-radio>
      </div>
      <div>
        <mu-radio v-model="effect" style="margin-right: 16px;" value="easeInQuad" label="easeInQuad"></mu-radio>
        <mu-radio v-model="effect" style="margin-right: 16px;" value="easeInCubic" label="easeInCubic"></mu-radio>
        <mu-radio v-model="effect" style="margin-right: 16px;" value="easeOutQuad" label="easeOutQuad"></mu-radio>
        <mu-radio v-model="effect" style="margin-right: 16px;" value="easeOutCubic" label="easeOutCubic"></mu-radio>
      </div>
      <div>   
        <div class="item">次数</div>  <mu-slider class="slider" :max="1000" :step="1" thumb-color="orange" v-model="nums"></mu-slider>
      </div>
      <div>
        <div class="item">时间</div> <mu-slider class="slider" :min="500" :max="100000" thumb-color="orange" v-model="time"></mu-slider>
      </div>
      <div>   
        <div class="item">尺寸</div>  <mu-slider class="slider" :step="1" thumb-color="orange" v-model="size"></mu-slider>
      </div>
    </div>
  </div>
</template>

<script>
import imgOne from '@/assets/one.jpg'
import imgTwo from '@/assets/two.jpg'
import imgThree from '@/assets/three.jpg'
export default {
  data () {
    return {
      imgs: [imgOne, imgTwo, imgThree],
      type: 'arc',
      styleType: 'fill',
      nums: 200,
      size: 15,
      time: 5000,
      effect: 'easeInQuad',
      dir: 'left'
    }
  }
}
</script>

<style scoped>
.carousel-box {
  height: 100%;
}
.carousel {
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.select-box {
  height: 30%;
}
.select-box div{
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  height: 100%;
  width: 100px;
  margin-bottom: 15px
}
.slider {
  width: 500px
}
</style>
