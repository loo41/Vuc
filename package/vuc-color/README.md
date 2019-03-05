## vuc-color

---

|   name    |                                Link                                 |
|----------| ------------------------------------------------------------------- |
| 中文文档  | [👀](hhttps://github.com/loo41/vuc/blob/master/package/vuc-color/doc/Chinese.md)|
| Example  | [👀](hhttps://github.com/loo41/Vuc/tree/master/package/vuc-color/example)|


---


### Install

```
    npm install --save vuc-color
    
    yarn add vuc-color
```

---

### Basic use 

```
    // Global
    
    import vucColor from 'vuc-color'
    Vue.use(vucColor)
    
    // Local
    
    import {vucColor} from 'vuc-color'
    export default {
      components: {vucColor}
    }
    
```

---


### Global Attribute Method

|   Attribute   |      Type     |   Default value  |    Explain    |
|----------| ------------- | ---------- | ---------- |
| H        | number        |    none     | height |
| W        | number        |     none    | width |
| img      | string         | none       |       |
| update   | function       | () => {}   | (fileArraay, file.result) => {} |
| colour   | function      | () => {}    | ([r, g, b, a]) => {} |
| draft    | boolean       | true        | Whether it can be dragged or not  |
| size     |  array        | [30, 30]    | cousor size | 



