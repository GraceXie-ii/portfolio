import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.jsx";
import page from "../../assets/page.png"

export default function Projects() {
  return (
    <section style={{ position: "relative", zIndex: 10 }}>
      <Container fluid style={{ minHeight: '100vh', paddingTop: '80px' }} className="project-section">
        <Container>
          <Row>
            <Col md={12} className="project-card">
              <div className="text-box">
                <p1 className="projects-content">
                  Some projects I have worked on!
                  <br/>
                  More content about projects will be added soon! Stay tuned
                </p1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="project-info">
              <ProjectCard
                imgPath={page}
                title="Portfolio"
                description="What you're looking at right now!! I will continuously update and improve this site as I keep growing in my career. I used react, javascript, HTML, and CSS to build this."
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}