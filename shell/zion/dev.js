const watch = require('node-watch')
var callfile = require('child_process')
const zionConf = require('./zion.config.js')
for(let item of zionConf){
    if(item.path){
        const options = {
            filter:item.filter,
            recursive:true
        }
        watch(item.path,options,(event,filename)=>{
            callfile.exec(item.command,function (err, stdout, stderr) {
                if(err){
                    console.log('\x1B[31m',"error:" + err)
                }
                console.log(stdout)
                console.log(stderr)
            })
        })
    }
};
(function init(){
    for(let item of zionConf){
        callfile.exec(item.command,function (err, stdout, stderr) {
            if(err){
                console.log('\x1B[31m',"error:" + err)
            }
            console.log(stdout)
            console.log(stderr)
        })
    }
})()
