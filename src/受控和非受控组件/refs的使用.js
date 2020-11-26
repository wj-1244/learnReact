import React,{ PureComponent, createRef } from 'react'
export default class App extends PureComponent {
    constructor(props){
      super(props)
      this.state= {
      }
      this.titleRef = createRef()
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
}