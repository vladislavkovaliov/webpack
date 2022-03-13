const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { merge } = require('webpack-merge');

const base = require('../../../../configs/webpack.config');

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../..', 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Attack Chains',
      template: path.resolve(__dirname, '../..', 'src/index.html'),
    }),

    new ModuleFederationPlugin({
      name: 'attackChains',
      filename: 'attackChains.js',
      remotes: {
        "store": process.env.ENV === "production" ? "store@https://webpack-ten.vercel.app/store.js" : "store@http://localhost:3000/store.js",
      },
      exposes: {
        './components':  path.resolve(__dirname, '../..', 'src/components'),
        './modules':  path.resolve(__dirname, '../..', 'src/modules'),
        './attackChains': path.resolve(__dirname, '../..', 'src/attackChains'),
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true }, 'react-router-dom': { singleton: true } },
    }),
  ]
});