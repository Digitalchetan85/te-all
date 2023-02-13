import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "react-phone-number-input/style.css";


function LeftCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="d-block d-md-none">
    <a href="tel:08095999000"><Button variant="primary" className="text-uppercase text-white" id="leftBtn">
    <i  className="fa-solid fa-phone-volume"></i> Call Us
      </Button></a>
    </div>

      {/* <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert> */}

      {/* <Offcanvas show={show} onHide={handleClose} responsive="lg" placement="end" id="custom-left">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
             
        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  );
}

export default LeftCanvas;