import React from 'react';
// Import motion and useInView from framer-motion
import { motion, useInView } from 'framer-motion';
// Remove the old import
// import { useInView } from 'react-intersection-observer';
import './About.css';

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

const About = () => {
    // Use framer-motion's useInView
    const ref = React.useRef(null);
    // Remove 'once: true' to allow re-animation on scroll
    const isInView = useInView(ref, { amount: 0.1 });

    return (
        // Wrap with motion.section
        <motion.section
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            // Use the specific ID from your CSS if needed, remove old className logic
            id="about-section" // Keep this ID if your CSS relies on it
            className="about-section" // Keep base class
        >
            <h2>About Me</h2>
            <div className="about-content">
                <p>
                    Hi, I'm Bibek Mukherjee, a passionate and driven B.Tech student with a strong foundation
                    in Computer Science and a creative spark for building impactful tech solutions. With
                    hands-on experience in web development, AI, and data-driven visualization, I love turning
                    complex ideas into user-friendly applications that solve real-world problems. I'm also
                    actively involved in research. My work has been published in the International Journal of
                    Scientific Research in Engineering and Management (IJSREM), and I continue to explore
                    innovative, research-worthy projects, especially at the intersection of AI, human-
                    computer interaction, and immersive technology.
                </p>
                <p>
                    My journey began with building practical tools like an Expense Tracker Web App using
                    PHP, HTML, and CSS, and has evolved into developing AI-powered systems like a AI
                    Prediction Platform and a Conference AI powered Q&A WebAPP—both integrating
                    advanced techniques in multimodal analysis, real-time processing, and emotionally
                    intelligent AI.
                </p>
                <p>
                    One of my most exciting ventures is the AI-powered Personal Planetary Orrery, a web app
                    that visualizes Near-Earth Objects and simulates custom solar systems with realistic
                    physics and intelligent orbit prediction—bridging space science with interactive
                    technology. With a curious mind and a builder's mindset, I'm always looking for new
                    challenges where I can merge creativity, AI, and problem-solving to make a difference.
                    Whether it's through academic research, app development, or futuristic simulations, I'm on
                    a mission to push the boundaries of what's possible with technology.
                </p>
            </div>
        </motion.section> // Change </section> to </motion.section>
    );
};

export default About;