module.exports = [
    {
        path:"src",
        filter:/\.scss$/,
        command:"npm run sass"
    },{
        path:"src",
        filter:/\.(js|jsx)$/,
        command:"npm run babel"
    },{
        path:"dist",
        fileter:/\.js$/,
        command:"npm run build"
    }
]