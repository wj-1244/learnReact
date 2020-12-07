import React,{ PureComponent,createRef,forwardRef } from 'react'

class Home extends PureComponent {
    render(){
        return (
          <div>
              <h2>home</h2>
          </div>
        )
    }
     
}
const Profile = forwardRef (function Profile(props,ref) {
        return <h2 ref={ref}>Profile</h2>
    }
)


export default class App extends PureComponent {
    constructor(props){
      super(props)
      this.state= {
      }
      this.titleRef = createRef()
      this.homeRef = createRef()
      this.ProfileRef = createRef()
    }
      render(){
          return (
            <div>
                <h2 ref={this.titleRef}>HELLO WORLD</h2>
               <Home ref={this.homeRef}/>
               <Profile ref={this.ProfileRef}/>
               <button onClick={e => this.printRef()}>打印REF</button>
            </div>
          )
      }
      printRef() {
          console.log(this.titleRef.current)
          console.log(this.homeRef.current)
          console.log(this.ProfileRef.current)
      } 
}