import React from 'react';
import { Briefcase } from 'lucide-react';
import { techStack } from '../models/techStack.js';
import { skills } from '../models/skills.js'
// import Resume from './Resume.jsx';

// Displays skills, services, and techstack
function About() {
    return (
        <div className="page">
            {/* PAGE HEADER: Title with profile image */}
            <div className="about-header">
                <h1>ABOUT</h1>
            </div>

            {/* INTRODUCTION SECTION */}
            <div className="about-intro">
                <h2>TAU JAMES MARAKE</h2>
                <p>
                    Information Technology graduate, Full-Stack Developer, and a creative with a passion for turning ideas into modern software, web and mobile applications, and designing interfaces.
                    I enjoy working across the frontend and backend, building efficient solutions, and creating seamless user experiences. I'm always eager to learn new technologies and tackle challenging projects.
                    I combine technical precision with creative insight to turn ideas into functional, visually engaging products.<br /><br />

                    Whether it's developing software, designing brands, or launching entrepreneurial projects, my work is driven by purpose, innovation, and attention to detail.<br />
                </p>
            </div>

            {/* TWO COLUMN LAYOUT */}
            <div className="about-content">
                {/* LEFT COLUMN: What I Do - Skills/Services */}
                <div className="what-i-do">
                    <h3>Services</h3>

                    {/* Scrollable container */}
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-icon">
                                <Briefcase size={30} />
                            </div>
                            <div className="skill-info">
                                <h4>{skill.title}</h4>
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT COLUMN */}
                <div className="tech-stack">
                    <h3>Tech Stack</h3>
                    <div className="skills-scroll-container">
                        <div className="tech-grid">
                            {/* MAP THROUGH TECH STACK */}
                            {techStack.map((tech, index) => (
                                <div key={index} className="tech-item">
                                    <div className="tech-icon">{tech.icon}</div>
                                    <div className="tech-label">{tech.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;