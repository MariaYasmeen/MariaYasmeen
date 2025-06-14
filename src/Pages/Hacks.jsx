import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Hacks() {
  const projects = [
    {
      name: "QUANTA",
      desc: "AI CHATBOT FOR INSTANT MEDICAL GUIDANCE | Smart Medical Answers—Powered by AI.",
      github: "https://github.com/MariaYasmeen/Quanta.git",
      devpost: "https://devpost.com/software/ai-chatbot-for-instant-medical-guidance"
    },
     {
      name: "GUIDEWAY",
      desc: "Navigation Assistant - Developed to address the challenges of navigating public transportation systems across the globe.",
      github: "https://github.com/MariaYasmeen/transit-onu-gnec-hackathon-frontend.git",
      devpost: "https://devpost.com/software/gnec_hackaton_transit"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hacks - Maria Yasmeen</title>
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
              
                {project.devpost && (
                  <a
                    className="btn px-3 py-2 btn-outline-light rounded-pill"
                    style={{ fontSize: "13px" }}
                    href={project.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DEVPOST
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

export default Hacks;
