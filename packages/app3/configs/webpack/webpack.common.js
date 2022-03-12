const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { merge } = require('webpack-merge');

const base = require('../../../../configs/webpack.config');

module.exports = merge(base, {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App3',
      template: path.resolve(__dirname, '../..', 'src/index.html'),
    }),

    new ModuleFederationPlugin({
      name: 'app3',
      filename: 'app3.js',
      remotes: {
        "store": "store@http://localhost:3000/store.js",
      },
      exposes: {
        './components':  path.resolve(__dirname, '../..', 'src/components'),
        './modules':  path.resolve(__dirname, '../..', 'src/modules'),
        './attackChains': path.resolve(__dirname, '../..', 'src/bootstrap'),
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true }, 'react-router-dom': { singleton: true } },
    }),
  ]
});