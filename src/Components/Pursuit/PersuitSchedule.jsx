import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PursuitModal from "../Pursuit/PursuitModal";

const PersuitSchedule = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div id="information" className="pt-3 pb-3 px-3 rounded">
      <Row className="bg-light justify-content-center">
        <Col md={8}>
          <div className="text-center py-3">
            <h2 className="text-info fw-bold">
              Need more information about offers?
            </h2>
            <p className="m-0 text-center">
              Don't hesitate to download the offer in detail and know more about
              it.
            </p>
          </div>
        </Col>
        <Col md={4} className="align-self-center text-center">
          <Button
              variant="info"
              size="lg"
              onClick={handleShow}
              className="my-3 text-white"
            >
              <i className="fas fa-file-pdf"></i> Download Here
            </Button>
        </Col>
      </Row>
      <PursuitModal
        show={show}
        handleClose={handleClose}
        closeModal={closeModal}
        title="Download Brouchure"
      />
    </div>
  );
};

export default PersuitSchedule;
