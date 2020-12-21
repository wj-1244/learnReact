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
            {/* unmountOnExit可以让该DOM消失 */}
            <CSSTransition 
              in={isShow} 
              appear 
              classNames='card' 
              timeout={300} 
              unmountOnExit={true}
              onEnter={e => console.log('onEnter')}
              onEntering={e => console.log('onEntering')}
              onEntered={e => console.log('onEntered')}>
            <>
                <Card title="Default size card" extra={<a href="https://fanyi.baidu.com">More</a>} style={{ width: 300 }}>
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