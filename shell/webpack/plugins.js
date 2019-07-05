const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const plugins = []
const htmlConfig = {
    title:'html-webpack-plugin',
    template:path.resolve(__dirname,'../src/html/index.html'),
    minify:{
        removeComments:true,
        collapseWhitespace:true,
        collapseInlineTagWhitespace:true
    }
}
plugins.push(new HtmlWebpackPlugin(htmlConfig))

module.exports = plugins