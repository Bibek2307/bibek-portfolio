import React from 'react';
// Import motion and useInView from framer-motion
import { motion, useInView } from 'framer-motion';
// Remove the old import
// import { useInView } from 'react-intersection-observer';
import './Contact.css';
// Import icons (install react-icons if you haven't: npm install react-icons)
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

// Define animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Contact = () => {
    // Use framer-motion's useInView
    const ref = React.useRef(null);
    // Remove 'once: true' to allow re-animation on scroll
    const isInView = useInView(ref, { amount: 0.1 });

    const currentYear = new Date().getFullYear();

    return (
        // Wrap with motion.section
        <motion.section
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            // Use the specific ID from your CSS if needed, remove old className logic
            id="contact-section" // Keep this ID if your CSS relies on it
            className="contact-section" // Keep base class
        >
            <h2>Get In Touch</h2>
            <p className="contact-subtitle">
                Interested in working together or have a question? Feel free to reach out!
            </p>
            <div className="social-links">
                <a href="mailto:https://bibek.mukherjee2307@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>
                <a href="https://github.com/Bibek2307" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/bibek-mukherjee-" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                {/* Add other links as needed */}
            </div>
            <footer className="footer">
                © {currentYear} Bibek Mukherjee. All rights reserved.
            </footer>
        </motion.section> // Close motion.section
    );
};

export default Contact;