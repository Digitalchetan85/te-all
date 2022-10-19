import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Location from "../Images/projects/pursuit/pursuit-loc.png";

const AfterTheRainLocation = () => {
  return (
    <div>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-block d-md-none">
        After The Rain - Location
      </h2>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-none d-md-block">
        Total Environment After The Rain - Location
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.0733123916034!2d77.5974470221833!3d13.15777556109625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1f099da29b4d%3A0xbd7cfed0d196d582!2sAfter%20The%20Rain%20-%20Total%20Environment!5e0!3m2!1sen!2sin!4v1666114189081!5m2!1sen!2sin"
              width="100%"
              height="450"
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AfterTheRainLocation;
