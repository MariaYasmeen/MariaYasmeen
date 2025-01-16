
import React from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <>
        <div className="ctr-3  ">
    <div className="nav-btn" style={{position:"absolute"}}>
      <div className="gap-1 " >
        <div className="city">
        <div style={{fontSize:"13px"}}>Islamabad, Pakistan</div>
        <Link to="" target="_blank">mariyayasmeen000@gmail.com</Link>
    </div>
    <div className="social-links" style={{ marginLeft: "40px" }}>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <span>04</span> Instagram
  </a>
  <a href="https://www.linkedin.com/in/maria-yasmeen-frontened-dev-designer" target="_blank" rel="noopener noreferrer">
    <span>05</span> LinkedIn
  </a>
</div>

    </div>
    <div className="CV-gap ">
    <Link to="https://www.canva.com/design/DAGOL9EuRjA/H3BBr7SU6rznXRDXTkqRTA/edit" target="_blank"><span>06</span> Resume</Link>
    </div>
    </div>
    </div>
        </>
    )
};

export default Contact;
