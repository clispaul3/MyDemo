import postal from 'postal'
// 第一种写法
export function HttpRequest(){
    setTimeout(()=>{
        postal.publish({
            channel:'ajax',
            topic:'ajax.user',
            data:{
                username:'postal',
                age:18
            }
        })
    },3000)
}

// 第二种写法

export const channel = postal.channel('request')
setTimeout(()=>{
    channel.publish('request.user',{
        username:'javascript',
        age:12
    })
},2000)


