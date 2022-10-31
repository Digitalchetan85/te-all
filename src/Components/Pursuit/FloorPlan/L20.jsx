import React from "react";
import { useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image13 from "../../Images/projects/pursuit/floor-plans/l20v1a.jpg";
import PersuitPriceModal from "../PersuitPriceModal";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";

const L20 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [
    {
      id: 1,
      name: "L20",
      img: Image13,
      alt: "",
      unit: "3 BHK",
      area: "2430",
      price: "3.18Cr",
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
    <div className="p-3">
      <SimpleReactLightbox>
        <SRLWrapper>
          <OwlCarousel options={options}>
            {images.map((item, index) => (
              <Row className="g-3 justify-content-center" key={index}>
                <Col md={6} xs={12} sm={12} className="align-self-center">
                  <div className="m-1 text-center p-1 rounded bg-info">
                    <a href={item.img}>
                      <Image src={item.img} alt="alt" className="img-fluid" />
                    </a>
                  </div>
                </Col>
                <Col md={6} className="align-self-center">
                  <div className="px-3">
                    <h2 className="text-info">{item.name}</h2>

                    <div className="">
                      <p>
                        Designed as a simple “L” layout, the C20 home is placed
                        back-to-back with four other C20 homes, forming a +
                        shape in a block. A perfect blend of serene nature and
                        modern innovation, the layout features large glass
                        panels that offer unobstructed views from every room.
                        Nestled inside the “L” is a landscaped terrace garden,
                        integrating the beauty of nature with your indoor living
                        space.
                      </p>
                    </div>
                    <Row className="g-3">
                      <h2 className="text-center fs-3 mb-0 text-info">
                        3 BHK Price @ ₹ {item.price}* Onwards
                      </h2>
                      <Col md={12} xs={12} sm={12}>
                        <ul className="list-unstyled text-center">
                          <li>Reference Saleable Area : 2,430 sq.ft.</li>

                          <li>Built-up Area : 1,944 sq.ft.</li>

                          <li>Carpet Area : 1,506 sq.ft.</li>

                          <li>Outdoor Spaces : 235 sq.ft.</li>
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
                            href="https://www.vrrt.com/vrtours/tesongs/"
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
      <PersuitPriceModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default L20;
