import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import gracie from "../../assets/gracie.png"

export default function Home2(){
    return(
        <Container fluid className="home-content-section" id="content">
            <Container>
                <Row>
                    <Col md={8} className="home-content-description">
                        <div className="text-box">
                            <h1 style={{fontSize: "2.6em"}}>
                                Who am <span className="purple">I</span> ?
                            </h1>
                            <p className="home-content-body">
                                I am a third-year Software Engineering student at Mcmaster!!
                                <br/>
                                <br/>
                                I am very interested in exploring many different fields in tech.
                                <br/>
                                However, recently I have had a lot of fun learning more about AI, web development, and hardware programming.
                                <br/>
                                Each of these paths has been both challenging and rewarding, and I look forward to discovering more each day.
                                <br/>
                                Outside of school and the technical side of my life I love art, playing piano and playing badminton. I also speak three languages, english, french and mandarin!
                                <br/>
                                <br/>
                                Everything in this site is drawn by me except the contact me icons and this picture to the right!
                            </p>
                        </div>
                    </Col>
                    <Col md={4} className="headshot">
                        <img src={gracie} alt="Grace Xie"/>
                    </Col>
                </Row>
            </Container>

        </Container>
    )
}