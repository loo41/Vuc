<template>
  <div ref="inputBox" class="canvas-input" :style="'height:' + H + 'px;width:' + W + 'px;padding:' + padding + 'px'" @mousedown="_checkFocus">
    <canvas class="canvas" ref="canvas" :height="H" :width="W"  v-on:click="_checkFocus"></canvas>
    <div class="input-box">
      <input
        ref="input"
        @change="_change"
        @focus="_focus"
        @blur="_blur"
        type="text"
        v-bind:value="value"
        :autofocus="autofocus? 'autofocus': null"
        :placeholder="helpText"
        :class="className"
        :disabled="disabled? 'disabled': null"
        :style="'height:' + paddingH + 'px;width:' + paddingW + 'px;' + inputStyle"
        v-on:input="_input"
      />
    </div>
  </div>
</template>

<script>
import defaultImg from '@/assets/star.png'
export default {
  name: 'vucInput',
  data () {
    return {
      input: {},
      fontStyle: {},
      fontSize: 0,
      letterSpacing: 0,
      paddingLeft: 0,
      particle: [],
      clientWidth: 0,
      img: defaultImg,
      textWidth: 0
    }
  },
  props: {
    className: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    helpText: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    H: {
      type: Number,
      default: 55
    },
    W: {
      type: Number,
      default: 300,
    },
    padding: {
      type: Number,
      default: 10
    },
    num: {
      type: Number,
      default: 10
    },
    size: {
      type: Number,
      default: 10
    },
    type: {
      type: String,
      default: 'rect' // arc square rect icon
    },
    styleType: {
      type: String,
      default: 'fill' // stroke
    },
    drawImg: {
      type: Array,
      default: () => []
    },
    color: {
      type: Array,
      default: () => ['black']
    },
    alpha: {
      type: [Number, Boolean],
      default: true
    },
    inputStyle: {
      type: String,
      default: `
        font-size: 14px;
        letter-spacing: 1px;
        border: 2px  solid #EFEFF4;
      `
    }
  },
  computed: {
    paddingH () {
      return this.H - this.padding * 2
    },
    paddingW () {
      return this.W - this.padding * 2
    }
  },
  mounted () {
    if (this.autofocus) this._focus()
    this._initData()
  },
  watch: {
    value (newValue, oldValue) {
      const index = this.input.selectionStart
      const value = this.value.slice(0, index)
      const copyValue = value.replace(/\s/ig, '&nbsp;')
      this._getWidth(copyValue) // 更新获取文本坐标定位问题
      if (oldValue === newValue) return
      this._setAnimationLocation(oldValue.length > newValue.length? false: true, oldValue)
    }
  },
  methods: {
    _moveEnd (obj) {
      let len = obj.value.length
      if (document.selection) {
        let sel = obj.createTextRange()
        sel.moveStart('character', len)
        sel.collapse()
        sel.select()
      } else if (typeof obj.selectionStart == 'number'
      && typeof obj.selectionEnd == 'number') {
        obj.selectionStart = obj.selectionEnd = len
      }
    },
    _checkFocus () {
      setTimeout(() => this.$refs.input.focus())
      this._moveEnd(this.$refs.input)
    },
    _setAnimationLocation (someDiffet, oldValue) {
      const offsetLeft = Number(this.padding)
      const clientWidth = Number(this.clientWidth)
      const paddingLeft = Number(this.paddingLeft)
      const letterSpacing = this.letterSpacing.slice(0, -2)
      const fontSize = parseInt(this.fontSize.slice(0, -2))
      /* 
        let location = 0
        value.split('').forEach((item) => {
          if (/[\u4e00-\u9fa5]/.test(item)) {
            location += parseInt(fontSize) + parseInt(letterSpacing)
          } else {
            location += parseInt(fontSize / 2) + parseInt(letterSpacing)
          }
        })
      */ 
      let location = Number(this.textWidth) + paddingLeft + offsetLeft
      const height = this.H / 2
      if (this.value.length === 0){
        this._createParticle(offsetLeft + paddingLeft, height)
        this._startAnimation()
        return
      }
      const INPUTLENGH = offsetLeft + paddingLeft + clientWidth - parseInt(fontSize / 2)
      const OVERSTEP = location > INPUTLENGH
      if (!someDiffet) {
        this._createParticle(OVERSTEP? INPUTLENGH: location, height, someDiffet)
      } else {
        this._createParticle(OVERSTEP? INPUTLENGH: location, height, someDiffet)
      }
      this._startAnimation()
    },
    _getWidth (string) {
      const span = document.createElement('span')
      span.innerHTML = string
      span.style.cssText = this.inputStyle
      this.$refs.inputBox.appendChild(span)
      this.textWidth = span.offsetWidth
      this.$refs.inputBox.removeChild(span)
    },
    _createParticle (x, y,  mergeAndSpread) {
      for (let i = 0; i < this.num; i++) {
        let aimX = Math.random() > 0.5? x + Math.random() * this.H: x - Math.random() * this.H
        let aimY = Math.random() * this.H
        x = parseInt(x)
        y = parseInt(y)
        aimX = parseInt(aimX)
        aimY = parseInt(aimY)
        this.particle.push({
          x: mergeAndSpread? aimX: x,
          y: mergeAndSpread? aimY: y,
          aimX: mergeAndSpread? x: aimX,
          aimY: mergeAndSpread? y: aimY,
          dir: this._dir(x, y, aimX, aimY),
          alpha: this.alpha === true? Math.random(): this.alpha === false? 1: this.alpha,
          comple: false,
          mergeAndSpread,
        })
      }
    },
    _dir (x, y, aimX, aimY) {
      if (aimX >= x && aimY >= y) {
        return '+-'
      }  else if (aimX >= x && aimY <= y) {
        return '++'
      } else if (aimX <= x && aimY >= y) {
        return '--'
      } else if (aimX <= x && aimY <= y) {
        return '-+'
      }
    },
    _startAnimation () {
      if (this.particle.length !== 0) {
        if (this.$refs.input !== document.activeElement) {
          this.$refs.canvas.style.zIndex = `11`
        }
        this._canvasAnimation()
        this._drawParticle()
        requestAnimationFrame(this._startAnimation)
      } else {
        if (this.$refs.input !== document.activeElement) {
          this.$refs.canvas.style.zIndex = `9`
        }
      }
    },
    _canvasAnimation () {
      for (let i = 0, len = this.particle.length; i < len; i++) {
        let item = this.particle[i]
        if (!item) return
        if (item.comple) {
          this.particle.splice(i, 1)
          i--
          return
        } else {
          if (item.mergeAndSpread) {
            this._merge(item)
          } else {
            this._spread(item)
          }
        }
      }
    },
    _merge(item) {
      if ((item.dir === '+-' || item.dir === '++') && item.x > item.aimX) {
        item.x -= 1
      } 
      if ((item.dir === '--' || item.dir === '-+') && item.x < item.aimX) {
        item.x += 1
      }
      if ((item.dir === '+-' || item.dir === '--') && item.y > item.aimY) {
        item.y -= 1
      } 
      if ((item.dir === '++' || item.dir === '-+') && item.y < item.aimY) {
        item.y += 1
      }
      if (item.x === item.aimX && item.y === item.aimY) {
        item.comple = true
      }
    },
    _spread (item) {
      if ((item.dir === '+-' || item.dir === '++') && item.aimX > item.x) {
        item.x += 0.5
      } 
      if ((item.dir === '--' || item.dir === '-+') && item.aimX < item.x) {
        item.x -= 0.5
      }
      if ((item.dir === '+-' || item.dir === '--') && item.aimY > item.y) {
        item.y += 0.5
      } 
      if ((item.dir === '++' || item.dir === '-+') && item.aimY < item.y) {
        item.y -= 0.5
      }
      if (item.dir === '+-' && item.x >= item.aimX && item.y >= item.aimY) {
        item.comple = true
      } else if (item.dir === '++' && item.x >= item.aimX && item.y <= item.aimY) {
        item.comple = true
      } else if (item.dir === '--' && item.x <= item.aimX && item.y >= item.aimY) {
        item.comple = true
      } else if (item.dir === '-+' && item.x <= item.aimX && item.y <= item.aimY) {
        item.comple = true
      }
    },
    _drawParticle () {
      this._ctx.clearRect(0, 0, this.W, this.H)
      for (let i = 0, len = this.particle.length; i < len; i++) {
        this._ctx.fillStyle = this._ctx.strokeStyle = this.color[Math.floor(this.color.length * Math.random())]
        let p = this.particle[i]
        const SIZE = this.size
        this._ctx.globalAlpha = p.alpha
        this._ctx.beginPath()
        switch(this.type) {
          case 'arc':
            this._ctx.arc(p.x, p.y, SIZE, 0, 2 * Math.PI)
            break;
          case 'rect':
            this._ctx.rect(p.x, p.y, SIZE, SIZE)
            break;
          case 'square':
            var RANDOM = p.dir
            if (this.dir === 'bottom') {
              this._ctx.moveTo(p.x, p.y)
              this._ctx.lineTo(RANDOM? p.x + SIZE: p.x - SIZE, p.y)
              this._ctx.lineTo(RANDOM? p.x + SIZE: p.x - SIZE, p.y - (SIZE / 2))
            } else {
              this._ctx.moveTo(p.x, RANDOM? p.y: p.y + Math.random() * SIZE)
              this._ctx.lineTo(RANDOM? p.x + SIZE: p.x - SIZE, p.y + (SIZE / 2))
              this._ctx.lineTo(RANDOM? p.x + SIZE: p.x - SIZE, p.y - (SIZE / 2))
            }
            break;
          case 'icon':
            var img = new Image()
            img.src = this.drawImg.length? this.drawImg[Math.floor(this.drawImg.length * Math.random())]: this.img
            this._ctx.drawImage(img, p.x, p.y, this.size, this.size)
            break;
          default:
            this._ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI)
        }
        if (this.type !== 'icon') {
          if (this.styleType === 'fill') {
            this._ctx.fill()
          } else if (this.styleType === 'stroke') {
            this._ctx.closePath()
            this._ctx.stroke()
          }
        }
      }
    },
    _initData () {
      this.input = this.$refs.input
      this.fontStyle = getComputedStyle(this.input)
      const font = this.fontStyle
      this.fontSize = font.fontSize
      this.letterSpacing = font.letterSpacing
      this.paddingLeft = font.paddingLeft.slice(0, -2)
      this.clientWidth = this.W - this.padding * 2 - this.paddingLeft * 2
      this._ctx = this.$refs.canvas.getContext('2d')
    },
    _focus (e) {
      this.$refs.canvas.style.zIndex = `11`
      this.$emit('focus', e)
    },
    _blur (e) {
      this.$emit('blur', e)
      if (this.particle.length !== 0) return
      this.$refs.canvas.style.zIndex = `9`
    },
    _change (e) {
      this.$emit('change', e, this.value)
    },
    _input (e) {
      this.$emit('input', e.target.value)
      return false
    }
  }
}
</script>

<style scoped>
input {
	outline: none;
  display: block;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 5px;
  z-index: 10;
  white-space: pre;
}
input::-ms-clear {
  display: none;
}
.canvas-input {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.canvas-input span {
  white-space: pre;
}
.input-box {
  z-index: 10
}
.canvas {
  position: absolute;
  cursor: auto;
}
</style>
