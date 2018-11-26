## vuc-image

---

### Install

```
    npm install --save vuc-image
    
    yarn add vuc-image
```

---

### Basic use 

```
    全局
    
    import vucImage from 'vuc-image'
    Vue.use(vucImage)
    
    局部
    import {vucImage} from 'vuc-image'
    export default {
      components: {vuc-image}
    }
    
```

---

### 全局属性方法

|   属性   |      类型      |   默认值  |    说明    |
|----------| ------------- | ---------- | ---------- |
| type     | string        |  blur      |         图像模式 (blur inverse blackWhite monochrome prints blur watermark cameo)   |
| mode     | string        |     red    | monochrome模式下的色值选择（red green blue |
| tone    | number          | 126       | prints 模式下对比值 |
| imgageMode | boolean      | false     | 图像模式 |
| H        | number        | 300        | 高|
| W        | number        | 600        | 宽|
|waterText   | string        | loo41    | watermark模式下的水印文字 |
|waterLocation| array      | [30, 100]  | watermark模式文字的起始坐标 |
| font     | string        | 30px Georgia |  watermark模式文字样式     |
| fontColor| string        | white      | watermark模式文字颜色|
|cameoConst | number    | 128           | cameo 模式下对比值 |
| imgUrl  | Array         | []          | 图片只取第一张 |
| click   | fun           |             | 图片点击事件 |




### 欢迎 pr issues star


