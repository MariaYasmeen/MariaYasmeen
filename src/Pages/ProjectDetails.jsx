import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Contact from '../Components/Contact';
import { Link } from 'react-router-dom';
import './Pages.css';
import { Helmet } from 'react-helmet-async';

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
        <meta name="description" content={`Know the Projcet Analysis for ${projectName}.`} />
      </Helmet>
        
<div className="bg-ctr  ">
    <div className="bg-ctr-1">
   
    <div className="flex-ctre-12 ">
    <div className="item top-content">  

<h1 className='workname'>{projectName}<span> / Project Analysis</span></h1>
</div>
    <div className="box1 top-content ">
    <div className="">
        <h2 className="font-class ">Maria Yasmeen</h2>
        <p>Web developer | UI/UX Designer</p>
        <div className="box2">
    <Link to="/"><span>01</span>  About</Link>
    <Link to="/skills"><span>02</span>  Skills</Link>
    <Link to="/work"><span>03</span>  Work</Link>
    </div>  
        </div>
        
</div>
</div>

<div className="  ">
                <Suspense fallback={<div>Loading...</div>}>
                {renderProjectDetails()}
                </Suspense>   
            </div>
            
<Contact />

</div>

</div>


          
        </>
    );
};

export default ProjectDetails;
