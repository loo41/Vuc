## vuc-material

---

### Install

```
    npm install --save vuc-material
    
    yarn add vuc-material
```

---

### Basic use 

```
    全局
    
    import vucMaterial from 'vuc-material'
    Vue.use(vucMaterial)
    
    局部
    import {vucMaterial} from 'vuc-material'
    export default {
      components: {vucMaterial}
    }
    
```

---

### 全局属性方法

|   属性   |      类型     |   默认值   |       说明       |
|----------| ------------- | ---------- | ---------------- |
| switch   | Boolean       | true       | 是否点击切换     |
| color    | Array         | []         | 图案出现的随机色 |
| output   | String        | background | 输出模式 (background、image、canvas)|
| quality  | number        | 1          | image模式下的图片质量 |


### 感谢

[MaterialImage](https://github.com/yscoder/MaterialImage)

### 欢迎 pr issues star