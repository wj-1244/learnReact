import React,{ PureComponent } from 'react'

function withRenderTime(WrappedComponent) {
    return class extends PureComponent  {
        // 即将渲染获取一个时间 begintime
        UNSAFE_componentWillMount() {
            this.begintime = Date.now()
        }
        // 渲染完成再获取一个时间 endtime
        componentDidMount() {
            this.endtime = Date.now()
            console.log(this.endtime-this.begintime)
        }
        render(){
            return <WrappedComponent {...this.props}/>
        }
        
    }
}
class Home extends PureComponent {
    render(){
        return (
          <div>
              <h2>home</h2>
          </div>
        )
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

const TimeHome = withRenderTime(Home)
const AboutHome = withRenderTime(About)

export default class App extends PureComponent {
    constructor(props){
      super(props)
      this.state= {
      }
    }
      render(){
          return (
            <div>
               <TimeHome/>
               <AboutHome/>
            </div>
          )
      }
      
}