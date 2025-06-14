import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        {/* Hamburger for mobile/tablet only */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-icon" />
        </button>

        {/* Name and subtitle */}
        <div className="name-section">
          <h1 className="site-name">MARIA YASMEEN</h1>
          <p className="site-title">Frontend Web Developer | Web Designer</p>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/about" className="nav-btn">About</Link></li>
          <li><Link to="/skills" className="nav-btn">Skills</Link></li>
          <li><Link to="/work" className="nav-btn">Work</Link></li>
          <li><Link to="/hackathons" className="nav-btn">Hackathons</Link></li>
          <li><Link to="/ongoingprojects" className="nav-btn">Ongoing Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
