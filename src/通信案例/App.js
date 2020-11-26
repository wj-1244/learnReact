import React,{Component} from 'react'
import TabControl from './tabcontrol'
export default class App extends Component {
    constructor(props){
      super(props)
      this.state= {
        currentTitle:'新款',
        titles:['A','B','C']
      }
    }
  
      render(){
        const {currentTitle,titles} = this.state
          return (
            <div>
                <TabControl titles={titles} itemClick={index=>this.handleitemClick(index)}/>
                <h2>{currentTitle}</h2>
            </div>
          )
      }
      handleitemClick(index){
          console.log(index)
          this.setState({
            currentTitle:this.state.titles[index]
          })
      }
}