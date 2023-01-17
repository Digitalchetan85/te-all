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
                Construction Linked Payment Plan: 
              </li>
              <li className="fs-6 fw-normal">Pay 10% to book your home</li>
              <li className="fs-6 fw-normal">
                Pay an advance amount within 1 month of booking
              </li>
              <li className="fs-6 fw-normal">
                Based on our construction schedule, you pay a fixed amount after
                completion of each milestone in the schedule
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
      <Row className="justify-content-center">
        <Col md={8} className="py-3 py-md-3">
          <div className="">
            <div className="text-center">
              <h3 className="bg-info p-2 text-center">
                Introducing You Pay <span className="text-white">20%</span> We
                count <span className="text-white">23%</span>{" "}
              </h3>
            </div>
            <div class="table-responsive">
              <table class="table table-bordered">
                <tbody>
                  <tr className="table-danger m-1 border border-1 border-white">
                    <td className="text-end fs-6 fw-bold">On Booking</td>
                    <td className="fs-5">20%</td>
                    <td className="fs-5 fw-bold table-warning">23%</td>
                  </tr>
                  <tr className="table-danger m-1 border border-1 border-white">
                    <td className="text-end fs-6 fw-bold">
                      Completion of Foundation or 1st January 2024
                    </td>
                    <td className="fs-5">20%</td>
                    <td className="fs-5 fw-bold table-warning">23%</td>
                  </tr>
                  <tr className="table-danger m-1 border border-1 border-white">
                    <td className="text-end fs-6 fw-bold">
                      Completion of 15th Structural Slab or 1st December 2024
                    </td>
                    <td className="fs-5">20%</td>
                    <td className="fs-5 fw-bold table-warning">23%</td>
                  </tr>
                  <tr className="table-danger m-1 border border-1 border-white">
                    <td className="text-end fs-6 fw-bold">
                      Completion of Structure or 1st November 2025
                    </td>
                    <td className="fs-5">20%</td>
                    <td className="fs-5 fw-bold table-warning">23%</td>
                  </tr>
                  <tr className="table-danger m-1 border border-1 border-white">
                    <td className="text-end fs-6 fw-bold">
                      Balance as per CLP
                    </td>
                    <td className="fs-5">8%</td>
                    <td className="fs-5 fw-bold table-warning">8%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Col>
        <Col md={4} className="align-self-center">
          <div className="border border-3 border-info">
            <h3 className="p-2 text-center fw-bold">
              Overall <span className="text-info fs-2"> 12%</span> <br />{" "}
              Savings only if <br /> payments are made <br />
              on time
            </h3>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center py-3">
        <Col md={3} className="">
          <div className="bg-info text-center p-3 py-5" id="custom1">
            <p className="text-center">
              <span className="bg-light text-center p-2 text-info fs-4">
                20_23
              </span>{" "}
              Payment plan
            </p>
            <h4 className="text-white">
              Save <span className="fw-bold fs-2">12%</span> on unit Purchase
              Price*
            </h4>
          </div>
        </Col>
        <Col md={3} className="align-self-center">
          <div className="text-info">
            <h4>
               Complimentary <br /> Interior upgrades <br /> worth <br />{" "}
              <span className="fs-2 fw-bold">30</span>{" "}
              <span className="fw-bold">Lac to </span>{" "}
              <span className="fw-bold fs-2">1.2 Cr</span>
            </h4>
          </div>
        </Col>
        <Col md={3} className="text-center">
          <div className="bg-info text-center p-4 py-5" id="custom1">
            <h4 className="text-white">
              First 23 Customers get a{" "}
              <span className="fw-bold">50 Gm gold coin</span> each
            </h4>
          </div>
        </Col>
        <Col md={3} className="align-self-center">
          <div className="">
            <p className="fs-4">
              Offer valid for
              <br />{" "}
              <span className="text-info fw-bold fs-4">23 days only</span>
              <br /> <span className="fw-bold">13th Jan to 5th Feb 23</span>
            </p>
          </div>
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
