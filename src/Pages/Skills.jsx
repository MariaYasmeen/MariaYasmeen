import Header from "../Components/Header";
import React from 'react';

const Skills = () => {
    return (
        <>
     <Header />
     <div className="skillcss" style={{marginLeft:"auto",  width:"210px", fontSize:"14px", lineHeight:"0.2px"}}> 
     <div class="" style={{width: "15rem"}}>
  <h5 style={{fontWeight:"800"}}>Languages</h5>
    <p> HTML, CSS, Javascript</p>

  <h5 style={{fontWeight:"800"}}>Frontend Frameworks</h5>
    <p> React.js</p>
{/* <p> Redux</p> */}
    <p> Bootstrap</p>
    <p> Framer Motion</p>
  <h5 style={{fontWeight:"800"}}>UI/UX Design</h5>
    <p> Figma</p>
    <p> Wireframing and Prototyping</p>
    <p> Bootstrap</p>
    <p> Framer Motion</p>
  <div class="textcard">
  <h5 style={{fontWeight:"800"}}>Version Control</h5>
    <p>Git and GitHub</p>
  </div>
  <h5 style={{fontWeight:"800"}}>APIs</h5>
    <p>RESTful APIs</p>
    <p>Axios, Fetch API</p>
</div>
     </div>
        </>
    )

}
export default Skills;