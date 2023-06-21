import React from 'react';
import './Home.css'
// import hunter from './hunter.jpg'
// import bc from './bc.jpg'
// import ga from './ga.png'

function Home(){

  return (
    <div>
      <div className = "content-wrapper">
        <div className = "about content">
          <div className = "content-title">
            about
          </div>
          <div className = "content-description">
            <p>Hi, I'm Jean, and I'm a <span style={{fontWeight:'bold'}}>Full-Stack Web developer</span> based in Astoria, New York. </p>
            <p>As an artist and a problm solver, full-stack development is my passion. I love to use my creativity and logical mind to develop websites / applications that are well programmed, visually striking and and user-friendly.</p>
            <p>I also love learning new, cutting edge technologies and challenging myself in this ever-changing, exciting world of software development. </p>
            <p>I'm always ready to dive into new and unique experiences</p>
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
          <div className = "content-title">
            skills
          </div>
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
{/*
        <div className = "interests content">
          <div className = "content-title">
            interests
          </div>
          <div className = "content-description">
            <div className = "description-left">
              <div className = "bold">Hobbies<br /></div>
              Baking<br />
              Dungeons & Dragons<br />
              Plants<br />
              Drawing<br />
              Hiking<br />
              Books<br />
              Movies<br />
              <br />
            </div>
          </div>
        </div>

   */}   </div>
    </div>
  //   <div className = "grid-container">
  //     <div className = "grid-container-row">
  //       <div className = "grid-item-1">
  //         <div className = "grid-item-subgrid">
  //           <img src = {hunter} className = "left" />
  //           <div className = "right">
  //             Hunter College - Computer Science <br />
  //             2018 - 2023 (expected graduation)<br />
  //           </div>
  //         </div>
  //       </div>
  //       <div className = "grid-item-2">
  //         ??
  //       </div>
  //     </div>
  //
  //
  //     <div className = "grid-container-row">
  //       <div className = "grid-item-3">
  //         <div className = "grid-item-subgrid">
  //           <img src = {bc} className = "left" />
  //           <div className = "right">
  //             Brooklyn College - Computer Science
  //           </div>
  //         </div>
  //       </div>
  //       <div className = "grid-item-2">
  //         ??
  //       </div>
  //     </div>
  //
  //     <div className = "grid-container-row">
  //       <div className = "grid-item-4">
  //         <div className = "grid-item-subgrid">
  //           <img src = {ga} className = "left" />
  //           <div className = "right">
  //             General Assembly <br />
  //             Frontend Development Certification
  //           </div>
  //         </div>
  //       </div>
  //       <div className = "grid-item-5">
  //       ?
  //       </div>
  //     </div>
  //
  //
  //   </div>
  )
}

export default Home;
