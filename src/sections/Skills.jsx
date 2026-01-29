import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { SiBootstrap, SiTailwindcss, SiRedux, SiTypescript } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
    { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" /> },
    { name: 'JavaScript', icon: <FaJsSquare size={40} color="#F7DF1E" /> },
    { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={40} color="#06B6D4" /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={40} color="#7952B3" /> },
    { name: 'Git', icon: <FaGitAlt size={40} color="#F05032" /> },
];

const Skills = () => {
    return (
        <section id="skills">
            <Container>
                <div className="text-center mb-5 slide-up">
                    <h2 className="display-5 fw-bold mb-3">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="mx-auto" style={{ height: '3px', width: '60px', background: 'var(--gradient-vibrant)', borderRadius: '10px' }}></div>
                </div>
                <Row className="g-4 justify-content-center">
                    {skills.map((skill, index) => (
                        <Col key={index} xs={6} md={4} lg={3} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="skill-badge h-100 d-flex flex-column align-items-center justify-content-center">
                                <div className="mb-3">
                                    {skill.icon}
                                </div>
                                <h5 className="fw-semibold mb-0" style={{ letterSpacing: '1px' }}>{skill.name}</h5>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
