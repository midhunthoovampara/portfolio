import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact">
            <Container>
                <div className="text-center mb-5 slide-up">
                    <h2 className="display-5 fw-bold mb-3">
                        <span className="text-gradient">Get In Touch</span>
                    </h2>
                    <div className="mx-auto" style={{ height: '3px', width: '60px', background: 'var(--gradient-vibrant)', borderRadius: '10px' }}></div>
                </div>
                <Row className="justify-content-center">
                    <Col lg={11}>
                        <div className="elegant-card p-4 p-md-5 fade-in">
                            <Row className="g-5">
                                <Col md={5}>
                                    <h2 className="fw-bold mb-4">Let's <span className="text-primary">Talk</span></h2>
                                    <p className="text-muted mb-5 fs-5">
                                        Have a project in mind or want to collaborate? I'm always open to
                                        discussing new projects and creative ideas.
                                    </p>
                                    <div className="pt-4 d-flex gap-3">
                                        <a href="https://github.com/midhunthoovampara" target="_blank" rel="noreferrer" className="social-icon-pill"><FaGithub size={22} /></a>
                                        <a href="https://www.linkedin.com/in/midhun-1422-t" target="_blank" rel="noreferrer" className="social-icon-pill"><FaLinkedin size={22} /></a>
                                        <a href="https://instagram.com/midhundasz" target="_blank" rel="noreferrer" className="social-icon-pill"><FaInstagram size={22} /></a>
                                        <a href="mailto:midhundas1422001@gmail.com" className="social-icon-pill"><FaEnvelope size={22} /></a>
                                    </div>
                                </Col>
                                <Col md={7} className="ps-md-5">
                                    <Form action="https://formspree.io/f/midhundas1422001@gmail.com" method="POST">
                                        <Form.Group className="mb-4" controlId="formName">
                                            <Form.Control type="text" name="name" placeholder="Your Name" className="bg-dark border-secondary p-3 shadow-none rounded-3 text-white" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }} required />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="formEmail">
                                            <Form.Control type="email" name="_replyto" placeholder="Your Email" className="bg-dark border-secondary p-3 shadow-none rounded-3 text-white" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }} required />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="formMessage">
                                            <Form.Control as="textarea" name="message" rows={4} placeholder="Your Message" className="bg-dark border-secondary p-3 shadow-none rounded-3 text-white" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }} required />
                                        </Form.Group>
                                        <Button type="submit" className="btn-elegant w-100 py-3 mt-2">
                                            Send Message
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
