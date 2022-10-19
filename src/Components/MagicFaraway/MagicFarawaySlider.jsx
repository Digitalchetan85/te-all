import React from "react";
import { Button, Col, Container, Row, Table, Image } from "react-bootstrap";
import Image1 from "../Images/projects/magic-free/slider/image-1.png";
import Image2 from "../Images/projects/magic-free/slider/image-2.png";
import Image3 from "../Images/projects/magic-free/slider/image-3.png";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useState } from "react";
import MagicFarawayModal from "./MagicFarawayModal";
import MagicFarawayPriceModal from "./MagicFarawayPriceModal";

const MagicFarawaySlider = () => {
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
                  The Magic Faraway Tree
                </li>
              </ol>
            </nav>
          </div>

          <div className="">
            <h2 className="fs-3 text-info">Total Environment - The Magic Faraway Tree</h2>
            <p className="fs-4">
              <i className="fa fa-location-dot fs-4"></i> Kanakapura Road, Bangalore
            </p>
          </div>

          <div className="pb-2">
            <h2 className="fs-4">₹ 2.64Cr* Onwards</h2>
            <Button variant="primary" onClick={handleShow} className="w-100 mt-2 text-uppercase">
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
                    <td>PRM/KA/RERA/1251/446/PR/171014/000433</td>
                  </tr>
                  <tr>
                    <th className="text-info w-100">Development Size</th>
                    <td>11.5 Acres</td>
                  </tr>
                  <tr>
                    <th className="text-info w-100">No. of Units</th>
                    <td>434 Units</td>
                  </tr>
                  <tr>
                    <th className="text-info w-100">Possession</th>
                    <td>December 2023 Onwards</td>
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
                <a href={Image1}>
                  <Image src={Image1} className="img-fluid" alt="" />
                </a>
              </div>
              <div className="py-3 d-none d-md-block">
                <Row>
                  <Col md={3}>
                    <a href={Image1}>
                      <Image
                        src={Image1}
                        className="img-fluid"
                        alt=""
                        srl_gallery_image="true"
                      />
                    </a>
                  </Col>
                  <Col md={3}>
                    <a href={Image2}>
                      <Image
                        src={Image2}
                        className="img-fluid"
                        alt=""
                        srl_gallery_image="true"
                      />
                    </a>
                  </Col>
                  <Col md={3}>
                    <a href={Image3}>
                      <Image
                        src={Image3}
                        className="img-fluid"
                        alt=""
                        srl_gallery_image="true"
                      />
                    </a>
                  </Col>
                  <Col md={3}>
                    <a href={Image1}>
                      <Image
                        src={Image1}
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
      <MagicFarawayPriceModal
        show={show}
        handleClose={handleClose}
        title="Call Back"
      />
    </Container>
  );
};

export default MagicFarawaySlider;
