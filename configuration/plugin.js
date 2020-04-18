const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')

const statementConfig = require("./stmconfig.js");


module.exports = {plugins:[
        new CleanWebpackPlugin(),


        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            title: `${statementConfig.dir.replace("./","")} app`,
            filename: `../index.html`,
            template: './template.html'
        }),
        new CheckerPlugin()
    ]};