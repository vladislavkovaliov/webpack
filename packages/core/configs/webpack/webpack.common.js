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

  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Core',
      template: path.resolve(__dirname, '../..', 'src/index.html'),
    }),

    new ModuleFederationPlugin({
      name: "core",
      remotes: {
        "app1": "app1@http://localhost:3002/app1.js",
        "app2": "app2@http://localhost:3003/app2.js",
        "store": "store@http://localhost:3000/store.js",
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true }, 'react-router-dom': { singleton: true } },
    }),
  ],
 };
