import React from "react";
import { useState } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from '../../Images/projects/quite-earth/floor-plans/newlaunch/l21a.jpg';
import Image2 from '../../Images/projects/quite-earth/floor-plans/newlaunch/l21b.jpg';
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import QEPriceModal from "../QEPriceModal";

const L21 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [
    {
      id: 1,
      name: "L21",
      img: Image1,
      alt: "",
      unit: "3 BHK",
      price: "2.67Cr",
      sale: "2628",
      carpet: "1591",
      built: "2102",
      space: "273"
    },
    {
      id: 2,
      name: "L21",
      img: Image2,
      alt: "",
      unit: "3 BHK",
      price: "2.67Cr",
      sale: "2628",
      carpet: "1591",
      built: "2102",
      space: "273"
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
                      This three-bedroom L21 apartment home has access to the terrace garden and deck from almost every room. The interior finishes are a combination of smooth and rough materials that create unexpected and delightful interplays of hues and textures, while the beautiful natural wire-cut brick exterior ages gracefully. The foyer leads to a living-dining space, an open kitchen with a utility area, and a home office. All spaces can be custom-designed and furnished as per your requirements.
                      </p>
                    </div>
                    <Row className="g-3">
                      <h2 className="text-center fs-3 mb-0 text-white">
                        {item.unit} Price @ ₹ {item.price}* Onwards
                      </h2>
                      <Col md={12} xs={12} sm={12}>
                        <ul className="list-unstyled text-center text-white">
                          <li>Reference Saleable Area : { item.sale } sq.ft.</li>

                          <li>Carpet Area : {item.carpet} sq.ft.</li>

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
                          <Button
                            variant="light"
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

export default L21;
