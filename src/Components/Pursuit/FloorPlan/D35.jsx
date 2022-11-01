import React from "react";
import { useState } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../Images/projects/pursuit/floor-plans/d35-lower.jpg";
import Image2 from "../../Images/projects/pursuit/floor-plans/d35-upper.jpg";
import PersuitPriceModal from "../PersuitPriceModal";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";

const D35 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [
    {
      id: 1,
      name: "D35",
      img: Image1,
      alt: "",
      unit: "Duplex",
      area: "4596",
      price: "6.32Cr",
    },
    {
      id: 2,
      name: "D35",
      img: Image2,
      alt: "",
      unit: "Duplex",
      area: "4596",
      price: "6.32Cr",
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
    <div className="p-3 bg-info">
      <SimpleReactLightbox>
        <SRLWrapper>
          <OwlCarousel options={options}>
            {images.map((item, index) => (
              <Row className="g-3 justify-content-center" key={index}>
                <Col md={6} xs={12} sm={12}>
                  <div className="m-1 text-center p-1 rounded">
                    <a href={item.img}>
                      <Image src={item.img} alt="alt" className="img-fluid" />
                    </a>
                  </div>
                </Col>
                <Col md={6} className="align-self-center">
                  <div className="px-3">
                    <h2 className="text-white">{item.name}</h2>

                    <div className="">
                      <p className="text-white">
                        The D35 is a three-BHK, two-level home designed to
                        wrap around a large garden and deck and can even include
                        a body of water. These duplexes with exposed brick
                        exteriors and garden views are the closest things to a
                        bungalow on the ground. Nestled within the duplex is a
                        landscaped terrace garden that integrates the beauty of
                        nature with the indoor living space. Large glass panels
                        offer garden views and bring in natural light.
                      </p>

                      <p className="text-white">
                        The master BHK suite boasts a walk-in wardrobe and a
                        spacious bathroom overlooking the garden. The homes are
                        intimate and warm yet spacious and cheerful, and are a
                        perfect blend of serene nature and modern innovation.
                      </p>
                    </div>
                    <Row className="g-3">
                      <h2 className="text-center fs-3 mb-0 text-white">
                        3 BHK Price @ ₹ {item.price}* Onwards
                      </h2>
                      <Col md={12} xs={12} sm={12}>
                        <ul className="list-unstyled text-center text-white">
                          <li>Reference Saleable Area : 4596 sq.ft.</li>

                          <li>Carpet Area : 2660 sq.ft.</li>

                          <li>Built up Area : 3676 sq.ft.</li>

                          <li>Outdoor Spaces : 637 sq.ft.</li>
                        </ul>
                      </Col>
                      <Col md={6} xs={6} sm={6}>
                        <div className="">
                          <Button
                            variant="light"
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
                            href="https://my.matterport.com/show/?m=Q5smAWeZMnB"
                            className="w-100 btn btn-light"
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
      <PersuitPriceModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default D35;
