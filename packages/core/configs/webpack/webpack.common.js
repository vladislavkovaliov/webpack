const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { merge } = require('webpack-merge');

const base = require('../../../../configs/webpack.config');
const {dependencies: deps} = require("../../../../package.json");

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
       // Do not look on vercel it's examples only meaning
       "shared": process.env.ENV === "production" ? "shared@https://webpack-ten.vercel.app/store.js" : "shared@http://localhost:3000/shared.js",
       "attackPaths": process.env.ENV === "production" ? "attackPaths@https://attack-paths.vercel.app/attackPaths.js" : "attackPaths@http://localhost:3003/attackPaths.js",
       "ui_components": process.env.ENV === "production" ? "ui_components@https://webpack-ten.vercel.app/ui_components.js" : "ui_components@http://localhost:3005/ui_components.js",
     },
       shared: { react: { requiredVersion: deps.react, strictVersion: true, singleton: true }, 'react-dom': { requiredVersion: deps['react-dom'], strictVersion: true, singleton: true }, 'react-router-dom': { requiredVersion: deps['react-router-dom'], strictVersion: true, singleton: true } },
   }),
 ]
});