## vuc-picture-contrast

---

|   名     |                                链接                                 |
|----------| ------------------------------------------------------------------- |
| English document | [👀](https://github.com/loo41/vuc/blob/master/package/vuc-picture-contrast/README.md)|
|例子| [👀](https://github.com/loo41/Vuc/tree/master/package/vuc-picture-contrast/example)|


---

### 安装

```
    npm install --save vuc-picture-contrast
    
    yarn add vuc-picture-contrast
```

---


### 使用

```
    全局
    
    import vucPictureContrast from 'vuc-picture-contrast'
    Vue.use(vucPictureContrast)
    
    局部
    import {vucPictureContrast} from 'vuc-picture-contrast'
    export default {
      components: {vucPictureContrast}
    }
    
```

---

### 全局属性方法

|   属性   |      类型      |   默认值  |    说明    |
|----------| ------------- | ---------- | ---------- |
| H        | number        | 300        | 高|
| W        | number        | 500        | 宽|
| type     | string        |  blur      |         图像模式 (blur inverse blackWhite monochrome prints blur watermark cameo)   |
| mode     | string        |     red    | monochrome模式下的色值选择（red green blue |
| tone    | number          | 126       | prints 模式下对比值 |
| imgageMode | boolean      | false     | 图像模式 |
|waterText   | string        | loo41    | watermark模式下的水印文字 |
|waterLocation| array      | [30, 100]  | watermark模式文字的起始坐标 |
| font     | string        | 30px Georgia |  watermark模式文字样式     |
| fontColor| string        | white      | watermark模式文字颜色|
|cameoConst | number    | 128           | cameo 模式下对比值 |
| click   | fun           |             | 图片点击事件 |
| dir     | string       | top          | top / left |
| img     | Array        | []           | (必须) 第一个值为基础图片， 第二个为可以d自定义图片     |


### 提示

- canvas 跨域问题
- 支持滚动和移动 
