import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <section id="about">
            <Container>
                <div className="text-center mb-5 slide-up">
                    <h2 className="display-5 fw-bold mb-3">
                        <span className="text-gradient">Who I Am</span>
                    </h2>
                    <div className="mx-auto" style={{ height: '3px', width: '60px', background: 'var(--gradient-vibrant)', borderRadius: '10px' }}></div>
                </div>
                <Row className="justify-content-center">
                    <Col md={10} lg={8} className="text-center slide-up">
                        <p className="lead text-muted mb-4 fs-4 fw-light">
                            I am <span className="text-white fw-bold">Midhun T</span>, a passionate software developer with a drive to build scalable,
                            high-performance web applications.
                        </p>
                        <p className="text-secondary fs-5 lh-lg mb-4">
                            My journey in tech is defined by a relentless curiosity and a passion for creating clean,
                            efficient, and user-centric solutions. I specialize in bridging the gap between complex
                            backend logic and intuitive frontend experiences.
                        </p>
                        <p className="text-secondary fs-5 lh-lg">
                            I take pride in writing quality code, continuously improving my skills, and tackling
                            real-world problems with clarity and confidence. I thrive in collaborative
                            environments and am always eager to take on challenges that push me to grow as a developer.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
