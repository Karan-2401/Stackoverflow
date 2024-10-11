import React from 'react'
import './Users.css'
import User from './User'
import {useSelector} from "react-redux"
const Userslist = () => {
    //const users=useSelector((state)=>state.usersreducer)
    // console.log(users)
    const users =[{
     "_id":"u12345",
     "name":"john De",
     "email":"johmdoe@example.com",
     "password":"securepassword123",
     "about":"Software developer with a passion for open source projects and algorithem",
     "tags":["javascript","python","open-source"],
     "answered":10,
     "joinedon":"2024 06 10108:00:00z"
    },
    {
      "_id":"u1234",
      "name":"Alice De",
      "email":"johmdoe@example.com",
      "password":"securepassword123",
      "about":"Software developer with a passion for open source projects and algorithem",
      "tags":["javascript","python","open-source"],
      "answered":10,
      "joinedon":"2024 06 10108:00:00z"
     }    
  ]
  return (
    <div className="user-list-container">
        {users.map((user)=>(
            <User user={user} key={user?._id}/>
        ))}
    </div>
  )
}

export default Userslist