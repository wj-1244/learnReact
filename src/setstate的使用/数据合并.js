import React,{Component} from 'react'

export default class Aprops extends Component {
    constructor(props){
      super(props)
      this.state= {
        counter:0,
        message:'qqqqqqq',
        nickname:'汪洁',
      }
    }

      render(){
          return (
            <div >
               <div>{this.state.counter}</div>
               <h2>{this.state.nickname}</h2>
               <button onClick={e=>this.handleClick()}>+1</button>
            </div>
          )
      }
      handleClick(){
            this.setState((prevState,props)=>{
                console.log(prevState,'prevState')
               return{ counter:prevState.counter+1}
            })
            this.setState((prevState,props)=>{
                console.log(prevState,'prevState')
                return{ counter:prevState.counter+2}
             })
             this.setState((prevState,props)=>{
                console.log(prevState,'prevState')
                return{ counter:prevState.counter+3}
             })
        
        
        
      }
}