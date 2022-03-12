const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
  },
  
  output: {
    publicPath: "auto",
  },
  devtool: 'eval-cheap-module-source-map',
});
