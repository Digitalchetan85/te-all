import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// import PersuitPriceModal from "../Pusuit/PersuitPriceModal";
import Countdown from "./Countdown";
import PursuitModal from "./PursuitModal";

const ExclusiveOffers = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Row className="bg-light justify-content-center">
        <Col md={12}>
          <div className="my-2 py-3 py-md-3">
            <h2 className="text-info fs-5 fw-bold text-center">
              Exclusive Limited Offers on Radical Rhapsody
            </h2>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="text-center pb-2" id="offer">
                <p className="text-center fw-bold pt-2 text-info fs-6">
                  Option 1 - 30:20:50 Payment Plan
                </p>
                <ul className="list-unstyled text-dark">
                  <li className="fs-6 fw-normal">
                    Pay 30% Within 60 Days Of Booking.
                  </li>
                  <li className="fs-6 fw-normal">
                    Pay 20% Of Completion Of 20th Slab Or December, 2024
                  </li>
                  <li className="fs-6 fw-normal">Pay 50% On Possession.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="text-center">
              <Countdown />
              </div>
            </div>
            <div className="col-md-5">
              <div className="text-center pb-2" id="offer">
                <p className="text-center fw-bold text-info pt-2 fs-6">
                  Option 2 - Complimentary Upgrade Worth Up To ~INR 29L*
                </p>
                <ul className="list-unstyled">
                  <li className="fs-6 fw-normal">
                    Imported Marble Flooring In Living, Dining And Kitchen.
                  </li>
                  <li className="fs-6 fw-normal">
                    BHK Furniture And Cabinetry.
                  </li>
                  <li className="fs-6 fw-normal">Fully Equipped Kitchen 2.</li>
                  <li className="fs-6 fw-normal">
                    Centralized Air-Conditioning.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
        
        <Col md={6} className="align-self-center text-center">
          <Button
            variant="info"
            onClick={handleShow}
            className="my-3 text-white fw-bold px-5 py-3 rounded-pill"
          >
            Schedule My Site Visit
          </Button>
        </Col>
      </Row>

      <PursuitModal
        show={show}
        handleClose={handleClose}
        title="Schedule My Site Visit"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </>
  );
};

export default ExclusiveOffers;
