import React from "react";
import { useState } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../Images/projects/quite-earth/floor-plans/u10x.png";
import Image2 from "../../Images/projects/quite-earth/floor-plans/u10y.png";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import QEPriceModal from "../QEPriceModal";

const U10 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [
    {
      id: 1,
      name: "U10x",
      img: Image1,
      alt: "",
      unit: "2 BHK",
      price: "1.49Cr",
      sale: "1431",
      condition: "934",
      built: "1145",
      space: "73",
    },
    {
      id: 2,
      name: "U10y",
      img: Image2,
      alt: "",
      unit: "2 BHK",
      price: "1.49Cr",
      sale: "1431",
      condition: "934",
      built: "1145",
      space: "73",
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
    <div className="p-3">
      <SimpleReactLightbox>
        <SRLWrapper>
          <OwlCarousel options={options}>
            {images.map((item, index) => (
              <Row className="g-3 justify-content-center" key={index}>
                <Col md={6} xs={12} sm={12}>
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
                        Designed as a compact, cosy, and comfortable 2-bedroom
                        home, a U10 apartment opens out onto a double-height
                        terrace garden, designed to house a full-grown tree.
                        Intelligent optimisation and smart planning ensures
                        great utilisation of the available space. Simple, clean
                        lines and a free-flowing design gives the interiors a
                        classy look. Enjoy an inspired life at a U10 home, made
                        possible by the warmth of earthy flooring, wooden
                        windows, and glass doors that merge into the surrounding
                        landscape.
                      </p>
                    </div>
                    <Row className="g-3">
                      <h2 className="text-center fs-3 mb-0 ">
                        {item.unit} Price @ ₹ {item.price}* Onwards(Soldout)
                      </h2>
                      <Col md={12} xs={12} sm={12}>
                        <ul className="list-unstyled text-center">
                          <li>Reference Saleable Area : {item.sale} sq.ft.</li>

                          <li>Conditioned Area : {item.condition} sq.ft.</li>

                          <li>Built up Area : {item.built} sq.ft.</li>

                          <li>Outdoor Spaces : {item.sapce} sq.ft.</li>
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
                            href="https://i3dvirtualtour.com/tour/te/itqe_u10"
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
      <QEPriceModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default U10;
