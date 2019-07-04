export function Button(props){
    function handle(){
        console.log(props.content)
    }
    return <button onClick={handle}>按钮</button>
}

