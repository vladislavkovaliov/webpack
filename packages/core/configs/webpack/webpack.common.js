const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { merge } = require('webpack-merge');

const base = require('../../../../configs/webpack.config');

module.exports = merge(base, {
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
       "app3": "app3@http://localhost:3004/app3.js",
       "store": "store@http://localhost:3000/store.js",
     },
     shared: { react: { singleton: true }, 'react-dom': { singleton: true }, 'react-router-dom': { singleton: true } },
   }),
 ]
});