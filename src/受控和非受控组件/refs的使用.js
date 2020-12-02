import React,{ PureComponent, createRef } from 'react'

class Counter extends PureComponent {
  constructor(){
    super()
    this.state= {
       counter:0,
       isShow:true
    }
  }
    render(){
        return (
          <div>
            <div>{this.state.counter}</div>
            <button onClick={e=>this.handleClick()}>+1</button>
          </div>
        )
    }
    handleClick(){
      this.setState({
        counter:this.state.counter+1
      })
    }
}
export default class App extends PureComponent {
    constructor(props){
      super(props)
      this.state= {
      }
      this.titleRef = createRef()
      this.counterRef = createRef()
      this.titleEl = null
    }
  
      render(){
          return (
            <div>
              {/* ref=字符串/对象/函数 */}
                <h2 ref='titleRef'>hello react</h2>
                <h2 ref={this.titleRef}>hello react</h2>
                <h2 ref={(arg) => this.titleEl = arg}>hello react</h2>
                <button onClick={e => this.changeText()}>改变文本</button>
                <hr/>
                <Counter ref={this.counterRef}/>
                <button onClick={e => this.appBtn()}>APPBTN</button>
            </div>
          )
      }
      changeText() {
        // 使用方式1：字符串（不推荐）
         this.refs.titleRef.innerHTML = '111'
        //  使用方式2：对象方式
        console.log(this.titleRef)
         this.titleRef.current.innerHTML = '222'
        //  使用方式3：回调函数方式
        this.titleEl.innerHTML = '333'
      }
      // 组件
      appBtn() {
        console.log(this.counterRef)
        this.counterRef.current.handleClick() 
      }
}