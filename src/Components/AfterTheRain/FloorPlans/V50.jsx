import React from "react";
import { useState } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../Images/projects/pursuit/floor-plans/v50-lower.png";
import Image2 from "../../Images/projects/pursuit/floor-plans/v50-upper.png";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import AfterTheRainPriceModal from "../AfterTheRainPriceModal";

const V50 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [
    {
      id: 1,
      name: "V50",
      img: Image1,
      alt: "",
      unit: "Villa",
      area: "5129",
      price: "8Cr*"
    },
    {
      id: 2,
      name: "V50",
      img: Image2,
      alt: "",
      unit: "Villa",
      area: "5129",
      price: "8Cr*"
    },
  ];

  const options = {
    rewind: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        loop: false,
      },
    },
  };

  return (
    <div>
      <SimpleReactLightbox>
        <SRLWrapper>
          <OwlCarousel options={options}>
            {images.map((item, index) => (
              <Row className="g-3 justify-content-center" key={index}>
                <Col md={6} xs={12} sm={12}>
                  <div
                    className="m-1 text-center p-1 rounded bg-info"
                    
                  >
                    <a href={item.img}>
                      <Image src={item.img} alt="alt" className="img-fluid" />
                    </a>
                  </div>
                </Col>
                <Col md={6} className="align-self-center">
                  <div className="px-3">
                    <h2 className="text-info">{item.name}</h2>
                    <Row className="g-3">
                      <Col md={6}>
                        <div className="text-center border border-info rounded border-2">
                          <h2 className="fs-3 border-bottom border-info border-3 p-1">
                            Unit Type
                          </h2>
                          <h2 className="fs-5 p-1">{item.unit}</h2>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="text-center border border-info rounded border-2">
                          <h2 className="fs-3 border-bottom border-info border-3 p-1">
                            Built Up Area
                          </h2>
                          <h2 className="fs-5 p-1">{item.area} Sqft.</h2>
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="">
                          <h2 className="text-center fs-3 pb-2">
                            Price @ ₹ {item.price}* Onwards
                          </h2>
                          <Button variant="info" onClick={handleShow} className="w-100">
                            Download Price Breakup
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            ))}
          </OwlCarousel>
        </SRLWrapper>
      </SimpleReactLightbox>
      <AfterTheRainPriceModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default V50;
