## vuc-scratch

---

[English document](https://github.com/loo41/vuc/blob/master/package/vuc-scratch/README.md)

---

### 安装

```
    npm install --save vuc-scratch
    
    yarn add vuc-scratch
```

---

### 使用

```
    全局
    
    import vucScratch from 'vuc-scratch'
    Vue.use(vucScratch)
    
    局部

    import {vucScratch} from 'vuc-scratch'
    export default {
      components: {vucScratch}
    }
    
```

---

### 全局属性方法

|   属性   |      类型      |   默认值   |    说明    |
|----------| ------------- | ---------- | ---------- |
| H        | number        | 55         | 高度|
| W        | number        | 300        | 宽度|
| size     | Array         | [35, 35]   | 消除c区尺寸 |
| scratchColor| String     | #D1D1D1    | 刮奖区颜色  |
| recover  | Boolean       | false | 为true时动态重绘 |


### 插槽

```
# 默认没有任何样式
<div slot="content" ></div>
```

### 提示

- 支持移动端

### 欢迎 pr issues star


