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
        filename: '[name].bundle.js',
        publicPath: '/'
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
   devtool: 'inline-source-map',
   devServer: {
        contentBase: './dist'
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

// 当在此文件的同级目录中添加 package.json ,则必须 npm install 依赖，这样就无法复用最外层的已安装的依赖
// 因此学习测试时 不添加 package.json, 以下为 相关学习中用到的命令

// npx webpack --progress --watch,
// npx  webpack-dev-server --open,
// node server.js （不受是否有package.json影响）