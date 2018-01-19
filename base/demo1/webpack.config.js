const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
   entry: './src/index.js',
   output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
   },
   plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
   ]
}