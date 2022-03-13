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
       "login": process.env.ENV === "production" ? "login@https://login-ee2r9w6es-vladislavkovaliov.vercel.app/login.js" : "login@http://localhost:3002/login.js",
       "attackChains": process.env.ENV === "production" ? "attackChains@https://attack-chains.vercel.app/attackChains.js" : "attackChains@http://localhost:3003/attackChains.js",
     },
     shared: { react: { singleton: true }, 'react-dom': { singleton: true }, 'react-router-dom': { singleton: true } },
   }),
 ]
});