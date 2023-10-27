## vuc

---

![image](https://github.com/loo41/vuc/blob/master/doc/canvas.gif)

---

---

[English document](https://github.com/loo41/vuc/blob/master/README.md)

---

### 安装
```
npm install --save 对应的包 (vuc-input)

yarn add 对应的包 (vuc-input)
```

### 使用
```
// vuc-input 包

import vucInput from 'vuc-input'
Vue.use(vucInput)

局部
import {vucInput} from 'vuc-input'
export default {
  components: {vuc-input}
}
```

---

### 组件

- [vuc-color](https://github.com/loo41/vuc/tree/master/package/vuc-color) 

- [vuc-picture-contrast](https://github.com/loo41/vuc/tree/master/package/vuc-picture-contrast) 

- [vuc-scratch](https://github.com/loo41/vuc/tree/master/package/vuc-scratch)

- [vuc-identify](https://github.com/loo41/vuc/tree/master/package/vuc-identify) 

- [vuc-input](https://github.com/loo41/vuc/tree/master/package/vec-input) 

- [vuc-carousel](https://github.com/loo41/vuc/tree/master/package/vuc-carousel) 

- [vuc-image](https://github.com/loo41/vuc/tree/master/package/vuc-image) 

- [vuc-material](https://github.com/loo41/vuc/tree/master/package/vuc-material) 


### 参考

- [图像处理](https://www.cnblogs.com/st-leslie/p/8317850.html?utm_source=debugrun&utm_medium=referral)

- [MaterialImage](https://github.com/yscoder/MaterialImage)


### 测试

- 每个包都是可以进行开发调试

- 克隆或下载库之后打开你需要调试的包

- npm install

- npm run dev (调试模式，将 webpack 的 entry 路径改为 ./example/main.js)

- npm run build （打包模式，将 webpack 的 entry 路径改为 ./src/main.js）


### 开发计划

- canvas 画板插件

### 提示

- 每个包是单独加载
- demo配置不完整

### 结尾
```
期待您的加入
```
