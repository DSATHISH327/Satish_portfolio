import React from 'react';
import './Header1.css';
import IMAGE from './assets/Image-2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Header1 = () => {
  return (
    <>
      <header className='header'>
        <div className='Image-section'>
          <img src={IMAGE} alt="Profile Image" className='image' />
          <h1 className='Person_Name'>Desaboina Satish....</h1>
        </div>
        <div className='Description-section'>
          <h2 className="about-heading"> 
           <FontAwesomeIcon icon={faArrowLeftLong} className="arrow-icon left" />
          <span> About me! </span>
          <FontAwesomeIcon icon={faArrowRightLong} className="arrow-icon right" />
          </h2> 
          <p className='about-text'>
            I'm a passionate web developer with experience in React, HTML, CSS, and JavaScript.
            I love building beautiful user interfaces and smooth user experiences.
            I'm also interested in photography and enjoy editing photos to bring out their best.
          </p>
        </div>
      </header>
    </>
  );
};

export default Header1;
