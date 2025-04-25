import React, { useState } from 'react'; // Import useState
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track menu open/close

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to close the menu (useful when a link is clicked)
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <> {/* Use Fragment to wrap nav and button */}
            {/* Apply 'active' class based on isOpen state */}
            <nav className={`main-nav ${isOpen ? 'active' : ''}`}>
                <ul>
                    {/* Add onClick={closeMenu} to each link */}
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#about" onClick={closeMenu}>About me</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>

            {/* Hamburger Menu Icon */}
            {/* Apply 'active' class based on isOpen state */}
            <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </>
    );
};

export default Navbar;