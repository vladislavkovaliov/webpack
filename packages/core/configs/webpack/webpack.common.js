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
     title: 'Core',
     template: path.resolve(__dirname, '../..', 'src/index.html'),
   }),

   new ModuleFederationPlugin({
     name: "core",
     remotes: {
       "store": process.env.ENV === "production" ? "store@https://webpack-ten.vercel.app/store.js" : "store@http://localhost:3000/store.js",
       "attackChains": process.env.ENV === "production" ? "attackChains@https://attack-chains.vercel.app/attackChains.js" : "attackChains@http://localhost:3003/attackChains.js",
       "ui_components": process.env.ENV === "production" ? "store@https://webpack-ten.vercel.app/store.js" : "ui_components@http://localhost:3005/ui_components.js",
     },
     shared: { react: { singleton: true }, 'react-dom': { singleton: true }, 'react-router-dom': { singleton: true } },
   }),
 ]
});