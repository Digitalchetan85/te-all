import React from "react";
import { useState } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image2 from "../../Images/projects/after-rain/floor-plans/v30v1a-lower.png"
import Image3 from "../../Images/projects/after-rain/floor-plans/v30v1a-upper.png"
import Image4 from "../../Images/projects/after-rain/floor-plans/v30v1b-lower.png"
import Image5 from "../../Images/projects/after-rain/floor-plans/v30v1b-upper.png"
import Image6 from "../../Images/projects/after-rain/floor-plans/v30v1c-lower.png"
import Image7 from "../../Images/projects/after-rain/floor-plans/v30v1c-upper.png"
import Image8 from "../../Images/projects/after-rain/floor-plans/v30v1d-lower.png"
import Image9 from "../../Images/projects/after-rain/floor-plans/v30v1d-upper.png"
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import AfterTheRainPriceModal from "../AfterTheRainPriceModal";

const V30 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [
    {
      id: 1,
      name: "V30 V1A",
      img: Image2,
      alt: "",
      unit: "4 BHK Villa",
      area: "2890",
      price: "5.17Cr",
      sale: "5924",
      condition: "4739"
    },
    {
      id: 2,
      name: "V30 V1A",
      img: Image3,
      alt: "",
      unit: "4 BHK Villa",
      area: "2890",
      price: "5.17Cr",
      sale: "5924",
      condition: "4739"
    },
    {
      id: 3,
      name: "V30 V1B",
      img: Image4,
      alt: "",
      unit: "4 BHK Villa",
      area: "2890",
      price: "5.17Cr",
      sale: "5924",
      condition: "4739"
    },
    {
      id: 4,
      name: "V30 V1B",
      img: Image5,
      alt: "",
      unit: "4 BHK Villa",
      area: "2890",
      price: "5.17Cr",
      sale: "5924",
      condition: "4739"
    },
    {
      id: 5,
      name: "V30 V1C",
      img: Image5,
      alt: "",
      unit: "4 BHK Villa",
      area: "2890",
      price: "5.17Cr",
      sale: "5924",
      condition: "4739"
    },
    {
      id:6,
      name: "V30 V1C",
      img: Image6,
      alt: "",
      unit: "4 BHK Villa",
      area: "2890",
      price: "5.17Cr",
      sale: "5924",
      condition: "4739"
    },
    {
      id: 7,
      name: "V30 V1D",
      img: Image7,
      alt: "",
      unit: "4 BHK Villa",
      area: "2890",
      price: "5.17Cr"
    },
    {
      id: 8,
      name: "V30 V1D",
      img: Image8,
      alt: "",
      unit: "4 BHK Villa",
      area: "2890",
      price: "5.17Cr"
    },
  ];

  const options = {
    rewind: true,
    dots: false,
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
    <div className="p-3">
      <SimpleReactLightbox>
        <SRLWrapper>
          <OwlCarousel options={options}>
            {images.map((item, index) => (
              <Row className="g-3 justify-content-center"
              key={index}>
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

                    <div className="">
                      <p className="">
                      Designed as a simple “L” layout, the C20 home is placed back-to-back with four other C20 homes, forming a + shape in a block. A perfect blend of serene nature and modern innovation, the layout features large glass panels that offer unobstructed views from every room. Nestled inside the “L” is a landscaped terrace garden, integrating the beauty of nature with your indoor living space.
                      </p>
                    </div>
                    <Row className="g-3">
                      <h2 className="text-center fs-3 mb-0 text-info ">
                        4 BHK Price @ ₹ {item.price}* Onwards
                      </h2>
                      <Col md={12} xs={12} sm={12}>
                        <ul className="list-unstyled text-center ">
                          <li>Reference Saleable Area : {item.sale} sq.ft.</li>

                          <li>Conditioned Area : {item.condition} sq.ft.</li>
                        </ul>
                      </Col>
                      <Col md={6} xs={6} sm={6}>
                        <div className="">
                          <Button
                            variant="info"
                            onClick={handleShow}
                            className="w-100 text-white"
                          >
                            Price Breakup
                          </Button>
                        </div>
                      </Col>
                      <Col md={6} xs={6} sm={6}>
                        <div className="">
                          <a
                            target="_blank"
                            href="https://mpembed.com/show/?m=X8eW4a7uqzd&play=1&minimap=1"
                            className="w-100 btn btn-info text-white"
                          >
                            3 D Virtual Tour
                          </a>
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

export default V30;
