<template>
  <div class="identify-box">
    <div class="identify">
      <vuc-identify 
        :text="text" 
        :clickQr="clickQr"
        :textValue="textValue"
        :H="100"
        :W="500"
        :clickStatus="clickStatus"
        :styleType="styleType"
        :type="type"
        :random="random"
        :size="size"
        :interfere-num="interfereNum"
      />
    </div>
    <div class="select-box">
      <div class="item-box">
        <mu-text-field v-model="text"></mu-text-field>
      </div>
      <p class="switch">
        点击状态 <mu-switch v-model="clickStatus" ></mu-switch>
        随机模式  <mu-switch v-model="random" ></mu-switch>
      </p>
      <p>
        <mu-radio v-model="styleType" style="margin-right: 16px;" value="fill" label="fill"></mu-radio>
        <mu-radio v-model="styleType" style="margin-right: 16px;" value="stroke" label="stroke"></mu-radio>
      </p>
      <p>
        <mu-radio v-model="type" style="margin-right: 16px;" value="rect" label="rect"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="arc" label="arc"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="square" label="square"></mu-radio>
        <mu-radio v-model="type" style="margin-right: 16px;" value="icon" label="icon"></mu-radio>
      </p>
      <div class="item-box">
        <div class="item">粒子尺寸</div> <mu-slider class="slider" :step="1" :min="1" :max="20"  thumb-color="orange" v-model="size"></mu-slider>
      </div>
      <div class="item-box">
        <div class="item">干扰线数量</div> <mu-slider class="slider" :step="1" thumb-color="orange" v-model="interfereNum"></mu-slider>
      </div>
      <div class="tip">
        点击状态为true会执行clickQr函数 可自行改变验证码 如果随机模式也会true会自行改变验证码 [更多配置需查看文档]
      </div>
    </div>
  </div>
</template>

<script>
import {vucIdentify} from 'vuc-identify'
export default {
  data () {
    return {
      text: 'Tcyon',
      clickStatus: true,
      styleType: 'fill',
      type: 'arc',
      random: false,
      size: 5,
      interfereNum: 5
    }
  },
  components: {vucIdentify},
  methods: {
    textValue (text) {
      console.log('渲染的值====' + text )
    },
    clickQr (text) {
      console.log('点击了' + text )
    }
  }
}
</script>

<style>
.identify-box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.identify {
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.select-box  {
  margin-top: 20px;
}
.select-box p{
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center!important;
}
.item-box{
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tip {
  height: 50px;
  display: flex;
  letter-spacing: 2px;
  font-size: 18px;
  justify-content: center;
  align-items: center;
}
.item {
  height: 100%;
  width: 100px;
}
.slider {
  width: 500px!important;
}
.switch {
  white-space: pre;
}
</style>
