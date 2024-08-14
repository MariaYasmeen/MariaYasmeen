import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Contact from '../Components/Contact';
import { Link } from 'react-router-dom';
import './Pages.css';

// Lazy load the components
const TypeathonCS = React.lazy(() => import('../CaseStudies.jsx/Typeathon'));
const CrypTrackCS = React.lazy(() => import('../CaseStudies.jsx/CrypTrack'));

const ProjectDetails = () => {
    const { projectName } = useParams();

    const renderProjectDetails = () => {
        switch (projectName) {
            case 'CrypTrack':
                return <CrypTrackCS />;
            case 'typeathon':
                return <TypeathonCS />;
            // Add cases for other projects with their respective components
            default:
                return <div>Project not found</div>;
        }
    };

    return (
        <>
           <div className="bg-ctr">
    <div className="bg-ctr-1">
    <div className="flex-ctre-12">
    <div className="box1">
        <h2 className="font-class">Maria Yasmeen</h2>
        <p>Web developer | UI/UX Designer</p>
        </div>
    <div className="nav-btn">
   <div className=""></div>
        <div className="box2 ">
        <h2 className="proj-title">{projectName}<span>  / Case Study  </span></h2>
        
   </div>
</div>
</div>
<Contact />
</div>
</div>
            <div className="body2">
                <Suspense fallback={<div>Loading...</div>}>
                    {renderProjectDetails()}
                </Suspense>
            </div>
        </>
    );
};

export default ProjectDetails;
