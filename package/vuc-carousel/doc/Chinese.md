## vuc-carousel

---

[English document](https://github.com/loo41/vuc/blob/master/package/vuc-carousel/README.md)

---

### 安装

```
    npm install --save vuc-carousel
    
    yarn add vuc-carousel
```

---

### 使用 

```
    全局
    
    import vucCarousel from 'vuc-carousel'
    Vue.use(vucCarousel)
    
    局部
    import {vucCarousel} from 'vuc-carousel'
    export default {
      components: {vucCarousel}
    }
    
```

---

### 全局属性方法

|   属性   |      类型     |   默认值   |    说明    |
|----------| ------------- | ---------- | ---------- |
| imgs     | Array         |    []      | 轮换图数组   |
| index    |number         |      0     | 轮换图开始位置  |
| H        | number        | 300        | 高 |
| W        | number        | 600        | 宽 |
| dir      | string        | left       | 轮换图方向 (bottom 可选) |
|color     | Array         | ['white']  | 粒子出现可能的颜色|
| Vx       | number        | 1          | x方向的速度 |
| Vy       | number        | 1          | y方向的速度 |
| time     | number        | 5000       | 每一次轮换所用的时间     |
| size     | number        | 15         | 粒子尺寸  |
| effect   | string        | easeInQuad | 可使用animejs中的动画曲线 |
| type     | string        | arc        | 粒子的类型 （arc square rect icon）|
|style-type | string       | fill       | 粒子的填充方式 (stroke)|
| space   | number         |      200   | 随机产生粒子的间距   |
| nums    | number         | 20         | 粒子出现的次数      |
| drawImg   | Array        |       []   | icon模式下使用的粒子图 |
| pause    | Boolean       | false      | 暂停动画 |
| complete  | function     |            | 每一次动画完成调用 返回值是index| |



### 欢迎 pr issues star


