import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import './Pages.css';

const Projects = () => {
    const projects = [
        { name: 'Typeathon', description: 'Speed Typing Test App | 2024' },
        { name: 'M.Yasmeen', description: 'Clothing Store | 2024' },
        { name: 'travel pakistan', description: 'Pakistan Travel Guide | 2024' },
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
            <div className="">
                <div className="scrollable-content">
                    {projects.map((project) => (
                        <Link
                            key={project.name}
                            to={`/projects/${project.name}`}
                            className="project-link"
                        >
                            {project.name} <span>{project.description}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;