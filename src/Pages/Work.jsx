import React from "react";  

function Work() {
  const projects = [
    { name: "BOSSWEAR", desc: "CSS Responsive Moderen E-Commerce Store", github: "https://github.com/MariaYasmeen/BOSSWEAR.git", live: "https://b0sswear.web.app/" },
    { name: "FONTBOOK", desc: "React.js web app, enabling users to explore fonts, bookmark favorites, and preview Google Fonts.", github: "https://github.com/MariaYasmeen/FontBook.git", live: "https://fontboook.web.app" },
    { name: "M.YASMEEN", desc: "Online Clothing E-Commerce Store - with Firebase, featuring authentication, dynamic listings, category-based search, and cart management. Optimized UX with a responsive, intuitive UI.", github: "https://github.com/MariaYasmeen/M.YASMEEN.git", live: "https://myaasmeeen.web.app" },
    { name: "TYEPATHON", desc: "A Speed Typing Web App - Customizable tests, live word tracking, and detailed result analysis.", github: "https://github.com/MariaYasmeen/Typeathon.git", live: "https://typeathon.web.app" },
    { name: "GUIDEWAY",  desc: "Navigation Assistant - Developed to address the challenges of navigating public transportation systems across the globe.", github: "https://github.com/MariaYasmeen/transit-onu-gnec-hackathon-frontend.git", live: "https://devpost.com/software/gnec_hackaton_transit" },
  ];

  return (
    <div className="work-container">
      <div className="scroll-box">
        <p style={{padding:"34px"}}></p>
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h1 className="project-name">{project.name}</h1>
            <p style={{ fontSize: "13px" }}>{project.desc}</p>
            <div className="buttons">
               <a className="btn px-3 py-2 btn-outline-light rounded-pill" style={{ fontSize: "13px" }} href={project.live} target="_blank" rel="noopener noreferrer" > LIVE PREVIEW</a>
               <a className="btn px-3 py-2 btn-outline-light rounded-pill" style={{ fontSize: "13px" }} href={project.github} target="_blank" rel="noopener noreferrer" > GITHUB</a>
            </div>
          </div>
        ))}
        <p style={{padding:"69px"}}></p>
      </div>
    </div>
  );
}

export default Work;
