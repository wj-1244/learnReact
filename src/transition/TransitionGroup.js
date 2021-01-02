import React,{Component} from 'react'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
import '../transition/TransitionGroup.css'

export default class Transitiongroups extends Component {
  constructor(props){
    super(props)
    this.state= {
       name:['lilei','hanmeimei','wangjie']
    }
  }
//   react-transition-group主要组件
    render(){
        return (
          <TransitionGroup>
            {
                this.state.name.map((item,index) => {
                    return (
                        <CSSTransition key={index} timeout={500} classNames='item' appear>
                            <div>{item}</div>
                        </CSSTransition>
                    )
                })
            }
            <button onClick={e => this.addName()}>+name</button>
          </TransitionGroup>
        )
    }
    addName() {
        this.setState({
            name:[...this.state.name,'999']
        })
    }
}