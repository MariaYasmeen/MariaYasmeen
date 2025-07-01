import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="hamburger-icon" />
        </button>

        {/* Brand */}
        <div className="name-section">
          <h1 className="site-name">MARIA YASMEEN</h1>
          <p className="site-title">Frontend Web Developer | Web Designer</p>
        </div>

        {/* Main nav links */}
        <ul className={`navbar-bar nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/about" className="nav-btn">About</Link></li>
          <li><Link to="/skills" className="nav-btn">Skills</Link></li>
          <li><Link to="/work" className="nav-btn">Work</Link></li>
          <li><Link to="/hackathons" className="nav-btn">Hackathons</Link></li>
          {/* <li><Link to="/contact" className="nav-btn">Contact</Link></li> */}

          {/* Extra links only for dropdown */}
           <li className="dropdown-only">
            <a
              href="https://drive.google.com/file/d/1gsyCiNz-k3FjvwUwFlUgVffgYoaFVtAa/view"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn"
            >
              Resume
            </a>
          </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
