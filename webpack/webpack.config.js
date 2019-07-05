const webpack = require('webpack')
const HtmlWebpackkPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode:"development",
    entry:{
        "index":path.resolve(__dirname,"page/index.js"),
        "home":path.resolve(__dirname,"page/home.js")
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:"babel-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackkPlugin({
            template:path.resolve(__dirname,'html/index.html'),
            filename:path.resolve(__dirname,'dist/html/index.html'),
            chunks:["index"]
        }),
        new HtmlWebpackkPlugin({
            template:path.resolve(__dirname,'html/home.html'),
            filename:path.resolve(__dirname,'dist/html/home.html'),
            chunks:["home"]
        })
    ]
}