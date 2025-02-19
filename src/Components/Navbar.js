import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-3" style={{position: 'relative'}}>
      <div className="container-fluid d-flex align-items-start">
        {/* Left side: Name and line */}
        <div>
          <h1 style={{ fontSize: '38px', color: 'white', marginBottom: '5px' }}>MARIA YASMEEN</h1>
          <p style={{ fontSize: '15px', color: 'white', marginBottom: '0' }}>
            Frontend Web Developer | Web Designer
          </p>
        </div>

        {/* Hamburger button for mobile view */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar items: Buttons centered at the top */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul 
            style={{
                background: 'rgba(255, 255, 255, 0.1)', // Glass effect
                backdropFilter: 'blur(10px)',
                padding: '7px 16px',
                borderRadius: '20px',
                border: 'none',
                transition: '0.3s ease',
              }}
          className="navbar-nav d-flex flex-row justify-content-center gap-3">
            <li className="nav-item">
             <Link to="/about" className="btn text-white">About</Link>
            </li>
            <li className="nav-item">
            <Link to="/skills" className="btn text-white">Skills</Link>
            </li>
            <li className="nav-item">
            <Link to="/work" className="btn text-white">Work</Link>
            </li>
            <li className="nav-item">
            <Link to="/skills" className="btn text-white">Hackathons</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
