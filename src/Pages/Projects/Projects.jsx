import React from 'react'
import "./Projects.css"
import data from '../../data.js'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'

function Projects() {
  const cards = data.map(item => {
    return (<ProjectCard 
      key={item.id}
      title={item.title}
      description={item.description}
      image={item.coverImg}
      github={item.github}
      website={item.website}
      />)
  })
  return (
    <div className="project-container">
      <h1>Recent <span className="underline">P</span>rojects</h1>
      <div className="project-card-container">{cards}</div>
    </div>
  )
}

export default Projects
