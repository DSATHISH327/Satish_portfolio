import React from 'react'
import './Projects.css'
import { faLink,faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Projects = () => {
  return (
    <>
        <div className='title'>
            <h1 className='Headline'>Projects</h1>
            <FontAwesomeIcon icon={faArrowDown} className='arrow-down'/>
        </div>
      <div className='projects' id='Projects'>
        <div className='project1'>
            <h2>Project-1</h2>
            <h4>Desaboina Satish Portfolio link <FontAwesomeIcon icon={faLink} /></h4>
            <FontAwesomeIcon icon={faArrowDown} className='arrow-Down'/>
            <a href="https://satish-portfolio-indol.vercel.app/"  target="_blank" rel="noopener noreferrer" className='project-link'>Desaboina Satish Portfolio</a>
        </div>
        <div className='project2'>
            <h2>Project-2</h2>
            <h4>My Photography website & Blog <FontAwesomeIcon icon={faLink} /></h4>
            <FontAwesomeIcon icon={faArrowDown} className='arrow-Down'/>
            <a href="https://photography-alpha-three.vercel.app/"  target="_blank" rel="noopener noreferrer" className='project-link'>My Photography Blog</a>
        </div>
        <div className='project3'>
            <h2>Project-3</h2>
            <h4>Laptops E-Comerce Platform <FontAwesomeIcon icon={faLink} /></h4>
            <FontAwesomeIcon icon={faArrowDown} className='arrow-Down'/>
            <a href="https://desaboina-satish-react-js-project.vercel.app/"  target="_blank" rel="noopener noreferrer" className='project-link'>Laptops E-Comerce PLatform</a>
        </div>
      </div>
    </>
  )
}

export default Projects
