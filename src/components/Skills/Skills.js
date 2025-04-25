import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';
// --- Icon Imports --- (ensure these are correct)
import { FaJs, FaPython, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaBootstrap } from 'react-icons/fa';
import { SiCplusplus, SiStreamlit, SiFastapi, SiMongodb, SiPostgresql, SiThreedotjs } from "react-icons/si";

// --- Skills Data --- (ensure this matches your actual skills)
const skillsData = {
    languages: [
        { name: "C/C++", icon: <SiCplusplus /> }, { name: "JavaScript", icon: <FaJs /> }, { name: "Python", icon: <FaPython /> }, { name: "Java", icon: <FaJava /> }, { name: "MySQL", icon: <FaDatabase /> }, { name: "PostgreSQL", icon: <SiPostgresql /> }, { name: "PHP", icon: <FaPhp /> },
    ],
    frontend: [
        { name: "Html", icon: <FaHtml5 /> }, { name: "Css", icon: <FaCss3Alt /> }, { name: "BootStrap", icon: <FaBootstrap /> }, { name: "StreamLit", icon: <SiStreamlit /> }, { name: "Three.js", icon: <SiThreedotjs /> }, /* { name: "React", icon: <FaReact /> }, */
    ],
    backendTools: [
        { name: "Node.js", icon: <FaNodeJs /> }, { name: "DBMS", icon: <FaDatabase /> }, { name: "MongoDB", icon: <SiMongodb /> }, { name: "Git/GitHub", icon: <FaGitAlt /> }, { name: "FastAPI", icon: <SiFastapi /> },
    ]
};
// --- End Skills Data ---

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      // Add staggerChildren to animate list items sequentially
      staggerChildren: 0.05 // Adjust timing as needed
    }
  }
};

// Optional: Variants for individual list items if you want them to fade/slide in
const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
};
// --- End Animation Variants ---


const Skills = () => {
    const ref = useRef(null);
    // isInView controls the overall section visibility and triggers list item animations
    // Ensure once: false (or remove it) if you want re-animation on scroll up/down
    const isInView = useInView(ref, { amount: 0.1 /*, once: false */ }); // Keep this

    // --- Remove State ---
    // const [numLanguagesToShow, setNumLanguagesToShow] = useState(0);
    // const [numFrontendToShow, setNumFrontendToShow] = useState(0);
    // const [numBackendToShow, setNumBackendToShow] = useState(0);
    // --- End Remove State ---

    // --- Remove Scroll Hooks and Effects ---
    // const { scrollYProgress } = useScroll(...);
    // const visibleLanguages = useTransform(...);
    // const visibleFrontend = useTransform(...);
    // const visibleBackend = useTransform(...);
    // useMotionValueEvent(...);
    // useEffect(() => { ... scrollYProgress.onChange ... }, ...);
    // --- End Remove Scroll Hooks ---


    return (
        // The section fades in based on isInView, triggering staggered children
        <motion.section
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="skills-section"
            id="skills"
        >
            <h2>Skills</h2>
            {/* The grid and categories are always rendered if the section is visible */}
            <div className="skills-grid">
                {/* Languages Category */}
                <div className="skill-category">
                    <h3>Languages</h3>
                    <ul>
                        {/* Remove .slice() - Map all items directly */}
                        {skillsData.languages.map((skill, index) => (
                            // List items animate based on parent's staggerChildren
                            <motion.li
                                key={index}
                                variants={listItemVariants}
                                // No need for individual initial/animate here if handled by parent stagger
                                // initial="hidden"
                                // animate={isInView ? "visible" : "hidden"}
                                transition={{ duration: 0.3 }} // Simple duration for each item
                            >
                                {skill.icon}
                                <span>{skill.name}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Frontend Category */}
                <div className="skill-category">
                    <h3>Frontend</h3>
                    <ul>
                        {/* Remove .slice() - Map all items directly */}
                        {skillsData.frontend.map((skill, index) => (
                            <motion.li
                                key={index}
                                variants={listItemVariants}
                                transition={{ duration: 0.3 }}
                            >
                                {skill.icon}
                                <span>{skill.name}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Backend & Tools Category */}
                <div className="skill-category">
                    <h3>Backend & Tools</h3>
                    <ul>
                        {/* Remove .slice() - Map all items directly */}
                        {skillsData.backendTools.map((skill, index) => (
                            <motion.li
                                key={index}
                                variants={listItemVariants}
                                transition={{ duration: 0.3 }}
                            >
                                {skill.icon}
                                <span>{skill.name}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;