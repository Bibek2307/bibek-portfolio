import React from 'react';
// Import motion and useInView from framer-motion
import { motion, useInView } from 'framer-motion';
// Remove the old import
// import { useInView } from 'react-intersection-observer';
import './Projects.css';


const projectData = [
    {
        title: "Intuitron - AI Prediction System",
        description: "A comprehensive AI prediction system featuring loan approval, employee attrition, and healthcare predictions.",
        tags: ["Python", "Streamlit", "FastAPI", "Scikit-learn"],
        // Reference images from the public folder using /
        imageUrl: '/intuitron.png', // Assuming image is directly in public folder
        codeLink: "#", // Replace with actual link
        demoLink: "#" // Replace with actual link
    },
    {
        title: "Orrery Webapp for NASA SPACEAPPS challenge",
        description: "3D interactive visualization that tracks asteroids and comets, allowing us to monitor their orbits and proximity to Earth in real-time",
        tags: ["Html", "Three.js", "JavaScript", "Css"],
        imageUrl: '/orrery.gif', // Reference from public folder
        codeLink: "#",
        demoLink: "#"
    },
    {
        title: "AI-Powered Question Management in Conferences",
        description: "AI-Powered Question Management System designed to address challenges in conferences... Leveraging NLP and deep learning techniques...",
        tags: ["Python", "MongoDB", "Flask", "React"],
        imageUrl: '/qagenie.png', // Reference from public folder
        codeLink: "#",
        journalLink: "#" // Specific link type for this project
    },
    {
        title: "Expense Tracker App",
        description: "It is a simple DBMS project I created with the sole purpose of learning more about sql, php, javascript and webdev",
        tags: ["PHP", "MySQL", "HTML/CSS", "DBMS"],
        imageUrl: '/expense.png', // Reference from public folder
        codeLink: "#",
        demoLink: "#"
    }
];

// Define animation variants for the section
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Adjust duration as needed
      ease: "easeOut"
    }
  }
};


const Projects = () => {
    const ref = React.useRef(null);
    // Remove 'once: true' to allow animation on scroll up as well
    const isInView = useInView(ref, {
        // once: true, // REMOVE this line
        amount: 0.1
    });

    return (
        <motion.section
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            // Animate will now toggle between hidden/visible based on isInView
            animate={isInView ? "visible" : "hidden"}
            className="projects-section"
            id="projects"
        >
            <h2>Projects</h2>
            <div className="project-grid">
                {projectData.map((project, index) => (
                    // Optionally wrap cards for staggered animation (more complex)
                    <div className="project-card" key={index}>
                        <img src={process.env.PUBLIC_URL + project.imageUrl} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.codeLink && <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>}
                                {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>}
                                {project.journalLink && <a href={project.journalLink} target="_blank" rel="noopener noreferrer">Journal</a>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section> // Close motion.section
    );
};

export default Projects;