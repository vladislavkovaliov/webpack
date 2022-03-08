const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),

    new HtmlWebpackPlugin({
      title: 'Core',
      template: path.resolve(__dirname, '../..', 'src/index.html'),
    }),

    new ModuleFederationPlugin({
      name: "core",
      remotes: {
        "app1": "app1@http://localhost:3002/app1.js",
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
  ],
 };
