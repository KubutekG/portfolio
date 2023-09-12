import { useState } from "react"
import Project from "./Project"
export default function Projects() {
const [projects, setProjects] = useState([
  {
    img: '/dummy2.jpg',
    description: 'Description',
    name: 'Bella',
  },
  {
    img: '/dummy2.jpg',
    description: 'Description',
    name: 'Portfolio',
  },
])
  return (
    <>
      {projects.map(project => {
        return <Project name={project.name} img={project.img} description={project.description}/>
    })}
    </>
  )
}