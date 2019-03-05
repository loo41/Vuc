## vuc-color

---

|   名     |                                链接                                 |
|----------| ------------------------------------------------------------------- |
| English document | [👀](https://github.com/loo41/vuc/blob/master/package/vuc-color/README.md)|
|例子| [👀](https://github.com/loo41/Vuc/tree/master/package/vuc-color/example)|


---

### 安装

```
    npm install --save vuc-color
    
    yarn add vuc-color
```

---


### 使用

```
    全局
    
    import vucColor from 'vuc-color'
    Vue.use(vucColor)
    
    局部
    import {vucColor} from 'vuc-color'
    export default {
      components: {vucColor}
    }
    
```

---

### 全局属性方法

|   属性   |      类型      |   默认值  |    说明    |
|----------| ------------- | ---------- | ---------- |
| H        | number        | 自适应        | 高|
| W        | number        | 自适应        | 宽|
| img      | string         | 无       |     图片地址  |
| update   | function       | () => {}   | (fileArraay, file.result) => {} |
| colour   | function      | () => {}    | ([r, g, b, a]) => {} |
| draft    | boolean       | true        | 是否可拖拽  |
| size     |  array        | [30, 30]    | 光标大小 | 

