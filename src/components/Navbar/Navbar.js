import React from 'react';
import './Navbar.css';

const Navbar = () => {
    // In a more complex app, you might manage active state here
    // For now, we'll rely on CSS :active or manual scrolling

    return (
        <nav className="main-nav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;