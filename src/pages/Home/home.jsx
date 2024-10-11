import React from 'react'
import Leftsidebar from '../../component/leftsidebar/leftsidebar'
import Rightsidebar from '../../component/rightsidebar/rightsidebar'
import Homemainbar from '../../component/homemainbar/homemainbar'
import './../../App.css'

function Home({slidein}) {
  return (
    <div className='home-container-1'>
        <Leftsidebar slidein={slidein}/>
        <div className='home-container-2'>
            <Homemainbar/>
            <Rightsidebar/>
        </div>
    </div>
  )
}
export default Home