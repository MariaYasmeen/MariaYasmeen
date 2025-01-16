import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <div className="ctr-3">
                <div className="nav-btn" style={{ position: "absolute" }}>
                    <div className="gap-1">
                        <div className="city">
                            <div style={{ fontSize: "13px" }}>Islamabad, Pakistan</div>
                            <a href="mailto:mariyayasmeen000@gmail.com" target="_blank" rel="noopener noreferrer">
                                mariyayasmeen000@gmail.com
                            </a>
                        </div>
                        <div className="social-links" style={{ marginLeft: "40px" }}>
                            <a href="https://github.com/MariaYasmeen" target="_blank" rel="noopener noreferrer">
                                <span>04</span> Github
                            </a>
                            <a href="https://www.linkedin.com/in/maria-yasmeen-frontened-dev-designer" target="_blank" rel="noopener noreferrer">
                                <span>05</span> LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className="CV-gap">
                        <Link to="https://drive.google.com/file/d/1X7hF2h6i3e6OL4t3pM5ccwsOz8D7Fdtl/view?usp=drive_link" target="_blank">
                            <span>06</span> Resume
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
