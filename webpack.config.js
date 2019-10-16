const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const terserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'simpler.min.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd'
    },
    mode: 'production',
    //   devtool: 'source-map',
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
                use: 'ts-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                use: 'babel-loader',
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
