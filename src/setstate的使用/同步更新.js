import React,{Component} from 'react'

export default class Aprops extends Component {
    constructor(props){
      super(props)
      this.state= {
        counter:0,
        message:'qqqqqqq'
      }
    }
  componentDidUpdate() {
    console.log(this.state.message)
  }
      render(){
          return (
            <div >
               <div>当前计数：{this.state.message}</div>
               <button onClick={e=>this.handleClick()}>+1</button>
               <button id='btn'>+2</button>
            </div>
          )
      }
      handleClick(){
        //   情况1：把setstate放在定时器中
          setTimeout(()=>{
            this.setState({
                message:'你好啊'
            })
            console.log(this.state.message)
          },0)
        
        
        
      }
}