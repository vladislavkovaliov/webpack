const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { merge } = require('webpack-merge');
const deps = require('../../../../package.json').dependencies;

const base = require('../../../../configs/webpack.config');

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../..', 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Components',
      template: path.resolve(__dirname, '../..', 'src/index.html'),
    }),

    new ModuleFederationPlugin({
      name: 'ui_components',
      filename: 'ui_components.js',
      exposes: {
        './ui_components': path.resolve(__dirname, '../..', 'src/components'),
      },
      shared: { react: { requiredVersion: deps.react, strictVersion: true, singleton: false }, 'react-dom': { requiredVersion: deps["react-dom"], singleton: false }, 'react-router-dom': { requiredVersion: deps['react-router-dom'], singleton: false } },
    }),
  ]
});