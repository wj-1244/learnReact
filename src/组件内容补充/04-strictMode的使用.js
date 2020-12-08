import React,{ PureComponent, StrictMode } from 'react'

class Home extends PureComponent {
    // UNSAFE_componentWillMount(){
    //     console.log('home')
    // }
    render(){
        return (
            // 过时的ref API
          <div ref='title'>
              <h2>home: </h2>
          </div>
        )
    }
}


class About extends PureComponent {
    // 识别不安全的生命周期
    // UNSAFE_componentWillMount(){
    //     console.log('About')
    // }
    render(){
        return (
          <div>
              <h2>About: </h2>
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
                <StrictMode>
                   <Home/>
                </StrictMode>
               <About/>
            </div>
          )
      }
      
}