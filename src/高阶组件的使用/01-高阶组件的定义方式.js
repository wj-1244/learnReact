import React,{ PureComponent } from 'react'

class App extends PureComponent {
    constructor(props){
      super(props)
      this.state= {
          username:''
      }
    }
  
      render(){
          return (
            <div>
                <form onSubmit={e=>this.handleSubmit(e)}>
                    <label htmlFor='username'>
                       用户：<input type='text' 
                       id='username' 
                       onChange = {e => this.handleChange(e)}
                       value={this.state.username}/>
                    </label>
                    <input type='submit' value='提交'/>
                </form>
            </div>
          )
      }
      handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.username)
      }
      handleChange(e) {
        console.log(e.target.value)
        this.setState({
            username:e.target.value
        })
      }
}
// 类组件
// function enhanceComponent(WrappedComponent) {
//    return class NewComponent extends PureComponent {
//        render() {
//            return <WrappedComponent/>
//        }
//    }
// }
// 函数组件
function enhanceComponent2(WrappedComponent) {
    function NewComponent(props) {
        return <WrappedComponent {...props}/>
    }
    NewComponent.displayName = 'Kobe'
    return NewComponent
}

const EnhanceComponent = enhanceComponent2(App)

export default EnhanceComponent