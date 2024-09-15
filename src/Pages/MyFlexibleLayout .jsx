import React from 'react';
import { Link } from 'react-router-dom';
const MyFlexibleLayout = () => {
  return (
    <div className="AppContainer">
    <div className="flex-layout">
      <header className="flex-navbar">
        <h1 className="navbar-heading">Maria Yasmeen</h1>
        <h2 className="navbar-subheading">Frontend Developer | UI/UX Designer </h2>
        <div class="Navbardropdown top-content">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
|||  </a>

  <ul class="dropdown-menu" style={{height:"18em", width:"18em", padding:"10px"}}>
    <li><Link class="dropdown-item" to="/"><span>01</span>  About</Link></li>
    <li><Link class="dropdown-item" to="/skills"><span>02</span>   Skills</Link></li>
    <li><Link class="dropdown-item" to="/work"><span>03</span>   Work</Link></li>
    <li><Link class="dropdown-item" to="/work"><span>04</span> instagram</Link></li>
    <li><Link class="dropdown-item" to="/work"><span>05</span> linkedin</Link></li>
    <li><Link class="dropdown-item" to="/work"><span>06</span> Resume</Link></li>
  </ul>
</div>
        <div className="box2">
    <Link to="/"><span>01</span>  About</Link>
    <Link to="/skills"><span>02</span>   Skills</Link>
    <Link to="/work"><span>03</span>   Work</Link>
    </div>
      </header>

      <main className="flex-content">
        <div className="flex-scrollable">
          <p>Scrollable content goes here.</p>
          <p>Keep adding more content to make it scrollable.</p>
          <p>Example of more content...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <p>Nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
          <p>Cillum dolore eu fugiat nulla pariatur.</p>
          <p>Excepteur sint occaecat cupidatat non proident.</p>
        </div>
      </main>

      <footer className="flex-footer">
        <div className="footer-containers">
          {/* First container with two boxes, each containing two buttons */}
          <div className="container-boxes">
            <div className="box">
            <div className="city">
        <div style={{fontSize:"13px"}}>Islamabad, Pakistan</div>
        <Link to="" target="_blank">mariyayasmeen000@gmail.com</Link>
    </div>  </div>
            <div className="box" >
            <div className="social-links" style={{ marginLeft: "40px" }}>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <span>04</span> Instagram
  </a>
  <a href="https://www.linkedin.com/in/maria-yasmeen-frontened-dev-designer" target="_blank" rel="noopener noreferrer">
    <span>05</span> LinkedIn
  </a>
</div></div>
          </div>
          <div className="box">
          <div>
    <Link to="https://www.canva.com/design/DAGOL9EuRjA/H3BBr7SU6rznXRDXTkqRTA/edit" target="_blank"><span>06</span> Resume</Link>
    </div>  </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default MyFlexibleLayout;
