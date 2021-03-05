import React from "react";

import "./AboutPage.css";
import { Container, Row, Col } from "react-bootstrap";

// import ContactVideoSection from "../ContactVideoSection";

const About = () => {
  return (
    <>
      <Container
        id="about"
        className="about"
        style={{ border: "1px solid white" }}
      >
        <div>
          <div className="text-center">
            <h1 className="display-1">What Vaguecation is all about...</h1>
          </div>
          <Container fluid id="about-text">
            <Row style={{ border: "5px solid white" }}>
              <Col style={{ border: "5px solid white" }}>
                <Row style={{ border: "1px solid white" }}>
                  <p>1</p>
                </Row>
                <Row>2</Row>
                <Row>3</Row>
              </Col>
              <Col>
                <Row>1B</Row>
              </Col>
              <Col>
                <Row>1c</Row>
                <Row>2c</Row>
                <Row>3c</Row>
              </Col>
            </Row>
          </Container>

          <div className="container"></div>
        </div>
      </Container>
    </>
  );
};

export default About;
