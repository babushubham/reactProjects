import React,{useContext} from 'react'
import UserContext from '../Context/userContext'

function Profile() {

  // iss tarike se hum data ka access lete h context mein se
    const {user}= useContext(UserContext)
  if (!user) return <div>please login</div>
  
  // aise data ko show krte h
  return <div>hi {user.username}</div>
}

export default Profile