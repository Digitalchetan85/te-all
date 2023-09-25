import React from "react";
import { useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import Pursuit from "../Images/home/image-11.png";
import QE from "../Images/home/image-2.png";
import WM from "../Images/home/image-3.png";
import AR from "../Images/home/image-4.png";
import WY from "../Images/home/image-5.png";
import WF from "../Images/home/image-6.png";
import LL from "../Images/home/image-7.png";
import MF from "../Images/home/image-8.png";
import HomeModal from "./HomeModal";

const HomeProperties = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="">
                <Row className="g-3">
                  <Col md={4}>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <div className="text-center">
                        <a
                          href="/projects/pursuit-of-radical-rhapsody"
                          className="text-decoration-none text-dark"
                        >
                          <Image
                            src={Pursuit}
                            className="img-fluid img-thumbnail"
                            alt="Pursuit"
                          />
                        </a>
                      </div>
                      <Row>
                        <Col md={12}>
                          <div className="p-2 text-center">
                            <a
                              href="/projects/pursuit-of-radical-rhapsody"
                              className="text-decoration-none text-dark"
                            >
                              <h2 className="fs-4">
                                Pursuit of a Radical Rhapsody
                              </h2>
                            </a>
                            <div className="">
                              <span className="badge bg-primary">3BHK</span>
                              <span className="badge bg-primary mx-1">
                                4BHK
                              </span>
                              <span className="badge bg-primary mx-1">
                                Villas
                              </span>
                              <span className="badge bg-primary mx-1">
                                Duplex
                              </span>
                              <span className="badge bg-primary mx-1">
                                Penthouse
                              </span>
                            </div>
                          </div>
                          <div className="px-2 text-center">
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Whitefield
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Possesion On: June 2024
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Size: 2430 Sq.Ft - 9869 Sq.Ft
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              PRM/KA/RERA/1251/446/PR/220922/005261
                            </p>
                            <h2 className="fs-5 text-center mb-0 py-2">
                              Starts @ ₹ 3.88 - 14.89 Cr* onwards
                            </h2>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className="text-center">
                            <Button
                              variant="info"
                              size="sm"
                              onClick={handleShow}
                              className="w-100 py-2 text-white"
                            >
                              <i className="fas fa-download fa-beat-fade"></i>{" "}
                              Brochure
                            </Button>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className="text-center">
                            <a
                              href="/projects/pursuit-of-radical-rhapsody"
                              className="w-100 py-2 btn btn-sm btn-info text-white"
                            >
                              View Project{" "}
                              <i className="fas fa-arrow-right"></i>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <div className="text-center">
                        <a
                          href="/projects/quiet-earth"
                          className="text-decoration-none text-dark"
                        >
                          <Image
                            src={QE}
                            className="img-fluid img-thumbnail"
                            alt="QE"
                          />
                        </a>
                      </div>
                      <Row>
                        <Col md={12}>
                          <div className="p-2 text-center">
                            <a
                              href="/projects/quiet-earth"
                              className="text-decoration-none text-dark"
                            >
                              <h2 className="fs-4">In That Quiet Earth</h2>
                            </a>
                            <div className="">
                              <span className="badge bg-primary">3BHK</span>
                              <span className="badge bg-primary mx-1">
                                4BHK
                              </span>
                              <span className="badge bg-primary mx-1">
                                Villas
                              </span>
                            </div>
                          </div>
                          <div className="px-2 text-center">
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Off Hennur Road
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Possession On : Dec 2024
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Size: 1431 Sq.Ft - 3430 Sq.Ft
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              PRM/KA/RERA/1251/446/PR/060722/005044
                            </p>
                            <h2 className="fs-6 fw-bold text-center mb-0 py-2">
                              Starts @ ₹ 1.53 - 4.80 Cr* onwards
                            </h2>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className="text-center">
                            <Button
                              variant="info"
                              size="sm"
                              onClick={handleShow}
                              className="w-100 py-2 text-white"
                            >
                              <i className="fas fa-download fa-beat-fade"></i>{" "}
                              Brochure
                            </Button>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className="text-center">
                            <a
                              href="/projects/quite-earth"
                              className="w-100 py-2 btn btn-sm btn-info text-white"
                            >
                              View Project{" "}
                              <i className="fas fa-arrow-right"></i>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="bg-white p-2 rounded shadow-sm">
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
                      <Row>
                        <Col md={12}>
                          <div className="p-2 text-center">
                            <a
                              href="/projects/after-the-rain"
                              className="text-decoration-none text-dark"
                            >
                              <h2 className="fs-4">After The Rain</h2>
                            </a>
                            <div className="">
                              <span className="badge bg-primary">3BHK</span>
                              <span className="badge bg-primary mx-1">
                                4BHK
                              </span>
                              <span className="badge bg-primary mx-1">
                                Villas
                              </span>
                            </div>
                          </div>
                          <div className="px-2 text-center">
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Yelahanka
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Possesion On: March 2024
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Size: 5120 Sq.Ft - 5924 Sq.Ft
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              PRM/KA/RERA/1251/446/PR/171014/000433
                            </p>
                            <h2 className="fs-6 fw-bold text-center mb-0 py-2">
                              Starts @ ₹ 6.40 - 8.40 Cr* onwards
                            </h2>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className="text-center">
                            <Button
                              variant="info"
                              size="sm"
                              onClick={handleShow}
                              className="w-100 py-2 text-white"
                            >
                              <i className="fas fa-download fa-beat-fade"></i>{" "}
                              Brochure
                            </Button>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className="text-center">
                            <a
                              href="/projects/after-the-rain"
                              className="w-100 py-2 btn btn-sm btn-info text-white"
                            >
                              View Project{" "}
                              <i className="fas fa-arrow-right"></i>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <div className="text-center">
                        <a
                          href="/projects/magic-faraway"
                          className="text-decoration-none text-dark"
                        >
                          <Image
                            src={MF}
                            className="img-fluid img-thumbnail"
                            alt="Pursuit"
                          />
                        </a>
                      </div>
                      <Row>
                        <Col md={12}>
                          <div className="p-2 text-center">
                            <a
                              href="/projects/quiet-earth"
                              className="text-decoration-none text-dark"
                            >
                              <h2 className="fs-4">The Magic Faraway</h2>
                            </a>
                            <div className="">
                              <span className="badge bg-primary">3BHK</span>
                              <span className="badge bg-primary mx-1">
                                Appartment
                              </span>
                              <span className="badge bg-primary mx-1">
                                Duplex
                              </span>
                            </div>
                          </div>
                          <div className="px-2 text-center">
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Kanakapura Road
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Possesion On: Jun 2024
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Size: 2753 Sq.Ft - 4498 Sq.Ft
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              PRM/KA/RERA/1251/446/PR/171014/000433
                            </p>
                            <h2 className="fs-6 fw-bold text-center mb-0 py-2">
                              Starts @ ₹ 3.30 - 5.40 Cr* onwards
                            </h2>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className="text-center">
                            <Button
                              variant="info"
                              size="sm"
                              onClick={handleShow}
                              className="w-100 py-2 text-white"
                            >
                              <i className="fas fa-download fa-beat-fade"></i>{" "}
                              Brochure
                            </Button>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className="text-center">
                            <a
                              href="/projects/magic-faraway"
                              className="w-100 py-2 btn btn-sm btn-info text-white"
                            >
                              View Project{" "}
                              <i className="fas fa-arrow-right"></i>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="bg-white p-2 rounded shadow-sm">
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
                      <Row>
                        <Col md={12}>
                          <div className="p-2 text-center">
                            <a
                              href="/projects/wind-mill"
                              className="text-decoration-none text-dark"
                            >
                              <h2 className="fs-4">Windmill Of Your Mind</h2>
                            </a>
                            <div className="">
                              <span className="badge bg-primary mx-1">
                                Appartment
                              </span>
                              <span className="badge bg-primary mx-1">
                                Penthouse
                              </span>
                            </div>
                          </div>
                          <div className="px-2 text-center">
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Whitefield
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Possesion On: Ready to Move
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Size: 5924 Sq.Ft
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              PRM/KA/RERA/1251/446/PR/171014/000433
                            </p>
                            <h2 className="fs-6 fw-bold text-center mb-0 py-2">
                              Starts @ ₹ 8 Cr* onwards
                            </h2>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className="text-center">
                            <Button
                              variant="info"
                              size="sm"
                              onClick={handleShow}
                              className="w-100 py-2 text-white"
                            >
                              <i className="fas fa-download fa-beat-fade"></i>{" "}
                              Brochure
                            </Button>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className="text-center">
                            <a
                              href="/projects/wind-mill"
                              className="w-100 py-2 btn btn-sm btn-info text-white"
                            >
                              View Project{" "}
                              <i className="fas fa-arrow-right"></i>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <div className="text-center">
                        <a
                          onClick={handleShow}
                          className="text-decoration-none text-dark"
                        >
                          <Image
                            src={WF}
                            className="img-fluid img-thumbnail"
                            alt="Pursuit"
                          />
                        </a>
                      </div>
                      <Row>
                        <Col md={12}>
                          <div className="p-2 text-center">
                            <a
                              onClick={handleShow}
                              className="text-decoration-none text-dark"
                            >
                              <h2 className="fs-4">Workcations</h2>
                            </a>
                            <div className="">
                              <span className="badge bg-primary mx-1">
                                Workations
                              </span>
                            </div>
                          </div>
                          <div className="px-2 text-center">
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Whitefield, Yelahanka
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Possesion On: July 2023
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              Size: - Sq.Ft
                            </p>
                            <p className="mb-0 text-center fs-6 fw-normal ">
                              -
                            </p>
                            <h2 className="fs-6 fw-bold text-center mb-0 py-2">
                              Starts @ ₹ 60 L* onwards
                            </h2>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className="text-center">
                            <Button
                              variant="info"
                              size="sm"
                              onClick={handleShow}
                              className="w-100 py-2 text-white"
                            >
                              <i className="fas fa-download fa-beat-fade"></i>{" "}
                               Brochure
                            </Button>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className="text-center">
                            <a
                              onClick={handleShow}
                              className="w-100 py-2 btn btn-sm btn-info text-white"
                            >
                              View Project{" "}
                              <i className="fas fa-arrow-right"></i>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  {/* <Col md={4}>
                    <div className='bg-white p-2 rounded shadow-sm'>
                      <div className='text-center'>
                        <a
                          onClick={handleShow}
                          className='text-decoration-none text-dark'
                        >
                          <Image
                            src={WY}
                            className='img-fluid img-thumbnail'
                            alt='Pursuit'
                          />
                        </a>
                      </div>
                      <Row>
                        <Col md={12}>
                          <div className='p-2'>
                            <a
                              onClick={handleShow}
                              className='text-decoration-none text-dark'
                            >
                              <h2 className='fs-4'>Workcations - Yelahanka</h2>
                            </a>
                            <div className='pb-2'>
                              <span className='badge bg-primary'>
                                Workations
                              </span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={7}>
                          <div className='px-2'>
                            <small className='mb-0 text-center text-md-start'>
                              Workcations - Yelahanka
                            </small>
                            <br />
                            <small className='mb-0 text-center text-md-start'>
                              Possesion On: --
                            </small>
                            <h2 className='fs-4 text-center mb-0 py-2'>
                              ₹ 50L Onwards
                            </h2>
                          </div>
                        </Col>
                        <Col md={5} className='align-self-end'>
                          <div className=''>
                            <Row>
                              <Col md={12} sm={6} xs={6}>
                                <Button
                                  variant='primary'
                                  size='sm'
                                  onClick={handleShow}
                                  className='w-100 mt-2 px-1'
                                >
                                  <i className='fas fa-download fa-beat-fade'></i>{' '}
                                  Download Brochure
                                </Button>
                              </Col>
                              <Col md={12} sm={6} xs={6}>
                                <a
                                  onClick={handleShow}
                                  className='w-100 mt-2 px-1 btn btn-sm btn-info text-white'
                                >
                                  View Project{' '}
                                  <i className='fas fa-arrow-right'></i>
                                </a>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col> */}
                </Row>
              </div>
      <HomeModal
        show={show}
        handleClose={handleClose}
        title="Download Brochure"
      />
    </>
  );
};

export default HomeProperties;
