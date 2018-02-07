const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
//    entry: './src/index.js',
   entry: {
       index: './src/index.js',
       print: './src/print.js'
   },
   output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'index.bundle.js'
        filename: '[name].bundle.js'
   },
   module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
   },
   plugins: [
       new cleanWebpackPlugin(['dist']),
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            // title 属性 在没有 template时使用 才有效果
            // title: 'Output Manager',
            template: './src/index.html'
        })
   ]
}