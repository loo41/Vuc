<template>
  <div class="box">
    <div class="canvas-box" :style="'height:' + H + 'px;width:' + W + 'px'">
    <canvas :height="H" :width="W" ref="canvas" class="cnavas">
    </canvas>
    <div class="canvas-img" :style="'height:' + H + 'px;width:' + W + 'px'">
      <div class="img-box" ref="canvasImg">
        <div v-for="(item, inx) in imgs" :key="inx" :style="inx === index? 'z-index: 11': ''">
          <img :src="item" :height="H" :width="W" />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import anime from 'animejs'
import drawImg from './assets/star.png'
export default {
  data () {
   return {
      particle: [],
      img: [drawImg]
   }
  },
  mounted () {
    this.initDom()
    setTimeout(() => {
      this._animation()
    }, this.time)
  },
  created () {
    this.init()
  },
  props: {
    imgs: {
      type: Array,
      default: () => []
    },
    index: {
      type: Number,
      default: 0
    },
    H: {
      type: Number,
      default: 300
    },
    W: {
      type: Number,
      default: 600
    },
    dir: {
      type: String,
      default: 'left'
    },
    color: {
      type: Array,
      default: () => {
        return ['white']
      }
    },
    speed: {
      type: Number,
      default: 0
    },
    Vx: {
      type: Number,
      default: 1,
    },
    Vy: {
      type: Number,
      default: 1,
    },
    time: {
      type: Number,
      default: 5000
    },
    size: {
      type: Number,
      default: 15
    },
    effect: {
      type: String,
      default: 'easeInQuad'
    },
    type: {
      type: String,
      default: 'arc' // arc square rect icon
    },
    styleType: {
      type: String,
      default: 'fill' // stroke
    },
    space: {
      type: Number,
      default: 200
    },
    nums: {
      type: Number,
      default: 20,
    },
    drawImg: {
      type: Array,
      default: () => []
    },
    pause: {
      type: Boolean,
      default: false
    },
    complete: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    initDom () {
      this._ctx = this.$refs.canvas.getContext('2d')
      this.dom = this.$refs.canvasImg.getElementsByTagName('div')
    },
    init () {
      this.len = this.imgs.length
    },
    _animation () {
      if (this.len <= 0 || this.pause) return
      anime({
        targets: { value: 0 },
        value: 100,
        duration: this.time,
        easing: this.effect,
        update: (anim) => {
          this._initAnimation({
            location: anim.animatables[0].target.value
          })
          this._renderParticles()
          this._cnavasAnimation()
        },
        complete: () => {
          this.cartoon = requestAnimationFrame(this._clearAnimation)
        }
      })
    },
    _clearAnimation () {
      if (this.particle.length < 10) {
        this._ctx.clearRect(0, 0, this.W, this.H)
        let index = this.index
        this.complete(this.index)
        if (this.index === this.len - 1) index = -1
        index = index + 1
        this.index = index
        this.particle = []
        setTimeout(() => {this._animation()}, this.time)
        return
      } else {
        this._renderParticles()
        this._cnavasAnimation()
        requestAnimationFrame(this._clearAnimation)
      }
    },
    _initAnimation ({location}) {
      const DIR = this.dir
      let W = DIR === 'bottom'? this.H: this.W
      let H = DIR === 'bottom'? this.W: this.H
      const LOCATION = W - (W / 100) * location
      this.dom[this.index + 1 > this.len - 1? 0: this.index + 1].style.cssText = `z-index: 9`
      this.dom[this.index].style.cssText = `${DIR === 'bottom'? 'height': 'width'}: ${LOCATION}px; z-index: 10`
      for (let i = Math.floor(Math.random() * this.space), len = H; i < len; i += Math.floor(Math.random() * this.space)) {
        this.particle.push({
          x: DIR === 'bottom'? i: LOCATION,
          y: DIR === 'bottom'? LOCATION: i,
          Vx: this.Vx,
          Vy: this.Vy,
          alpha: Math.random(),
          dir: Math.random() > 0.5,
          life: Math.floor(Math.random() < 0.5? Math.floor(this.nums / 2): Math.floor(Math.random() * this.nums / 2)),
          direction: Math.random() < 0.1? '-': '+'
        })
      }
    },
    _cnavasAnimation () {
      for (let i = 0, len = this.particle.length; i < len; i++) {
        let item = this.particle[i]
        if (!item) return
        if (item.life <= 0) {
          this.particle.splice(i, 1)
        } else {
          item.life--
          switch (this.dir) {
            case 'bottom':
              item.direction === '-'? item.y -= item.Vy: item.y += item.Vy
              item.y += this.speed
              break;
            case 'left':
              item.direction === '-'? item.x -= item.Vx: item.x += item.Vx
              item.y += this.speed
              break;
          }
        }
      }
    },
    _renderParticles () {
      this._ctx.clearRect(0, 0, this.W, this.H)
      for (let i = 0, len = this.particle.length; i < len; i++) {
        this._ctx.fillStyle = this._ctx.strokeStyle = this.color[Math.floor(Math.random() * this.color.length)]
        const p = this.particle[i]
        if (p.life > 0) {
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
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.canvas-box {
  position: relative;
  margin: 0 auto;
}
.canvas-img {
  overflow: hidden;
  position: absolute;
  top: 0;
}
.img-box {
  height: 100%;
  width: 100%;
  position: relative;
}
.img-box div{
  height: 100%;
  width: 100%;
  overflow: hidden;
  left: 0;
  position: absolute;
}
.img-box div img {
  display: block;
  left: 0;
  top: 0;
  position: absolute;
}
.cnavas {
  z-index: 11;
  left: 0;
  position: absolute;
}
</style>
