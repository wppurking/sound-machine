var path = require('path');
var webpack = require('webpack');

var rootPath = path.resolve('.');
var outputDir = path.join(rootPath, 'dist');


module.exports = {
  entry: path.join(rootPath, 'src/main'),
  output: {
    path: outputDir,
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      vues: path.join(rootPath, 'src/components')
    }
  },
  // 用于开发测试
  devtool: 'eval',
  target: 'electron'
};
