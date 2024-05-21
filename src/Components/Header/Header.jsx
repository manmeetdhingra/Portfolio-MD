
import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
      <div className="title-main">
        <button onClick={() => navigate('/')}>Manmeet Dhingra</button>
      </div>
      <div className="sub-titles">
        <div style={{ display: 'flex' }}>
          <a><button onClick={() => navigate('/about')}>About</button></a>
          <a><button onClick={() => navigate('/projects')}>Projects</button></a>
          <a><button onClick={() => navigate('/contact')}>Contact</button></a>
          <a className="href-btn" href="/Manmeet Dhingra CV v1.0.pdf" download={"Manmeet Dhingra CV v1.0.pdf"}><button>CV</button></a>

        </div>
      </div>
    </div>
  );
}

export default Header;



