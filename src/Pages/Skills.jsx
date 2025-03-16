import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

function Skills() {
  return (
    <>
      <Helmet>
        <title>Skills - Maria Yasmeen</title>
        <meta name="description" content="Highlighting my core competencies." />
      </Helmet>

      <motion.div
        className="d-flex justify-content-end align-items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          marginLeft: "auto",
          marginRight: "20px",
          direction: "rtl",
          width: "60%",
          minWidth: "300px",
        }}
      >
        <div className="container text-white">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            
            {/* Languages */}
            <motion.div className="col" style={{ maxWidth: "300px" }} variants={fadeInUp}>
              <div className="p-2">
                <h5 className="fw-bold">Languages</h5>
                <div className="glassy-box">
                  <p>HTML, CSS, JavaScript</p> 
                  <p>TypeScript</p>
                </div>
              </div>
              
              <motion.div className="p-2" variants={fadeInUp}>
                <h5 className="fw-bold">UI/UX Design</h5>
                <p className="glassy-box">Figma</p> 
              </motion.div>
              
              <motion.div className="p-2" variants={fadeInUp}>
                <h5 className="fw-bold">Version Control</h5>
                <div className="glassy-box">
                  <p>Git and GitHub</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Frontend Frameworks */}
            <motion.div className="col" style={{ maxWidth: "300px" }} variants={fadeInUp}>
              <div className="p-2">
                <h5 className="fw-bold">Frontend Frameworks</h5>
                <p className="glassy-box">React.js</p>
              </div>

              <motion.div className="p-2" variants={fadeInUp}>
                <h5 className="fw-bold">UI Libraries</h5>
                <p className="glassy-box">Bootstrap, Tailwind CSS, Shadcn, MUI</p>
                <p className="glassy-box">Framer Motion (for smooth animations)</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

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
    </>
  );
}

export default Skills;
