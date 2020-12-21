import React,{Component} from 'react'
import { SwitchTransition,CSSTransition } from 'react-transition-group'
import '../transition/SwitchTransition.css'

export default class Switchtransition extends Component {
  constructor(props){
    super(props)
    this.state= {
       isOn:true
    }
  }
//   react-transition-group主要组件
    render(){
        const {isOn} = this.state
        return (
          <div>
            <div>我是app组件</div>
            <hr></hr>
            {/* unmountOnExit可以让该DOM消失 */}
            <SwitchTransition>
                <CSSTransition 
                timeout={1000} 
                key={isOn ? 'on' : 'off'}
                classNames='btn' appear
                >
          
                   <button style={{marginLeft:100+'px'}} onClick={e=> {this.setState({isOn:!isOn})}}>{isOn ? 'on' : 'off'}</button>
                </CSSTransition>
                
            </SwitchTransition>
          </div>
        )
    }
}