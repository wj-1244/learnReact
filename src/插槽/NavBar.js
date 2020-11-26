import React,{Component} from 'react'
export default class NavBar extends Component {
    constructor(props){
      super(props)
      this.state= {
      }
    }
  
      render(){
          return (
            <div className='nav-bar'>
                <div className='nav-left'>
                   {this.props.children[0]}
                </div>
                <div className='nav-center'>
                   {this.props.children[1]}
                </div>
                <div className='nav-right'>
                   {this.props.children[2]}
                </div>
            </div>
          )
      }
}