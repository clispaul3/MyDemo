const path = require('path')
const externals = require('./externals')
module.exports = {
    mode:"development",
    entry:path.resolve(__dirname,'../dist/main.js'),
    output:{
        path:path.resolve(__dirname,'../build'),
        filename:"main.build.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader'
            }
        ]
    },
    externals
}