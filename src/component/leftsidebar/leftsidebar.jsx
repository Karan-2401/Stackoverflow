import React from 'react'
import './leftsidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from "../../assets/assets/Globe.svg"
function Leftsidebar({slidein}) {
    const slideinstyle = {
        transform :'translateX(0%)',
    }
    const slideoutStyle ={
        transform : "translateX(-110%)",
    }

  return (
    <div className='left-sidebar' style={slidein ? slideinstyle : slideoutStyle}>
        <nav className='side-nav'>
            
                <NavLink to='/' className="side-nav-links" activeclassname = 'active'>
                <p>Home</p></NavLink>
           
            <div className="side-nav-div">
                <div>
                    <p>PUBLIC</p>
                </div>
                <button className='nav-btnn'>
                    <NavLink to='/Questions' className='side-nav-links' activeclassname='active'>
                        <img src={Globe} alt="globe" />
                        <p style={{paddingLeft:'10px'}}>Questions</p>
                    </NavLink>
                </button>
                <button className='nav-btnn'>
                    <NavLink to='/Tags' className='side-nav-links' activeclassname='active'  style={{paddingLeft:'40px'}}>
                        <p>Tags</p>
                    </NavLink>
                </button>
                <button className='nav-btnn'>
                    <NavLink to='/Users' className='side-nav-links' activeclassname='active'  style={{paddingLeft:'40px'}}>
                        <p>Users</p>
                    </NavLink>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Leftsidebar