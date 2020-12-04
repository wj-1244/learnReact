import React,{ PureComponent } from 'react'

function withAuth(WrappedComponent) {
    return props => {
        const {isLogin} = props
        if(isLogin) {
            return <WrappedComponent {...props}/>
        } else {
            return <LoginPage/>
        }
        
    }
}
//登录
class LoginPage extends PureComponent {
    constructor(props){
      super(props)
      this.state= {
      }
    }
    render(){
      return (
        <div>
          <h2>登录</h2>
        </div>
      )
    }
}
//购物车
class CartPage extends PureComponent {
    constructor(props){
      super(props)
      this.state= {
      }
    }
    render(){
      return (
        <div>
          <h2>购物车</h2>
        </div>
      )
    }
}

const AuthCartPage = withAuth(CartPage)
export default class App extends PureComponent {
    constructor(props){
      super(props)
      this.state= {
      }
    }
      render(){
          return (
            <div>
               <AuthCartPage isLogin={true}/>
            </div>
          )
      }
      
}