import { Container, Row, Col } from "react-bootstrap";
import Content from "./Content.jsx";
import Type from "./Type.jsx";
import me from "../../assets/me.jpg";

export default function Home() {
  return (
    <section style={{ position: "relative", zIndex: 10 }}>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <div className="text-box">
            <Row>
              <Col md={7} className="home-header">
                <Type />
                <h1 className="heading-name">
                  I am
                  <strong className="main-name"> Grace Xie</strong>
                </h1>
              </Col>
              <Col md={5} className="headshot">
                <img src={me} alt="Grace Xie" />
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      <Content/>
    </section>
  );
}