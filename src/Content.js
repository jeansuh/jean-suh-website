import React from 'react';
import './Content.css'
// import hunter from './hunter.jpg'
// import bc from './bc.jpg'
// import ga from './ga.png'

function Content(){

  return (
    <div>
      <div className = "content-wrapper">
        <div className = "about content">
          <div className = "content-title">
            about
          </div>
          <div className = "content-description">
            Hi, I'm Jean, and I'm from Astoria, New York. I am currently attending Hunter College, studying to become a full stack developer. <br /><br />
            As a visual learner and a problm solver, full-stack development is my passion. I aspire to develop effective websites and applications with a heavy focus on UI / UX, as well as reusable and well-written code.<br /><br />
            I'm always open to new opportunities to learn and hone my skills.
          </div>
        </div>

        <div className = "qualifications content">
          <div className = "content-title">
            qualifications
          </div>
          <div className = "content-description">
            <div className = "school-title">
              {/*<img src = {hunter} className = "logo" />*/}
              Hunter College - 2018 ~ 2023<br/ >
            </div>
            B.A. in Computer Science<br/ >
            Extra Curricular - Fencing : NCAA Northeast Regonal qualifier / Team Captain<br/ >
            <br/>
{/*            Relevant Courses<br />
            Software Analysis and Design - Data Structures and Algorithms<br />
            Computer Architecture<br />
            Data Science<br/>
            UI/UX Design<br/>
            Into to APIs<br/>
            Practical Web Development<br/>*/}

            <div className = "school-title">
              {/*<img src = {bc} className = "logo" />*/}
              Brooklyn college - 2017 ~ 2018<br/ >
            </div>
            Computer Science<br/ >
            <br/ >
            <div className = "school-title">
              {/*<img src = {ga} className = "logo" />*/}
            General Assembly - 2022<br/ >
            </div>
            Front-End Development Certification<br/ >


          </div>
        </div>

        <div className = "skills content">
          <div className = "content-title">
            skills
          </div>
          <div className = "content-description">
            <div className = "description-left">
              <div className = "bold"> Skills <br /></div>
              C++<br />
              C#<br/ >
              Python<br/ >
              Javascript<br/ > React<br/ > HTML<br/ > CSS<br/ >
              Frontend development<br />
              Graphic Design <br />
              <br />
              <div className = "bold">Languages<br/ ></div>
              English<br/ >
              Korean<br/ >
              Japanese<br/ >
              French<br/ >
              <br/ >
              <div className = "bold">Tools<br/ ></div>
              Git<br/ >
              Adobe Suite<br/ >
            </div>
            <div className = "description-right">

            </div>


          </div>
        </div>

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
            <div className = "description-right">
              <div className = "bold">Likes <br /></div>
              Jeremy Elbertson<br />
              Stardew Valley<br />
              Kirby<br />
              The Coen Brothers<br />
              Stanley Kubrick
            </div>
          </div>
        </div>

      </div>
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

export default Content;
