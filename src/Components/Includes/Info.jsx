import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PursuitModal from "../Pursuit/PursuitModal";

const Info = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="information" className="pt-3 pb-3 pt-md-3 pb-md-3 px-3 rounded">
      <Row className=" p-2 bg-light">
        <Col md={9}>
          <h2 className="text-info">Need more information ?</h2>
          <p className="m-0 ">
            Don't hesitate to download the brochure to know more details of this
            project.
          </p>
        </Col>
        <Col md={3} className="align-self-center text-center">
          <Button
            variant="info"
            onClick={handleShow}
            className="my-3 text-white"
          >
            Download Now
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

export default Info;
