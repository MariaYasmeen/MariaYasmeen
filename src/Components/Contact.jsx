
import React from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <>
      <footer className="flex-footer">
        <div className="footer-containers">
          {/* First container with two boxes, each containing two buttons */}
          <div className="container-boxes">
            <div className="box">
        <div className="city" style={{ display: 'inline-block', zIndex:"100" }}>
        <div style={{fontSize:"13px"}}>Islamabad, Pakistan</div>
        <Link to="" target="_blank">mariyayasmeen000@gmail.com</Link>
    </div>
    </div>
    <div className="box">
    <div className="social-links" style={{ marginLeft: "40px" }} >
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <span>04</span> Instagram
  </a>
  <a href="https://www.linkedin.com/in/maria-yasmeen-frontened-dev-designer" target="_blank" rel="noopener noreferrer">
    <span>05</span> LinkedIn
  </a>
</div>

    </div>  
         </div>
          {/* Second container with one button */}
          <div className="container-single">
          <div className="box">
          <Link to="https://www.canva.com/design/DAGOL9EuRjA/H3BBr7SU6rznXRDXTkqRTA/edit" target="_blank"><span>06</span> Resume</Link>
          </div>
          </div>
        </div>
      </footer>
        </>
    )
};

export default Contact;