import React,{Component} from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar2'
export default class App extends Component {
    constructor(props){
      super(props)
      this.state= {
      }
    }
  
      render(){
          return (
            <div>
                <NavBar name='' title='' className=''>
                    <span>111</span>
                    <span>222</span>
                    <a href='http:www.baidu.com'>ccc</a>
                </NavBar>

                <NavBar2  leftSlot={<span>left</span>}
                          centerSlot={<span>center</span>} 
                          rightSlot={<a href='http:www.baidu.com'>right</a>}/>
            </div>
          )
      }
}