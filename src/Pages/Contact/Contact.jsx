import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div>
      <form className="form-container">
        <h1 style={{marginTop: "30px", fontSize: "45px"}}>Let's Connect!</h1>

        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <textarea className="message" type="text" placeholder='Message...'/>
        <input className="submit-btn" type="button" value="Submit" />
      </form>
      
    </div>
  )
}

export default Contact
