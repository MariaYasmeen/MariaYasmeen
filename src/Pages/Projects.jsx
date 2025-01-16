import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './Pages.css';
import { easeInOut } from 'framer-motion/dom';

const Projects = () => {
    const projects = [
        { name: 'FontBook', description: 'Google Fonts Library 2024', link: 'https://fontboook.web.app/' },
        { name: 'M.Yasmeen', description: 'Clothing Store | 2024', link: 'https://myaasmeeen.web.app/' },
        { name: 'Typeathon', description: 'Speed Typing Test App | 2024', link: 'https://typeathon.web.app/' },
        { name: 'Guideway', description: 'Navigation Guide | 2024', link: 'https://myaasmeeen.web.app/' },
    ];

    const textVariant = {
        hidden: { 
          opacity: 0, 
          y: 50, 
          rotateX: 30, // Tilted from the top
          skewY: -1,   // Bent effect
        },
        visible: { 
          opacity: 1, 
          y: 1, 
    rotateX: -1, 
    skewY: 0, 
    transition: { 
      duration: 1.4, 
      ease:"easeOut",
    }
  }
};


    return (
        <>
         <Helmet>
        <title>Work - Maria Yasmeen</title>
        <meta name="description" content="Browse through my most recent work in website design and development." />
      </Helmet>
            <Header />
            <div className="projectcenter" >
                <motion.div className="scrollable-content">
                    <div   style={{color:"transparent"}}>
                    <p className='projectmargintxt'>dkhvhdb</p>
                    </div>
                    <motion.div
                 initial="hidden"
                 animate="visible" 
                 variants={textVariant}
                 style={{ display: 'inline-block' }} // Maintain original CSS styling
                  >

                       {projects.map((project) => (
                            <><div  style={{display:"flex", justifyContent:"space-evenly"}}>
                            <span>{project.description}</span>
                            <span>View Case Study</span>
                            </div>

    <Link
        key={project.name}
        to={project.link} 
        target="_blank"
    >
        {project.name} 
    </Link>
    </>
                        ))}
                    </motion.div>
                     <div  style={{color:"transparent"}}>
                        <p>djhdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvhdb</p>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Projects;
