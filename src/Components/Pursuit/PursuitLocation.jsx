import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Location from "../Images/projects/pursuit/pursuit-loc.png";

const PursuitLocation = () => {
  return (
    <div>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-block d-md-none">
        Radical Rhapsody Location
      </h2>
      <h2 className="text-center py-md-4 py-2 fs-3 text-info d-none d-md-block">
        Total Environment Pursuit Of A Radical Rhapsody Location
      </h2>
      <Row className="g-3 justify-content-center">
        {/* <Col md={6} className="align-self-center">
          <div className="text-center">
            <Image src={Location} className="img-fluid" alt="" />
          </div>
        </Col> */}
        <Col md={12}>
          <div className="text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.752289085742!2d77.71819441461216!3d12.98768919084532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116a0aaba9b7%3A0xbcc74f1ce5de81ad!2sPursuit%20Of%20A%20Radical%20Rhapsody!5e0!3m2!1sen!2sin!4v1666114422945!5m2!1sen!2sin"
              width="100%"
              height="450"
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PursuitLocation;
