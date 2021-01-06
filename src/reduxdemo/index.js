import React,{ PureComponent } from 'react'
import Home from './home2'
import About from './about2'

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