import React from "react";
import { useState } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from '../../Images/projects/quite-earth/floor-plans/u20.png';
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import QEPriceModal from "../QEPriceModal";

const U20 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [
    {
      id: 1,
      name: "U20",
      img: Image1,
      alt: "",
      unit: "4 Bedroom",
      area: "2890",
      price: "2.99Cr*",
      sale: "2890",
      condition: "1909",
      built: "2312",
      space: "199"
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
                      <p>
                      Experience life in a home that embraces nature and makes for inspired living. The 4-bedroom U20 homes are designed around the concept of a courtyard with kitchen, dining, living, and master bedroom opening onto a double-height landscaped garden with a deck. This double-height garden brings ample natural light into the living spaces and can also support a full-grown tree. The free-flowing spaces blur the lines between the indoors and the outdoors, and establish a connect between the inside and outside. Simple, clean lines and sophisticated décor give these homes their distinctive character.
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

                          <li>Built up Area : {item.built} sq.ft.</li>

                          <li>Outdoor Spaces : {item.space} sq.ft.</li>
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
                          <Button
                            variant="info"
                            onClick={handleShow}
                            className="w-100"
                          >
                            3 D Virtual Tour
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
      <QEPriceModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default U20;
