import React,{ PureComponent,Fragment } from 'react'

// Fragment  相当于小程序的 block标签
export default class App extends PureComponent {
    constructor(props){
      super(props)
      this.state= {
        counter:0,
      }
    }
      render(){
          return (
            // <Fragment >
            //    <div>当前计数：{this.state.counter}</div>
            //    <button onClick={e=>this.handleClick()}>+1</button>
            // </Fragment>

            // 短语法
             <>
               <div>当前计数：{this.state.counter}</div>
               <button onClick={e=>this.handleClick()}>+1</button>
            </>
          )
      }
      handleClick(){
        this.setState({
            counter:this.state.counter+1
        })
        
      }
}