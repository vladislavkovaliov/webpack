const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const dotenv = require('dotenv');

const { merge } = require('webpack-merge');

const base = require('../../../../configs/webpack.config');

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../..', 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Store',
      template: path.resolve(__dirname, '../..', 'src/index.html'),
    }),

    new ModuleFederationPlugin({
      name: "store",
      filename: 'store.js',
      exposes: {
        "./store": path.resolve(__dirname, '../..', 'src/store'),
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true }, 'react-router-dom': { singleton: true } },
    }),
  ]
});