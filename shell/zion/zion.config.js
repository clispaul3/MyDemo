module.exports = [
    {
        path:"src",
        filter:/\.scss$/,
        command:"node-sass src -o dist"
    },{
        path:"src",
        filter:/\.(js|jsx)$/,
        command:"babel src --out-dir dist"
    },{
        path:"dist",
        fileter:/\.js$/,
        command:"webpack"
    }
]