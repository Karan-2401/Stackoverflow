import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import bars from "../../assets/assets/bars-solid.svg"
import logo from "../../assets/assets/logo.png"
import search from "../../assets/assets/search-solid.svg"
import Avtar from '../avatar/Avatar'
import './navbar.css'

const Navbar=({handleslidein})=>{
    var User =null;
    const navigate = useNavigate()
    return(
        <>
            <nav className='main-nav'>
                <div className='navbar'>
                    <button className='slide-in-icon' onClick={()=> handleslidein()}>
                        <img src={bars} alt="bars" width='15' />
                    </button>
                    <div className='navbar-1'>
                       <Link to="/" className='nav-item nav-logo'>
                        <img src={logo} alt="logo" /></Link>

                        <Link to="/" className='nav-item nav-btn res-nav'>
                            About
                        </Link>

                        <Link to="/" className='nav-item nav-btn res-nav'>
                            Products
                        </Link>
                        <Link to="/" className='nav-item nav-btn res-nav'>
                            For Teams
                        </Link>
                        <form><input type="search" placeholder='Search...' />
                        <img src={search} alt='search' width="19" className='search-icon' /></form>

                    </div>
                    <div className='navbar-2'>
                        {User === null ? (
                            <Link to='/Auth' className='nav-item nav-link' style={{ border:'2px solid blue',
                            width:'60px',
                            backgroundColor:'rgba(173, 216, 230, 0.5)',
                            height:'28px',
                            borderRadius:'5px',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'    
                            }}>
                                Log in
                            </Link>
                        ):(
                            <>
                            <Avtar backgroundColor = "#009dff" px= '10px' py='7px' borderRadius="50%" color ="white">
                                <Link to='' style={{color:'white', textDecoration:'none'}}></Link>
                            </Avtar>
                            <button className='nav-item nav-links'>Log out</button>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar