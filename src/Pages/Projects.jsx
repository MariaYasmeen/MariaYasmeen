import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './Pages.css';
import { easeInOut } from 'framer-motion/dom';

const Projects = () => {
    const projects = [
        { name: 'FontBook', description: 'Google Gonts Library 2024' },
        { name: 'M.Yasmeen', description: 'Clothing Store | 2024' },
        { name: 'Typeathon', description: 'Speed Typing Test App | 2024' },
        { name: 'merapakistan', description: 'Pakistan Travel Guide | 2024' },
        { name: 'History book', description: 'Commission 2024' },
        { name: 'Homedashboard', description: 'Commission 2024' },
        { name: 'CrypTrack', description: 'Crypto Currency Live Tracking | 2024' },
        { name: 'shop bazar', description: 'Commission 2024' },
        { name: 'you know it', description: 'Commission 2024' },
        { name: 'NEWSChannel', description: 'Commission 2024' },
        { name: 'PLAin tracker', description: 'UI Project' },
        { name: 'Pizza hut', description: 'UI Project' },
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
        <meta name="description" content="Browse through my most recent work in dev and design industry." />
      </Helmet>
            <Header />
            <div className="projectcenter" >
         
                <motion.div className="scrollable-content"  
 >
                    <div className="" style={{color:"transparent"}}>
                        <p>djhdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvdb</p>
                        <p>dkhvdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvdb</p>
                        <p>dkhvhdb</p>
                        <p className='projectmargintxt'>dkhvhdb</p>
                    </div>
                    <motion.div
                 initial="hidden"
                 animate="visible"
                 className='responsive-text'
                 variants={textVariant}
                 style={{ display: 'inline-block' }} // Maintain original CSS styling
                  >

                    {projects.map((project) => (
                        <><div className="" style={{display:"flex", justifyContent:"space-evenly"}}>
                                                <span>{project.description}</span>
                                                <span>View Case Study</span>
                                                </div>

                        <Link
                            key={project.name}
                            // to={`/work/${project.name}`}
                            className="project-link"
                        >
                            {project.name} 
                        </Link>
                        </>
                    ))}
                    </motion.div>
                     <div className="" style={{color:"transparent"}}>
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