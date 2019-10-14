const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const terserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'build')
    },
    mode: 'production',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.ts', '.json']
    },
    module: {
        rules: [
            {
                test: '/.ts?$/',
                enforce: 'pre',
                use: 'tslint-loader',
                exclude: /node_modules/
            },

            {
                test: '/.js?$/',
                use: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: '/.ts?$/',
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [new CleanWebpackPlugin()],
    optimization: {
        minimizer: [
            new terserWebpackPlugin({
                exclude: /node_module/
            })
        ]
    }
};
