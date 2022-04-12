const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    port: 3005,
  },

  output: {
    publicPath: 'http://localhost:3005/',
  },
});
