<template>
  <div class="home-box">
    <div class="home-input">
      <vuc-input 
        v-model="test"
        :H="60"
        :num="num"
        :size="size"
        :type="type"
        :styleType="styleType"
        :W="600"
      />
    </div>
    <div class="select-list">
      <div>
        <mu-radio v-model="styleType" style="margin-right: 16px;" value="fill" label="fill"></mu-radio>
        <mu-radio v-model="styleType" style="margin-right: 16px;" value="stroke" label="stroke"></mu-radio>
      </div>
      <div>
        <mu-radio v-model="type" style="margin-right: 16px;" value="rect" label="rect"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="arc" label="arc"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="square" label="square"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="icon" label="icon"></mu-radio>
      </div>
      <div>   
        <mu-slider class="slider" :step="1" thumb-color="orange" v-model="num"></mu-slider>
      </div>
      <div>
        <mu-slider class="slider" :step="1" thumb-color="orange" v-model="size"></mu-slider>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {vucInput} from 'vuc-input'
export default {
  name: 'home',
  data () {
    return {
      test: '',
      num: 10,
      size: 10,
      type: 'rect',
      styleType: 'fill'
    }
  },
  components: {vucInput}
}
</script>

<style scoped>
.home-box {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home-input {
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.select-list div{
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider {
  width: 500px;
}
</style>
