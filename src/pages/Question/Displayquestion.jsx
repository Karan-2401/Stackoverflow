import React from 'react'
import Leftsidebar from "../../component/leftsidebar/leftsidebar";
import Rightsidebar from "../../component/rightsidebar/rightsidebar";
import Questiondetails from './Questiondetails'
function Displayquestion({slidein}) {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein} />
      <div className="home-container-2">
        <Questiondetails/>
        <Rightsidebar />
      </div>
    </div>
  )
}

export default Displayquestion