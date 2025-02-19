import React from "react";

function About() {
  return (
    <div 
      className="skills-container"
      style={{

        display: "flex",
        justifyContent: "flex-end", // Push content to the right
        alignItems: "center",
        minHeight: "100vh", // Center vertically
        padding: "20px",
       maxWidth:"98%",
        minHeight: "67vh", // Keeps it centered in viewport
        padding: "20px",
      }}
    >
      <div 
        className="skills-content" 
        style={{   marginLeft: "auto", // Pushes to the right
            marginRight: "20px", 
            width: "40%", // Takes 40% of screen width
            minWidth: "300px",// Adds some space from right edge
         }}
      >
        <p>  Frontend Developer from Islamabad, I transform my ideas into code, making dynamic, responsive, and interactive web designs. I am confident that Web Designing and Development can be more different and impactful through observations and experiments.</p>
      </div>
    </div>
  );
}

export default About;
