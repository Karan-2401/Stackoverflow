import React, { useState } from 'react'
import Leftsidebar from '../../component/leftsidebar/leftsidebar'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { useSelector } from 'react-redux'
import Avatar from '../../component/avatar/Avatar'
import Editprofileform from './Edirprofileform'
import Profilebio from './Profilebio'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'
const Userprofile = ({ slidein }) => {
  const { id } = useParams()
  const [Switch, setswitch] = useState(false);

  const users = [{
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
  const currentprofile = users.filter((user) => user._id === id)[0]
  const currentuser =[{
    "_id":"u1234",
    "name":"Alice De",
    "email":"johmdoe@example.com",
    "password":"securepassword123",
    "about":"Software developer with a passion for open source projects and algorithem",
    "tags":["javascript","python","open-source"],
    "answered":10,
    "joinedon":"2024 06 10108:00:00z"
   }    ]
  // console.log(currentuser._id)
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein} />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px">{currentprofile.name.charAt(0).toUpperCase()}</Avatar>
              <div className="user-name">
                <h1>{currentprofile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "} {moment(currentprofile?.joinedon).fromNow()}
                </p>
              </div>
            </div>
            {currentuser?.result?._id === id && ( 
              <button className="edit-profile-btn" type='button' onClick={() => setswitch(true)}><FontAwesomeIcon icon={faPen} /> Edit Profile</button>
            )}
          </div>
          <>
            {Switch ? (
              <Editprofileform currentuser={currentuser} setswitch={setswitch} />
            ) : (
              <Profilebio currentprofile={currentprofile} />
            )}
          </>
        </section>
      </div></div>
  )
}

export default Userprofile