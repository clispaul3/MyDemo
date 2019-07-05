const btn = document.getElementsByClassName('btn')[0]
console.log(btn)
btn.onclick = function(){
    require.ensure([],()=>{
        require('./0.js')
    })
}