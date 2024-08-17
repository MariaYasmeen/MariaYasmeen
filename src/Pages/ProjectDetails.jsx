import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Contact from '../Components/Contact';
import { Link } from 'react-router-dom';
import './Pages.css';
import Header from '../Components/Header';

// Lazy load the components
const TypeathonCS = React.lazy(() => import('../CaseStudies.jsx/Typeathon'));
const CrypTrackCS = React.lazy(() => import('../CaseStudies.jsx/CrypTrack'));

const ProjectDetails = () => {
    const { projectName } = useParams();

    const renderProjectDetails = () => {
        switch (projectName) {
            case 'CrypTrack':
                return <CrypTrackCS />;
            case 'Typeathon':
                return <TypeathonCS />;
            // Add cases for other projects with their respective components
            default:
                return <div>Project not found</div>;
        }
    };

    return (
        <>

        
<Header />
<div className="  ">
                <Suspense fallback={<div>Loading...</div>}>
                    {renderProjectDetails()}
                </Suspense>
               
            </div>
<div className="herotxt">
        <h2 className="" style={{marginTop:"10px", direction:"rtl"}}>{projectName}<span>  / Project Analysis  </span></h2>

</div>
          
        </>
    );
};

export default ProjectDetails;
