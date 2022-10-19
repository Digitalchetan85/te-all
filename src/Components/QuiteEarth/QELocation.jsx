import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Location from "../Images/projects/pursuit/pursuit-loc.png";

const QELocation = () => {
  return (
    <div>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-block d-md-none">
        In That Quiet Earth Location
      </h2>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-none d-md-block">
        Total Environment - In That Quiet Earth Location
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.735926733069!2d77.6753719140908!3d13.052473716631841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11b23abf19e5%3A0x55f8e558d2abfad6!2sIn%20That%20Quiet%20Earth%20-%20Total%20environment!5e0!3m2!1sen!2sus!4v1666090546534!5m2!1sen!2sus"
              width="100%"
              height="450"
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default QELocation;
