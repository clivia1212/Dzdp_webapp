var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/index.jsx'),
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015&presets[]=react'},
      { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less'},
      { test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss'},
      { test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000'},
      { test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000'},
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    // html 模版插件
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),

    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),

    // 打开浏览器
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),

    // 可在业务js代码中使用__DEV__判断是否是dev模式
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV === 'dev') || 'false'))
    })
  ],

  devServer: {
    proxy: {
      // 凡是 ‘/api’ 开头的http请求，都会被代理到 localhost:3000
      // koa 代码在 ./mock 目录中，启动命令为 npm run mock
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      }
    },
    contentBase: './public', // 本地服务器所加载的页面所在的目录
    colors: true, //终端输出结果为彩色
    historyApiFallback: true, //不跳转， 开发单页面应用很有用
    inline: true, // 实时刷新
    hot: true, // 热加载
  }
}
