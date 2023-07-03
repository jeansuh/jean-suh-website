import React from 'react';
import './Home.css'
import Profile from '../img/profile.png'
// import bc from './bc.jpg'
// import ga from './ga.png'

function Home(){

  return (
    <div>
      <div className = "content-wrapper">
        <div className = "about content">
          <div className = "content-title">
            <img src={Profile} className="profile" />
          </div>
          <div className = "content-description">
            <p>Hi, I'm Jean, and I'm a <span style={{fontWeight:'bold'}}>Front-End Developer</span> based in Astoria, New York. </p>
            <p>As an artist and a problem solver, front-end development is my passion. I love to use my creativity and logical mind to develop websites / applications that are well programmed, visually striking and and user-friendly.</p>
            <p>I also love learning new, cutting edge technologies and challenging myself in this ever-changing, exciting world of software development. </p>
            <p>I'm always ready to dive into new and unique experiences, so feel free to contact me whether it be about books, rock climbing or Dungeons & Dragons!</p>
            <br /><br />
          </div>
        </div>

{/*        <div className = "qualifications content">
          <div className = "content-title">
            qualifications
          </div>
          <div className = "content-description">
            <div className = "school-title">
              <p>Hunter College 2018 - 2023<br />B.A. in Computer Science<br/ ></p>
            </div>
            <br/>
            <br/ >
            <div className = "school-title">
              <p>
                General Assembly 2022
              </p>
            </div>
            Front-End Development Certification<br/ >


          </div>
        </div>*/}

        <div className = "skills content">
          <hr />
          <div className = "content-description">
              <p>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
              </p>
              <p>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" />
{/*                <div className = "bold">Tools<br/ ></div>
                Git<br/ >
                Adobe Suite<br/ >
                Figma<br />*/}
              </p>
          </div>
        </div>

        <hr />
    </div>
  </div>
  )
}

export default Home;
