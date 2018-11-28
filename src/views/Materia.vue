<template>
  <div class="materia-box">
    <div class="materia">
      <vuc-material 
        :switch="disable" 
        :quality="quality"
        :output="output"
      />
    </div>
    <div class="select-box">
      <div class="switch">
        <mu-switch v-model="disable"></mu-switch>
      </div>
      <div class="switch">
        <mu-radio v-model="output" style="margin-right: 16px;" value="background" label="background"></mu-radio>
        <mu-radio v-model="output" style="margin-right: 16px;" value="image" label="image"></mu-radio>
        <mu-radio v-model="output" style="margin-right: 16px;" value="canvas" label="canvas"></mu-radio>
      </div>
      <div class="switch">   
        <mu-slider class="slider" :min="0.1" :max="1" thumb-color="orange" v-model="quality"></mu-slider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      disable: true,
      output: 'background',
      quality: 1
    }
  }
}
</script>

<style>
.materia-box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.materia {
  height: 80%;
}
.switch {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center
}
.slider {
  width: 500px;
}
</style>
