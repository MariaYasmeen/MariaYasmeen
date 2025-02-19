import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Skills() {
  return (
    <div 
      className="d-flex justify-content-end align-items-center  "
      style={{   
        marginLeft: "auto", // Pushes to the right
        marginRight: "20px",
        direction: "rtl", 
        width: "60%", // Takes 61% of screen width
        minWidth: "300px", // Ensures minimum width
      }}
    >
      <div className="container text-white ">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          
          {/* Languages */}
          <div className="col" style={{ maxWidth: "300px" }}>
            <div className="p-2">
              <h5 className="fw-bold">Languages</h5>
              <div className="glassy-box">
                <p>HTML, CSS, JavaScript</p> 
                <p>TypeScript</p>
              </div>
           <div className="p-2">
              <h5 className="fw-bold">UI/UX Design</h5>
                 <p className="glassy-box">Figma</p> 
             </div>
             <div className="p-2">
              <h5 className="fw-bold">Version Control</h5>
              <div className="glassy-box">
                <p>Git and GitHub</p>
              </div>
            </div>
            
            </div>
          </div>

          {/* Frontend Frameworks */}
          <div className="col" style={{ maxWidth: "300px" }}>
            <div className="p-2">
              <h5 className="fw-bold">Frontend Frameworks</h5>
                 <p className="glassy-box">React.js</p>
            </div>
            <div className="p-2">
              <h5 className="fw-bold">UI Libraries</h5>
                 <p className="glassy-box">Bootstrap, Tailwind CSS, Shadcn, MUI</p>
                <p className="glassy-box">Framer Motion (for smooth animations)</p>
             </div>
           
          </div>

          
        
       
        </div>
      </div>

      {/* CSS for glassy effect */}
      <style>
        {`
          .glassy-box {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 10px;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            text-align: center;
          }
          .glassy-box p {
            margin: 5px 0;
          }
        `}
      </style>
    </div>
  );
}

export default Skills;
