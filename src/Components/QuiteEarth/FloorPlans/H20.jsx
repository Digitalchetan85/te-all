import React from "react";
import { useState } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from '../../Images/projects/quite-earth/floor-plans/h20a.png';
import Image2 from '../../Images/projects/quite-earth/floor-plans/h20b.png';
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import QEPriceModal from "../QEPriceModal";

const H20 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [
    {
      id: 1,
      name: "H20 A",
      img: Image1,
      alt: "",
      unit: "3 BHK",
      price: "2.40Cr",
      sale: "2409",
      condition: "1460",
      built: "1927",
      space: "287"
    },
    {
      id: 2,
      name: "H20 B",
      img: Image2,
      alt: "",
      unit: "3 BHK",
      price: "2.40Cr",
      sale: "2305",
      condition: "1453",
      built: "1814",
      space: "211"
    },
  ];

  const options = {
    rewind: true,
    dots: false,
    autoplay: false,
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
                      <Image src={item.img} alt="alt" className="img-fluid" />
                    </a>
                  </div>
                </Col>
                <Col md={6} className="align-self-center">
                  <div className="px-3">
                    <h2 className="text-white">{item.name}</h2>

                    <div className="">
                      <p className="text-white">
                      The V50 duplex homes are cleverly built to appear like inviting, single-level units from the outside. This smart design creates an intimate scale and allows the streetscape to not be dominated by large structures. The V50 home features smart green roofs that improve air quality, keep the home cool in the summer and warm in the winter, reduce rainwater run-off, and promote a natural habitat. In addition, thanks to the homes being placed along one side, almost every single space within the duplex opens out onto a tranquil peaceful garden.
                      </p>
                    </div>
                    <Row className="g-3">
                      <h2 className="text-center fs-3 mb-0 text-white">
                        {item.unit} Price @ ₹ {item.price}* Onwards
                      </h2>
                      <Col md={12} xs={12} sm={12}>
                        <ul className="list-unstyled text-center text-white">
                          <li>Reference Saleable Area : { item.sale } sq.ft.</li>

                          <li>Condition Area : {item.condition} sq.ft.</li>

                          <li>Built up Area : {item.built} sq.ft.</li>

                          <li>Outdoor Spaces : {item.space} sq.ft.</li>
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
                            href="https://i3dvirtualtour.com/tour/te/itqe_h20"
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
      <QEPriceModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default H20;
