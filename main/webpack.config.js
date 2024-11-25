const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: './index.js',
   devtool: 'inline-source-map',
   devServer: {
    open: true,
    // static: './dist',
    port: 9000,
  },
   plugins: [
     new HtmlWebpackPlugin({
      filename: 'index.html',
       template: './index.html'
     }),
   ],
   module: {
    rules: [],
   },
   output: {
    publicPath: '/',
  },
   optimization: {
    runtimeChunk: 'single',
  },
 };
