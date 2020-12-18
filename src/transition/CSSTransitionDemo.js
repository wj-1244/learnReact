import React,{Component} from 'react'
import { CSSTransition } from 'react-transition-group'
import { Card } from 'antd';

export default class Csstransition extends Component {
  constructor(props){
    super(props)
    this.state= {
       isShow:true
    }
  }
//   react-transition-group主要组件
    render(){
        const {isShow} = this.state
        return (
          <div>
            <div>我是app组件</div>
            <hr></hr>
            <CSSTransition in={isShow} classNames='card' timeout={300}>
            <>
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </>
            </CSSTransition>
            <button onClick={e=> {this.setState({isShow:!isShow})}}>显示/隐藏</button>
          </div>
        )
    }
}