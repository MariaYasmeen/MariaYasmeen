import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function OngoingP() {
  const projects = [
    { name: "AI CHATBOT", desc: ".AI Chat bot, build for Instant Health guidance - Describe your symptoms, get expert medical advice, and find nearby clinics within 100m—all in one chat", github: "https://github.com/wilsonz347/Quanta.git", },
    { name: "ART MARKET PLACE", desc: ".A Professional Art Buying and Selling E-commerce Store", github: "https://github.com/MariaYasmeen/Art_MarketPlace.git", },
   ];

  return (
    <>
      <Helmet>
        <title>Work - Maria Yasmeen</title>
        <meta name="description" content="Browse through my most recent work in website design and development." />
      </Helmet>

      <div className="work-container">
        <div className="scroll-box">
          <p style={{ padding: "34px" }}></p>
          {projects.map((project, index) => (
            <motion.div
              className="project-item"
              key={index}
              initial={{ opacity: 0, y: 20 }} // Starts slightly below
              whileInView={{ opacity: 1, y: 0 }} // Moves up softly
              transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
              viewport={{ once: false, amount: 0.2 }} // Triggers animation when 20% of the item is visible
            >
              <h1 className="project-name">{project.name}</h1>
              <p style={{ fontSize: "13px" }}>{project.desc}</p>
              <div className="buttons">
                {/* <a className="btn px-3 py-2 btn-outline-light rounded-pill" style={{ fontSize: "13px" }} href={project.live} target="_blank" rel="noopener noreferrer">
                  LIVE PREVIEW
                </a> */}
                <a className="btn px-3 py-2 btn-outline-light rounded-pill" style={{ fontSize: "13px" }} href={project.github} target="_blank" rel="noopener noreferrer">
                  GITHUB
                </a>
              </div>
            </motion.div>
          ))}
          <p style={{ padding: "69px" }}></p>
        </div>
      </div>
    </>
  );
}

export default OngoingP;
