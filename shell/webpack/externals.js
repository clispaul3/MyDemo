const vendors = require('./vendors')
const externals = (function(vendors){
    let obj = {}
    vendors.forEach(vendor=>{
        obj = Object.assign(obj,{
            [vendor.path]:"window.__LIB['"+vendor.name+"']"
        })
    })
    return obj
})(vendors)
module.exports = externals