const Pubsub = (function(){
    let topics = {}
    function publish(topic,data){
        if(topics[topic]){
            for(let fn of topics[topic]){
                fn(data)
            }
        }else{
            topics[topic] = []
        }
    }
    function subscribe(topic,callback){
        if(!topics[topic]){
            topics[topic] = []
        }
        topics[topic].push(callback)
    }
    return {
        publish,
        subscribe
    }
})()

export default Pubsub