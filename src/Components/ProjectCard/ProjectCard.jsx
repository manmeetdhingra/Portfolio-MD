import React from 'react'
import "./ProjectCard.css"

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img className="project-image" src={props.image}/>
      <h3>{props.title}</h3>
      <p style={{paddingBottom: "30px"}}>{props.description}</p>
      <div>
      <a className="links" target="blank" href={`${props.github}`}>Github</a>
      <a className="links" target="blank" href={`${props.website}`}>Website</a>
      </div>
    </div>
  )
}

export default ProjectCard
