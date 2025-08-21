import { Container, Row, Col } from "react-bootstrap";
import Content from "./Content.jsx";
import Type from "./Type.jsx";

export default function Home() {
  return (
    <section style={{ position: "relative", zIndex: 10 }}>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="text-box">
                <Type />

                <h1 className="heading-name">
                  I am
                  <strong className="main-name"> Grace Xie</strong>
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Content/>
    </section>
  );
}