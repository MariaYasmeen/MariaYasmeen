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