import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PursuitModal from "../Pursuit/PursuitModal";

const ItqeInfo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="information" className="pt-3 pb-3 pt-md-5 pb-md-5 px-3 rounded">
      <Row className="p-2 bg-light justify-content-center">
        <Col md={8}>
          <h2 className="text-info fw-bold">Need more information ?</h2>
          <p className="m-0 ">
            Don't hesitate to download the brochure to know more details of this
            project.
          </p>
        </Col>
        <Col md={2} className="align-self-center text-center">
          <Button
            variant="info"
            onClick={handleShow}
            className="my-3 text-white"
          >
            <i className="fas fa-file-pdf"></i> Download Brochure
          </Button>
        </Col>
      </Row>
      <PursuitModal
        show={show}
        handleClose={handleClose}
        title="Download Brouchure"
      />
    </div>
  );
};

export default ItqeInfo;
