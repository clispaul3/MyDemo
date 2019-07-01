import React from 'react'
import ReactDOM from 'react-dom'
import Pubsub from './utils/Pubsub'
import { Button,Modal } from 'antd'
import { autobind } from 'core-decorators'
const app = document.getElementById('app')

class ModalContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visible:false,
            username:''
        }
    }
    componentDidMount(){
        Pubsub.subscribe('show.modal',(data)=>{
            console.log(data)
            this.setState({
                visible:true,
                username:data.username
            })
        })
    }
    @autobind
    handleCancel(){
        this.setState({
            visible:false
        })
    }
    render(){
        return <div>
            <Modal
                title="Basic Modal"
                onCancel={this.handleCancel}
                visible={this.state.visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>{this.state.username}</p>
            </Modal>
            </div> 
    }
}

class Container extends React.Component{
    constructor(props){
        super(props)
    }
    @autobind
    handle(){
        Pubsub.publish('show.modal',{
            username:'btn'
        })
    }
    render(){
       return <div>
            <Button type="primary" onClick={this.handle}>按钮</Button>
            <ModalContainer></ModalContainer>
        </div> 
    }
}
ReactDOM.render(<Container></Container>,app)
