import React from 'react'
import './homemainbar.css'
import { useLocation,useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Questionlist from './Questionlist'

function Homemainbar() {

  const user=1;
  const location = useLocation();
  const questionlist = null;
  const navigate = useNavigate();
  const checkauth = ()=>{
    if(user === null){
      alert("Login orsignup to ask a question")
      navigate("/Auth")
    }else{
      navigate("/Askquestion")
    }
  }

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname==="/" ? (
          <h1>Top Question</h1>
        ):(
          <h1>All Question</h1>
        )}
        <button className='ask-btn' onClick={checkauth}>Ask Questions</button>
      </div>
      <div>
        {
          questionlist === null ? (
            <h1>Loading...</h1>
          ):(
            <>
            <p>{questionlist.data.length} questions</p>
            <Questionlist questionlist={questionlist.data}/>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Homemainbar