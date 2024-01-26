import React, { useState } from 'react';
import './Home.css'
import Profile from '../img/profile.png'
import CB from '../img/curly-braces.svg';
// import bc from './bc.jpg'
// import ga from './ga.png'

function Home(){

  const [isHovered, setIsHovered] = useState(null);

  const handleMouseOver = (e) => {
    switch (e.target.id) {
    case "1":
      setIsHovered(1)
      break
    case "2":
      setIsHovered(2)
      break
    case "3":
      setIsHovered(3)
      break
    case "4":
      setIsHovered(4)
      break
    }
  }

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
            <p>I'm always ready to dive into new and unique experiences, so feel free to contact me whether it be about books, new cooking recipes or Dungeons & Dragons!</p>
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
        <hr />
        <div className = "skills content">
          <div className="content-title">
          </div>
          <div className = "content-description">
              {/*<img className="curly-braces" src={CB} />*/}
              <div className="icons">
                <p>
                  <img id="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                </p>
                <p>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" />
                </p>
              </div>
          </div>
        </div>
        <div className="more-about">
          <hr />
            <div className="more-title">
              More about me . . .
            </div>
            <section>
              <div className="question">
                When I'm not coding...
              </div>
              <div className="answer">
                You can find me at the GYM, playing D&D, cooking, or at home reading / playing video games
              </div>
               <div className="question">
                I geek out on...
              </div>
              <div className="answer">
                Possums. And movies & books.
              </div>
               <div className="question">
                This year I really want to...
              </div>
              <div className="answer">
                Go to Olympic National Park, and pick up a new framework.
              </div>
          </section>
        </div>
    </div>
  </div>
  )
}

export default Home;
