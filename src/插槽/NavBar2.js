import React,{Component} from 'react'
export default class NavBar2 extends Component {
    constructor(props){
      super(props)
      this.state= {
      }
    }
  
      render(){
          const {leftSlot,centerSlot,rightSlot} = this.props
          return (
            <div className='nav-bar'>
                <div className='nav-left'>
                   {leftSlot}
                </div>
                <div className='nav-center'>
                   {centerSlot}
                </div>
                <div className='nav-right'>
                   {rightSlot}
                </div>
            </div>
          )
      }
}