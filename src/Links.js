import React from 'react';
import './Links.css'

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
      <div className = "links-button" >
        porfolio
      </div>
    </div>

  )
}

export default Links;
