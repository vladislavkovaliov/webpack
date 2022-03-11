const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  entry: {
    index: {
      import: './src/index.tsx',
    },
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../..', 'dist'),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'App2',
      template: path.resolve(__dirname, '../..', 'src/index.html'),
    }),

    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'app2.js',
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
  ],
 };
