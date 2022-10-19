import React from "react";
import { useState } from "react";
import {Row, Col, Image, Button} from 'react-bootstrap'
import HomeModal from "../Home/HomeModal";
import Pursuit1 from "../Images/home/image-1.png";
import QE from "../Images/home/image-2.png";
import WM from "../Images/home/image-3.png";
import AR from "../Images/home/image-4.png";
import WY from "../Images/home/image-5.png";
import WF from "../Images/home/image-6.png";
import LL from "../Images/home/image-7.png";
import MF from "../Images/home/image-8.png";

const AllProjects = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="p-3 bg-white my-2">
            <Row>
              <Col md={4}>
                <div className="text-center">
                  <a
                    href="/projects/pursuit-of-radical-rhapsody"
                    className="text-decoration-none text-dark"
                  >
                    <Image
                      src={Pursuit1}
                      className="img-fluid img-thumbnail"
                      alt="Pursuit"
                    />
                  </a>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center text-md-start py-2">
                  <a
                    href="/projects/pursuit-of-radical-rhapsody"
                    className="text-decoration-none text-dark"
                  >
                    <h2 className="fs-5 w-100">
                      Pursuit of a Radical Rhapsody
                    </h2>
                  </a>
                  <div className="pb-2">
                    <span className="badge bg-primary">3BHK</span>
                    <span className="badge bg-primary mx-1">4BHK</span>
                    <span className="badge bg-primary mx-1">Villas</span>
                    <span className="badge bg-primary mx-1">Duplex</span>
                  </div>
                  <p className="mb-0 text-center text-md-start">
                    Whitefield, Bangalore
                  </p>
                  <p className="mb-0 text-center text-md-start">
                    Possesion On: Sept 2023 Onwards
                  </p>
                </div>
              </Col>
              <Col md={4} className="align-self-center">
                <div className="text-center py-2">
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="w-100 mt-2 text-uppercase"
                  >
                    <i className="fa fa-phone-volume"></i> Callback
                  </Button>
                  <h2 className="fs-4 text-center mb-0 py-2">₹ 3.06Cr*</h2>
                  <a
                    href="/projects/pursuit-of-radical-rhapsody"
                    className="w-100 mt-2 btn btn-info text-white text-uppercase"
                  >
                    Read more <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </Col>
            </Row>
            <div className="table-responsive">
              <table className="table table-hover table-striped align-middle">
                <thead className="bg-light">
                  <tr>
                    <th>Unit</th>
                    <th>Size (Sqft)</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3 BHK (L20)</td>
                    <td>2430</td>
                    <td>3.06Cr*</td>
                  </tr>
                  <tr>
                    <td>4 BHK (L45)</td>
                    <td>5680</td>
                    <td>3.26Cr*</td>
                  </tr>
                  <tr>
                    <td>4 BHK Duplex (V50)</td>
                    <td>5129</td>
                    <td>8Cr*</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 bg-white my-2">
            <Row>
              <Col md={4}>
                <div className="text-center">
                  <a
                    href="/projects/quiet-earth"
                    className="text-decoration-none text-dark"
                  >
                    <Image
                      src={QE}
                      className="img-fluid img-thumbnail"
                      alt="Pursuit"
                    />
                  </a>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center text-md-start py-2">
                  <a
                    href="/projects/quiet-earth"
                    className="text-decoration-none text-dark"
                  >
                    <h2 className="fs-5 w-100">In That Quite Earth</h2>
                  </a>
                  <div className="pb-2">
                    <span className="badge bg-primary">2BHK</span>
                    <span className="badge bg-primary mx-1">3BHK</span>
                    <span className="badge bg-primary mx-1">4BHK</span>
                    <span className="badge bg-primary mx-1">Villa</span>
                  </div>
                  <p className="mb-0 text-center text-md-start">
                    Off Hennur Road, Bangalore
                  </p>
                  <p className="mb-0 text-center text-md-start">Possesion On</p>
                </div>
              </Col>
              <Col md={4} className="align-self-center">
                <div className="text-center py-2">
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="w-100 mt-2 text-uppercase"
                  >
                    <i className="fa fa-phone-volume"></i> Callback
                  </Button>
                  <h2 className="fs-4 text-center mb-0 py-2">₹ 1.33Cr*</h2>
                  <a
                    href="/projects/quite-earth"
                    className="w-100 mt-2 btn btn-info text-white text-uppercase"
                  >
                    Read more <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </Col>
            </Row>
            <div className="table-responsive">
              <table className="table table-hover table-striped align-middle">
                <thead className="bg-light">
                  <tr>
                    <th>Unit</th>
                    <th>Size (Sqft)</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2 BHK (U10)</td>
                    <td>1431</td>
                    <td>1.33Cr*</td>
                  </tr>
                  <tr>
                    <td>3 BHK (H20)</td>
                    <td>2305</td>
                    <td>2.25Cr*</td>
                  </tr>
                  <tr>
                    <td>3 BHK Villa (V35)</td>
                    <td>3430</td>
                    <td>4.56Cr*</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 bg-white my-2">
            <Row>
              <Col md={4}>
                <div className="text-center">
                  <a
                    href="/projects/wind-mill"
                    className="text-decoration-none text-dark"
                  >
                    <Image
                      src={WM}
                      className="img-fluid img-thumbnail"
                      alt="Pursuit"
                    />
                  </a>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center text-md-start py-2">
                  <a
                    href="/projects/wind-mill"
                    className="text-decoration-none text-dark"
                  >
                    <h2 className="fs-5 w-100">Windmill Of Your Mind</h2>
                  </a>
                  <span className="badge bg-primary">Duplex</span>
                  <span className="badge bg-primary mx-1">Penthouse</span>
                  <p className="mb-0 text-center text-md-start">
                    Whitefield, Bangalore
                  </p>
                  <p className="mb-0 text-center text-md-start">
                    Possesion On: Ready to Move
                  </p>
                </div>
              </Col>
              <Col md={4} className="align-self-center">
                <div className="text-center py-2">
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="w-100 mt-2 text-uppercase"
                  >
                    <i className="fa fa-phone-volume"></i> Callback
                  </Button>
                  <h2 className="fs-4 text-center mb-0 py-2">₹ 6.4Cr*</h2>
                  <a
                    href="/projects/wind-mill"
                    className="w-100 mt-2 btn btn-info text-white text-uppercase"
                  >
                    Read more <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </Col>
            </Row>
            <div className="table-responsive">
              <table className="table table-hover table-striped align-middle">
                <thead className="bg-light">
                  <tr>
                    <th>Unit</th>
                    <th>Size (Sqft)</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4 BHK Duplex (D60)</td>
                    <td>5924</td>
                    <td>6.4Cr*</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 bg-white my-2">
            <Row>
              <Col md={4}>
                <div className="text-center">
                  <a
                    href="/projects/after-the-rain"
                    className="text-decoration-none text-dark"
                  >
                    <Image
                      src={AR}
                      className="img-fluid img-thumbnail"
                      alt="Pursuit"
                    />
                  </a>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center text-md-start py-2">
                  <a
                    href="/projects/after-the-rain"
                    className="text-decoration-none text-dark"
                  >
                    <h2 className="fs-5 w-100">After The Rain</h2>
                  </a>
                  <span className="badge bg-primary">4BHK</span>
                  <span className="badge bg-primary mx-1">Villas</span>
                  <p className="mb-0 text-center text-md-start">
                    Yelahanka, Bangalore
                  </p>
                  <p className="mb-0 text-center text-md-start">
                    Possesion On: March 2024 Onwards
                  </p>
                </div>
              </Col>
              <Col md={4} className="align-self-center">
                <div className="text-center py-2">
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="w-100 mt-2 text-uppercase"
                  >
                    <i className="fa fa-phone-volume"></i> Callback
                  </Button>
                  <h2 className="fs-4 text-center mb-0 py-2">₹ 5.17Cr*</h2>
                  <a
                    href="/projects/after-the-rain"
                    className="w-100 mt-2 btn btn-info text-white text-uppercase"
                  >
                    Read more <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </Col>
            </Row>
            <div className="table-responsive">
              <table className="table table-hover table-striped align-middle">
                <thead className="bg-light">
                  <tr>
                    <th>Unit</th>
                    <th>Size (Sqft)</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3 BHK (V30)</td>
                    <td>3200</td>
                    <td>5.17Cr*</td>
                  </tr>
                  <tr>
                    <td>4 BHK (V50)</td>
                    <td>5249</td>
                    <td>7.45Cr*</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 bg-white my-2">
            <Row>
              <Col md={4}>
                <div className="text-center">
                  <Image
                    src={LL}
                    onClick={handleShow}
                    className="img-fluid img-thumbnail"
                    alt="Pursuit"
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center text-md-start py-2">
                  <h2 className="fs-5 w-100" onClick={handleShow}>
                    Learning To Fly
                  </h2>
                  <div className="pb-2">
                    <span className="badge bg-primary">Apartment</span>
                  </div>
                  <p className="mb-0 text-center text-md-start">
                    JP Nagar, Bangalore
                  </p>
                  <p className="mb-0 text-center text-md-start">
                    Possesion On: Ready to Move
                  </p>
                </div>
              </Col>
              <Col md={4} className="align-self-center">
                <div className="text-center py-2">
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="w-100 mt-2 text-uppercase"
                  >
                    <i className="fa fa-phone-volume"></i> Callback
                  </Button>
                  <h2 className="fs-4 text-center mb-0 py-2">
                    Price On Request
                  </h2>
                  <Button
                    variant="info"
                    onClick={handleShow}
                    className="w-100 mt-2 text-uppercase text-white"
                  >
                    Read more <i className="fas fa-arrow-right"></i>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 bg-white my-2">
            <Row>
              <Col md={4}>
                <div className="text-center">
                  <Image
                    src={MF}
                    onClick={handleShow}
                    className="img-fluid img-thumbnail"
                    alt="Pursuit"
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center text-md-start py-2">
                  <h2 className="fs-5 w-100" onClick={handleShow}>
                    The Magic Faraway
                  </h2>
                  <div className="pb-2">
                    <span className="badge bg-primary">Apartment</span>
                  </div>
                  <p className="mb-0 text-center text-md-start">
                    Kanakapura Road, Bangalore
                  </p>
                  <p className="mb-0 text-center text-md-start">
                    Possesion On: Ready to Move
                  </p>
                </div>
              </Col>
              <Col md={4} className="align-self-center">
                <div className="text-center py-2">
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="w-100 mt-2 text-uppercase"
                  >
                    <i className="fa fa-phone-volume"></i> Callback
                  </Button>
                  <h2 className="fs-4 text-center mb-0 py-2">
                    Price on Request
                  </h2>
                  <a
                    href="/projects/magic-faraway"
                    className="w-100 mt-2 btn btn-info text-white text-uppercase"
                  >
                    Read more <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 bg-white my-2">
            <Row>
              <Col md={4}>
                <div className="text-center">
                  <Image
                    src={WF}
                    onClick={handleShow}
                    className="img-fluid img-thumbnail"
                    alt="Pursuit"
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center text-md-start py-2">
                  <h2 className="fs-5 w-100" onClick={handleShow}>
                    Workcations - Whitefield
                  </h2>
                  <div className="pb-2">
                    <span className="badge bg-primary">Workations</span>
                  </div>
                  <p className="mb-0 text-center text-md-start">
                    Whitefield, Bangalore
                  </p>
                </div>
              </Col>
              <Col md={4} className="align-self-center">
                <div className="text-center py-2">
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="w-100 mt-2 text-uppercase"
                  >
                    <i className="fa fa-phone-volume"></i> Callback
                  </Button>
                  <h2 className="fs-4 text-center mb-0 py-2">
                    Price On Request
                  </h2>
                  <Button
                    variant="info"
                    onClick={handleShow}
                    className="w-100 mt-2 text-uppercase text-white"
                  >
                    Read more <i className="fas fa-arrow-right"></i>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 bg-white my-2">
            <Row>
              <Col md={4}>
                <div className="text-center">
                  <Image
                    src={WY}
                    onClick={handleShow}
                    className="img-fluid img-thumbnail"
                    alt="Pursuit"
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center text-md-start py-2">
                  <h2 className="fs-5 w-100" onClick={handleShow}>
                    Workcations - Yelhanka
                  </h2>
                  <div className="pb-2">
                    <span className="badge bg-primary">Workations</span>
                  </div>
                  <p className="mb-0 text-center text-md-start">
                    Yelahanka, Bangalore
                  </p>
                </div>
              </Col>
              <Col md={4} className="align-self-center">
                <div className="text-center py-2">
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="w-100 mt-2 text-uppercase"
                  >
                    <i className="fa fa-phone-volume"></i> Callback
                  </Button>
                  <h2 className="fs-4 text-center mb-0 py-2">
                    Price on Request
                  </h2>
                  <Button
                    variant="info"
                    onClick={handleShow}
                    className="w-100 mt-2 text-uppercase text-white"
                  >
                    Readmore <i className="fas fa-arrow-right"></i>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <HomeModal show={show} handleClose={handleClose} title="Call Back" />
    </div>
  );
};

export default AllProjects;
