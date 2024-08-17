import { Link } from "react-router-dom";
import Contact from "./Contact";
import React from 'react';

const Header = () =>{
    return (
        <>
          <div className="bg-ctr ">
    <div className="bg-ctr-1">
    <div className="flex-ctre-12 ">
    <div className="box1 ">
    <div className="">
        <h2 className="font-class">Maria Yasmeen</h2>
        <p>Web developer | UI/UX Designer</p>
    
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
        </div>
</div>
</div>
<Contact />
</div>
</div>
        </>
    )
}

export default Header;