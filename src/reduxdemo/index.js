import React,{ PureComponent } from 'react'
import Home from './home'
import About from './about'
// import store from '../redux';

export default class Index extends PureComponent {
    
    render(){
        return (
          <div>
              <Home/>
              <hr/>
              <About/>
          </div>
        )
    }
     
}