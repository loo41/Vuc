## vuc-identify

---

### Install

```
    npm install --save vuc-identify
    
    yarn add vuc-identify
```

---

### Basic use 

```
    全局
    
    import vucIdentify from 'vuc-identify'
    Vue.use(vucIdentify)
    
    局部
    import {vucIdentify} from 'vuc-identify'
    export default {
      components: {vucIdentify}
    }
    
```

---

### 全局属性方法

|   属性   |      类型      |   默认值   |    说明    |
|----------| ------------- | ---------- | ---------- |
| color    | Array         | []         | 绘制粒子和干扰线效果颜色 |
| H        | number        | 150         | 高|
| W        | number        | 300         | 宽|
|particleNum| number       | 150         | 粒子数量 |
|font      | Array         | [60, 80]    | 绘制字体大小的区间 |
|text      | String        | loo41       | 文本 |
|textColor | Array         | []          | 绘制文本的颜色 如果不存在 会使用随机色|
| random   | Boolean      | false       | 在点击切换的时候开启随机生成模式|
| randomType | String     | ''          | 随机模式的类型 (math, string '')|
|randomLength| number     | 4           | 随机生成模式文本的长度 |
|background | string      | rgba(0, 0, 0, 0.2) | 背景色 |
|fontFamily | string      | Arial | 文本字体 |
| clickStatus | Boolean   | true | 点击状态下是否更改会执行changeQr事件 自定义更改  |
| type     | string        | rect       | 粒子的类型 (arc square rect icon) icon可实现自定义效果|
|styleType | string        | fill       | 粒子是描边还是填充样式 (stroke 可选)|
| size     | number        | 10         |      粒子的尺寸     |
| drawImg  | Array         | []         | icon模式下绘制的图片 (建议是icon的png图片)|
|interfereNum | number     | 5          | 干扰线的数量  |
|interfereWidth | Array   | [1, 5]     | 干扰线的宽度区间 |
|textValue |Fun            |           | 每次更改的事件 参数是渲染的文本|
|clickQr  | Fun           |            | 点击事件为true时候执行的函数 (可在该函数下做文本的调整渲染)|



### 欢迎 pr issues star


