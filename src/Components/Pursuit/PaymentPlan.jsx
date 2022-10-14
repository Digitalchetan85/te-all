import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Countdown from "./Countdown";
import PersuitPriceModal from "./PersuitPriceModal";

const PaymentPlan = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Row className="justify-content-center bg-light">
        <h2 className="text-info text-center fs-5 fw-bold py-3">
          Exclusive Limited Period Offers:
        </h2>
        <Col md={12} sm={12} xs={12}>
          <div className="text-center p-3">
            <h2 className="text-info fs-5 fw-bold text-decoration-underline">
              Apartments
            </h2>
            <ul className="list-unstyled">
              <li className="fs-6 fw-normal">
                30:70 Payment Plan (No Pre-EMI Till Possession / No Home Loan
                Required).
              </li>
              <li className="fs-6 fw-normal">
                Complimentary Green to Blue Upgrade.
              </li>
              <li className="fs-6 fw-normal">
                Complimentary Maintenance for 3 Years.
              </li>
              <li className="fs-6 fw-normal">
                Construction Linked Payment Plan.
              </li>
            </ul>
          </div>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <div className="text-center p-3">
            <h2 className="text-info fs-5 fw-bold text-decoration-underline">
              Villas
            </h2>
            <ul className="list-unstyled">
              <li className="fs-6 fw-normal">
                30:70 Payment Plan (No Pre-EMI Till Possession / No Home Loan
                Required).
              </li>
              <li className="fs-6 fw-normal">
                Complimentary Green to Blue Upgrade.
              </li>
              <li className="fs-6 fw-normal">
                Complimentary Maintenance for 3 Years.
              </li>
            </ul>
          </div>
        </Col>
        <Countdown />
        <Col md={6} className="align-self-center text-center">
          <Button
            variant="info"
            onClick={handleShow}
            className="my-3 text-white fw-bold"
          >
            Schedule My Site Visit
          </Button>
        </Col>
      </Row>
      <PersuitPriceModal
        show={show}
        handleClose={handleClose}
        title="Schedule My Site Visit"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </>
  );
};

export default PaymentPlan;
