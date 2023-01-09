import React from "react";
import { Button, Col, Container, Row, Table, Image } from "react-bootstrap";
import Pursuit from "../Images/projects/pursuit/slider/image-4.jpg";
import Pursuit1 from "../Images/projects/pursuit/slider/image-1.png";
import Pursuit2 from "../Images/projects/pursuit/slider/image-2.png";
import Pursuit3 from "../Images/projects/pursuit/slider/image-3.png";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useState } from "react";
import PursuitModal from "./PursuitModal";
import PersuitPriceModal from "./PersuitPriceModal";

const PursuitSlider = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid>
      <Row>
        <Col md={5} className="order-last">
          <div className="pb-3">
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/" className="text-decoration-none text-dark">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Pursuit of Radical Rhapsody
                </li>
              </ol>
            </nav>
          </div>

          <div className="">
            <h2 className="fs-3 text-info">Pursuit of Radical Rhapsody</h2>
            <p className="fs-4">
              <i className="fa fa-location-dot fs-4"></i> Whitefield, Bangalore
            </p>
          </div>

          <div className="pb-2">
            <h2 className="fs-4">₹ 3.30Cr* Onwards</h2>
            <Button
              variant="primary"
              onClick={handleShow}
              className="w-100 mt-2 text-uppercase"
            >
              <i className="fa fa-phone-volume"></i> Instant Callback
            </Button>
          </div>

          <div className="py-2">
            <h2 className="fs-4">Project Highlights</h2>
            <div className="table-responsive">
              <Table className="table align-middle table-borderless">
                <tbody>
                  <tr>
                    <th className="text-info w-100">RERA No</th>
                    <td>
                      PRM/KA/RERA/1251/446/PR/171014/000433
                      PRM/KA/RERA/1251/446/PR/190102/002271
                      PRM/KA/RERA/1251/446/PR/220922/005261
                    </td>
                  </tr>
                  <tr>
                    <th className="text-info w-100">Development Size</th>
                    <td>34.5 Acres</td>
                  </tr>
                  <tr>
                    <th className="text-info w-100">No. of Units</th>
                    <td>1081 Units</td>
                  </tr>
                  <tr>
                    <th className="text-info w-100">Possession on</th>
                    <td>September 2023 Onwards</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
        <Col md={7} className="align-self-center order-first">
          <SimpleReactLightbox>
            <SRLWrapper>
              <div className="">
                <a href={Pursuit}>
                  <Image src={Pursuit} className="img-fluid" alt="" />
                </a>
              </div>
              <div className="py-3 d-none d-md-block">
                <Row>
                  <Col md={3}>
                    <a href={Pursuit}>
                      <Image
                        src={Pursuit}
                        className="img-fluid"
                        alt=""
                        srl_gallery_image="true"
                      />
                    </a>
                  </Col>
                  <Col md={3}>
                    <a href={Pursuit1}>
                      <Image
                        src={Pursuit1}
                        className="img-fluid"
                        alt=""
                        srl_gallery_image="true"
                      />
                    </a>
                  </Col>
                  <Col md={3}>
                    <a href={Pursuit2}>
                      <Image
                        src={Pursuit2}
                        className="img-fluid"
                        alt=""
                        srl_gallery_image="true"
                      />
                    </a>
                  </Col>
                  <Col md={3}>
                    <a href={Pursuit3}>
                      <Image
                        src={Pursuit3}
                        className="img-fluid"
                        alt=""
                        srl_gallery_image="true"
                      />
                    </a>
                  </Col>
                </Row>
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </Col>
      </Row>
      <PersuitPriceModal
        show={show}
  
        handleClose={handleClose}
        title="Download Brochure"
      />
    </Container>
  );
};

export default PursuitSlider;
