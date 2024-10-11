import { useState, useEffect } from 'react'

import './App.css'
import Navbar from './component/navbar/navbar.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import Allroutes from './Allroutes.jsx'
function App() {
  const [slidein, setSlidein] = useState(true)
  useEffect(()=>{
    if(window.innerWidth<=768){
      setSlidein(false)
    }
  },[])

  const handleslidein = ()=>{
    if(window.innerWidth <= 768){
      setSlidein((state)=> !state)
    }
  }

  return (
    <>
    <Router>
      <Navbar handleslidein={handleslidein}/>
      <Allroutes slidein={slidein} handleslidein={handleslidein}/>
    </Router>
    </>
  )
}

export default App
