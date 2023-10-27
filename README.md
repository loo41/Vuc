## vuc

---

![image](https://github.com/loo41/vuc/blob/master/doc/canvas.gif)

---

|   $$    |                                链接                                 |
|----------| ------------------------------------------------------------------- |
| 中文文档  | [👁️](https://github.com/loo41/vuc/blob/master/doc/Chinese.md) |


---

### Install
```
npm install --save vuc-input || vuc-carousel ||.....

yarn add vuc-input || vuc-carousel || ......
```

### Basic use
```
// vuc-input package
// Global

import vucInput from 'vuc-input'
Vue.use(vucInput)

// Local
import {vucInput} from 'vuc-input'
export default {
  components: {vuc-input}
}
```

---

### Component
|   package     |                                preview                         |
|----------| ------------------------------------------------------------------- |
| [vuc-color](https://github.com/loo41/vuc/tree/master/package/vuc-color)| |
| [vuc-picture-contrast](https://github.com/loo41/vuc/tree/master/package/vuc-picture-contrast)||
| [vuc-scratch](https://github.com/loo41/vuc/tree/master/package/vuc-scratch)  |  |
| [vuc-identify](https://github.com/loo41/vuc/tree/master/package/vuc-identify) ||
|[vuc-input](https://github.com/loo41/vuc/tree/master/package/vuc-input)||
| [vuc-carousel](https://github.com/loo41/vuc/tree/master/package/vuc-carousel)||
| [vuc-image](https://github.com/loo41/vuc/tree/master/package/vuc-image) | |
| [vuc-material](https://github.com/loo41/vuc/tree/master/package/vuc-material) ||


### Thank

- [Image processing](https://www.cnblogs.com/st-leslie/p/8317850.html?utm_source=debugrun&utm_medium=referral)

- [MaterialImage](https://github.com/yscoder/MaterialImage)


### Test use

- Each package can be developed and debugged

- Open the package you need to debug after cloning or downloading the library 

- npm install

- npm run dev (Debug mode, Change the entry path of webpack to ./example/main.js)

- npm run build （Production mode，Change the entry path of webpack to ./src/main.js）


### Development plan

- canvas Sketchpad

### Tip

- Each package is loaded separately 
- Incomplete demo configuration

### End
```
Looking forward to your contribution 
```
