## vuc-picture-contrast

---

|   名     |                                链接                                 |
|----------| ------------------------------------------------------------------- |
| 中文文档  | [👀](hhttps://github.com/loo41/vuc/blob/master/package/vuc-picture-contrast/doc/Chinese.md)|
| Example  | [👀](hhttps://github.com/loo41/Vuc/tree/master/package/vuc-picture-contrast/example)|


---


### Install

```
    npm install --save vuc-picture-contrast
    
    yarn add vuc-picture-contrast
```

---

### Basic use 

```
    // Global
    
    import vucPictureContrast from 'vuc-picture-contrast'
    Vue.use(vucPictureContrast)
    
    // Local
    
    import {vucPictureContrast} from 'vuc-picture-contrast'
    export default {
      components: {vucPictureContrast}
    }
    
```

---


### Global Attribute Method

|   Attribute   |      Type     |   Default value  |    Explain    |
|----------| ------------- | ---------- | ---------- |
| H        | number        | 300        | height |
| W        | number        | 500        | width |
| type     | string        |  blackWhite      | Image mode  (blur inverse blackWhite monochrome prints blur watermark cameo)   |
| mode     | string        |     red    | Color value selection in monochrome mode （red green blue |
| tone    | number          | 126       | prints contrast value in mode  |
| imgageMode | boolean      | false     | Image mode |
|waterText   | string        | loo41    | Watermark Text in Watermark Mode  |
|waterLocation| array      | [30, 100]  | Initial coordinates of watermark pattern text  |
| font     | string        | 30px Georgia |  Watermark pattern text style  |
| fontColor| string        | white      | Watermark mode text color |
|cameoConst | number    | 128           | cameo Contrast value in mode |
| click   | Fun           |             | Picture Click Event |
| dir     | string       | top          | top / left |
| img     | Array        | []           | (must) The first value must be a custom image, and the second value must be a custom image    |


### Tip

- canvas cross domain issues
- support for scrolling and moving 

