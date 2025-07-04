import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Work() {
  const projects = [
    {
      name: "UCMS - FJWU",
      desc: "The University Complaint Management System (UCMS) is a web-based centralized platform that helps report, track, and resolve complaints from students, faculty, and staff efficiently",
      github: "https://github.com/MariaYasmeen/FJWU-UCMS.git",
      report: "https://drive.google.com/file/d/1bugMIZ6drsEb0LfhMaG9SuQrvmuvIeLs/view?usp=drive_link"
    },
    {
      name: "FONTBOOK",
      desc: "React.js web app, enabling users to explore fonts, bookmark favorites, and preview Google Fonts.",
      github: "https://github.com/MariaYasmeen/FontBook.git",
      live: "https://fontboook.web.app"
    },
    {
      name: "M.YASMEEN",
      desc: "Online Clothing E-Commerce Store - with Firebase, featuring authentication, dynamic listings, category-based search, and cart management. Optimized UX with a responsive, intuitive UI.",
      github: "https://github.com/MariaYasmeen/M.YASMEEN.git",
      live: "https://myaasmeeen.web.app"
    },
    {
      name: "TYPEATHON",
      desc: "A Speed Typing Web App - Customizable tests, live word tracking, and detailed result analysis.",
      github: "https://github.com/MariaYasmeen/Typeathon.git",
      live: "https://typeathon.web.app"
    },
   ];

  return (
    <>
      <Helmet>
        <title>Work - Maria Yasmeen</title>
        <meta
          name="description"
          content="Browse through my most recent work in website design and development."
        />
      </Helmet>

      <div className="work-container">
        <div className="scroll-box">
          <p style={{ padding: "34px" }}></p>
          {projects.map((project, index) => (
            <motion.div
              className="project-item"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h1 className="project-name">{project.name}</h1>
              <p style={{ fontSize: "15px" }}>{project.desc}</p>
              <div className="buttons">
                {project.report && (
                  <a
                    className="btn px-3 py-2 btn-outline-light rounded-pill"
                    style={{ fontSize: "13px" }}
                    href={project.report}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    REPORT
                  </a>
                )}
                {project.live && (
                  <a
                    className="btn px-3 py-2 btn-outline-light rounded-pill"
                    style={{ fontSize: "13px" }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LIVE PREVIEW
                  </a>
                )}
                {project.github && (
                  <a
                    className="btn px-3 py-2 btn-outline-light rounded-pill"
                    style={{ fontSize: "13px" }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </a>
                )}
              </div>
            </motion.div>
          ))}
          <p style={{ padding: "69px" }}></p>
        </div>
      </div>
    </>
  );
}

export default Work;
