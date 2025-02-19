import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="container-fluid" style={{fontSize:"13px", padding:'0px 22px 10px 22px'}}  >
      <div className="row d-flex align-items-center justify-content-between"> 
        <div className="col-md-6 d-flex flex-wrap gap-4">
          <div className="">
          <p style={{marginBottom:"6px", textDecoration:"none", color:"white"}}><a  href="https://github.com/MariaYasmeen"  target="_blank" rel="noopener noreferrer"  style={{textDecoration:"none", color:"white"}}>Islamabad, Pakistan</a> </p> 
<Link  style={{textDecoration:"none", color:"white"}}>mariyayasmeen000@gmail.com</Link>
          </div>
          <div >
          <p style={{marginBottom:"6px", textDecoration:"none", color:"white"}}><a  href="https://github.com/MariaYasmeen"  target="_blank" rel="noopener noreferrer"  style={{textDecoration:"none", color:"white"}}>Github</a> </p> 
          <a href="https://www.linkedin.com/in/maria-yasmeen-frontened-dev-designer" target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none", color:"white"}}>
                    LinkedIn        </a> 
                             </div>
        </div> 
        <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
     <Link to="https://drive.google.com/file/d/1EeYKVa0JnEhJB9umpUZNPSZ1gGdT-JAM/view?usp=sharing" target="_blank" rel="noopener noreferrer"  style={{textDecoration:"none", color:"white"}}>Resume</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
