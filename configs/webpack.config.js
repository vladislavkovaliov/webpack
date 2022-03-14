const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config({
    path: path.resolve(__dirname, '..', '.env'),
});

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
        // path: path.resolve(__dirname, '../..', 'dist'),
        // clean: true,
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        }),

    ],

    // TODO: disable when production
    devServer: {
        historyApiFallback: true,
    },

    devtool: 'eval-source-map'
};
