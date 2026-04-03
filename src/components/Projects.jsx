import React from 'react';
import { ReactComponent as MoonIcon, } from '../icons/moon.svg';
import { ReactComponent as SunIcon } from '../icons/sun.svg';
import { ReactComponent as ShareIcon } from '../icons/share-from-square.svg';
import { ReactComponent as FIcon } from '../icons/f.svg';
import { ReactComponent as SquareCaretIcon } from '../icons/square-caret-right.svg';

function Projects() {
    // PROJECT LIST:
    const projects = [
        {
            name: 'MAS Automotive',
            tech: 'HTML5, CSS3, JavaScript, PHP, MySQL, Apache',
            text: 'MAS Auto – Automotive Workshop Website. A production-ready multi-page business website built for MAS Auto, a professional automotive workshop in Polokwane, South Africa. Features a dark automotive aesthetic (black/red/metallic), smooth scroll animations, filterable gallery with lightbox, service booking form with WhatsApp deep-link redirect, embedded Google Maps, and a PHP/MySQL backend with PHPMailer for enquiry handling. Deployed on HostAfrica shared hosting (Apache/PHP).',
            image: <SquareCaretIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
            link: "https://taujamesmarake.github.io/mas-auto/"
        },
        {
            name: 'LEADit (Mini CRM)',
            tech: 'JavaScript, React.js, Node.js, Express.js, PostgreSQL(Supabase), Render',
            text: 'A simple yet functional CRM system that allows a business owner or admin to: view leads coming from website contact forms, update lead status (new → contacted → converted), add follow-up notes, manage leads from a secure admin panel. This mirrors how real-world companies manage incoming clients.',
            image: <SunIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
            link: 'https://leadit-eight.vercel.app/'
        },
        {
            name: 'Quiet Websites',
            tech: 'HTML5, CSS3, JavaScript',
            text: 'A collection of minimal web experiences that do very little, on purpose. They don\'t chase attention, collect data, or demand interaction. Each site focuses on one calm, thoughtful concept, using CLEAN design and lightweight code to create reflective moments on the web.',
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
        {
            name: 'Professional Web Portfolio',
            tech: 'JavaScript, React.js, Node.js, PostgreSQL(Supabase)',
            text: 'A well-built portfolio website shows: What I can build, How I think as a developer, How professionally I present myself',
            image: <SquareCaretIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
            link: "https://jtaumarake-portfolio.vercel.app"
        },
        {
            name: 'Future Self Messenger',
            tech: 'HTML5, CSS3, JavaScript, Node.js, Express, PostgreSQL',
            text: 'A full Stack web app for sending scheduled emails to your future self. fetaures real-time scheduling, automated email delivery, and a modern responsive UI',
            image: <FIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
            link: "https://github.com/TauJamesMarake/future-self-massenger"
        },
        {
            name: 'Todo REST API',
            tech: 'Vanilla HTML, CSS, JavaScript, Java21, Spring Boot, Maven',
            text: 'A fully functional REST API built with Java Spring Boot, serving as a learnign project for developers transitioning from C# ASP.NET Core. Every concept is mapped and explained side-by-side between the two ecosystems.',
            image: <MoonIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
            link: "https://github.com/TauJamesMarake/todoapi-java",
        },
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
