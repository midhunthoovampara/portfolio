import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Hero = () => {
    return (
        <section id="home" className="d-flex align-items-center min-vh-100">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={10} className="slide-up">
                        <h5 className="text-primary fw-bold mb-3 ls-widest">
                            HELLO, I'M
                        </h5>
                        <h1 className="display-1 fw-bold mb-2">
                            <span className="text-gradient">MIDHUN T</span>
                        </h1>
                        <h2 className="display-5 text-muted mb-4 fw-medium">Web Developer</h2>
                        <p className="lead mb-5 text-secondary mx-auto" style={{ maxWidth: '600px' }}>
                            "You are the average of the people you hang around"
                        </p>

                        {/* Social Icons Row */}
                        <div className="d-flex gap-3 mb-5 justify-content-center">
                            <a href="https://github.com/midhunthoovampara" target="_blank" rel="noreferrer" className="social-icon-pill">
                                <FaGithub size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/midhun-1422-t" target="_blank" rel="noreferrer" className="social-icon-pill">
                                <FaLinkedin size={22} />
                            </a>
                            <a href="https://instagram.com/midhundasz" target="_blank" rel="noreferrer" className="social-icon-pill">
                                <FaInstagram size={22} />
                            </a>
                            <a href="mailto:midhundas1422001@gmail.com" className="social-icon-pill">
                                <FaEnvelope size={22} />
                            </a>
                        </div>

                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                            <Button href="#projects" className="btn-elegant">
                                View My Work
                            </Button>
                            <Button href="#contact" className="btn-elegant-outline">
                                Contact Me
                            </Button>
                            <Button href="https://drive.google.com/file/d/1FdfQhFugyz3iytrkOriB9gKz-LefzS1M/view?usp=drive_link" target="_blank" className="btn-elegant-outline">
                                <HiDownload className="me-2" /> Resume
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
