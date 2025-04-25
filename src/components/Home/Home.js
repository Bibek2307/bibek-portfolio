import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className="home-section"> {/* Use a specific class */}
            <div className="hero-content">
                <h1>Let's make it <span className="highlight">Compute</span></h1>
                <br></br>
                <h1><span className="name">Bibek Mukherjee</span></h1>
                <p className="subtitle">Computer Science Engineer & Web Developer</p>
                <p>I build modern, performant web applications and love solving complex problems with code.</p>
                <p className="tagline">Turning complex problems into elegant solutions</p>
            </div>
            <div className="scroll-indicator-wrapper">
            <div className="scroll-indicator">
                <span>Scroll</span>
                {/* SVG for the down arrow */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            </div>
        </section>
    );
};

export default Home;