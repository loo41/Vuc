## vuc-image

---

[中文文档](https://github.com/loo41/vuc/blob/master/package/vuc-image/doc/Chinese.md)

---

### Install

```
    npm install --save vuc-image
    
    yarn add vuc-image
```

---

### Basic use

```
    // Global
    
    import vucImage from 'vuc-image'
    Vue.use(vucImage)
    
    // Local
    
    import {vucImage} from 'vuc-image'
    export default {
      components: {vucImage}
    }
    
```

---

### Global Attribute Method

|   Attribute   |      Type     |   Default value  |    Explain    |
|----------| ------------- | ---------- | ---------- |
| type     | string        |  blur      | Image mode  (blur inverse blackWhite monochrome prints blur watermark cameo)   |
| mode     | string        |     red    | Color value selection in monochrome mode （red green blue |
| tone    | number          | 126       | prints contrast value in mode  |
| imgageMode | boolean      | false     | Image mode |
| H        | number        | 300        | height |
| W        | number        | 600        | width |
|waterText   | string        | loo41    | Watermark Text in Watermark Mode  |
|waterLocation| array      | [30, 100]  | Initial coordinates of watermark pattern text  |
| font     | string        | 30px Georgia |  Watermark pattern text style  |
| fontColor| string        | white      | Watermark mode text color |
|cameoConst | number    | 128           | cameo Contrast value in mode |
| imgUrl  | Array         | []          | Tip(Take only the first picture）|
| click   | fun           |             | Picture Click Event |


### Tip

- canvas cross domain issues

### Welcome pr and issues and star


