import React,{ PureComponent } from 'react'

class Home extends PureComponent {
    // 即将渲染获取一个时间 begintime
    UNSAFE_componentWillMount() {
        this.begintime = Date.now()
    }
    render(){
        return (
          <div>
              <h2>home</h2>
          </div>
        )
    }
     // 渲染完成再获取一个时间 endtime
     componentDidMount() {
        this.endtime = Date.now()
        console.log(this.endtime-this.begintime)
    }
}


class About extends PureComponent {
    render(){
        return (
          <div>
              <h2>About</h2>
          </div>
        )
    }
}
export default class App extends PureComponent {
    constructor(props){
      super(props)
      this.state= {
      }
    }
      render(){
          return (
            <div>
               <Home/>
               <About/>
            </div>
          )
      }
      
}