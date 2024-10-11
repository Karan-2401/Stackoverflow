import React from 'react'
import './rightsidebar.css'
import Widget from './widget'
import Widgettag from './widgettag'


function Rightsidebar() {
  return (
    <>
       <aside className="right-sidebar">
      <Widget/>
      <Widgettag/>
    </aside>
    </>
  )
}

export default Rightsidebar