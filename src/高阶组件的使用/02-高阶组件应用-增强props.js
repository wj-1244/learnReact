import React,{ PureComponent } from 'react'

function enhanceComponent(WrappedComponent) {
    return props => {
        return <WrappedComponent {...props} region='中国'/>
    }
}
class Home extends PureComponent {
    render(){
        return (
          <div>
              <h2>home: {`昵称：${this.props.nickname} 等级：${this.props.level}
              区域: ${this.props.region}`}</h2>
          </div>
        )
    }
}


class About extends PureComponent {
    render(){
        return (
          <div>
              <h2>About: {`昵称：${this.props.nickname} 等级：${this.props.level}
              区域: ${this.props.region}`}</h2>
          </div>
        )
    }
}
// 首字母必须大写
const EnhanceHome = enhanceComponent(Home)
const EnhanceAbout = enhanceComponent(About)
class App extends PureComponent {
  
      render(){
          return (
            <div>
                <EnhanceHome nickname='coderwhy' level={90}/>
                <EnhanceAbout nickname='coderwhy' level={909}/>
            </div>
          )
      }
}

export default App