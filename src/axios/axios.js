import React,{Component} from 'react'
import { Button } from 'antd';

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
            <hr></hr>
            <>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </>
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