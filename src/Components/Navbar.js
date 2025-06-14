import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="hamburger-icon" />
        </button>

        <div className="name-section">
          <h1 className="site-name">MARIA YASMEEN</h1>
          <p className="site-title">Frontend Web Developer | Web Designer</p>
        </div>

        <ul className={`navbar-bar nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/about" className="nav-btn">About</Link></li>
          <li><Link to="/skills" className="nav-btn">Skills</Link></li>
          <li><Link to="/work" className="nav-btn">Work</Link></li>
          <li><Link to="/hackathons" className="nav-btn">Hackathons</Link></li>
          <li><Link to="/ongoingprojects" className="nav-btn">Ongoing Projects</Link></li>

          {/* Extra buttons visible only in dropdown */}
          {menuOpen && (
            <>
              <li><a href="mailto:mariyayasmeen000@gmail.com" className="nav-btn">Contact</a></li>
              <li><a href="https://drive.google.com/file/d/1gsyCiNz-k3FjvwUwFlUgVffgYoaFVtAa/view" target="_blank" rel="noopener noreferrer" className="nav-btn">Resume</a></li>
              <li><button className="nav-btn toggle-theme-btn">Toggle Theme</button></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
