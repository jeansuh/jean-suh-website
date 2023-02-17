import React from 'react';
import './Links.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// function linkButton(){
//   return(
//     alert('Getting ready...');
//   )
// }

const links = ["https://github.com/jeansuh", "https://www.linkedin.com/in/jean-suh-1a31b4119/", "resume", "portfolio"];

function Links() {

  return(
    <div className = "links-wrapper">
      <a className = "links-button" href="https://github.com/jeansuh" target="_blank" rel="noreferrer">
        github
      </a>
      <div>
        /
      </div>
        <a className = "links-button" href="https://www.linkedin.com/in/jean-suh-1a31b4119/" target="_blank" rel="noreferrer">
        linkedIn
      </a>
      <div>
        /
      </div>
      <a href="./resume.pdf" download ="Jean-Suh-Resume" className = "links-button">
        resume
      </a>
      <div>
        /
      </div>
      <Link className = "links-button"  to = "/portfolio">
        porfolio
      </Link>
    </div>

  )
}

export default Links;
