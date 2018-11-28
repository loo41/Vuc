<template>
  <div>
    <canvas 
      class="canvas" 
      ref="canvas" 
      :height="H" 
      :width="W"
      :style="background? 'background:' + background: ''"
      @click="_changeQr">
    </canvas>
  </div>
</template>

<script>
import drawImg from './assets/star.png'
export default {
  data () {
    return {
      particle: [],
      textQr: '',
      img: drawImg
    }
  },
  mounted () {
    this.init()
    this._create()
    this._draw()
    if (this.random) {
      this.textQr = this._createRandomText()
      this._createText(this.textQr)
    } else {
      this._createText(this.text)
    }
  },
  props: {
    H: {
      type: Number,
      default: 150
    },
    W: {
      type: Number,
      default: 300
    },
    color: {
      type: Array,
      default: () => []
    },
    font: {
      type: Array,
      default: () => [60, 80]
    },
    text: {
      type: String,
      default: 'loo41'
    },
    textColor: {
      type: Array,
      default: () => []
    },
    random: {
      type: Boolean,
      default: false
    },
    randomType: {
      type: String,
      default: ''
    },
    randomLength: {
      type: Number,
      default: 4
    },
    background: {
      type: String,
      default: 'rgba(0, 0, 0, 0.2)'
    },
    fontFamily: {
      type: String,
      default: 'Arial'
    },
    clickStatus: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'arc'
    },
    styleType: {
      type: String,
      default: 'stroke'
    },
    size: {
      type: Number,
      default: 5
    },
    drawImg: {
      type: Array,
      default: () => []
    },
    interfereNum: {
      type: Number,
      default: 5
    },
    interfereWidth: {
      type: Array,
      default: () => [1, 5]
    },
    textValue: {
      type: Function,
      default: () => {}
    },
    clickQr: {
      type: Function,
      default: () => {}
    }
  },
  watch: {
    text () {
      if (!this.random) {
        this._newQr()
      }
    },
    H () {this._newQr()},
    W () {this._newQr()},
    font () {this._newQr()},
    color () {this._newQr()},
    random () {
      this.textQr = this._createRandomText()
      this._newQr()
    },
    styleType () {this._newQr()},
    type () {this._newQr()}
  },
  methods: {
    _changeQr () {
      if (this.clickStatus) {
        if (!this.random) return this.clickQr(this.text)
        this.textQr = this._createRandomText()
        this.clickQr(this.textQr)
      } else {
        return
      }
      this.$nextTick(() => {
        this._newQr()
      })
    },
    _createRandomText () {
      let textArray = []
      for (let i = 0; i < this.randomLength; i++) {
        if (this.randomType === 'math') {
          textArray.push(this._random(1, 9))
        } else if (this.randomType === 'string') {
          textArray.push(this._str())
        } else {
          textArray.push(Math.random() > 0.5? this._random(1, 9): this._str())
        }
      }
      return textArray.join('')
    },
    _str () {
      let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      let index = Math.floor(Math.random() * 51)
      return string.substring(index, index + 1)
    },
    _newQr () {
      this.random? this.textValue(this.textQr): this.textValue(this.text)
      this._ctx.clearRect(0, 0, this.W, this.H)
      this.particle = []
      this._create()
      this._draw()
      this._createText(this.random? this.textQr: this.text)
    },
    init () {
      this._ctx = this.$refs.canvas.getContext('2d')
    },
    _create () {
      for (let i = 0; i < 150; i++) {
        this.particle.push({
          x: Math.floor(this.W * Math.random()),
          y: Math.floor(this.H * Math.random()),
          color: this.color.length? this.color[Math.floor(Math.random() * this.color.length)]: this._randomColor()
        })
      }
    },
    _draw () {
      const ctx = this._ctx
      for (let i = this.particle.length - 1; i >= 0; i--) {
        const item = this.particle[i]
        this._ctx.fillStyle = this._ctx.strokeStyle = item.color
        this._ctx.beginPath()
        switch (this.type) {
          case 'rect':
            this._ctx.rect(item.x, item.y, this.size, this.size)
            break;
          case 'arc':
            this._ctx.arc(item.x, item.y, this.size, 0, 2 * Math.PI)
            break;
          case 'icon':
            var img = new Image()
            img.src = this.drawImg.length? this.drawImg[Math.floor(this.drawImg.length * Math.random())]: this.img
            this._ctx.drawImage(img, item.x, item.y, this.size, this.size)
            break;
          default:
            this._ctx.rect(item.x, item.y, this.size, this.size)
        }
        if (this.type !== 'icon') {
          if (this.styleType == 'stroke') {
            this._ctx.lineWidth = this._random(1, 4)
            this._ctx.stroke()
          } else {
            this._ctx.fill()
          }
        }
      }
      for (let i = 0; i < this.interfereNum; i++) {
        ctx.beginPath()
        ctx.moveTo(this._random(0, this.W), this._random(0, this.H))
        ctx.lineTo(this._random(0, this.W), this._random(0, this.W))
        ctx.strokeStyle = this._randomColor()
        ctx.lineWidth = this._random(this.interfereWidth[0], this.interfereWidth[1])
        ctx.stroke()
      }
    },
    _createText (text) {
      const LEBGTH = this.W / text.length
      for (let i = 0, len = text.length; i < len; i++) {
        this._drawText(text[i], this._random(this._sureStartLocation(i, text), LEBGTH * (i + 1) - this.font[1]), i)
      }
    },
    _sureStartLocation (i, text) {
      const LEBGTH = this.W / text.length
      if (!i) {
        return LEBGTH * i + this.font[1]
      } else if (i + 1 === text.length) {
        return LEBGTH * i
      } else {
        return LEBGTH * i + (this.font[1] / 2)
      }
    },
    _drawText (text, location, i) {
      const color = this.textColor.length? this.textColor[Math.floor(Math.random() * this.textColor.length)]: this._randomColor(10, 255)
      this._ctx.fillStyle = color
      this._ctx.font = `${this._random(this.font[0], this.font[1])}px ${this.fontFamily}`
      const y = this._random((this.font[1]), (this.H - (this.font[1] / 2)) )
      this._ctx.translate(location, y)
      const DEG = i? this._random(-45, 45): this._random(-5, 5)
      this._ctx.rotate(DEG * Math.PI / 180)
      this._ctx.fillText(text, 0, 0)
      this._ctx.rotate(-DEG * Math.PI / 180)
      this._ctx.translate(-location, -y)
    },
    _random (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    _randomColor (start, end) {
      if (this.color.length) return this.color[Math.floor(this.color * Math.random())]
      const r = this._random(start? start: 0, end? end: 255)
      const g = this._random(start? start: 0, end? end: 255)
      const b = this._random(start? start: 0, end? end: 255)
      let a = Math.random().toFixed(1)
      a = a > 0.7? a : 0.7
      return `rgba(${r}, ${g}, ${b}, ${a})`
    }
  }
}
</script>

<style>
.canvas {
  display: block;
}
</style>
