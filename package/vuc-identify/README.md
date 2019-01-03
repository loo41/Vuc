## vuc-identify

---

[中文文档](https://github.com/loo41/vuc/blob/master/package/vuc-identify/doc/Chinese.md)

---

### Install

```
    npm install --save vuc-identify
    
    yarn add vuc-identify
```

---

### Basic use

```
    // Global
    
    import vucIdentify from 'vuc-identify'
    Vue.use(vucIdentify)
    
    // Local
    
    import {vucIdentify} from 'vuc-identify'
    export default {
      components: {vucIdentify}
    }
    
```

---

### Global Attribute Method

|   Attribute   |      Type      |   Default value   |    Explain    |
|----------| ------------- | ----------- | ---------- |
| color    | Array         | []          | Drawing Particle and Interference Line Effect Colors  |
| H        | number        | 150         | height |
| W        | number        | 300         | width |
|particleNum| number       | 150         | Particle size |
|font      | Array         | [60, 80]    | Draw font size intervals  |
|text      | String        | loo41       | text |
|textColor | Array         | []          | Random colors are used if the colors of the rendered text do not exist |
| random   | Boolean       | false       | Open Random Generation Mode on Click Switch |
| randomType | String      | ''          | Types of random patterns (math, string '')|
|randomLength| number      | 4           | Length of randomly generated pattern text  |
|background | string       | rgba(0, 0, 0, 0.2) | background |
|fontFamily | string       | Arial       | Text font |
| clickStatus | Boolean    | true        | Click-state changes will execute change Qr event customization changes   |
| type     | string        | rect        | Types of Particles (arc square rect icon) Icon implements custom effects |
|styleType | string        | fill        | Is the Particle Stroke or Fill Style  (stroke 可选)|
| size     | number        | 10          |      Particle size     |
| drawImg  | Array         | []          | Pictures drawn in icon mode  (The suggestion is icon's PNG picture )|
|interfereNum | number     | 5           | Number of interference lines   |
|interfereWidth | Array    | [1, 5]      | Width interval of interference line  |
|textValue |Fun            |             | Event parameters changed each time are rendered text |
|clickQr  | Fun            |             | Functions executed when clicking event true  (Text can be adjusted and rendered under this function)|



### Welcome pr and issues and star


