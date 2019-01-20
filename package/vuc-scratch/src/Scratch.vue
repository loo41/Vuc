<template>
  <div class="wrapper" :style="'height:' + H + 'px;' + 'width:' + W + 'px'" ref="scratchBox">
    <div class="content-box">
      <slot name="content"></slot>
    </div>
    <canvas :height="H" :width="W" ref="canvas" on/>
    <div class="imgBox" ref="imgIcon"></div>
  </div>
</template>

<script>
import img from '@/assets/rect.png'
export default {
  data () {
    return {
      ctx: {},
      scratchBox: {},
      move: false,
      boxX: 0,
      boxY: 0,
      img: img,
      pc: true,
      baseData: {
        H: 0,
        W: 0
      },
      cursor: {
        X: 0,
        Y: 0
      }
    }
  },
  props: {
    H: {
      type: Number,
      default: 100
    },
    W: {
      type: Number,
      default: 350
    },
    size: {
      type: Array,
      default: () => [35, 35]
    },
    scratchColor: {
      type: String,
      default: '#D1D1D1'
    },
    recover: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    recover (value) {
      if (this.recover) {
        this.ctx.clearRect(0, 0, this.W, this.H)
        this.init()
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const scratchBox = this.scratchBox = this.$refs.scratchBox
      this.baseData.W = scratchBox.offsetLeft
      this.baseData.H = scratchBox.offsetTop
      this.ctx = this.$refs.canvas.getContext('2d')
      this.ctx.fillStyle = this.scratchColor
      this.ctx.fillRect(0, 0, this.W, this.H)
      this._setEvent()
      this._getLocation()
    },
    _checkPC () {
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        return false
      } else {
        return true
      }
    },
    _setEvent () {
      const pc = this._checkPC()
      this.pc = pc
      const that = this
      if (pc) {
        this.scratchBox.addEventListener('mouseup', function (e) {
          that.move = false
        })
        this.scratchBox.addEventListener('mousedown', function(e) {
          that._startMove(e)
        })
        this.scratchBox.addEventListener('mousemove', function(e) {
          that._move(e)
        })
        this.scratchBox.addEventListener('mouseleave', function() {
          that._moveEnd()
        })
      } else {
        this.scratchBox.addEventListener('touchstart', function(e) {
          that._startMove(e)
        })
        this.scratchBox.addEventListener('touchmove', function(e) {
          that._move(e)
        })
        this.scratchBox.addEventListener('touchend', function() {
          that._moveEnd()
        })
      }
    },
    _startMove (e) {
      this.move = true
      let {pageX, pageY} = this.pc? e: e.touches[0]
      const {boxX, boxY} = this
      this._clearPX(pageX - boxX, pageY - boxY)
    },
    _moveEnd () {
      this.$refs.imgIcon.style.display = 'none'
      this.move = false
    },
    _move (e) {
      let {pageX, pageY} = this.pc? e: e.touches[0]
      const {boxX, boxY} = this
      const flag = this._checkBorder(pageX, pageY, boxX, boxY)
      this.$refs.imgIcon.style.cssText = `
        left: ${flag[0]}px;
        top: ${flag[1]}px;
        height: ${this.size[0]}px; 
        width: ${this.size[1]}px;
        background: url(${this.img}) no-repeat;
        background-size: 100% 100%;
        display: block;
      `
      if (!this.move) return
      this._clearPX(pageX - boxX, pageY - boxY)
    },
    _clearPX (X, Y) {
      this.ctx.clearRect(X - (this.size[0] / 2), Y - (this.size[1] / 2), this.size[0], this.size[1])
    },
    _checkBorder ($1, $2, $3, $4) {
      const {H, W} = this
      let flag = []
      if ($1 - $3 < this.size[0] / 2) {
        flag[0] = this.size[0] / 2
      } else if ($1 - $3 > (W - this.size[0] / 2)) {
        flag[0] = W - this.size[0] / 2
      } else {
        flag[0] = $1 - $3
      }
      if ($2 - $4 < this.size[1] / 2) {
        flag[1] = this.size[1] / 2
      } else if ($2 - $4 > (H - this.size[1] / 2)) {
        flag[1] = H - this.size[1] / 2
      } else {
        flag[1] = $2 - $4
      }
      return flag
    },
    _getLocation () {
      const obj = this.$refs.scratchBox
      let boxX = obj.offsetLeft
      let boxY = obj.offsetTop
      let positionParent = obj.offsetParent
      while (positionParent && positionParent != null) {
        boxX += positionParent.offsetLeft
        boxY += positionParent.offsetLeft
        positionParent = positionParent.offsetParent
      }
      this.boxX = boxX
      this.boxY = boxY
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  overflow: hidden;
  cursor: crosshair
}
.wrapper * {
  -moz-user-select:none;
  -webkit-user-select:none;
  -ms-user-select:none;
  -khtml-user-select:none;
  user-select:none;
}
canvas {
  position: absolute;
  left: 0;
  top: 0;
}
.imgBox {
  position: absolute;
  z-index: 10;
  transform: translate(-50%, -50%);
}
.content-box {
  height: 100%;
  width: 100%
}
</style>
