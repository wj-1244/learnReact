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
            </div>
          )
      }
      handleClick(){
        this.setState({
            message:'你好啊'
        }, ()=>{
            //同步更新数据
            console.log(this.state.message)
        })
        
      }
}