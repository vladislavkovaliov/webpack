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
      title: 'Store',
      template: path.resolve(__dirname, '../..', 'src/index.html'),
    }),

    new ModuleFederationPlugin({
      name: "store",
      filename: 'store.js',
      exposes: {
        "./store": path.resolve(__dirname, '../..', 'src/store'),
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true },  'react-router-dom': { singleton: true } },
    }),
  ],
 };
