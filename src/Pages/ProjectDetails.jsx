import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Contact from '../Components/Contact';
import { Link } from 'react-router-dom';
import './Pages.css';
import { Helmet } from 'react-helmet-async';
import LoadingPage from './LoadingPage';
import Header from '../Components/Header';
import Header2 from '../CaseStudies.jsx/Header2';

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
                return <div>Work not found</div>;
        }
    };

    return (
        <>
        <Helmet>
        <title>{projectName} - Project Analysis - Maria Yasmeen</title>
        <meta name="description" content={`Know the Project Analysis for ${projectName}.`} />
      </Helmet>
        
      <div className="AppContainer">
    <div className="flex-layout">
      <Header2 />

      <main className="flex-content" >
        <div className="flex-scrollable">
        <Suspense fallback={<LoadingPage />}>
                {renderProjectDetails()}
                </Suspense> 
      </div>
      </main>             
            
</div>
</div>


          
        </>
    );
};

export default ProjectDetails;
