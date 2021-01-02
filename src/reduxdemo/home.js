import React,{ PureComponent } from 'react'
import store from '../redux'
import {addAction} from '../redux/actionCreators'

export default class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            counter: store.getState().counter
        }
    }
    componentDidMount() {
        this.unsubscribue = store.subscribe(() => {
            this.setState({
                counter:store.getState().counter
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribue();
    }
    render(){
        return (
          <div>
              <h2>home</h2>
              <h2>当前计数：{this.state.counter}</h2>
              <button onClick={e=>this.increment()}>+</button>
              <button onClick={e=>this.add(5)}>-</button>
          </div>
        )
    }
    increment() {
        store.dispatch(addAction(1))
    } 
    add(num) {
        store.dispatch(addAction(num))
    }
}