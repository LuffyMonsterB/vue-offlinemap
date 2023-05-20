# vue-offlinemap

![image-20230520211646382](https://hexo-img.obs.cn-east-3.myhuaweicloud.com/llf/image-20230520211646382.png)

基于 Vue 实现的离线地图

地图瓦片未上传，需自行下载

- 参考望远网:http://www.wmksj.com/
- 实现百度最新 WebGL 版离线 2D 及 3D 地图（基本实现）:http://www.wmksj.com/wzty/83.html
- 实现百度最新版个性化地图（可自定义样式）:http://www.wmksj.com/wzty/84.html
- MapVGL 文档:https://mapv.baidu.com/gl/docs/index.html
- **BMapGL 实现离线地图及自定义样式，MapVGL 实现地图上可视化数据的绘制，例如迁徙路线、水波纹点**

改进方案：原始方案是将地图瓦片放到前端的 public 目录下，但这样的做法会因为 public 资源过多导致前端页面加载延迟，改进的方案是利用 Nginx 搭建静态资源服务器，将离线地图瓦片资源放到 Nginx 上，前端只保留一个 html 文件，以类似 CDN 的方式实时请求地图资源

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
