class Subject{
    constructor(){
        this.subs = []
    }
    addSub(sub){
        this.subs.push(sub)
        return this
    }
    // 在发布消息时通知所有的订阅者
    notify(data){
        for(let sub of this.subs){
            sub.update(data)
        }
    }
}

const test = new Subject()
const obj = {
    update(data){
        console.log(data)
    }
}
test.addSub(obj)
test.notify({username:'java',age:18})