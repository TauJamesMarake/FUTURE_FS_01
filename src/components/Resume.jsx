import React, { useState } from 'react';
import { FileText, GraduationCap, Award, ExternalLink, X, BadgeMinusIcon, CornerDownRight } from 'lucide-react';
import marketingCertificate from '../images/certificates/Tau Marake - Content Marketing.pdf';
import dataScience1Certificate from '../images/certificates/Introduction_to_Data_Science_certificate.pdf';
import dataScience2Certificate from '../images/certificates/2nd _introduction_to_Data_Science_certificate_222052288-stud-cut-ac-za_5ccb4d1f-17f0-406f-98b2-03ad43db3e17.pdf';
import cybersecurityCertificate from '../images/certificates/Introduction_to_Cybersecurity_certificate.pdf';
import fullStackCertificate from '../images/certificates/Tau-2-687CD61AC590F-2025-07-20-13-42-19.pdf';
import pythonEssentialsCertificate from '../images/certificates/Python_Essentials_1_certificate.pdf';
import cvFile from '../images/certificates/cv - tau j. marake.pdf';
import { softSkills, techSkills } from '../models/skills';

function Resume() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    // EXPERIENCE DATA
    const experiences = [
        {
            date: '2023 - 2025',
            title: 'Student Assistant, IT Department',
            company: 'Central University of Technology, Free State',
            description: 'Offered technical support for hardware and software issues for over 50 student workstations. Provided course related guidance, proctored tests, and voluntarily conducted classes and academic support sessions for Higher Certificate, 1st Year, and 2nd Year Diploma IT students.'
        },
        {
            date: '2026',
            title: 'Full Stack Web Development Intern',
            company: 'Future Interns',
            Description: ''
        },
        {
            date: '2023 - Present',
            title: 'Owner',
            company: 'Anna\'s Spices & Treats',
            description: 'Founded and successfully manage daily operations of a retail spice and snack business. Optimised inventory control and supplier negotiations, handle sales, marketing, and financial management, demonstrating strong business acumen.'
        },
    ];

    // EDUCATION BACKGROUND
    const education = [
        {
            date: '2022 - 2025',
            title: 'Diploma in Information Technology',
            institution: 'Central University of Technology, Free State',
            description: 'Specialised in software development/engineering, web deveopment, computer networking, UI/UX design, data management, and system support.'
        },
        {
            date: '2025',
            title: 'Certificate in Full Stack Development',
            institution: 'IT Varsity',
            description: 'Comprehensive training in modern web development technologies, front-end and back-end development, database management, and full-stack application design.'
        },
        {
            date: '2016 - 2020',
            title: 'National Senior Certificate',
            institution: 'Phulong Senior Secondary School',
            description: 'Completed secondary education with a focus on Mathematics, Physical Sciences, Life Sciences, Geogrpahy, English (First Additional Language) and Sesotho (Home Language).'
        }
    ];

    // CERTIFICATIONS DATA
    const certificates = [
        {
            id: 1,
            title: 'Full Stack Development',
            issuer: 'FNB App Academy, IT Varsity',
            date: '2025',
            certificateUrl: fullStackCertificate
        },
        {
            id: 2,
            title: 'Introduction to Data Science',
            issuer: 'Cisco Networking Academy',
            date: '2024',
            certificateUrl: dataScience1Certificate
        },
        {
            id: 3,
            title: 'Introduction to Data Science (Advanced)',
            issuer: 'Cisco Networking Academy',
            date: '2024',
            certificateUrl: dataScience2Certificate
        },
        {
            id: 4,
            title: 'Introduction to Cybersecurity',
            issuer: 'Cisco Networking Academy',
            date: '2024',
            certificateUrl: cybersecurityCertificate
        },
        {
            id: 5,
            title: 'Content Marketing Basics',
            issuer: 'Great Learning',
            date: '2024',
            certificateUrl: marketingCertificate
        },
        {
            id: 6,
            title: 'Python Essentials 1',
            issuer: 'Cisco Networking Academy',
            date: '2025',
            certificateUrl: pythonEssentialsCertificate
        }
    ];

    // OPEN CERTIFICATE MODAL
    const openCertificate = (cert) => {
        setSelectedCertificate(cert);
    };

    const openFile = (cvFile) => {
        setSelectedFile(cvFile);
    }

    // CLOSE CERTIFICATE MODAL
    const closeCertificate = () => {
        setSelectedCertificate(null);
    };

    const closeFile = () => {
        setSelectedFile(null);
    }

    return (
        <div className="page resume">
            {/* PAGE HEADER */}
            <div className="about-header">
                <h1>RESUME</h1>
            </div>

            {/* EXPERIENCE SECTION */}
            <div className="resume-section">
                <div className="section-header">
                    <div className="section-icon">
                        <FileText size={24} />
                    </div>
                    <h2>EXPERIENCE</h2>
                </div>

                {/* TIMELINE: Display experience items in 3 columns */}
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-date">{exp.date}</div>
                            <h3>{exp.title}</h3>
                            <h4>{exp.company}</h4>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* EDUCATION SECTION */}
            <div className="resume-section">
                <div className="section-header">
                    <div className="section-icon">
                        <GraduationCap size={24} />
                    </div>
                    <h2>EDUCATION</h2>
                </div>

                {/* TIMELINE GRID */}
                <div className="timeline">
                    {education.map((edu, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-date">{edu.date}</div>
                            <h3>{edu.title}</h3>
                            <h4>{edu.institution}</h4>
                            <p>{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CERTIFICATIONS SECTION */}
            <div className="resume-section">
                <div className="section-header">
                    <div className="section-icon">
                        <Award size={24} />
                    </div>
                    <h2>CERTIFICATIONS</h2>
                </div>

                {/* CERTIFICATES GRID */}
                <div className="timeline">
                    {certificates.map((cert) => (
                        <div key={cert.id} className="timeline-item">
                            <div className="timeline-date">{cert.date}</div>
                            <h3>{cert.title}</h3>
                            <h4>{cert.issuer}</h4>

                            {/* View Certificate Button */}
                            {cert.certificateUrl && (
                                <button
                                    onClick={() => openCertificate(cert)}
                                    className="view-certificate"
                                >
                                    <ExternalLink size={16} />
                                    View Certificate
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* CERTIFICATE MODAL/VIEWER */}
            {selectedCertificate && (
                <div className="certificate-modal" onClick={closeCertificate}>
                    <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeCertificate}>
                            <X size={24} />
                        </button>
                        <h3>{selectedCertificate.title}</h3>
                        <p className="modal-issuer">{selectedCertificate.issuer} • {selectedCertificate.date}</p>
                        <iframe
                            src={`${selectedCertificate.certificateUrl}#toolbar=0`}
                            title={selectedCertificate.title}
                            className="certificate-viewer"
                        />
                    </div>
                </div>
            )}


            {/* TECHNICAL SKILLS */}
            <div className="resume-section">
                <div className="section-header">
                    <div className="section-icon">
                        <BadgeMinusIcon size={24} />
                    </div>
                    <h2>SKILLS</h2>
                </div>

                <div className="timeline">
                    <div className="timeline-item skills-list">
                        <h3>Soft Skills</h3>
                        <ul>
                            {softSkills.map((skill) => (
                                <h4><CornerDownRight size={14} style={{ color: '#ffa500' }} /> {skill.title}</h4>
                            ))}
                        </ul>
                    </div>
                    <div className="timeline-item skills-list">
                        <h3>Tech Skills</h3>
                        <ol>
                            {techSkills.map((tech) => (
                                <h4><CornerDownRight size={14} style={{ color: '#ffa500' }} /> {tech.title}</h4>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

            {/* CV SECTION  */}
            <div className="resume-section">
                <div className="section-header">
                    <div className="section-icon">
                        <FileText size={24} />
                    </div>
                    <h2>CURRICULUM VITAE</h2>
                </div>

                <div className="timeline">
                    <div className="timeline-item">
                        <button
                            onClick={() => openFile(cvFile)}
                            className="view-certificate"
                        >
                            <ExternalLink size={16} />
                            View Curriculm Vitae (CV)
                        </button>
                    </div>
                </div>
            </div>

            {/* CV MODAL */}
            {selectedFile && (
                <div className="certificate-modal" onClick={closeFile}>
                    <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeFile}>
                            <X size={24} />
                        </button>
                        <h3>Curriculum Vitae</h3><br />
                        <iframe
                            src={cvFile}
                            className="certificate-viewer"
                            sandbox="allow-scripts allow-same-origin"
                            title='Curriculu Vitae'
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Resume;