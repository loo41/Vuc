## vuc-input

---

[中文文档](https://github.com/loo41/vuc/blob/master/package/vuc-input/doc/Chinese.md)

---


### Install

```
    npm install --save vuc-input
    
    yarn add vuc-input
```

---

### Basic use 

```
    // Global
    
    import vucInput from 'vuc-input'
    Vue.use(vucInput)
    
    // Local
    
    import {vucInput} from 'vuc-input'
    export default {
      components: {vucInput}
    }
    
```

---

### Global Attribute Method

| Attribute |      Type      |   Default value  |   Explain     |
|----------| ------------- | ---------- | ---------- |
| className| string        |            | Class Style of Input Box   |
| input-style| string      |            | Input Box Style Width and Height Doesn't Work   |
| disabled | boolean        | false      | Availability |
| autofocus | boolean      | false      | Autofocus or not |
| full-width | boolean     | false      | Full of Father's Box |
| H        | number        | 55         | height (Include padding)|
| W        | number        | 300        | width (Include padding)|
|padding   | number        | 10         | padding value |
| num       |   number      | 10         | Number of animated particles |
| size     | number        | 10         | Particle size |
| type     | string        | rect       | Particle type (arc square rect icon) Icon implements custom effects |
|styleType | string        | fill       | Is the Particle Stroke or Fill Style  (stroke  || fill) |
| drawImg  | Array         | []         | Pictures drawn in icon mode (The suggestion is icon's PNG picture)|
| color    | Array         | ['black']  | Drawing Particle Effect Colors |
| help-text| string        |            | Prompt text    |
| focus    | function      |            |  |
| blur     | function      |            |  |
| change   | function      |            |  |


### Tip

- In order to be compatible with some special effects, some effects of input input box are removed. 
- In the case of focus acquisition, the focus position cannot be switched with the mouse, because the canvas level is higher than the input level in the case of focus acquisition. 
- There are differences between IE and WebKit kernel

### Welcome pr issues star


