## vuc-scratch

---

[中文文档](https://github.com/loo41/vuc/blob/master/package/vuc-scratch/doc/Chinese.md)

---


### Install

```
    npm install --save vuc-scratch
    
    yarn add vuc-scratch
```

---

### Basic use 

```
    // Global
    
    import vucScratch from 'vuc-scratch'
    Vue.use(vucScratch)
    
    // Local
    
    import {vucScratch} from 'vuc-scratch'
    export default {
      components: {vucScratch}
    }
    
```

---

### Global Attribute Method

| Attribute |      Type      |   Default value  |   Explain     |
|----------| ------------- | ---------- | ---------- |
| H        | number        | 55         | height|
| W        | number        | 300        | width|
| size     | Array         | [35, 35]   | Particle size |
| scratchColor| String     | #D1D1D1    | Scraping area color  |
| recover  | Boolean       | false | Detection Equivalent Value True Redrawing     |


### slot

```
# There is no default style 
<div slot="content" ></div>
```


### Tip

- Supporting mobile end 

### Welcome pr issues star


