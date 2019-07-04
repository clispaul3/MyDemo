const path = require('path')
module.exports = {
    mode:"production",
    entry: path.resolve(__dirname,"./vendor.config.js"),
    output: {
        path: path.resolve(__dirname,'../build'),
        filename: 'vendors.build.js',
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:"babel-loader"
            }
        ]
    }
}