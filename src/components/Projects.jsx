import React from 'react';
import { ReactComponent as MoonIcon, } from '../icons/moon.svg';
import { ReactComponent as SunIcon } from '../icons/sun.svg';
import { ReactComponent as ShareIcon } from '../icons/share-from-square.svg';
import { ReactComponent as FIcon } from '../icons/f.svg';

function Projects() {
    // PROJECT LIST:
    const projects = [
        {
            name: 'Quiet Websites',
            tech: 'HTML5, CSS3, JavaScript',
            text: 'Quiet Websites, a collection of minimal web experiences that do very little, on purpose. They don\'t chase attention, collect data, or demand interaction. Each site focuses on one calm, thoughtful concept, using clean design and lightweight code to create reflective moments on the web.',
            image: <MoonIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
            link: "https://taujamesmarake.github.io/quiet-websites/index.html"
        },
        {
            name: 'Student Accommodation Website',
            tech: "HTML5, CSS3, JavaScript, Node.js",
            text: "A full-stack web application designed to streamline the student housing application process. Users can browse available rooms, submit accommodation applications with integrated NSFAS funding support, and provides administrators with a comprehensive dashboard to manage applications efficiently.",
            image: <SunIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
            link: "https://taujamesmarake.github.io/student-accommodation/index.html"
        },
        // {
        //     name: 'ProfessionalWeb Portfolio',
        //     tech: 'JavaScript, React.js',
        //     text: 'This very own portfolio, intended to showcase my personal work and my React.js skills',
        //     image: ""
        // },
        {
            name: 'Future Self Messenger',
            tech: 'HTML5, CSS3, JavaScript, Node.js',
            text: 'TBD',
            image: <FIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
            link: ""
        },
        // {
        //     name: 'AI Debate Arena',
        //     tech: 'JavaScript, TypeScript, OpenAI',
        //     text: 'TBD',
        //     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
        // },
    ];

    const handleVisitSite = (link) => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="page">
            {/* PAGE HEADER */}
            <div className="about-header">
                <h1>PROJECTS</h1>
            </div>

            {/* Display project cards */}
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        {/* CARD HEADER */}
                        <div className="project-header">
                            <div className="project-avatar">
                                {project.image}
                            </div>
                            <div className="project-info">
                                <h3>{project.name}</h3>
                                <p>{project.tech}</p>
                            </div>

                            {/* VISIT SITE BUTTON */}
                            <button
                                className="project-link-btn"
                                onClick={() => handleVisitSite(project.link)}
                                disabled={!project.link}
                            >
                                {project.link ? <ShareIcon style={{ width: '25px', height: '25px' }} /> : 'Coming Soon'}
                            </button>
                        </div>

                        {/* PROJECT TEXT */}
                        <p className="project-text">{project.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;