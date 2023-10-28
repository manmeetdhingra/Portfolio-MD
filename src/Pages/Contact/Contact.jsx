import React from 'react'
import "./Contact.css"
import Lottie from 'lottie-react'
import animation1 from '../../assets/Images/email-animation.json';
import animation2 from '../../assets/Images/github-animation2.json';
import animation3 from '../../assets/Images/linkedin-animation.json';


function Contact() {
  return (

    <div className="contact-container">
      <form className="form-container">
      <h1 style={{marginTop: "20px", fontSize: "48px"}}>Let's Connect!</h1>
      <div className="icon-container">
        <div style={{display: "flex", flexDirection: "column", margin: "20px", marginBottom: "38px"}}>


        <Lottie 
        
        style={{width: "150px"}} 
        
        animationData={animation1} />
        <a type='button' href="mailto:manmeetdhingra@googlemail.com" className="submit-btn" style={{}}>Email</a>
        </div>


        <div style={{display: "flex", flexDirection: "column", marginRight: "10px"}}>


        <Lottie style={{width: "134px"}} animationData={animation2}/>
        <a href="https://github.com/manmeetdhingra" target='blank' className="submit-btn">Github</a>
        </div>


        <div className="anim" style={{display: "flex", flexDirection: "column", margin: "20px"}}>


        <Lottie style={{width: "120px", marginBottom: "6px"}} animationData={animation3}/>
        <a href='https://www.linkedin.com/in/manmeetdhingra/' target='blank' className="submit-btn" style={{marginTop: "30px"}}>
          
          LinkedIn</a>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Contact
