
[详细文档](https://www.imooc.com/u/1089809/articles)可参考

# 搭建webpack + React 开发环境

## npm初始化
  进入项目目录，运行 npm init -y
  生成package.json文件，该文件描述了项目的基本信息，以及一些第三方依赖项（插件）。

## 安装插件
  webpack作为构建工具，安装相应插件，运行 npm install webpack webpack-dev-server --save-dev

  React相应插件，运行 npm i react react-dom --save

## 配置wepack.config.js
### entry
### output
### module
  针对不同类型的文件，使用不同的loader。

  该项目中，用到的文件格式有： js/jsx代码，css/less代码，图片，字体文件

  加载css/less时用到postcss，主要使用autoprefixer功能，帮助自动加css3的浏览器前缀，非常好用

  编译es6和jsx语法，用到babel，另外还需增加一个.babelrc的配置文件
### plugins
  使用html模版，将输出的文件名（如./bundle.js）自动注入到html中，不用自己手写，手写的话，一旦修改就需要改两个地方。
  
  热加载和自动打开浏览器插件
### devServer

## 配置wepack.production.config.js
  开发环境下，不用考虑系统的性能，更多考虑如何增加开发销量。
  发布系统时，需要考虑发布之后的系统的性能，包括加载速度、缓存等。

### 发布到./build文件夹中
  path： __dirname + "/build"

### vendor
  将第三方依赖单独打包，即将node_modules文件夹中的代码打包为vendor.js
  将自己写的业务代码打包为app.js.
  这样有助于缓存，因为项目维护过程中，第三方依赖不经常变化，而业务代码会经常变化。

### md5后缀
  为每个打包出来的文件加md5后缀，例如“/js/[name].[chunkhash:8].js”, 可使文件强缓存。

### 分目录
  打包出来的不同类型文件，放在不同目录下，如图片文件放在img/目录下
