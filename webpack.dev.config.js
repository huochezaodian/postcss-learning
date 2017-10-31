const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
    devtool: '#source-map',
    output: {
        publicPath: '/dist/',
        filename: '[name].js'
    },
    plugins: [
        // new CleanWebpackPlugin(
        //     ['./dist'],　 //匹配删除的文件
        //     {
        //         root: __dirname,       　　　　　　　　　　//根目录
        //         verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        //         dry:      false        　　　　　　　　　　//启用删除文件
        //     }
        // ),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ]
});