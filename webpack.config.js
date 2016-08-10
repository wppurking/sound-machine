var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
        loader: ExtractTextPlugin.extract(["css", "sass"])
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 100000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(wav)$/,
        loader: 'file',
        query: {
          name: 'wav/[name].[ext]'
        }
      },
      {
        test: /\.(svg)$/,
        loader: 'file',
        query: {
          name: 'fonts/[name].[ext]'
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
      vues: path.join(rootPath, 'src/components'),
      assets: path.join(rootPath, 'src/assets')
    }
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ],
  // 用于开发测试
  devtool: 'eval',
  target: 'electron'
};
