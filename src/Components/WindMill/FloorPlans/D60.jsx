import React from "react";
import { useState } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from '../../Images/projects/windmill/floor-plans/d60-lower.png';
import Image2 from '../../Images/projects/windmill/floor-plans/d60-upper.png';
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import WindMillPriceModal from "../WindMillPriceModal";

const D60 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [
    {
      id: 1,
      name: "D60",
      img: Image1,
      alt: "",
      unit: "4 BHK",
      price: "6.4Cr*",
      sale: "5924",
      condition: "4739"
    },
    {
      id: 2,
      name: "D60",
      img: Image2,
      alt: "",
      unit: "4 BHK",
      price: "6.4Cr*",
      sale: "5924",
      condition: "4739"
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
                      <p className="p-2">
                      Designed to challenge the perception that apartments can’t offer the same level of privacy, warmth, and openness as an independent home, a D60 duplex home is built around a large landscaped terrace garden and a wooden deck. Blissful is life when you can feel the presence of nature every minute. That is exactly how we have designed these homes. The unique design ensures that you feel close to nature even on the higher floors. To meet your functional needs, we have introduced several innovative features in these homes. Our sensitive design extends to every corner of your home, including the garden, family spaces, drawing rooms, and the utility area. The double-height gardens not only let ample natural light into the living spaces but are also tall enough to accommodate full-grown trees up to a height of 16 feet.
                      </p>
                    </div>
                    <Row className="g-3">
                      <h2 className="text-center fs-3 mb-0 ">
                        {item.unit} Price @ ₹ {item.price}* Onwards
                      </h2>
                      <Col md={12} xs={12} sm={12}>
                        <ul className="list-unstyled text-center">
                          <li>Reference Saleable Area : { item.sale } sq.ft.</li>

                          <li>Conditioned Area : {item.condition} sq.ft.</li>
                        </ul>
                      </Col>
                      <Col md={6} xs={6} sm={6}>
                        <div className="">
                          <Button
                            variant="info"
                            onClick={handleShow}
                            className="w-100"
                          >
                            Price Breakup
                          </Button>
                        </div>
                      </Col>
                      <Col md={6} xs={6} sm={6}>
                        <div className="">
                          <a
                            target="_blank"
                            href="https://mpembed.com/show/?m=XsVviv3C1NL&play=1&minimap=1"
                            className="w-100 btn btn-info"
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
      <WindMillPriceModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default D60;
