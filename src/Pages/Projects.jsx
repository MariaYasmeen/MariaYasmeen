import React, { useState, Suspense } from 'react';
import Header from '../Components/Header';
import './Pages.css';

// Lazy load the components
const TypeathonCS = React.lazy(() => import('../CaseStudies.jsx/Typeathon'));
const CrypTrackCS = React.lazy(() => import('../CaseStudies.jsx/CrypTrack'));

const Projects = () => {
    const [clickedProject, setClickedProject] = useState(null);

    const handleClick = (projectName) => {
        setClickedProject(projectName);
    };

    const projects = [
        { name: 'typeathon', description: 'Speed Typing Test App | 2024' },
        { name: 'M.Yasmeen', description: 'Clothing Store | 2024' },
        { name: 'travel pakistan', description: 'Pakistan Travel Guide | 2024' },
        { name: 'CrypTrack', description: 'Crypto Currency Live Tracking | 2024' },
        { name: 'Home dashboard', description: 'Commission 2024' },
        { name: 'History book', description: 'Commission 2024' },
        { name: 'shop bazar', description: 'Commission 2024' },
        { name: 'PIANo boyi', description: 'Commission 2024' },
        { name: 'you know it', description: 'Commission 2024' },
        { name: 'NEWSChannel', description: 'Commission 2024' },
        { name: 'PLAin tracker', description: 'UI Project' },
        { name: 'Pizza hut', description: 'UI Project' },
    ];

    const renderProjectDetails = () => {
        switch (clickedProject) {
            case 'CrypTrack':
                return <CrypTrackCS />;
            case 'typeathon':
                return <TypeathonCS />;
            // Add cases for other projects with their respective components
            default:
                return null;
        }
    };

    return (
        <>
            <Header />
            <div className="body2">
                <div className="scrollable-content">
                    {projects.map((project) => (
                        clickedProject === null || clickedProject === project.name ? (
                            <a 
                                key={project.name} 
                                href="#" 
                                onClick={() => handleClick(project.name)}
                                className={`project-link ${clickedProject === project.name ? 'move-up' : ''}`}
                            >
                                {project.name} <span>{project.description}</span>
                            </a>
                        ) : null
                    ))}
                </div>

                {/* Display the related content for the clicked project */}
                {clickedProject && (
                    <Suspense fallback={<div>Loading...</div>}>
                        {renderProjectDetails()}
                    </Suspense>
                )}
            </div>
        </>
    );
};

export default Projects;
