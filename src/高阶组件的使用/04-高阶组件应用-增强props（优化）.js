import React,{ PureComponent,createContext } from 'react'

//第三步定义一个高阶组件
function withUser(WrappedComponent) {
    return props => {
        return (
            <UserContext.Consumer>
              {
                  user => {
                      return <WrappedComponent {...props} {...user}/>
                  }
              }
          </UserContext.Consumer>
        )
    }
}
// 第一步
const UserContext = createContext({
    nickname: '默认',
    level: -1,
    区域:'中国'
})
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
// 第四步
const EnhanceHome = withUser(Home)
const EnhanceAbout = withUser(About)
class App extends PureComponent {
  
      render(){
          return (
            <div>
                {/* 第二步 */}
                <UserContext.Provider value={{nickname:'why',level:18,region:1.88}}>
                    {/* 第五步 */}
                   <EnhanceHome/>
                   <EnhanceAbout/>
                </UserContext.Provider>
            </div>
          )
      }
}

export default App