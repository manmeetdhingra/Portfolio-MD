import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate()


  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap"}}>
     <span className="title-main"><button onClick={() => navigate("/")}>Manmeet Dhingra</button></span> 
     <span className="sub-titles"><div style={{display: "flex"}} >
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/projects")}>Projects</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
     </div></span>
    </div>
  )
}

export default Header

