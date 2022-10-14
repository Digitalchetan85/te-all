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
        <Col md={6}>
          <div className="text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d76088.215476412!2d77.58965171238039!3d13.159025522334654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe26b7f09723c0bf8!2zMTPCsDA5JzI2LjUiTiA3N8KwMzYnMDUuMSJF!5e0!3m2!1sen!2sus!4v1651225295445!5m2!1sen!2sus"
              width="100%"
              height="280"
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AfterTheRainLocation;
