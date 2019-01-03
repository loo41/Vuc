## vuc-material

---

[中文文档](https://github.com/loo41/vuc/blob/master/package/vuc-material/doc/Chinese.md)

---

### Install

```
    npm install --save vuc-material
    
    yarn add vuc-material
```

---

### Basic use 

```
    // Global
    
    import vucMaterial from 'vuc-material'
    Vue.use(vucMaterial)
    
    // Local
    
    import {vucMaterial} from 'vuc-material'
    export default {
      components: {vucMaterial}
    }
    
```

---

### Global Attribute Method

|   Attribute   |      Type     |   Default value   |       Explain       |
|----------| ------------- | ---------- | ---------------- |
| switch   | Boolean       | true       | Whether to click Toggle    |
| color    | Array         | []         | Random colors of patterns  |
| output   | String        | background | Output mode  (background、image、canvas)|
| quality  | number        | 1          | Image quality in image mode  |


### Thank

[MaterialImage](https://github.com/yscoder/MaterialImage)

### Welcome pr issues star