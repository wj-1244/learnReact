import React,{ PureComponent,createContext } from 'react'


// 第一步
const UserContext = createContext({
    nickname: '默认',
    level: -1,
    区域:'中国'
})
class Home extends PureComponent {
    render(){
        return (
            // 第三步
          <UserContext.Consumer>
              {
                  user => {
                      return <h2>home: {`昵称：${user.nickname} 等级：${user.level}
                      区域: ${user.region}`}</h2>
                  }
              }
          </UserContext.Consumer>
        )
    }
}

class About extends PureComponent {
    render(){
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return <h2>About: {`昵称：${user.nickname} 等级：${user.level}
                        区域: ${user.region}`}</h2>
                    }
                }
            </UserContext.Consumer>
        )
    }
}
class App extends PureComponent {
  
      render(){
          return (
            <div>
                {/* 第二步 */}
                <UserContext.Provider value={{nickname:'why',level:18,region:1.88}}>
                   <Home/>
                   <About/>
                </UserContext.Provider>
            </div>
          )
      }
}

export default App