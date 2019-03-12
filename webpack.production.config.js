var path = require('path');
var pkg = require('./package.json');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/index.jsx'),
    // 将第三方依赖（node_modules中的）单独打包
    vendor: Object.keys(pkg.dependencies),
  },
  output: {
    path: __dirname + '/build/js/',
    filename: '[name].[chunkhash:8].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015&presets[]=react'},
      { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style','css!postcss!less')},
      { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style','css!postcss')},
      { test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000&name=img/[name].[chunkhash:8].[ext]'},
      { test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000&name=fonts/[name].[chunkhash:8].[ext]'},
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("Copyright by clivia121@github.com"),
  
    // html 模版插件
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),

    // 定义为生产环境，编译 React时压缩到最小
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

    //  为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们
    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      }
    }),

    // 分离css和js文件
    new ExtractTextPlugin('/css/[name].[chunkhash:8].css'),

    // 提取公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '/js/[name].[chunkhash:8].js'
    }),
  ]
}
