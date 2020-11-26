import React,{Component} from 'react'

class Cpn extends Component {
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  render(){
    return (
      <div>我是cpn组件</div>
    )
  }
}
// 接收父组件的值
class ChildCpn extends Component {
  constructor(props){
    super(props)
    this.state= {
    }
  }
  render(){
    const {name,age,btnClick} = this.props
    return (
      <div>
        <div>{name + '' + age}</div>
        <button onClick={btnClick}>+2</button>
      </div>
    )
  }
}
export default class App extends Component {
  constructor(){
    super()
    this.state= {
       counter:0,
       isShow:true
    }
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

    render(){
        return (
          <div>
            <div>我是app组件</div>
            <div>{this.state.counter}</div>
            <button onClick={e=>this.handleClick()}>+1</button>
            <ChildCpn btnClick={this.handleClick.bind(this)} name='wj' age='10'/>
            <hr/>
            <button onClick={e=>this.handleChange()}>切换</button>
            {this.state.isShow && <Cpn/>}
            <hr></hr>
          </div>
        )
    }
    handleClick(){
      this.setState({
        counter:this.state.counter+1
      })
    }
    handleChange(){
      this.setState({
        isShow:!this.state.isShow
      })
    }
}