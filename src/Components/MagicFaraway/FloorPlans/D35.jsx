import React from "react";
import { useState } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from '../../Images/projects/magic-free/floor-plans/d35v2-lower.png';
import Image2 from '../../Images/projects/magic-free/floor-plans/d35v2-upper.png';
import Image3 from '../../Images/projects/magic-free/floor-plans/d35v2g-lower.png';
import Image4 from '../../Images/projects/magic-free/floor-plans/d35v2g-upper.png';
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import MagicFarawayModal from "../MagicFarawayModal";

const D35 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [
    {
      id: 1,
      name: "D35 V2",
      img: Image1,
      alt: "",
      unit: "3 BHK",
      price: "4.57Cr",
      sale: "4498",
      carpet: "2565",
      built: "3598",
      space: "575"
    },
    {
      id: 2,
      name: "D35 V2",
      img: Image2,
      alt: "",
      unit: "3 BHK",
      price: "4.57Cr",
      sale: "4498",
      carpet: "2565",
      built: "3598",
      space: "575"
    },
    {
      id: 3,
      name: "D35 V2G",
      img: Image3,
      alt: "",
      unit: "3 BHK",
      price: "4.57Cr",
      sale: "4894",
      carpet: "2647",
      built: "3915",
      space: "906"
    },
    {
      id: 4,
      name: "D35 V2G",
      img: Image4,
      alt: "",
      unit: "3 BHK",
      price: "4.57Cr",
      sale: "4894",
      carpet: "2647",
      built: "3915",
      space: "906"
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
              <Row className="g-3 justify-content-center"
              key={index}>
                <Col md={6} xs={12} sm={12}>
                  <div
                    className="m-1 text-center p-1 rounded bg-white"
                  >
                    <a href={item.img}>
                      <Image src={item.img} alt="alt" className="img-fluid bg-white" />
                    </a>
                  </div>
                </Col>
                <Col md={6} className="align-self-center">
                  <div className="px-3">
                    <h2 className="text-white">{item.name}</h2>

                    <div className="">
                      <p className="p-2 text-white">
                      Designed to replicate the feel and character of a bungalow, these duplex homes are warm, spacious, upbeat, and intimate. With large glass panels separating the living areas from the landscaped garden outside, the home is awash with natural light and fresh air throughout the year. A beautiful wooden deck and a large waterbody are standout features of this home. Attention to detail and carefully crafted finishes significantly enhance your living experience.
                      </p>
                    </div>
                    <Row className="g-3">
                      <h2 className="text-center fs-3 mb-0 text-white">
                        {item.unit} Price @ ₹ {item.price}* Onwards
                      </h2>
                      <Col md={12} xs={12} sm={12}>
                        <ul className="list-unstyled text-center text-white">
                          <li>Reference Saleable Area : { item.sale } sq.ft.</li>
                          <li>Carpet Area : { item.carpet } sq.ft.</li>
                          <li>Built Up Area : { item.built } sq.ft.</li>

                          <li>Outdoor Space : {item.space} sq.ft.</li>
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
                            href="https://techo.captur3d.io/view/total-environment/magic-faraway-tree"
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
      <MagicFarawayModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default D35;
