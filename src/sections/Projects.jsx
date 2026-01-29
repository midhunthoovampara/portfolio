import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'AmbulanceresponseApp',
        description: 'An emergency response application designed to streamline ambulance dispatch and tracking.',
        techStack: ['React', 'Node.js', 'Maps API'],
        image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Ambulance+Response+Deployment',
        demoLink: 'https://ambulanceresponse-app-midhunthoovamparas-projects.vercel.app',
        repoLink: 'https://github.com/midhunthoovampara/AmbulanceresponseApp'
    },
    {
        title: 'Course-Catalog',
        description: 'A comprehensive educational resource management system for browsing and organizing courses.',
        techStack: ['React', 'Bootstrap', 'API Integration'],
        image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Course+Catalog+Deployment',
        demoLink: 'https://course-catalog-midhunthoovamparas-projects.vercel.app',
        repoLink: 'https://github.com/midhunthoovampara/Course-Catalog'
    },
    {
        title: 'To-Do-app',
        description: 'A sleek and efficient digital task management tool for organizing daily activities.',
        techStack: ['React', 'CSS3', 'Local Storage'],
        image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=To-Do+App+Deployment',
        demoLink: 'https://to-do-app-midhunthoovamparas-projects.vercel.app',
        repoLink: 'https://github.com/midhunthoovampara/To-Do-app'
    },
    {
        title: 'Personal-static-website',
        description: 'A clean and professional static portfolio project showcasing personal skills and projects.',
        techStack: ['HTML5', 'CSS3', 'JavaScript'],
        image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Static+Website+Deployment',
        demoLink: 'https://personal-static-website-midhunthoovamparas-projects.vercel.app',
        repoLink: 'https://github.com/midhunthoovampara/Personal-static-website'
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <Container>
                <div className="text-center mb-5 slide-up">
                    <h2 className="display-5 fw-bold mb-3">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="mx-auto" style={{ height: '3px', width: '60px', background: 'var(--gradient-vibrant)', borderRadius: '10px' }}></div>
                </div>
                <Row className="g-4">
                    {projects.map((project, index) => (
                        <Col key={index} md={6} lg={4} className="fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="elegant-card d-flex flex-column">
                                <div className="mb-4 overflow-hidden rounded-4" style={{ height: '220px', background: 'var(--project-overlay)' }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-100 h-100 object-fit-cover opacity-90"
                                        style={{ transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                                    />
                                </div>
                                <h4 className="fw-bold mb-3">{project.title}</h4>
                                <p className="text-muted mb-4 small flex-grow-1" style={{ lineHeight: '1.7' }}>
                                    {project.description}
                                </p>
                                <div className="d-flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="badge rounded-pill" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--primary)', padding: '6px 12px', fontSize: '0.75rem' }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="d-flex gap-3 mt-auto">
                                    <a href={project.repoLink} target="_blank" rel="noreferrer" className="btn-elegant-outline flex-grow-1 text-center py-2 px-0" style={{ fontSize: '0.85rem' }}>
                                        <FaGithub className="me-2" /> Code
                                    </a>
                                    {project.demoLink && (
                                        <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn-elegant flex-grow-1 text-center py-2 px-0" style={{ fontSize: '0.85rem' }}>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
