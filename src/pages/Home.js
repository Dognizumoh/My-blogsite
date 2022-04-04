import React from 'react'
import withLayout from './withLayout'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
    <div className='banner'>
    <h1> Welcome to my webpage</h1>
    <p>
    This is my first webpage, it is boring to be a programmer,
     amd it is also interesting when you understand, the job better,
     codes are languages the computer understands, try hard not to make mistakes</p>
    <div className='actions-wrap'>
    <button className='btn-outline' onClick={()=>navigate("./about")}> About me </button>
    <button className='btn-contain'onClick={()=>navigate("./blogs")}>Read Blogs</button>
    </div>
    
    
    </div>
    
    
    </div>
  )
}

export default withLayout (Home)