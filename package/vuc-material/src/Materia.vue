<template>
  <div ref="bgDom" class="bg-dom" @click="_switch"></div>
</template>

<script>
import {MaterialImage} from './index.js'
export default {
  data () {
    return {
      bgDom: {}
    }
  },
  props: {
    switch: {
      type: Boolean,
      default: true
    },
    color: {
      type: Array,
      default: () => {
        return []
      }
    },
    output: {
      type: String,
      default: 'background' // background、image、canvas
    },
    quality: {
      type: Number,
      default: 1
    }
  },
  watch: {
    color () {
      this.init()
    },
    output () {
      this.init()
    },
    quality () {
      this.init()
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const childs = this.$refs.bgDom.childNodes
      for(let i = childs.length - 1; i >= 0; i--) {
        this.$refs.bgDom.removeChild(childs[i])
      }
      this.$refs.bgDom.style.backgroundImage = ''
      this.bgDom = new MaterialImage({
        el: this.$refs.bgDom,
        color: this.color.length > 0? this.color: [],
        output: this.output,
        quality: this.quality
      })
    },
    _switch () {
      if (!this.switch) return
      this.bgDom.protract()
    },
    _adjust () {
      this.bgDom.adjust()
    },
    _destroy () {
      this.bgDom.destroy()
    },
    _toDataUrl () {
      this.bgDom.toDataUrl()
    }
  }
}
</script>

<style>
.bg-dom {
  height: 100%;
  width: 100%
}
</style>
