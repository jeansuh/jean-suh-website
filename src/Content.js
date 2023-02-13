import './Content.css'
import hunter from './hunter.jpg'
import bc from './bc.jpg'
import ga from './ga.png'

function Content(){

  return (
    <div>
      <div className = "content-wrapper">
        <div className = "about content">
          <div className = "content-title">
            about
          </div>
          <div className = "content-description">
            I'm from Astoria, New York, and I am currently attending Hunter College, studying to become a full stack developer. I aspire to develop effective websites and applications with a high focus on UI / UX.
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
            Computer Science<br/ >
            Extra Curricular - Fencing : NCAA Northeast Regonal qualifier / Team Captain<br/ >
            <br />
            <div className = "school-title">
              {/*<img src = {bc} className = "logo" />*/}
              Brooklyn college - 2017 ~ 2018<br/ >
            </div>
            Computer Science<br/ >
            <br/ >
            <div className = "school-title">
              <img src = {ga} className = "logo" />
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
            Programming Languages <br />
            C++<br/ >
            C#<br/ >
            Python<br/ >
            C++, C#, Python, Javascript, React, HTML, CSS<br/ >
            git<br/ >
            Adobe Suite<br/ >
            <br />
            Languages<br/ >
            English<br/ >
            Korean<br/ >
            Japanese<br/ >
            French<br/ >
            <br/ >

          </div>
        </div>

        <div className = "interests content">
          <div className = "content-title">
            interests
          </div>
          <div className = "content-description">
            baking<br />
            D&D<br />
            fencing<br />
            illustration<br />
            Jeremy Elbertson<br />
            PETS
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
