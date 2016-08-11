# sound-machine
vue 实现 sound-machine 的例子. 简化了前端的 [Sound-Machine](https://github.com/bojzi/sound-machine-electron-guide)

### 技术的 demo, 为了熟悉一下技术:
* electron
* vue.js, vue-router
* webpack
 - babel-loader
 - url/file-loader
 - sass-loader
 - vue-loader
 - extract-text-webpack-plugin

### 运行
* npm -g i electron-prebuilt
* npm i
* webpack --progress
* electron .

### 使用
* 默认 Command(Ctrl) + 1/2/3 播放声音
* 点击页面 play 播放声音

### 关注点
* electron 的 main-process 与 renderer process 中的各种 Vue Component 交互
* globalShortcut 使用
* file/url loader 的使用
* css 文件统一抽取独立文件
* Vue 的常规 v-model 与 v-bind 区别. (form 处理)
