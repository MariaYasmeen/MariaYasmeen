import Header from "../Components/Header";
import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Contact from "../Components/Contact";

const Skills = () => {
    return (
        <>
        <Helmet>
        <title>Skills - Maria Yasmeen</title>
        <meta name="description" content="Highlighting my core competencies." />
      </Helmet>
      <div className="AppContainer">
      <div className="flex-layout">
        <Header />
        <main className="flex-content">
        <div className="flex-scrollable">
        <div className="skillcss" style={{marginLeft:"auto",  width:"210px", fontSize:"14px", lineHeight:"1px"}}> 
         <motion.div
         initial={{ opacity: 0, y: 3 }}  // Start with text below and invisible
         animate={{ opacity: 1, y: 0 }}  // End with text at its final position and visible
         transition={{ duration: 0.9, ease: "easeOut" }}  // Smooth transition
         style={{ overflow: 'hidden', width: "15rem"}} 
>
<h5 style={{fontWeight:"800"}}>Languages</h5>
    <p> HTML, CSS, SCSS,  Javascript</p>
    <p> TypeScript React JS</p>
  <h5 style={{fontWeight:"800"}}>Frontend Frameworks</h5>
    <p> React.js</p>
 <p> Redux</p> 
    <p> Bootstrap</p>
    <p> Framer Motion</p>
  <h5 style={{fontWeight:"800"}}>UI/UX Design</h5>
    <p> Figma</p>
    <p> Wireframing and Prototyping</p>
    <p> Bootstrap (for UI designing)</p>
    <p> Framer Motion </p> 
    <h5 style={{fontWeight:"800"}}>UI/UX Design</h5>
    <p> Figma</p>
    <p> Wireframing and Prototyping</p>
    <p> Bootstrap (for UI designing)</p>
    <p> Framer Motion </p>
    <p> (for smooth Animations) </p>
  <div class="textcard">
  <h5 style={{fontWeight:"800"}}>Version Control</h5>
    <p>Git and GitHub</p>
  </div>
  <h5 style={{fontWeight:"800"}}>APIs</h5>
  <p>Axios (for APIs integration)</p>
    <p>RESTful APIs</p>
    <p>Chartjs (for charts)</p>
    <p>Fetch API</p>
</motion.div>
     </div> 
    </div>
      </main>
     {/* <div className="skillcss" style={{marginLeft:"auto",  width:"210px", fontSize:"14px", lineHeight:"1px"}}> 
         <motion.div
         initial={{ opacity: 0, y: 3 }}  // Start with text below and invisible
         animate={{ opacity: 1, y: 0 }}  // End with text at its final position and visible
         transition={{ duration: 0.9, ease: "easeOut" }}  // Smooth transition
         style={{ overflow: 'hidden', width: "15rem"}} 
>
<h5 style={{fontWeight:"800"}}>Languages</h5>
    <p> HTML, CSS, SCSS,  Javascript</p>
    <p> TypeScript React JS</p>
  <h5 style={{fontWeight:"800"}}>Frontend Frameworks</h5>
    <p> React.js</p>
{/* <p> Redux</p> 
    <p> Bootstrap</p>
    <p> Framer Motion</p>
  <h5 style={{fontWeight:"800"}}>UI/UX Design</h5>
    <p> Figma</p>
    <p> Wireframing and Prototyping</p>
    <p> Bootstrap (for UI designing)</p>
    <p> Framer Motion </p>
    <p> (for smooth Animations) </p>
  <div class="textcard">
  <h5 style={{fontWeight:"800"}}>Version Control</h5>
    <p>Git and GitHub</p>
  </div>
  <h5 style={{fontWeight:"800"}}>APIs</h5>
  <p>Axios (for APIs integration)</p>
    <p>RESTful APIs</p>
    <p>Chartjs (for charts)</p>
    <p>Fetch API</p>
</motion.div>
     </div> */}
     <Contact />
     </div>
     </div>
        </>
    )

}
export default Skills;