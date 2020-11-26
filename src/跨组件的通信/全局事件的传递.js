import React,{PureComponent} from 'react'
import { EventEmitter } from 'events'

//创建对象
const eventBus = new EventEmitter()
class Home extends PureComponent {
    // constructor(props){
    //   super(props)
    //   this.state= {
    //   }
    // }
    //移除对象
    componentWillUnmount () {
        eventBus.removeListener('sayHello', this.handleSayHelloListener)
    }
    //监听对象
    componentDidMount() {
        eventBus.addListener('sayHello',this.handleSayHelloListener)
    }
    handleSayHelloListener(args,num) {
        console.log(args,num)
    }
      render(){
          return (
            <div >
                Home
            </div>
          )
      }
}
class Profile extends PureComponent {
    // constructor(props){
    //   super(props)
    //   this.state= {
    //   }
    // }
      render(){
          return (
            <div >
                Profile
                <button onClick={e => this.emmitEvent()}>点击了Profile</button>
            </div>
          )
      }
      //发出对象
      emmitEvent() {
          eventBus.emit('sayHello','Hello Home',123)
      }
}
export default class Aprops extends PureComponent {
    constructor(props){
      super(props)
      this.state= {
      }
    }
  componentDidUpdate() {
    console.log(this.state.message)
  }
      render(){
          return (
            <div >
                <Home/>
               <Profile/>
            </div>
          )
      }
}