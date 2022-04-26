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
      title: 'Attack Paths',
      template: path.resolve(__dirname, '../..', 'src/index.html'),
    }),

    new ModuleFederationPlugin({
      name: 'attackPaths',
      filename: 'attackPaths.js',
      remotes: {
        "shared": process.env.ENV === "production" ? "shared@https://webpack-ten.vercel.app/shared.js" : "shared@http://localhost:3000/shared.js",
      },
      exposes: {
        './components':  path.resolve(__dirname, '../..', 'src/components'),
        './modules':  path.resolve(__dirname, '../..', 'src/modules'),
        './attackPaths': path.resolve(__dirname, '../..', 'src/attackPaths'),
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true }, 'react-router-dom': { singleton: true } },
    }),
  ]
});