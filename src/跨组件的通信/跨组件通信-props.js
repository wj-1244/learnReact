import React,{Component} from 'react'

class ProfileHeader extends Component {
    constructor(props){
      super(props)
      this.state= {
      }
    }
      render(){
          const {nickname,level} = this.props
          return (
            <div >
                <h2>用户昵称：{nickname}</h2>
                <h2>用户等级：{level}</h2>
            </div>
          )
      }
}
class Profile extends Component {
    constructor(props){
      super(props)
      this.state= {
      }
    }
      render(){
          return (
            <div >
                <ProfileHeader nickname={this.props.nickname} level={this.props.level}/>
                <ProfileHeader {...this.props}/>
                <ul>
                    <li>设置1</li>
                    <li>设置2</li>
                    <li>设置3</li>
                    <li>设置4</li>
                </ul>
            </div>
          )
      }
}
export default class Aprops extends Component {
    constructor(props){
      super(props)
      this.state= {
          nickname:'汪洁',
          level:99
      }
    }
  
      render(){
        const {nickname,level} = this.state 
          return (
            <div >
                <Profile nickname={nickname} level={level}/>
                <Profile {...this.state}/>
            </div>
          )
      }
}