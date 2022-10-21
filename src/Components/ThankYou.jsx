import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ThankYou = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="py-3">
              <div className="alert alert-success text-center">
                You're All Set! Thanks you for expressing interest on our
                Project. Our expert will get in touch with you shortly.
              </div>
            </div>
            <h2 className="text-center text-info">Download Brochures</h2>
            <Row className="py-4 g-3">
              <Col md={6}>
                <div className="text-center">
                  <a
                    className="btn btn-info text-white"
                    href="https://totalenvironmentproject.in/brochure/ITQE-Project-Brochure.pdf"
                    target="_blank"
                  >
                    In That Quiet Earth
                  </a>
                </div>
              </Col>
              <Col md={6}>
                <div className="text-center">
                  <a
                    className="btn btn-info text-white"
                    href="https://totalenvironmentproject.in/brochure/radical-raphsody-brochure.pdf"
                    target="_blank"
                  >
                    Pursuit of a Radical Rhapsody
                  </a>
                </div>
              </Col>
              <Col md={6}>
                <div className="text-center">
                  <a
                    className="btn btn-info text-white"
                    href="https://totalenvironmentproject.in/brochure/magic-faraway.pdf"
                    target="_blank"
                  >
                    The Magic Faraway Tree
                  </a>
                </div>
              </Col>
              <Col md={6}>
                <div className="text-center">
                  <a
                    className="btn btn-info text-white"
                    href="https://totalenvironmentproject.in/brochure/AfterTheRain.pdf"
                    target="_blank"
                  >
                    After The Rain
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThankYou;
