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
      <Row className="justify-content-center bg-light">
        <h2 className="text-info text-center fs-5 fw-bold py-3">
          Exclusive Limited Period Offers:
        </h2>
        <Col md={4} sm={12} xs={12}>
          <div className="text-center p-3">
            <h2 className="text-info fs-5 fw-bold text-decoration-underline">
              Option 1
            </h2>
            <ul className="list-unstyled">
              <li className="fs-6 fw-normal">
                10:90 Payment Plan (No Pre EMI until possession).
              </li>
              <li className="fs-6 fw-normal">Pay just 10% to book your home</li>
              <li className="fs-6 fw-normal">
                Avail a housing loan (75%) with no pre-EMIs 
              </li>
              <li className="fs-6 fw-normal">Pay 15% on Possession </li>
            </ul>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center p-3">
            <h2 className="text-info fs-5 fw-bold text-decoration-underline">
              Option 2
            </h2>
            <ul className="list-unstyled">
              <li className="fs-6 fw-normal">40:60 Payment plan</li>
              <li className="fs-6 fw-normal">
                Pay 40% within 4 months from booking
              </li>
              <li className="fs-6 fw-normal">
                Pay 50%* on receipt of Occupancy certificate
              </li>
              <li className="fs-6 fw-normal">Pay 10%* on possession.</li>
            </ul>
          </div>
        </Col>
        <Col md={4} sm={12} xs={12}>
          <div className="text-center p-3">
            <h2 className="text-info fs-5 fw-bold text-decoration-underline">
              Option 3
            </h2>
            <ul className="list-unstyled">
              <li className="fs-6 fw-normal">
                Complimentary Interior upgrades worth 30 Lac to 1.2 Cr
              </li>
            </ul>
          </div>
        </Col>

        <Col md={6} className="align-self-center text-center">
          <Button
            variant="info"
            onClick={handleShow}
            className="my-3 text-white fw-bold fs-5"
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
