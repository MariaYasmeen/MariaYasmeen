import { Link } from "react-router-dom";
import Contact from "./Contact";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-ctr">
        <div className="bg-ctr-1">
          <div className="flex-ctre-12">
            <div className="box1">
              <div className="">
                <h2 className="font-class">Maria Yasmeen</h2>
                <p>Frontend Web Developer | Web Designer</p>

                {/* Toggle Button for Small Screens */}
                <button
                  className="dropdown-toggle-btn"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  |||
                </button>

                {/* Responsive Dropdown */}
                <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <span>01</span> About
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/skills">
                      <span>02</span> Skills
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/work">
                      <span>03</span> Work
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/resume">
                      <span>06</span> Resume
                    </Link>
                  </li>
                </div>

                {/* Desktop Navigation */}
                <div className="box2">
                  <Link to="/">
                    <span>01</span> About
                  </Link>
                  <Link to="/skills">
                    <span>02</span> Skills
                  </Link>
                  <Link to="/work">
                    <span>03</span> Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Header;
