const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { merge } = require('webpack-merge');
const deps = require('../../../../package.json').dependencies;

const base = require('../../../../configs/webpack.config');

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../..', 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shared",
      filename: 'shared.js',
      exposes: {
        "./shared": path.resolve(__dirname, '../..', 'src/shared'),
      },
      shared: { react: { requiredVersion: deps.react, strictVersion: true, singleton: true }, 'react-dom': { requiredVersion: deps['react-dom'], strictVersion: true, singleton: true }, 'react-router-dom': { requiredVersion: deps['react-router-dom'], strictVersion: true, singleton: true } },
    }),
  ]
});