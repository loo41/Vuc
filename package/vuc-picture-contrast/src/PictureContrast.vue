<template>
  <div class="wrapper" ref="wrapper" :style="'height:' + H + 'px;width:' + W +'px'">
    <div><img :src="img[0]" class="full no-select" /></div>
    <div ref="imgBox">
      <div ref="image" class="image">
        <img :src="img[1]" v-if="img[1]" class="full"/>
        <vuc-image
          :H="H"
          :W="W"
          :type="type"
          :imgUrl="[img]"
          :mode="mode"
          :tone="tone"
          :imgageMode="imgageMode"
          :waterText="waterText"
          :waterLocation="waterLocation"
          :font="font"
          :fontColor="fontColor"
          :cameoConst="cameoConst"
          :click="click"
          v-else="img[1]" 
        />
      </div>
      <div class="resize" ref="resize"></div>
    </div>
  </div>
</template>

<script>
import moveIcon from '@/assets/move.png'
import {vucImage} from 'vuc-image'
export default {
  data () {
    return {
      moveIcon: moveIcon,
      move: false,
      speed: 1,
      speedDir: true
    }
  },
  components: {vucImage},
  props: {
    H: {
      type: Number,
      default: 300
    },
    W: {
      type: Number,
      default: 500
    },
    dir: {
      type: String,
      default: 'top'
    },
    img: {
      type: Array
    },
    pro: {
      type: Array,
      default: () => [250, 150]
    },
    type: {
      type: String,
      default: 'blackWhite'
    },
    mode: {
      type: String,
      default: 'red'
    },  
    tone: {
      type: Number,
      default: 126
    },
    imgageMode: {
      type: Boolean,
      default: false
    },
    waterText: {
      type: String,
      default: 'VUC'
    },
    waterLocation: {
      type: Array,
      default: () => {
        return [30, 100]
      }
    },
    font: {
      type: String,
      default: '30px Georgia'
    },
    fontColor: {
      type: String,
      default: 'white'
    },
    cameoConst: {
      type: Number,
      default: 128
    },
    click: {
      type: Function,
      default: () => {}
    }
  },
  mounted () {
    this.init()
    this.initLay()
    this._setEvent()
  },
  watch: {
    dir (oldDir, newDir) {
      if (oldDir !== newDir) {
        this.initLay()
        this._setEvent()
      }
    }
  },
  methods: {
    init () {
      this.imgBox = this.$refs.imgBox
      this.image = this.$refs.image
      this.resize = this.$refs.resize
      this.wrapper = this.$refs.wrapper
    },
    initLay () {
      switch(this.dir) {
        case 'left':
          this.image.style.cssText = this.imgBox.style.cssText = `left: 0; top: 0; width: ${this.pro[0]}px`
          this.resize.style.cssText = 'width: 40px; height: 100%; right: -20px; cursor: e-resize'
          break
        case 'top':
          this.image.style.cssText = this.imgBox.style.cssText = `left: 0; top: 0; height: ${this.pro[1]}px`
          this.resize.style.cssText = 'width: 100%; height: 40px; bottom: -20px; cursor: s-resize'
          break
      }
    },
    _checkPC () {
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        return false
      } else {
        return true
      }
    },
    _setEvent () {
      const pc = this.pc =this._checkPC()
      this.pc = pc
      const that = this
      if (pc) {
        this.resize.addEventListener('mouseup', function (e) {
          that.move = false
        })
        this.resize.addEventListener('mousedown', that._startMove)
        this.resize.addEventListener('mousemove', that._move)
        this.resize.addEventListener('mouseleave', that._moveEnd)
        this.wrapper.addEventListener('DOMMouseScroll', that._wheel)
        this.wrapper.onmousewheel = that._wheel // ie
      } else {
        this.resize.addEventListener('touchstart', that._startMove)
        this.resize.addEventListener('touchmove', that._move)
        this.resize.addEventListener('touchend', that._moveEnd)
      }
    },
    _startMove (e) {
      this.move = true
      this.clientX = e.clientX
      this.clientY = e.clientY
    },
    _move (e, value) {
      if (!this.move && !value) return
      const {clientX, clientY} = this.pc? e: e.touches[0]
      if (this.dir === 'top') {
        let h = this.imgBox.clientHeight
        this.image.style.height = this.imgBox.style.height = `${h + (value? value: (clientY - this.clientY))}px`
        if (this.imgBox.clientHeight >= this.H) {
          this.image.style.height = this.imgBox.style.height = this.H + 'px'
        } else if (this.imgBox.clientHeight <= 0) {
          this.image.style.height = this.imgBox.style.height = '0px'
        }
        this.clientY = clientY
      } else {
        let w = this.imgBox.clientWidth
        this.image.style.width = this.imgBox.style.width = `${w + (value? value: (clientX - this.clientX))}px`
        if (this.imgBox.clientWidth >= this.W) {
          this.image.style.width = this.imgBox.style.width = this.W + 'px'
        } else if (this.imgBox.clientWidth <= 0) {
          this.image.style.width = this.imgBox.style.width = '0px'
        }
        this.clientX = clientX
      }
    },
    _moveEnd (e) {
      this.move = false
    },
    _wheel (event) {
      let delta = 0
      if (!event) event = window.event
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120
        if (window.opera) delta = -delta
      } else if (event.detail) {
        delta = -event.detail / 3
      }
      if (delta)
        this._handle(delta, event)
    },
    _handle (delta, e) {
      if (delta > 0) {
        if (!this.speedDir) {
          this.speed = 1
          this.speedDir = true
        }
        this._move(e, this.speed += 1)
      } else {
        if (this.speedDir) {
          this.speed = -1
          this.speedDir = false
        }
        this._move(e, this.speed -= 1)
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  overflow: hidden;
  cursor: move
}
.no-select {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.wrapper div{
  width: 100%;
  height: 100%;
  position: absolute;
}
.resize {
  z-index: 5;
}
.full {
  height: 100%;
  width: 100%
}
.image {
  overflow: hidden;
}
</style>
