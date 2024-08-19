import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Components/Header';
import Contact from '../Components/Contact';
const MyFlexibleLayout = () => {
  return (
    <>
     <div className="AppContainer">
    <div className="flex-layout">
      <Header />

      <main className="flex-content">
        <div className="flex-scrollable">
        <div className="skillcss" style={{marginLeft:"auto", width:"210px", fontSize:"14px"}}> 
   <motion.p
     initial={{ opacity: 0, y: 3 }}  // Start with text below and invisible
     animate={{ opacity: 1, y: 0 }}  // End with text at its final position and visible
     transition={{ duration: 0.9, ease: "easeOut" }}  // Smooth transition
     style={{ overflow: 'hidden', width: "15rem"}} 
   >Frontend Developer from Islamabad, I transform my ideas into code, making dynamic, responsive, and interactive web designs. I am confident that Web Designing and Development can be more different and impactful. Learning new models through observations and experiments.
   </motion.p>
     </div>    </div>
      </main>

     <Contact />
    </div>
    </div>
    </>
  );
};

export default MyFlexibleLayout;
