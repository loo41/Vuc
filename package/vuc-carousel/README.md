## vuc-carousel

---

[中文文档](https://github.com/loo41/vuc/blob/master/package/vuc-carousel/doc/Chinese.md)

---


### Install

```
    npm install --save vuc-carousel
    
    yarn add vuc-carousel
```

---

### Basic use 

```
    // Global
    
    import vucCarousel from 'vuc-carousel'
    Vue.use(vucCarousel)
    
    // Local
    
    import {vucCarousel} from 'vuc-carousel'
    export default {
      components: {vucCarousel}
    }
    
```

---

### Global Attribute Method

|   Attribute   |      Type     |   Default value  |    Explain    |
|----------| ------------- | ---------- | ---------- |
| imgs     | Array         |    []      | rotation graph array    |
| index    |number         |      0     | Starting position of rotation chart   |
| H        | number        | 300        | height |
| W        | number        | 600        | width |
| dir      | string        | left       | direction (bottom) |
|color     | Array         | ['white']  | Possible colours of particles |
| Vx       | number        | 1          | Velocity in the X direction  |
| Vy       | number        | 1          | Velocity in the Y direction |
| time     | number        | 5000       | Time per frame |
| size     | number        | 15         | size  |
| effect   | string        | easeInQuad | You can use animated curves in animejs  |
| type     | string        | arc        | Types of Particles （arc square rect icon）|
|style-type | string       | fill       | Filling mode of particles  (stroke)|
| space   | number         |      200   | Spacing of randomly generated particles    |
| nums    | number         | 20         | Number of occurrences of particles|
| drawImg   | Array        |       []   | Particle diagrams used in icon mode  |
| pause    | Boolean       | false      | Pause |
| complete  | function     |            | The return value of each animation completion call is index |



### welcome pr issues star


