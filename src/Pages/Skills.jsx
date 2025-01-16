import Header from "../Components/Header";
import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Skills = () => {
    return (
        <>
            <Helmet>
                <title>Skills - Maria Yasmeen</title>
                <meta name="description" content="Highlighting my core competencies." />
            </Helmet>
            <Header />

            <div className="skillcss"  style={{marginLeft:"auto"}}>
                <motion.div
                    initial={{ opacity: 0, y: 3 }}  // Start with text below and invisible
                    animate={{ opacity: 1, y: 0 }}  // End with text at its final position and visible
                    transition={{ duration: 0.9, ease: "easeOut" }}  // Smooth transition
                    style={{  display:"inline-block"}}
                >
                    <div className="flex3boxes " style={{ display: "flex" }}>
                        <div style={{ margin: "10px" }}>
                            <div className="card-body">
                            <p>_____________</p>
                        <h5>Languages</h5>
                                <p> HTML CSS Javascript</p>
                                <p> SCSS</p>
                                <p> TypeScript React JS</p>
                                <p>_____________</p>
                                <h5>Frontend Frameworks</h5>
                                <p> React.js</p>
                                <p>_____________</p>

                            </div>
                        </div>
                        <div style={{ margin: "10px" }}>
                            <div className="card-body">
                            <p>_____________</p>
                                <h5>UI/UX Design</h5>
                                <p> Figma</p>
                                <p> Wireframing & Prototyping</p>
                                <p>_____________</p>
                                <h5>UI Libraries</h5>
                                <p>Bootstrap</p>
                                <p>MUI (for UI designing)</p>
                                <p> Framer Motion (for smooth Animations) </p>
                                <p>_____________</p>
                            </div>
                        </div>
                        <div style={{ margin: "10px" }}>
                            <div className="card-body">
                            <p>_____________</p>
                                <h5>Version Control</h5>
                                <p>Git and GitHub</p>
                                <p>_____________</p>
                                <h5>APIs</h5>
                                <p>Axios (for APIs integration)</p>
                                <p>RESTful APIs</p>
                                <p>Chart.js </p>
                                <p>Fetch API</p>
                                <p>_____________</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Skills;
