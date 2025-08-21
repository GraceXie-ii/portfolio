import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import github from "../../assets/github-mark.png";
import linkedin from "../../assets/linkedin.png"
import email from "../../assets/email.png"

export default function Contact() {
  return (
    <Container fluid style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <Row>
        <Col md={12} className="contact-content">
          <p1>
            Feel free to reach out to ask for my <span className='purple'>resume</span>, <span className='purple'>ask questions</span> or just <span className='purple'>get in touch with me</span>!
          </p1>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="contact">
          <p className="contact-content"><span className="purple">Connect</span> with me!</p>
          <ul className="contact-links">
            <li className="icons">
              <a
              href="https://github.com/GraceXie-ii"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub"/>
              </a>
            </li>
            <li className="icons">
              <a
              href="https://www.linkedin.com/in/gracexielingke"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn"/>
              </a>
            </li>
            <li className="icons">
              <img src={email} alt="Email"/>
              <a href="mailto:gracexielingke@gmail.com">: gracexielingke@gmail.com</a>
            </li>
          </ul>
        </Col>
      </Row>

    </Container>

  );
}