<template>
  <div ref="element" :style="'height:' + H +'px;width:' + W + 'px'" @click="click">
    <canvas ref="canvas" :height="H" :width="W"></canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {
      element: {}
    }
  },
  mounted () {
    this.init()
    this._drawImage()
  },
  props: {
    type: {
      type: String,
      default: 'blur'
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
    H: {
      type: Number,
      default: 300
    },
    W: {
      type: Number,
      default: 600
    },
    waterText: {
      type: String,
      default: 'loo41'
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
    imgUrl: {
      type: Array,
      default: () => []
    },
    click: {
      type: Function,
      default: () => {}
    }
  },
  watch: {
    type () {this.init(); this._drawImage()},
    mode () {this.init(); this._drawImage()},
    tone () {this.init(); this._drawImage()},
    imgageMode (newValue) {
      this.init()
      this._drawImage()
    },
    H () {this.init(); this._drawImage()},
    W () {this.init(); this._drawImage()},
    waterText () {this.init(); this._drawImage()},
    waterLocation () {this.init(); this._drawImage()},
    font () {this.init(); this._drawImage()},
    fontColor () {this.init(); this._drawImage()},
    cameoConst () {this._init(); this._drawImage()}
  },
  methods: {
    init () {
      const element = this.element = this.$refs.element
      if (!element.getElementsByTagName('canvas')[0]) {
        const canvas = document.createElement('canvas')
        canvas.height = this.H
        canvas.width = this.W
        element.appendChild(canvas)
      }
      const img = element.getElementsByTagName('img')[0] 
      if (img && !this.imgageMode) {
        element.removeChild(img)
      }
      this._ctx = this.element.getElementsByTagName('canvas')[0].getContext('2d')
    },
    _drawImage () {
      const img = new Image()
      if (!this.imgUrl.length) return
      img.src = this.imgUrl[0]
      img.onload = () => {
        switch (this.type) {
          case 'inverse':
            this._inverse(img)
            break;
          case 'blackWhite':
            this._blackWhite(img)
            break;
          case 'monochrome':
            this._monochrome(img)
            break;
          case 'prints':
            this._prints(img)
            break;
          case 'blur':
            this._blur(img)
            break;
          case 'watermark':
            this._watermark(img)
            break;
          case 'cameo':
            this._cameo(img)
            break;
          default:
            this._ctx.drawImage(img, 0, 0, this.W, this.H)
        }
      }
    },
    _createImage () {
      const element = this.$refs.element
      const dataUrl = element.getElementsByTagName('canvas')[0].toDataURL(`image/png`, 1)
      const childs = element.childNodes
      for(let i = childs.length - 1; i >= 0; i--) {
        element.removeChild(childs[i])
      }
      const img = document.createElement('img')
      img.src = dataUrl
      img.style.cssText = 'width: 100%; height: 100%'
      element.appendChild(img)
    },
    _copyImageData(imagedata){
     return new ImageData(new Uint8ClampedArray(imagedata.data), imagedata.width, imagedata.height)
    },
    _cameo (img) {
      this._ctx.drawImage(img, 0, 0, this.W, this.H)
      const imgData = this._ctx.getImageData(0, 0, this.W, this.H)
      const tempCanvasData = this._copyImageData(imgData)
      for ( let x = 0; x < tempCanvasData.width - 1; x++) {
        for ( let y = 0; y < tempCanvasData.height - 1; y++) {
          let idx = (x + y * tempCanvasData.width) * 4
          let bidx = ((x-1) + y * tempCanvasData.width) * 4
          let aidx = ((x+1) + y * tempCanvasData.width) * 4

          let nr = tempCanvasData.data[aidx + 0] - tempCanvasData.data[bidx + 0] + this.cameoConst
          let ng = tempCanvasData.data[aidx + 1] - tempCanvasData.data[bidx + 1] + this.cameoConst
          let nb = tempCanvasData.data[aidx + 2] - tempCanvasData.data[bidx + 2] + this.cameoConst
          nr = (nr < 0) ? 0 : ((nr >255) ? 255 : nr)
          ng = (ng < 0) ? 0 : ((ng >255) ? 255 : ng)
          nb = (nb < 0) ? 0 : ((nb >255) ? 255 : nb)

          imgData.data[idx + 0] = nr  
          imgData.data[idx + 1] = ng   
          imgData.data[idx + 2] = nb  
          imgData.data[idx + 3] = 255
        }
      }
      this._ctx.putImageData(imgData, 0, 0)
      if (this.imgageMode) this._createImage()
    },
    _watermark (img) {
      this._ctx.drawImage(img, 0, 0, this.W, this.H)
      this._ctx.font = this.font
      this._ctx.fillStyle = this.fontColor
      this._ctx.fillText(this.waterText, this.waterLocation[0], this.waterLocation[1])
      if (this.imgageMode) this._createImage()
    },
    _blur (img) {
      this._ctx.drawImage(img, 0, 0, this.W, this.H)
      const imgData = this._ctx.getImageData(0, 0, this.W, this.H)
      let pixes = imgData.data
      let width = imgData.width
      let height = imgData.height
      let gaussMatrix = [],
        gaussSum = 0,
        x, y,
        r, g, b, a,
        i, j, k, len;
      let radius = 30
      let sigma = 5
      a = 1 / (Math.sqrt(2 * Math.PI) * sigma)
      b = -1 / (2 * sigma * sigma);
      for (i = 0, x = -radius; x <= radius; x++, i++){
        g = a * Math.exp(b * x * x)
        gaussMatrix[i] = g
        gaussSum += g
      }
      for (i = 0, len = gaussMatrix.length; i < len; i++) {
        gaussMatrix[i] /= gaussSum
      }
      for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
          r = g = b = a = 0
          gaussSum = 0
          for(j = -radius; j <= radius; j++){
              k = x + j
              if(k >= 0 && k < width) {
                  i = (y * width + k) * 4
                  r += pixes[i] * gaussMatrix[j + radius]
                  g += pixes[i + 1] * gaussMatrix[j + radius]
                  b += pixes[i + 2] * gaussMatrix[j + radius]
                  gaussSum += gaussMatrix[j + radius]
              }
          }
          i = (y * width + x) * 4
          pixes[i] = r / gaussSum
          pixes[i + 1] = g / gaussSum
          pixes[i + 2] = b / gaussSum
        }
      }
      for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
          r = g = b = a = 0
          gaussSum = 0
          for(j = -radius; j <= radius; j++) {
            k = y + j;
            if(k >= 0 && k < height) {
              i = (k * width + x) * 4
              r += pixes[i] * gaussMatrix[j + radius]
              g += pixes[i + 1] * gaussMatrix[j + radius]
              b += pixes[i + 2] * gaussMatrix[j + radius]
              gaussSum += gaussMatrix[j + radius]
            }
          }
          i = (y * width + x) * 4
          pixes[i] = r / gaussSum
          pixes[i + 1] = g / gaussSum
          pixes[i + 2] = b / gaussSum
        }
      }
      this._ctx.putImageData(imgData, 0, 0)
      if (this.imgageMode) this._createImage()
    },
    _prints (img) {
      this._ctx.drawImage(img, 0, 0, this.W, this.H)
      const imageData = this._ctx.getImageData(0, 0, this.W, this.H)
      const imageData_length = imageData.data.length / 4;
  
      for (let i = 0; i < imageData_length; i++) {
        const red = imageData.data[i * 4]
        const green = imageData.data[i * 4 + 1]
        const blue = imageData.data[i * 4 + 2]
        const gray = 0.3 * red + 0.59 * green + 0.11 * blue
        let new_black
        if (gray > this.tone) {
          new_black = 255
        } else {
          new_black = 0
        }
        imageData.data[i * 4] = new_black
        imageData.data[i * 4 + 1] = new_black
        imageData.data[i * 4 + 2] = new_black
      }
      this._ctx.putImageData(imageData, 0, 0)
      if (this.imgageMode) this._createImage()
    },
    _monochrome (img) {
      this._ctx.drawImage(img, 0, 0, this.W, this.H)
      const imageData = this._ctx.getImageData(0, 0, this.W, this.H)
      const imageData_length = imageData.data.length / 4
      for (let i = 0; i < imageData_length; i++) {
        if (this.mode === 'red') {
          imageData.data[i * 4 + 1] = 0
          imageData.data[i * 4 + 2] = 0
        }
        if (this.mode === 'green') {
          imageData.data[i * 4 + 0] = 0
          imageData.data[i * 4 + 2] = 0
        }
        if (this.mode === 'blue') {
          imageData.data[i * 4 + 0] = 0
          imageData.data[i * 4 + 1] = 0
        }
      }
      this._ctx.putImageData(imageData, 0, 0)
      if (this.imgageMode) this._createImage()
    },
    _blackWhite (img) {
      this._ctx.drawImage(img, 0, 0, this.W, this.H)
      const imageData = this._ctx.getImageData(0, 0, this.W, this.H)
      const imageData_length = imageData.data.length / 4
      for (let i = 0, len = imageData_length; i < len; i++) {
          const red = imageData.data[i * 4]
          const green = imageData.data[i * 4 + 1]
          const blue = imageData.data[i * 4 + 2]
          const gray = 0.3 * red + 0.59 * green + 0.11 * blue
          imageData.data[i * 4] = gray
          imageData.data[i * 4 + 1] = gray
          imageData.data[i * 4 + 2] = gray
      }
      this._ctx.putImageData(imageData, 0, 0)
      if (this.imgageMode) this._createImage()
    },
    _inverse (img) {
      this._ctx.drawImage(img, 0, 0, this.W, this.H)
      const imageData = this._ctx.getImageData(0, 0, this.W, this.H)
      const imageData_length = imageData.data.length / 4
      for (let i = 0, len = imageData_length; i < len; i++) {
          imageData.data[i * 4] = 255 - imageData.data[i * 4]
          imageData.data[i * 4 + 1] = 255 - imageData.data[i * 4 + 1]
          imageData.data[i * 4 + 2] = 255 - imageData.data[i * 4 + 2]
      }
      this._ctx.putImageData(imageData, 0, 0)
      if (this.imgageMode) this._createImage()
    }
  }
}
</script>

<style>

</style>
