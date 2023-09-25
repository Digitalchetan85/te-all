import React from "react";
import { Button, Col, Container, Row, Table, Image } from "react-bootstrap";
import Image1 from "../Images/projects/quite-earth/slider/image-3.png";
import Image2 from "../Images/projects/quite-earth/slider/image-2.png";
import Image3 from "../Images/projects/quite-earth/slider/image-1.png";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import QEModal from "./QEModal";
import { useState } from "react";
import QEPriceModal from "./QEPriceModal";

const QuiteEarthSlider = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid>
      <Row>
        <Col md={5} className="order-last">
          <div className="">
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/" className="text-decoration-none text-dark">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  In That Quiet Earth
                </li>
              </ol>
            </nav>
          </div>

          <div className="">
            <h2 className="fs-3 text-info">
              In That Quiet Earth
            </h2>
            <p className="fs-5">
              <i className="fa fa-location-dot fs-5"></i> Off Hennur Road, North
              Bangalore
            </p>
          </div>

          <div className="pb-2">
            <h2 className="fs-4">₹ 2.57Cr* Onwards</h2>
            <Button
              variant='info'
              onClick={handleShow}
              className='mt-2 text-white text-uppercase'
            >
              <i className='fas fa-calendar-days'></i> Schedule My Site Visit
            </Button>
          </div>

          <div className="py-2">
            <h2 className="fs-4">Project Highlights</h2>
            <div className="table-responsive">
              <Table className="table align-middle table-borderless">
                <tbody>
                  {/* <tr>
                    <th className="text-info ">RERA No</th>
                    <td>PRM/KA/RERA/1251/446/PR/180519/001745
                        PRM/KA/RERA/1251/446/PR/201001/003630
                        PRM/KA/RERA/1251/446/PR/060722/005044
                    </td>
                  </tr> */}
                  <tr>
                    <th className="text-info ">Development Size</th>
                    <td>37 Acres</td>
                  </tr>
                  <tr>
                    <th className="text-info ">No. of Units</th>
                    <td>1060 Units, 55 Villas</td>
                  </tr>
                  <tr>
                    <th className="text-info ">Possession</th>
                    <td>Jun 2024 Onwards</td>
                  </tr>
                </tbody>
              </Table>
              <div className=''>
              PRM/KA/RERA/1251/446/PR/180519/001745
              PRM/KA/RERA/1251/446/PR/201001/003630
              PRM/KA/RERA/1251/446/PR/060722/005044
              </div>
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
      <QEPriceModal show={show} handleClose={handleClose} title="Call Back" />
    </Container>
  );
};

export default QuiteEarthSlider;
