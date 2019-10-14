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
                test: /.ts?$/,
                enforce: 'pre',
                use: 'tslint-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },

            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },

            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: path.resolve(__dirname, 'src'),
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
