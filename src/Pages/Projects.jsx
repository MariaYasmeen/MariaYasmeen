import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import './Pages.css';

const Projects = () => {
    const projects = [
        { name: '', description: "" },
        { name: '', description: "" },
        { name: 'Typeathon', description: 'Speed Typing Test App | 2024' },
        { name: 'M.Yasmeen', description: 'Clothing Store | 2024' },
        { name: 'merapakistan', description: 'Pakistan Travel Guide | 2024' },
        { name: 'CrypTrack', description: 'Crypto Currency Live Tracking | 2024' },
        { name: 'Homedashboard', description: 'Commission 2024' },
        { name: 'History book', description: 'Commission 2024' },
        { name: 'shop bazar', description: 'Commission 2024' },
        { name: 'PIANo boyi', description: 'Commission 2024' },
        { name: 'you know it', description: 'Commission 2024' },
        { name: 'NEWSChannel', description: 'Commission 2024' },
        { name: 'PLAin tracker', description: 'UI Project' },
        { name: 'Pizza hut', description: 'UI Project' },
    ];

    return (
        <>
            <Header />
            <div className="" >
                <div className="scrollable-content" >
                    <div className="" style={{color:"transparent"}}>
                        <p>djhdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvdb</p>
                        <p>dkhvhdb</p>
                    </div>
                <Link to="" className="project-link" > </Link>
                    {projects.map((project) => (
                        <Link
                            key={project.name}
                            to={`/work/${project.name}`}
                            className="project-link"
                        >
                            {project.name} <span>{project.description}</span>
                        </Link>
                    ))}
                     <div className="" style={{color:"transparent"}}>
                        <p>djhdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvhdb</p>
                        <p>dkhvhdb</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;