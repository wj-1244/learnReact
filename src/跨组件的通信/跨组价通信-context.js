import React,{Component} from 'react'
//第一步
const UserContext = React.createContext({
    nickname: 'aaa',
    level:-1
})
class ProfileHeader extends Component {
    constructor(props){
      super(props)
      this.state= {
      }
    }
      render(){
        //   第四步
          return (
            <div >
                <h2>用户昵称：{this.context.nickname}</h2>
                <h2>用户等级：{this.context.level}</h2>
            </div>
          )
      }
}
// 第三步
ProfileHeader.contextType = UserContext


class Profile extends Component {
    constructor(props){
      super(props)
      this.state= {
      }
    }
      render(){
          return (
            <div >
                <ProfileHeader/>
                <ProfileHeader/>
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
          return (
            <div >
                {/* 第二步 */}
                <UserContext.Provider  value={this.state}>
                   <Profile/>
                </UserContext.Provider>
                
            </div>
          )
      }
}