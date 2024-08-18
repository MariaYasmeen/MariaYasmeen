
import React from 'react';
import Header from "../Components/Header";
import { Helmet } from 'react-helmet-async';

function About() {

  return (
    <>
     <Helmet>
        <title>About - Maria Yasmeen</title>
        <meta name="description" content="Crafting code to bring my ideas to life as a Developer and designer from Islamabad." />
      </Helmet>
 <Header/>
 <div className="skillcss" style={{marginLeft:"auto", width:"210px", fontSize:"14px"}}> 
  <p>Frontend Developer from Islamabad, I transform my ideas into code, making dynamic, responsive, and interactive web designs. I am confident that Web Designing and Development can be more different and impactful. Learning new models through observations and experiments.</p>
     </div>
    </>
  )
}

export default About;
