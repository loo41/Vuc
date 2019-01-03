## vuc-input

---

[English document](https://github.com/loo41/vuc/blob/master/package/vuc-input/README.md)

---

### 安装

```
    npm install --save vuc-input
    
    yarn add vuc-input
```

---

### 使用

```
    全局
    
    import vucInput from 'vuc-input'
    Vue.use(vucInput)
    
    局部

    import {vucInput} from 'vuc-input'
    export default {
      components: {vucInput}
    }
    
```

---

### 全局属性方法

|   属性   |      类型      |   默认值   |    说明    |
|----------| ------------- | ---------- | ---------- |
| className| string        |            | 输入框的类样式   |
| input-style| string      |            | 输入框样式 宽高不管用  |
| disabled| boolean        | false      | 是否可使用 |
| autofocus | boolean      | false      | 是否自动聚焦 |
| full-width | boolean     | false      | 是否沾满父盒子 |
| H        | number        | 55         | 输入框的高 (包含padding值)|
| W        | number        | 300        | 输入框的宽 (包含padding值)|
|padding   | number        | 10         | padding值 |
|num       |   number      | 10         | 每一次动画粒子出现的数量 |
| size     | number        | 10         | 粒子的尺寸 |
| type     | string        | rect       | 粒子的类型 (arc square rect icon) icon可实现自定义效果|
|styleType | string        | fill       | 粒子是描边还是填充样式 (stroke 可选) |
| drawImg  | Array         | []         | icon模式下绘制的图片 (建议是icon的png图片)|
| color    | Array         | ['black']  | 绘制粒子效果颜色 |
| help-text| string        |            | 提示文字   |
| focus    | function      |            | 输入框聚焦事件 |
| blur     | function      |            | 输入框失焦事件 |
| change   | function      |            | 输入框改变事件 |


### 提示

- 为了兼容一些特效特效，去除了input输入框的一些效果
- 在获取焦点的情况下，不能用鼠标切换焦点位置，因为在获得焦点的情况下canvas层级比input高
- 在ie下和在webkit内核下存在差异

### 欢迎 pr issues star


