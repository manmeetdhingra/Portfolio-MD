import React from 'react'
import "./About.css"

function About() {
  return (
    <div className="about-container">
      <div>
      <h1>&lt;&gt; About Me &lt;/&gt;</h1>
      <img src="src/assets/Images/2R5A4563.jpg"/>
      <div className="card-container" style={{flexWrap: "nowrap"}}>
      <div className="text" style={{marginRight: "35px", marginLeft: "35px", marginBottom: "50px"}}>
      <h3>- Background : </h3>
      <p>I bring a unique perspective to the world of web development, having originally trained in the field of pharmacy, I graduated from the University of Birmingham with an MPharm Degree in 2019.<br/><br/>Since then I have been working as a contractor with many large corporations such a Boots, Asda and Well Pharmacy. This foundation in healthcare has instilled in me a strong commitment to precision, problem-solving, and attention to detail. It's these qualities that I now bring to my coding endeavors, ensuring that every project I undertake is meticulously crafted and user-centric.</p></div>
      <div className="text" style={{marginRight: "35px", marginLeft: "35px", marginBottom: "50px"}}>
      <h3>- My Journey : </h3>
      <p>I embarked on my journey into web development with a single purpose in mind - a career transition. But it quickly evolved into a passionate pursuit. I was drawn to the precision and attention to detail that the field demanded. These qualities now guide my approach to web development.<br/><br/>My core focus has always been HTML, CSS and JavaScript. In addition to these, I have also delved into the world of popular libraries and frameworks like React and familiarised myself with platforms such as Firebase </p></div>
      <div className="text" style={{marginRight: "35px", marginLeft: "35px", marginBottom: "50px"}}>
      <h3>- Philosophy :</h3>
      <p>As a web developer, my approach extends beyond the lines of code and design. I draw inspiration from the ancient philosophy of Stoicism.<br/><br/>In the world of engineering, this mindset also influences my work. I strive to remain adaptable, undeterred by obstacles, and focused on continual improvement. I believe in creating digital experiences that withstand the test of time, just as Stoic principles have endured throughout the ages.<br/><br/>To me, It's not just about building websites; it's about building lasting, meaningful connections between users and technology.</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default About
