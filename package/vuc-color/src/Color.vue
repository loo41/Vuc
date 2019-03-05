<template>
  <div class="container" ref="container">
    <div class="img-box" ref="bgImg" v-show="arise" :style="'height:' + size[0] + 'px;width:' + size[1] + 'px'">
    </div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {
        height: 0,
        width: 0
      },
      arise: false,
      draImg: '',
      wrp: {
        left: 0,
        top: 0
      },
      imageData: [],
      colorCon: []
    }
  },
  props: {
    H: {
      type: Number
    },
    W: {
      type: Number
    },
    img: {
      type: String
    },
    update: {
      type: Function,
      default: () => {}
    },  
    colour: {
      type: Function,
      default: () => {}
    },
    draft: {
      type: Boolean,
      default: true
    },
    size: {
      type: Array,
      default: () => [30, 30]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this._getHeight().then(() => {
        const {height, width} = this.info
        let canvas = this.$refs.canvas
        canvas.height = height
        canvas.width = width
        this._ctx = canvas.getContext('2d')
        const Img = document.createElement('img')
        Img.src = this.draImg || this.img
        this._ctx.drawImage(Img, 0, 0, width, height)
        this.imageData = this._ctx.getImageData(0, 0, width, height).data
        this._getOffset()
        this.initEvent()
      })
    },
    _getOffset () {
      let less = this.$refs.canvas
      let x = less.offsetLeft, y = less.offsetTop
      while (less.offsetParent) {
        less = less.offsetParent
        x += less.offsetLeft
        y += less.offsetTop
      }
      this.wrp.left = x
      this.wrp.top = y
    },
    initEvent () {
      const {height, width} = this.info
      this.$refs.container.onclick = (e) => {
        let colorCon = []
        let {clientX, clientY} = e
        let X = clientX - this.wrp.left
        let Y = clientY - this.wrp.top
        let u = ((Y - 1) * width * 4) + ((X - 1) * 4)
        for (let len = u + 4, i = u; i < len; i++) {
          colorCon.push(this.imageData[i])
        }
        this.colour(colorCon)
      }
      this.$refs.container.onmousemove = (e) => {
        const {clientX, clientY} = e
        let X = clientX - this.wrp.left
        let Y = clientY - this.wrp.top
        this.$refs.bgImg.style.cssText = `
          height: ${this.size[0]}px;
          width: ${this.size[1]}px;
          left: ${X}px;
          top: ${Y}px
        `
      }
      this.$refs.container.onmouseleave = (e) => {
        this.arise = false
      }
      this.$refs.container.onmouseover = (e) => {
        this.arise = true
      }
      if (this.draft) {
        this.$refs.container.ondragover = function (e) {
          e.preventDefault()
          e.stopPropagation()
        }
        this.$refs.container.ondrop = (e) => {
          e.preventDefault()
          if (navigator.userAgent.indexOf("Chrome") === -1) e.stopPropagation()
          let paper = e.dataTransfer.files[0];
          const {type} = paper
          if (!/^image/.test(type)) {
            return console.warn('不是图片类型，不支持操作')
          }
          let file = new FileReader();
          file.readAsDataURL(paper)
          file.onload = () => {
            this.draImg = file.result
            this.update(paper, file.result)
            this.init()
          }
        }
      }
    },
    _getHeight () {
      return new Promise((resolve, reject) => {
        const {H, W} = this
        const Img = document.createElement('img')
        Img.src = this.draImg || this.img
        if (H || W) {
          if (H) {
            Img.style.height = H + 'px'
          } else {
            Img.style.width = W + 'px'
          }
          this.$refs.container.appendChild(Img)
        } else {
          this.$refs.container.appendChild(Img)
        }
        Img.onload = () => {
          this.info.height = Img.clientHeight
          this.info.width = Img.clientWidth
          this.$refs.container.removeChild(Img)
          resolve()
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  overflow: hidden;
}
.no-select {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.img-box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-image: url('./assets/xs.png');
  background-size: 100% 100%;
  transform: translate(0%, -90%);
  background-repeat: no-repeat;
}
</style>
